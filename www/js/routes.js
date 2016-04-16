define(['app'],function (app) {
    app
        .config(function($stateProvider, $urlRouterProvider) {
            // Override the internal 'views' builder with a function that takes the state
            // definition, and a reference to the internal function being overridden:
            $stateProvider.decorator('views', function(state, parent) {
                var result = {}, views = parent(state);
                //var head = "http://192.168.1.48:8081/kangbaomu/doctor/www/";
                var head = "";
                angular.forEach(views, function(config, name) {
                    config.controllerUrl = head+config.controllerUrl;
                    config.templateUrl = head+config.templateUrl;
                    result[name] = config;
                });
                return result;
            });

            $stateProvider
                // 首页
                .state('index', {
                    url: '/index',
                    templateUrl:"templates/index.html",
                    controller: "indexCtrl",
                    controllerUrl: 'js/controllers/index.js'
                })

                // 登录
                .state('login', {
                    url: '/login',
                    templateUrl:"templates/login.html",
                    controller: "loginCtrl",
                    controllerUrl: 'js/controllers/login.js'
                })

                // 注册
                .state('register', {
                    url: '/register',
                    templateUrl:"templates/register.html",
                    controllerUrl: 'js/controllers/register.js',
                    controller: "registerCtrl"
                })
                    .state('userText', {
                        url: '/userText',
                        templateUrl:"templates/userText.html",
                        controllerUrl: 'js/controllers/userText.js',
                        controller: "userTextCtrl"
                    })
                    .state('protocolText', {
                        url: '/protocolText',
                        templateUrl:"templates/protocolText.html",
                        controllerUrl: 'js/controllers/protocolText.js',
                        controller: "protocolTextCtrl"
                    })

                // 找回密码
                .state('findpsw', {
                    url: '/findpsw',
                    templateUrl: "templates/findpsw.html",
                    controllerUrl: 'js/controllers/findpsw.js',
                    controller: "findpswCtrl"
                })

                // setup an abstract state for the tabs directive
                .state('tab', {
                    url: '/tab',
                    abstract: true,
                    templateUrl: 'templates/tabs.html'
                })

                // 首页
                .state('tab.home', {
                    url: '/home',
                    views: {
                        'tab-home': {
                            templateUrl: 'templates/home.html',
                            controller: 'homeCtrl',
                            controllerUrl: 'js/controllers/home.js'
                        }
                    }
                })
                    .state('tab.search', {
                        url: '/search',
                        views: {
                            'tab-home': {
                                templateUrl: 'templates/search.html',
                                controller: 'searchCtrl',
                                controllerUrl: 'js/controllers/search.js'
                            }
                        }
                    })
                    .state('tab.giveup', {
                        url: '/giveup',
                        views: {
                            'tab-home': {
                                templateUrl: 'templates/giveup.html',
                                controller: 'giveupCtrl',
                                controllerUrl: 'js/controllers/giveup.js'
                            }
                        }
                    })
                    .state('tab.postMsg', {
                        url: '/postMsg',
                        views: {
                            'tab-home': {
                                templateUrl: 'templates/activitymsg.html',
                                controller: 'activitymsgCtrl',
                                controllerUrl: 'js/controllers/activitymsg.js'
                            }
                        }
                    })
                    .state('tab.actMsg', {
                        url: '/actMsg',
                        views: {
                            'tab-home': {
                                templateUrl: 'templates/groupmsg.html',
                                controller: 'groupmsgCtrl',
                                controllerUrl: 'js/controllers/groupmsg.js'
                            }
                        }
                    })
                    .state('tab.location', {
                        url: '/location',
                        views: {
                            'tab-home': {
                                templateUrl: 'templates/location.html',
                                controller: 'locationCtrl',
                                controllerUrl: 'js/controllers/location.js'
                            }
                        }
                    })

                // 消息
                .state('tab.message', {
                    url: '/message',
                    views: {
                        'tab-message': {
                            templateUrl: 'templates/message.html',
                            controller: 'messageCtrl',
                            controllerUrl: 'js/controllers/message.js'
                        }
                    }
                })
                    .state('tab.groupmsg', {
                        url: '/groupmsg',
                        views: {
                            'tab-message': {
                                templateUrl: 'templates/groupmsg.html',
                                controller: 'groupmsgCtrl',
                                controllerUrl: 'js/controllers/groupmsg.js'
                            }
                        }
                    })
                    .state('tab.activitymsg', {
                        url: '/activitymsg',
                        views: {
                            'tab-message': {
                                templateUrl: 'templates/activitymsg.html',
                                controller: 'activitymsgCtrl',
                                controllerUrl: 'js/controllers/activitymsg.js'
                            }
                        }
                    })

                // 添加+
                .state('tab.add', {
                    url: '/add',
                    views: {
                        'tab-add': {
                            templateUrl: 'templates/add.html',
                            controller: 'addCtrl',
                            controllerUrl: 'js/controllers/add.js'
                        }
                    }
                })
                    .state('tab.addAct', {
                        url: '/addAct',
                        views: {
                            'tab-add': {
                                templateUrl: 'templates/addAct.html',
                                controller: 'addActCtrl',
                                controllerUrl: 'js/controllers/addAct.js'
                            }
                        }
                    })
                    .state('tab.addPost', {
                        url: '/addPost',
                        views: {
                            'tab-add': {
                                templateUrl: 'templates/addPost.html',
                                controller: 'addPostCtrl',
                                controllerUrl: 'js/controllers/addPost.js'
                            }
                        }
                    })

                // 朋友圈
                .state('tab.friend', {
                    url: '/friend',
                    views: {
                        'tab-friend': {
                            templateUrl: 'templates/friend.html',
                            controller: 'friendCtrl',
                            controllerUrl: 'js/controllers/friend.js'
                        }
                    }
                })
                    .state('tab.friendDetail', {
                        url: '/friendDetail',
                        views: {
                            'tab-friend': {
                                templateUrl: 'templates/friendDetail.html',
                                controller: 'friendDetailCtrl',
                                controllerUrl: 'js/controllers/friendDetail.js'
                            }
                        }
                    })
                    .state('tab.groupDetail', {
                        url: '/groupDetail',
                        views: {
                            'tab-friend': {
                                templateUrl: 'templates/groupDetail.html',
                                controller: 'groupDetailCtrl',
                                controllerUrl: 'js/controllers/groupDetail.js'
                            }
                        }
                    })
                    .state('tab.createGroup', {
                        url: '/createGroup',
                        views: {
                            'tab-friend': {
                                templateUrl: 'templates/createGroup.html',
                                controller: 'createGroupCtrl',
                                controllerUrl: 'js/controllers/createGroup.js'
                            }
                        }
                    })
                        .state('tab.post', {
                            url: '/post',
                            views: {
                                'tab-friend': {
                                    templateUrl: 'templates/groupmsg.html',
                                    controller: 'groupmsgCtrl',
                                    controllerUrl: 'js/controllers/groupmsg.js'
                                }
                            }
                        })
                        .state('tab.act', {
                            url: '/act',
                            views: {
                                'tab-friend': {
                                    templateUrl: 'templates/activitymsg.html',
                                    controller: 'activitymsgCtrl',
                                    controllerUrl: 'js/controllers/activitymsg.js'
                                }
                            }
                        })

                // 我的
                .state('tab.mine', {
                    url: '/mine',
                    views: {
                        'tab-mine': {
                            templateUrl: 'templates/mine.html',
                            controller: 'mineCtrl',
                            controllerUrl: 'js/controllers/mine.js'
                        }
                    }
                })
                    // 个人信息页面
                    .state('tab.personal', {
                        url: '/personal',
                        views: {
                            'tab-mine': {
                                templateUrl: 'templates/personal.html',
                                controller: 'personalCtrl',
                                controllerUrl: 'js/controllers/personal.js'
                            }
                        }
                    })
                    .state('tab.mypost', {
                        url: '/mypost',
                        views: {
                            'tab-mine': {
                                templateUrl: 'templates/mypost.html',
                                controller: 'mypostCtrl',
                                controllerUrl: 'js/controllers/mypost.js'
                            }
                        }
                    })
                    .state('tab.myact', {
                        url: '/myact',
                        views: {
                            'tab-mine': {
                                templateUrl: 'templates/myact.html',
                                controller: 'myactCtrl',
                                controllerUrl: 'js/controllers/myact.js'
                            }
                        }
                    })
                        // 帖子详情
                        .state('tab.mpost', {
                            url: '/mpost',
                            views: {
                                'tab-mine': {
                                    templateUrl: 'templates/groupmsg.html',
                                    controller: 'groupmsgCtrl',
                                    controllerUrl: 'js/controllers/groupmsg.js'
                                }
                            }
                        })
                        .state('tab.mact', {
                            url: '/mact',
                            views: {
                                'tab-mine': {
                                    templateUrl: 'templates/activitymsg.html',
                                    controller: 'activitymsgCtrl',
                                    controllerUrl: 'js/controllers/activitymsg.js'
                                }
                            }
                        })

                        // 添加个人帖子，以及活动页面
                        .state('tab.addMPost', {
                            url: '/addMPost',
                            views: {
                                'tab-mine': {
                                    templateUrl: 'templates/addPost.html',
                                    controller: 'addPostCtrl',
                                    controllerUrl: 'js/controllers/addPost.js'
                                }
                            }
                        })
                        .state('tab.addMAct', {
                            url: '/addMAct',
                            views: {
                                'tab-mine': {
                                    templateUrl: 'templates/addAct.html',
                                    controller: 'addActCtrl',
                                    controllerUrl: 'js/controllers/addAct.js'
                                }
                            }
                        })

                    // 设置页面
                    .state('tab.set', {
                        url: '/set',
                        views: {
                            'tab-mine': {
                                templateUrl: 'templates/set.html',
                                controller: 'setCtrl',
                                controllerUrl: 'js/controllers/set.js'
                            }
                        }
                    })

                        // 通用信息内容页
                        .state('tab.content-mine', {
                            url: '/mine/content-mine/:type',
                            views: {
                                'tab-mine': {
                                    templateUrl: 'templates/content-mine.html',
                                    controller: 'content-mineCtrl',
                                    controllerUrl: 'js/controllers/content-mine.js'
                                }
                            }
                        })

            $urlRouterProvider.otherwise("index");

        });
});