/**
 * Created by suiman on 15/11/10.
 */

//存储全局信息

define(['app'],function(app){
  app
    .factory('Storage', function storageService() {

      var storage = window.localStorage;
      var json = window.JSON;

      return {
        set: set,
        get: get,
        clear: clear,
        remove: remove
      };

      function set(key, value) {
        storage.setItem(key, json.stringify(value));
      }

      function get(key) {
        var value = json.parse(storage.getItem(key));
        if(null != value) {
          return value;
        }
        return undefined;
      }

      function clear() {
        storage.clear();
      }

      function remove(key) {
        storage.removeItem(key);
      }
    });
});


