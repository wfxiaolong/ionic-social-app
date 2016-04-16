// var options = {
//     element: '#test',
//     callback: function(data) {
//         $('#test2').html(data.join(','))
//     },
//     initComplete: function(data) {
//         $('#test2').html(data.join(','))
//     }
// }
// city.init(options);
define(['zepto'], function() {

    var Plugin = {

        init: function(options) {
            this.setting = {
                element: "",                         //绑定到的DOM元素，必填
                value: ["广东省", "深圳市", "南山区"],   //初始化时的默认值，可选
                callback: "",                        //每次切换完省份城市后回调函数，可选
                initComplete: "",                    //模板加载完后执行函数，可选
                url:''
            }
            this.setting = $.extend(this.setting, options);
            this.$element = $(this.setting.element);
            var _self = this;

            $.getJSON(this.setting.url, function(re) {
                _self.city_json = re;
                _self.initTpl();
            });

        },

        initTpl: function(url) {
            var $element = this.$element,
                settings = this.setting,
                city_json = this.city_json,
                now_time = +new Date;
            this.province_id = 'province_' + now_time;
            this.city_id = 'city_' + now_time;
            this.area_id = 'area_' + now_time;
            var province_tpl = '';
            for (var i = 0, len = city_json.length; i < len; i++) {
                province_tpl += '<dd data-value="' + city_json[i].n + '" data-index="' + i + '">' + city_json[i].n + '</dd>';
            }
            var tpl = '<style>.ui-scroller{position: relative;height: 155px;width: 100%; min-width: 260px;font-size: 14px;font-weight: normal;padding:5px;display: -webkit-box;-webkit-box-sizing: border-box;}.ui-scroller>div{position:relative;height: 155px;overflow: hidden;-webkit-box-sizing: border-box;box-sizing:border-box;float: none;-webkit-box-flex: 1;width: 0;}.ui-scroller dl{position: absolute;width: 100%;margin: 0;top:30px;}.ui-scroller dd{padding:0;margin:0;overflow: hidden; text-overflow:ellipsis;width:100%;height: 30px;line-height: 30px;text-align:center;    display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 1;-webkit-box-flex: 1}.ui-scroller{-webkit-mask: -webkit-gradient(linear,0% 20%,0% 100%,from(rgba(222,187,71,1)),to(rgba(36,142,36,0)));}.ui-scroller-mask{-webkit-mask: -webkit-gradient(linear,0% 50%,0% 0%,from(rgba(222,187,71,1)),to(rgba(36,142,36,0)));}.ui-scroller p{position: absolute;top:64px;height:30px;width: 100%;margin: 0;z-index: -1;left:0;}.ui-scroller .ui-dialog-action{margin-top: 10px;}.ui-border-tb {border-top: #e0e0e0 1px solid;border-bottom: #e0e0e0 1px solid;background-image: none;}transition: all 0.1s ease-out; transform: translate3d(0px, -240px, 0px);@media screen and (-webkit-min-device-pixel-ratio: 2) {.ui-border-tb {border: 0;}}@media screen and (-webkit-min-device-pixel-ratio: 2) {.ui-border-tb {background-repeat: repeat-x;-webkit-background-size: 100% 1px;}}@media screen and (-webkit-min-device-pixel-ratio: 2) {.ui-border-tb {background-image: -webkit-gradient(linear,left bottom,left top,color-stop(0.5,transparent),color-stop(0.5,#e0e0e0),to(#e0e0e0)),-webkit-gradient(linear,left top,left bottom,color-stop(0.5,transparent),color-stop(0.5,#e0e0e0),to(#e0e0e0));background-position:top,bottom;}}</style>' +
                '<div style="display: block;width:100%;padding: 20px 0;">' +
                '<div class="ui-scroller-mask">' +
                '<div  class="ui-scroller">' +
                '<div class="js-scroll" data-flag="province">' +
                '<dl style="top:-30px;"  id="' + this.province_id + '">' +
                province_tpl +
                '</dl>' +
                '</div>' +
                '<div class="js-scroll" data-flag="city">' +
                '<dl  id="' + this.city_id + '">' +

                '</dl>' +
                '</div>' +
                '<div class="js-scroll" data-flag="area">' +
                '<dl  id="' + this.area_id + '">' +

                '</dl>' +
                '</div>' +
                '<p class="ui-border-tb"></p>' +
                '</div>' +
                '</div>' +

                '</div>'
            $element.html(tpl);
            this.offEvent();
            this.bindEvent();
            this.set(settings.value);
            if (typeof settings.initComplete == 'function') {
                settings.initComplete(this.get());
            }
        },
        offEvent:function() {
            var $element = this.$element;
            $element.off();
        },
        bindEvent: function() {
            var _self = this,
                settings = _self.setting,
                city_json = this.city_json,
                $element = _self.$element,
                start, end, o_top;

            $element.on('touchstart MSPointerDown pointerdown', '.js-scroll', function(e) {
                o_top = parseInt($(e.currentTarget).find('dl').css('top') || 0);
                start = (e.changedTouches || e.originalEvent.changedTouches)[0].pageY;
            })
            $element.on('touchmove MSPointerDown pointerdown', '.js-scroll', function(e) {
                end = (e.changedTouches || e.originalEvent.changedTouches)[0].pageY;
                var diff = end - start,
                    top = parseInt($(e.currentTarget).find('dl').css('top') || 0) + diff;
                $(e.currentTarget).find('dl').css('top', top);
                start = end;
                return false;
            });
            $element.on('touchend MSPointerDown pointerdown', '.js-scroll', function(e) {
                end = (e.changedTouches || e.originalEvent.changedTouches)[0].pageY;
                var diff = end - start,
                    target = $(e.currentTarget),
                    flag = target.data('flag'),
                    dl = target.find('dl'),
                    top = parseInt(dl.css('top') || 0) + diff;
                if (top >= 60) {
                    top = 60;
                }
                if (top <= -$(dl).height() + 75) {
                    top = -$(dl).height() + 90;
                }
                var mod = top / 30,
                    mode = Math.round(mod),
                    index = Math.abs(mode) + 2;
                if (mode == 2) {
                    index = 0;
                } else if (mode == 1) {
                    index = 1;
                }
                dl.css('top', mode * 30);

                if (o_top != mode * 30) {
                    if (flag == "province") {
                        _self.p_index = index;
                        var city_node = $('#' + _self.city_id),
                            area_node = $('#' + _self.area_id);
                        _self._init_city(index);
                    } else if (flag == "city") {
                        _self._init_area(_self.p_index, index);
                    }


                    if (typeof settings.callback == 'function') {
                        settings.callback(_self.get());
                    }
                }

                return false;
            });
        },
        get: function() {
            var province_node = $('#' + this.province_id),
                city_node = $('#' + this.city_id),
                area_node = $('#' + this.area_id),
                p_index = Math.abs((Number(province_node.css('top').replace('px', '')) - 60) / 30),
                province = province_node.find('dd[data-index="' + p_index + '"]').data('value');
            if (city_node.parent().css('display') != 'none') {
                var c_index = Math.abs((Number(city_node.css('top').replace('px', '')) - 60) / 30),
                    city = city_node.find('dd[data-index="' + c_index + '"]').data('value');
                if (area_node.parent().css('display') != 'none') {
                    var a_index = Math.abs((Number(area_node.css('top').replace('px', '')) - 60) / 30),
                        area = area_node.find('dd[data-index="' + a_index + '"]').data('value');
                }

            }
            var result = [];
            result[0] = province;
            city ? result[1] = city : '';
            area ? result[2] = area : '';
            return result;
        },
        set: function(data) {
            var province_node = $('#' + this.province_id),
                city_node = $('#' + this.city_id),
                area_node = $('#' + this.area_id),
                p_index = Number(province_node.find('dd[data-value="' + data[0] + '"]').data('index'));
            province_node.css({
                top: -(p_index + 1) * 30 + 90
            })
            this._init_city(p_index);
            this.p_index = p_index;
            if (data[1]) {
                var c_index = Number(city_node.find('dd[data-value="' + data[1] + '"]').data('index'));
                city_node.css({
                    top: -(c_index + 1) * 30 + 90
                });

                this._init_area(p_index, c_index);
                if (data[2]) {
                    var a_index = Number(area_node.find('dd[data-value="' + data[2] + '"]').data('index'));
                    area_node.css({
                        top: -(a_index + 1) * 30 + 90
                    })
                }

            }
        },
        _init_city: function(p_index) {
            var city_node = $('#' + this.city_id),
                area_node = $('#' + this.area_id),
                city_json = this.city_json;
            if (city_json[p_index].c) {
                var cities = city_json[p_index].c,
                    city_tpl = '';

                for (var i = 0, len = cities.length; i < len; i++) {
                    city_tpl += '<dd data-value="' + cities[i].n + '" data-index="' + i + '">' + cities[i].n + '</dd>';
                }

                city_node.css('top', 0);
                city_node.html(city_tpl);
                city_node.parent().show();
                this._init_area(p_index, 2);
            } else {
                city_node.parent().hide();
                area_node.parent().hide();
            }
        },
        _init_area: function(p_index, c_index) {
            var area_node = $('#' + this.area_id),
                city_json = this.city_json;
            if (city_json[p_index].c && city_json[p_index].c[c_index].c) {
                var areas = city_json[p_index].c[c_index].c,
                    area_tpl = '';
                for (var i = 0, len = areas.length; i < len; i++) {
                    area_tpl += '<dd data-value="' + areas[i].n + '" data-index="' + i + '">' + areas[i].n + '</dd>';
                }
                if (len >= 4) {
                    area_node.css('top', 0);
                } else if (len == 1) {
                    area_node.css('top', 60);
                } else {
                    area_node.css('top', 30);
                }
                area_node.html(area_tpl);
                area_node.parent().show();
            } else {
                area_node.parent().hide();
            }
        }
    };

    return Plugin;
});
