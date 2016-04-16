/**
 * Created by luliang on 2015/11/13.
 */

define([
    'app',
    'utils/md5',
    './storage',
    './local_database'],
  function(app){
  app
    .factory('MyUrl',['md5Utils','Storage','localDatabase',function (md5Utils,Storage,localDatabase) {
      // Might use a resource here that returns a JSON array

      var sessid = encodeURIComponent("");
      var appid = 10003;
      var appkey = "DDV02-N710UJ-2MR2G-K2DXK-9103C";
      var v = "1.0.1";
      var did = "";
      var os = "";
      var nm = "" ;
      var mno = "";
      var dm = "";

      //var time = new Date().getTime();
      var time = '' ;
      var sign;
      //var params = {
      //        sessid:getSessid(),appid:appid,v:v,ct:ct,did:did,os:os,nm:nm,mno:mno,dm:dm,
      //      time:time,sign:getSign()
      //  };

      /**
       * 设置设备信息，并存储到本地
       * @param mDid
       * @param mOs
       * @param mNm
       * @param mMno
       * @param mDm
       */
      var setDeviceInfo = function(mDid,mOs,mNm,mMno,mDm){
        did = mDid ;
        os = mOs ;
        nm = mNm ;
        mno = mMno ;
        dm = mDm ;
        //设备信息存储到本地
        localDatabase.setDid(did);
        localDatabase.setOs(os);
        localDatabase.setNm(nm);
        localDatabase.setMno(mno);
        localDatabase.setDm(dm);
      };

      /**
       * 从本地存储中获取设备信息
       */
      var getDeviceInfoFromLocalStorage = function(){
        did = localDatabase.getDid() ;
        os = localDatabase.getOs() ;
        nm = localDatabase.getNm() ;
        mno = localDatabase.getMno() ;
        dm = localDatabase.getDm() ;
      };

      function getSessid(){
        if(!isStringNotEmpty(sessid)){
           var _sessId = Storage.get("sessId");
          if(_sessId){
            sessid = _sessId;
          }
        }
        return sessid;
      }

      function getTimeStamp(){
        time = new Date().getTime();
        return time ;
      }

      function getFormMd5(formId,time,formData){
        return md5Utils.md5(appkey+formId+time+formData);
      }

      function isLogin(){
        return isStringNotEmpty(getSessid());
      }

      function getSign(){
        sign = md5Utils.md5(appkey+time+getSessid());
        return sign;

      }
      function setSessid(value){
        var encodeId = encodeURIComponent(value);
        var sessIdString = getSessid();
        if(isStringNotEmpty(value)&&(encodeId != sessIdString)){
          sessid = encodeId;
          Storage.set("sessId",sessid);
        }
      }

      function clear(){
        sessid = '' ;
        Storage.set("sessId",sessid);
      }

      var getDefaultParams = function(){
        getDeviceInfoFromLocalStorage();
        getTimeStamp();
        return {
          sessid:getSessid(),
          appid:appid,
          v:v,
          ct:getCt(),
          did:did,
          os:os,
          nm:nm,
          mno:mno,
          dm:dm,
          time:time,
          sign:getSign()
        };
      };

      function getCt(){
        var ct = 1 ;
        if(navigator.userAgent.indexOf('Android') > -1){
          ct = 2 ;
        }else if(navigator.userAgent.indexOf('iPhone') > -1){
          ct = 4 ;
        }else if(navigator.userAgent.indexOf('iPad') > -1){
          ct = 5 ;
        }
        return ct ;
      }

      function isStringNotEmpty(string){
        return angular.isString(string)&&(string.replace(/(^s*)|(s*$)/g, "").length > 0);
      }

      return {
        setDeviceInfo : setDeviceInfo,
        isStringNotEmpty : isStringNotEmpty,
        getDefaultParams : getDefaultParams,
        setSessid : setSessid,
        getSessid : getSessid,
        getTimeStamp : getTimeStamp,
        getFormMd5 : getFormMd5,
        isLogin : isLogin ,
        clear : clear
      }
    }]);
});
//var params="sessid="+sessid+"&"+"appid="+appid+"&"+"v="+v+"&"+
//  "ct="+ct+"&"+"did="+did+"&"+"os="+os+"&"+"nm="+nm+"&"+"mno="+mno+"&"
//  +"dm="+dm+"&"+"time="+time+"&"+"sign="+sign;//11个参数
