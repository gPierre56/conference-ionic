(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"mas+":function(e,t,n){"use strict";n.r(t);var r,i=n("8Y7J"),o=function(e){return e.Uri="uri",e.Base64="base64",e.DataUrl="dataUrl",e}({}),s=function(e){return e.Application="APPLICATION",e.Documents="DOCUMENTS",e.Data="DATA",e.Cache="CACHE",e.External="EXTERNAL",e.ExternalStorage="EXTERNAL_STORAGE",e}({}),u=function(e){return e.Camera="camera",e.Photos="photos",e.Geolocation="geolocation",e.Notifications="notifications",e.ClipboardRead="clipboard-read",e.ClipboardWrite="clipboard-write",e}({}),l=((r="undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).Capacitor=r.Capacitor||new(function(){function e(){var e=this;this.platform="web",this.isNative=!1,this.Plugins={},this.Plugins=new Proxy(this.Plugins,{get:function(t,n){if(void 0===t[n]){var r=e;return new Proxy({},{get:function(e,t){return void 0===e[t]?r.pluginMethodNoop.bind(r,e,t,n):e[t]}})}return t[n]}})}return e.prototype.pluginMethodNoop=function(e,t,n){return Promise.reject(n+" does not have web implementation.")},e.prototype.getPlatform=function(){return this.platform},e.prototype.isPluginAvailable=function(e){return this.Plugins.hasOwnProperty(e)},e.prototype.convertFileSrc=function(e){return e},e.prototype.handleError=function(e){console.error(e)},e}())).Plugins,a=new(function(){function e(){this.plugins={},this.loadedPlugins={}}return e.prototype.addPlugin=function(e){this.plugins[e.config.name]=e},e.prototype.getPlugin=function(e){return this.plugins[e]},e.prototype.loadPlugin=function(e){var t=this.getPlugin(e);t?t.load():console.error("Unable to load web plugin "+e+", no such plugin found.")},e.prototype.getPlugins=function(){var e=[];for(var t in this.plugins)e.push(this.plugins[t]);return e},e}()),c=function(){function e(e,t){this.config=e,this.loaded=!1,this.listeners={},this.windowListeners={},t?t.addPlugin(this):a.addPlugin(this)}return e.prototype.addWindowListener=function(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0},e.prototype.removeWindowListener=function(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)},e.prototype.addListener=function(e,t){var n=this;this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t);var r=this.windowListeners[e];return r&&!r.registered&&this.addWindowListener(r),{remove:function(){n.removeListener(e,t)}}},e.prototype.removeListener=function(e,t){var n=this.listeners[e];if(n){var r=n.indexOf(t);this.listeners[e].splice(r,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}},e.prototype.notifyListeners=function(e,t){var n=this.listeners[e];n&&n.forEach((function(e){return e(t)}))},e.prototype.hasListeners=function(e){return!!this.listeners[e].length},e.prototype.registerWindowListener=function(e,t){var n=this;this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:function(e){n.notifyListeners(t,e)}}},e.prototype.requestPermissions=function(){return Capacitor.isNative?Capacitor.nativePromise(this.config.name,"requestPermissions",{}):Promise.resolve({results:[]})},e.prototype.load=function(){this.loaded=!0},e}(),d=function(e,t){e.hasOwnProperty(t.config.name)&&!function(e){return e.config.platforms&&e.config.platforms.indexOf(Capacitor.platform)>=0}(t)||(e[t.config.name]=t)},h=n("mrSG"),p=(new(function(e){function t(){return e.call(this,{name:"Accessibility",platforms:["web"]})||this}return h.c(t,e),t.prototype.isScreenReaderEnabled=function(){throw new Error("Feature not available in the browser")},t.prototype.speak=function(e){if(!("speechSynthesis"in window))return Promise.reject("Browser does not support the Speech Synthesis API");var t=new SpeechSynthesisUtterance(e.value);return e.language&&(t.lang=e.language),window.speechSynthesis.speak(t),Promise.resolve()},t}(c)),new(function(e){function t(){var t=e.call(this,{name:"App",platforms:["web"]})||this;return"undefined"!=typeof document&&document.addEventListener("visibilitychange",t.handleVisibilityChange.bind(t),!1),t}return h.c(t,e),t.prototype.exitApp=function(){throw new Error("Method not implemented.")},t.prototype.canOpenUrl=function(e){return Promise.resolve({value:!0})},t.prototype.openUrl=function(e){return Promise.resolve({completed:!0})},t.prototype.getLaunchUrl=function(){return Promise.resolve({url:""})},t.prototype.handleVisibilityChange=function(){var e={isActive:!0!==document.hidden};this.notifyListeners("appStateChange",e)},t}(c)),new(function(e){function t(){return e.call(this,{name:"Browser",platforms:["web"]})||this}return h.c(t,e),t.prototype.open=function(e){return h.b(this,void 0,void 0,(function(){return h.d(this,(function(t){return this._lastWindow=window.open(e.url,e.windowName||"_blank"),[2,Promise.resolve()]}))}))},t.prototype.prefetch=function(e){return h.b(this,void 0,void 0,(function(){return h.d(this,(function(e){return[2,Promise.resolve()]}))}))},t.prototype.close=function(){return h.b(this,void 0,void 0,(function(){return h.d(this,(function(e){return this._lastWindow&&this._lastWindow.close(),[2,Promise.resolve()]}))}))},t}(c)),new(function(e){function t(){return e.call(this,{name:"Camera",platforms:["web"]})||this}return h.c(t,e),t.prototype.getPhoto=function(e){return h.b(this,void 0,void 0,(function(){var t=this;return h.d(this,(function(n){return[2,new Promise((function(n,r){return h.b(t,void 0,void 0,(function(){var t,i=this;return h.d(this,(function(o){switch(o.label){case 0:return t=document.createElement("pwa-camera-modal"),document.body.appendChild(t),[4,t.componentOnReady()];case 1:return o.sent(),t.addEventListener("onPhoto",(function(o){return h.b(i,void 0,void 0,(function(){var i,s;return h.d(this,(function(u){switch(u.label){case 0:return null!==(i=o.detail)?[3,1]:(r("User cancelled photos app"),[3,4]);case 1:return i instanceof Error?(r(i.message),[3,4]):[3,2];case 2:return s=n,[4,this._getCameraPhoto(i,e)];case 3:s.apply(void 0,[u.sent()]),u.label=4;case 4:return t.dismiss(),document.body.removeChild(t),[2]}}))}))})),t.present(),[2]}}))}))}))]}))}))},t.prototype._getCameraPhoto=function(e,t){return new Promise((function(n,r){var i=new FileReader,s=e.type.split("/")[1];t.resultType==o.Uri?n({webPath:URL.createObjectURL(e),format:s}):(i.readAsDataURL(e),i.onloadend=function(){var e=i.result;n(t.resultType==o.DataUrl?{dataUrl:e,format:s}:{base64String:e.split(",")[1],format:s})},i.onerror=function(e){r(e)})}))},t}(c)),new(function(e){function t(){return e.call(this,{name:"Clipboard",platforms:["web"]})||this}return h.c(t,e),t.prototype.write=function(e){return h.b(this,void 0,void 0,(function(){return h.d(this,(function(t){switch(t.label){case 0:return navigator.clipboard?e.string||e.url?[4,navigator.clipboard.writeText(e.string||e.url)]:[3,2]:[2,Promise.reject("Clipboard API not available in this browser")];case 1:return t.sent(),[3,3];case 2:if(e.image)return[2,Promise.reject("Setting images not supported on the web")];t.label=3;case 3:return[2,Promise.resolve()]}}))}))},t.prototype.read=function(e){return h.b(this,void 0,void 0,(function(){var t,n,r,i,o;return h.d(this,(function(s){switch(s.label){case 0:return navigator.clipboard?"string"!==e.type&&"url"!==e.type?[3,2]:[4,navigator.clipboard.readText()]:[2,Promise.reject("Clipboard API not available in this browser")];case 1:return t=s.sent(),[2,Promise.resolve({value:t})];case 2:return[4,navigator.clipboard.read()];case 3:for(n=s.sent(),r=0,i=n.items;r<i.length;r++)if("text/plain"===(o=i[r]).type)return[2,Promise.resolve({value:o.getAs("text/plain")})];s.label=4;case 4:return[2,Promise.reject("Unable to get data from clipboard")]}}))}))},t}(c)),new(function(e){function t(){var t=e.call(this,{name:"Filesystem",platforms:["web"]})||this;return t.DEFAULT_DIRECTORY=s.Data,t.DB_VERSION=1,t.DB_NAME="Disc",t._writeCmds=["add","put","delete"],t}return h.c(t,e),t.prototype.initDb=function(){return h.b(this,void 0,void 0,(function(){var e=this;return h.d(this,(function(n){if(void 0!==this._db)return[2,this._db];if(!("indexedDB"in window))throw new Error("This browser doesn't support IndexedDB");return[2,new Promise((function(n,r){var i=indexedDB.open(e.DB_NAME,e.DB_VERSION);i.onupgradeneeded=t.doUpgrade,i.onsuccess=function(){e._db=i.result,n(i.result)},i.onerror=function(){return r(i.error)},i.onblocked=function(){console.warn("db blocked")}}))]}))}))},t.doUpgrade=function(e){var t=e.target.result;switch(e.oldVersion){case 0:case 1:default:t.objectStoreNames.contains("FileStorage")&&t.deleteObjectStore("FileStorage"),t.createObjectStore("FileStorage",{keyPath:"path"}).createIndex("by_folder","folder")}},t.prototype.dbRequest=function(e,t){return h.b(this,void 0,void 0,(function(){var n;return h.d(this,(function(r){return n=-1!==this._writeCmds.indexOf(e)?"readwrite":"readonly",[2,this.initDb().then((function(r){return new Promise((function(i,o){var s=r.transaction(["FileStorage"],n).objectStore("FileStorage"),u=s[e].apply(s,t);u.onsuccess=function(){return i(u.result)},u.onerror=function(){return o(u.error)}}))}))]}))}))},t.prototype.dbIndexRequest=function(e,t,n){return h.b(this,void 0,void 0,(function(){var r;return h.d(this,(function(i){return r=-1!==this._writeCmds.indexOf(t)?"readwrite":"readonly",[2,this.initDb().then((function(i){return new Promise((function(o,s){var u=i.transaction(["FileStorage"],r).objectStore("FileStorage").index(e),l=u[t].apply(u,n);l.onsuccess=function(){return o(l.result)},l.onerror=function(){return s(l.error)}}))}))]}))}))},t.prototype.getPath=function(e,t){e=e||this.DEFAULT_DIRECTORY;var n=void 0!==t?t.replace(/^[/]+|[/]+$/g,""):"",r="/"+e;return""!==t&&(r+="/"+n),r},t.prototype.clear=function(){return h.b(this,void 0,void 0,(function(){return h.d(this,(function(e){switch(e.label){case 0:return[4,this.initDb()];case 1:return e.sent().transaction(["FileStorage"],"readwrite").objectStore("FileStorage").clear(),[2,{}]}}))}))},t.prototype.readFile=function(e){return h.b(this,void 0,void 0,(function(){var t,n;return h.d(this,(function(r){switch(r.label){case 0:return t=this.getPath(e.directory,e.path),[4,this.dbRequest("get",[t])];case 1:if(void 0===(n=r.sent()))throw Error("File does not exist.");return[2,{data:n.content}]}}))}))},t.prototype.writeFile=function(e){return h.b(this,void 0,void 0,(function(){var t,n,r,i,o,s,u;return h.d(this,(function(l){switch(l.label){case 0:return t=this.getPath(e.directory,e.path),n=e.data,[4,this.dbRequest("get",[t])];case 1:if((r=l.sent())&&"directory"===r.type)throw"The supplied path is a directory.";return i=t.substr(0,t.lastIndexOf("/")),[4,this.dbRequest("get",[i])];case 2:return void 0!==l.sent()?[3,4]:-1===(o=i.indexOf("/",1))?[3,4]:(s=i.substr(o),[4,this.mkdir({path:s,directory:e.directory,createIntermediateDirectories:!0})]);case 3:l.sent(),l.label=4;case 4:return u=Date.now(),[4,this.dbRequest("put",[{path:t,folder:i,type:"file",size:n.length,ctime:u,mtime:u,content:n}])];case 5:return l.sent(),[2,{}]}}))}))},t.prototype.appendFile=function(e){return h.b(this,void 0,void 0,(function(){var t,n,r,i,o,s,u;return h.d(this,(function(l){switch(l.label){case 0:return t=this.getPath(e.directory,e.path),n=e.data,r=t.substr(0,t.lastIndexOf("/")),i=Date.now(),o=i,[4,this.dbRequest("get",[t])];case 1:if((s=l.sent())&&"directory"===s.type)throw"The supplied path is a directory.";return[4,this.dbRequest("get",[r])];case 2:return void 0!==l.sent()?[3,4]:(u=r.substr(r.indexOf("/",1)),[4,this.mkdir({path:u,directory:e.directory,createIntermediateDirectories:!0})]);case 3:l.sent(),l.label=4;case 4:return void 0!==s&&(n=s.content+n,o=s.ctime),[4,this.dbRequest("put",[{path:t,folder:r,type:"file",size:n.length,ctime:o,mtime:i,content:n}])];case 5:return l.sent(),[2,{}]}}))}))},t.prototype.deleteFile=function(e){return h.b(this,void 0,void 0,(function(){var t;return h.d(this,(function(n){switch(n.label){case 0:return t=this.getPath(e.directory,e.path),[4,this.dbRequest("get",[t])];case 1:if(void 0===n.sent())throw Error("File does not exist.");return[4,this.dbIndexRequest("by_folder","getAllKeys",[IDBKeyRange.only(t)])];case 2:if(0!==n.sent().length)throw Error("Folder is not empty.");return[4,this.dbRequest("delete",[t])];case 3:return n.sent(),[2,{}]}}))}))},t.prototype.mkdir=function(e){return h.b(this,void 0,void 0,(function(){var t,n,r,i,o,s,u,l;return h.d(this,(function(a){switch(a.label){case 0:return t=this.getPath(e.directory,e.path),n=e.createIntermediateDirectories,r=t.substr(0,t.lastIndexOf("/")),i=(t.match(/\//g)||[]).length,[4,this.dbRequest("get",[r])];case 1:return o=a.sent(),[4,this.dbRequest("get",[t])];case 2:if(s=a.sent(),1===i)throw Error("Cannot create Root directory");if(void 0!==s)throw Error("Current directory does already exist.");if(!n&&2!==i&&void 0===o)throw Error("Parent directory must exist");return n&&2!==i&&void 0===o?(u=r.substr(r.indexOf("/",1)),[4,this.mkdir({path:u,directory:e.directory,createIntermediateDirectories:n})]):[3,4];case 3:a.sent(),a.label=4;case 4:return l=Date.now(),[4,this.dbRequest("put",[{path:t,folder:r,type:"directory",size:0,ctime:l,mtime:l}])];case 5:return a.sent(),[2,{}]}}))}))},t.prototype.rmdir=function(e){return h.b(this,void 0,void 0,(function(){var t,n,r,i,o,s,u,l,a;return h.d(this,(function(c){switch(c.label){case 0:return r=e.recursive,i=this.getPath(n=e.directory,t=e.path),[4,this.dbRequest("get",[i])];case 1:if(void 0===(o=c.sent()))throw Error("Folder does not exist.");if("directory"!==o.type)throw Error("Requested path is not a directory");return[4,this.readdir({path:t,directory:n})];case 2:if(0!==(s=c.sent()).files.length&&!r)throw Error("Folder is not empty");u=0,l=s.files,c.label=3;case 3:return u<l.length?[4,this.stat({path:a=t+"/"+l[u],directory:n})]:[3,9];case 4:return"file"!==c.sent().type?[3,6]:[4,this.deleteFile({path:a,directory:n})];case 5:return c.sent(),[3,8];case 6:return[4,this.rmdir({path:a,directory:n,recursive:r})];case 7:c.sent(),c.label=8;case 8:return u++,[3,3];case 9:return[4,this.dbRequest("delete",[i])];case 10:return c.sent(),[2,{}]}}))}))},t.prototype.readdir=function(e){return h.b(this,void 0,void 0,(function(){var t,n;return h.d(this,(function(r){switch(r.label){case 0:return t=this.getPath(e.directory,e.path),[4,this.dbRequest("get",[t])];case 1:if(n=r.sent(),""!==e.path&&void 0===n)throw Error("Folder does not exist.");return[4,this.dbIndexRequest("by_folder","getAllKeys",[IDBKeyRange.only(t)])];case 2:return[2,{files:r.sent().map((function(e){return e.substring(t.length+1)}))}]}}))}))},t.prototype.getUri=function(e){return h.b(this,void 0,void 0,(function(){var t,n;return h.d(this,(function(r){switch(r.label){case 0:return t=this.getPath(e.directory,e.path),[4,this.dbRequest("get",[t])];case 1:return void 0!==(n=r.sent())?[3,3]:[4,this.dbRequest("get",[t+"/"])];case 2:n=r.sent(),r.label=3;case 3:if(void 0===n)throw Error("Entry does not exist.");return[2,{uri:n.path}]}}))}))},t.prototype.stat=function(e){return h.b(this,void 0,void 0,(function(){var t,n;return h.d(this,(function(r){switch(r.label){case 0:return t=this.getPath(e.directory,e.path),[4,this.dbRequest("get",[t])];case 1:return void 0!==(n=r.sent())?[3,3]:[4,this.dbRequest("get",[t+"/"])];case 2:n=r.sent(),r.label=3;case 3:if(void 0===n)throw Error("Entry does not exist.");return[2,{type:n.type,size:n.size,ctime:n.ctime,mtime:n.mtime,uri:n.path}]}}))}))},t.prototype.rename=function(e){return h.b(this,void 0,void 0,(function(){return h.d(this,(function(t){return[2,this._copy(e,!0)]}))}))},t.prototype.copy=function(e){return h.b(this,void 0,void 0,(function(){return h.d(this,(function(t){return[2,this._copy(e,!1)]}))}))},t.prototype._copy=function(e,t){return void 0===t&&(t=!1),h.b(this,void 0,void 0,(function(){var n,r,i,o,s,u,l,a,c,d,p,f,b,v,m,w,y=this;return h.d(this,(function(g){switch(g.label){case 0:if(r=e.from,i=e.directory,o=e.toDirectory,!(n=e.to)||!r)throw Error("Both to and from must be provided");if(o||(o=i),s=this.getPath(i,r),u=this.getPath(o,n),s===u)return[2,{}];if(u.startsWith(s))throw Error("To path cannot contain the from path");g.label=1;case 1:return g.trys.push([1,3,,6]),[4,this.stat({path:n,directory:o})];case 2:return l=g.sent(),[3,6];case 3:return g.sent(),(a=n.split("/")).pop(),c=a.join("/"),a.length>0?[4,this.stat({path:c,directory:o})]:[3,5];case 4:if("directory"!==g.sent().type)throw new Error("Parent directory of the to path is a file");g.label=5;case 5:return[3,6];case 6:if(l&&"directory"===l.type)throw new Error("Cannot overwrite a directory with a file");return[4,this.stat({path:r,directory:i})];case 7:switch(d=g.sent(),p=function(e,t,n){return h.b(y,void 0,void 0,(function(){var r,i;return h.d(this,(function(s){switch(s.label){case 0:return r=this.getPath(o,e),[4,this.dbRequest("get",[r])];case 1:return(i=s.sent()).ctime=t,i.mtime=n,[4,this.dbRequest("put",[i])];case 2:return s.sent(),[2]}}))}))},d.type){case"file":return[3,8];case"directory":return[3,15]}return[3,28];case 8:return[4,this.readFile({path:r,directory:i})];case 9:return f=g.sent(),t?[4,this.deleteFile({path:r,directory:i})]:[3,11];case 10:g.sent(),g.label=11;case 11:return[4,this.writeFile({path:n,directory:o,data:f.data})];case 12:return g.sent(),t?[4,p(n,d.ctime,d.mtime)]:[3,14];case 13:g.sent(),g.label=14;case 14:return[2,{}];case 15:if(l)throw Error("Cannot move a directory over an existing object");g.label=16;case 16:return g.trys.push([16,20,,21]),[4,this.mkdir({path:n,directory:o,createIntermediateDirectories:!1})];case 17:return g.sent(),t?[4,p(n,d.ctime,d.mtime)]:[3,19];case 18:g.sent(),g.label=19;case 19:return[3,21];case 20:return g.sent(),[3,21];case 21:return[4,this.readdir({path:r,directory:i})];case 22:b=g.sent().files,v=0,m=b,g.label=23;case 23:return v<m.length?[4,this._copy({from:r+"/"+(w=m[v]),to:n+"/"+w,directory:i,toDirectory:o},t)]:[3,26];case 24:g.sent(),g.label=25;case 25:return v++,[3,23];case 26:return t?[4,this.rmdir({path:r,directory:i})]:[3,28];case 27:g.sent(),g.label=28;case 28:return[2,{}]}}))}))},t._debug=!0,t}(c)),function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.forEach((function(t){if(t&&"object"==typeof t)for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})),e});new(function(e){function t(){return e.call(this,{name:"Geolocation",platforms:["web"]})||this}return h.c(t,e),t.prototype.getCurrentPosition=function(e){var t=this;return new Promise((function(n,r){return t.requestPermissions().then((function(t){window.navigator.geolocation.getCurrentPosition((function(e){n(e)}),(function(e){r(e)}),p({enableHighAccuracy:!0,timeout:1e4,maximumAge:0},e))}))}))},t.prototype.watchPosition=function(e,t){return""+window.navigator.geolocation.watchPosition((function(e){t(e)}),(function(e){t(null,e)}),p({enableHighAccuracy:!0,timeout:1e4,maximumAge:0},e))},t.prototype.clearWatch=function(e){return window.navigator.geolocation.clearWatch(parseInt(e.id,10)),Promise.resolve()},t}(c)),new(function(e){function t(){return e.call(this,{name:"Device",platforms:["web"]})||this}return h.c(t,e),t.prototype.getInfo=function(){return h.b(this,void 0,void 0,(function(){var e,t,n;return h.d(this,(function(r){switch(r.label){case 0:e=navigator.userAgent,t=this.parseUa(e),n={},r.label=1;case 1:return r.trys.push([1,3,,4]),[4,navigator.getBattery()];case 2:return n=r.sent(),[3,4];case 3:return r.sent(),[3,4];case 4:return[2,Promise.resolve({model:t.model,platform:"web",appVersion:"",osVersion:t.osVersion,manufacturer:navigator.vendor,isVirtual:!1,batteryLevel:n.level,isCharging:n.charging,uuid:this.getUid()})]}}))}))},t.prototype.getLanguageCode=function(){return h.b(this,void 0,void 0,(function(){return h.d(this,(function(e){return[2,{value:navigator.language}]}))}))},t.prototype.parseUa=function(e){var t={},n=e.indexOf("(")+1,r=e.indexOf(") AppleWebKit");-1!==e.indexOf(") Gecko")&&(r=e.indexOf(") Gecko"));var i=e.substring(n,r);if(-1!==e.indexOf("Android"))t.model=i.replace("; wv","").split("; ").pop().split(" Build")[0],t.osVersion=i.split("; ")[1];else if(t.model=i.split("; ")[0],navigator.oscpu)t.osVersion=navigator.oscpu;else if(-1!==e.indexOf("Windows"))t.osVersion=i;else{var o=i.split("; ").pop().replace(" like Mac OS X","").split(" ");t.osVersion=o[o.length-1].replace(/_/g,".")}return t},t.prototype.getUid=function(){var e=window.localStorage.getItem("_capuid");return e||(e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})),window.localStorage.setItem("_capuid",e),e)},t}(c)),new(function(e){function t(){var t=e.call(this,{name:"LocalNotifications",platforms:["web"]})||this;return t.pending=[],t}return h.c(t,e),t.prototype.sendPending=function(){var e=this,t=[],n=+new Date;this.pending.forEach((function(r){r.schedule&&r.schedule.at&&+r.schedule.at<=n&&(e.buildNotification(r),t.push(r))})),console.log("Sent pending, removing",t),this.pending=this.pending.filter((function(e){return!t.find((function(t){return t===e}))}))},t.prototype.sendNotification=function(e){var t=this,n=e;if(e.schedule&&e.schedule.at){var r=+e.schedule.at-+new Date;return this.pending.push(n),void setTimeout((function(){t.sendPending()}),r)}this.buildNotification(e)},t.prototype.buildNotification=function(e){return new Notification(e.title,{body:e.body})},t.prototype.schedule=function(e){var t=this,n=[];return e.notifications.forEach((function(e){n.push(t.sendNotification(e))})),Promise.resolve({notifications:n.map((function(e){return{id:""}}))})},t.prototype.getPending=function(){return Promise.resolve({notifications:this.pending.map((function(e){return{id:""+e.id}}))})},t.prototype.registerActionTypes=function(e){throw new Error("Method not implemented.")},t.prototype.cancel=function(e){return console.log("Cancel these",e),this.pending=this.pending.filter((function(t){return!e.notifications.find((function(e){return e.id===""+t.id}))})),Promise.resolve()},t.prototype.areEnabled=function(){throw new Error("Method not implemented.")},t.prototype.requestPermissions=function(){return new Promise((function(e,t){Notification.requestPermission().then((function(n){"denied"!==n&&"default"!==n?e({results:[n]}):t(n)})).catch((function(e){t(e)}))}))},t}(c)),new(function(e){function t(){return e.call(this,{name:"Share",platforms:["web"]})||this}return h.c(t,e),t.prototype.share=function(e){return navigator.share?navigator.share({title:e.title,text:e.text,url:e.url}):Promise.reject("Web Share API not available")},t}(c)),new(function(e){function t(){return e.call(this,{name:"Modals",platforms:["web"]})||this}return h.c(t,e),t.prototype.alert=function(e){return h.b(this,void 0,void 0,(function(){return h.d(this,(function(t){return window.alert(e.message),[2,Promise.resolve()]}))}))},t.prototype.prompt=function(e){return h.b(this,void 0,void 0,(function(){var t;return h.d(this,(function(n){return t=window.prompt(e.message,e.inputPlaceholder||""),[2,Promise.resolve({value:t,cancelled:null===t})]}))}))},t.prototype.confirm=function(e){return h.b(this,void 0,void 0,(function(){var t;return h.d(this,(function(n){return t=window.confirm(e.message),[2,Promise.resolve({value:t})]}))}))},t.prototype.showActions=function(e){return h.b(this,void 0,void 0,(function(){var t=this;return h.d(this,(function(n){return[2,new Promise((function(n,r){return h.b(t,void 0,void 0,(function(){var t,r;return h.d(this,(function(i){switch(i.label){case 0:return(t=document.querySelector("ion-action-sheet-controller"))||(t=document.createElement("ion-action-sheet-controller"),document.body.appendChild(t)),[4,t.componentOnReady()];case 1:return i.sent(),r=e.options.map((function(e,t){return{text:e.title,role:e.style&&e.style.toLowerCase()||"",icon:e.icon||"",handler:function(){n({index:t})}}})),[4,t.create({title:e.title,buttons:r})];case 2:return[4,i.sent().present()];case 3:return i.sent(),[2]}}))}))}))]}))}))},t}(c)),new(function(e){function t(){var t=e.call(this,{name:"Motion"})||this;return t.registerWindowListener("devicemotion","accel"),t.registerWindowListener("deviceorientation","orientation"),t}return h.c(t,e),t}(c)),new(function(e){function t(){var t=e.call(this,{name:"Network",platforms:["web"]})||this;return t.listenerFunction=null,t}return h.c(t,e),t.prototype.getStatus=function(){return new Promise((function(e,t){if(window.navigator){var n=window.navigator.onLine,r=window.navigator.connection||window.navigator.mozConnection||window.navigator.webkitConnection;e({connected:n,connectionType:n?r?r.type||r.effectiveType:"wifi":"none"})}else t("Network info not available")}))},t.prototype.addListener=function(e,t){var n=window.navigator.connection||window.navigator.mozConnection||window.navigator.webkitConnection,r=t.bind(this,{connected:!0,connectionType:n?n.type||n.effectiveType:"wifi"}),i=t.bind(this,{connected:!1,connectionType:"none"});if(0===e.localeCompare("networkStatusChange"))return window.addEventListener("online",r),window.addEventListener("offline",i),{remove:function(){window.removeEventListener("online",r),window.removeEventListener("offline",i)}}},t}(c)),new(function(e){function t(){return e.call(this,{name:"Permissions"})||this}return h.c(t,e),t.prototype.query=function(e){return h.b(this,void 0,void 0,(function(){var t;return h.d(this,(function(n){switch(n.label){case 0:return(t=window.navigator).permissions?[4,t.permissions.query({name:e.name===u.Photos?"camera":e.name})]:[2,Promise.reject("This browser does not support the Permissions API")];case 1:return[2,{state:n.sent().state}]}}))}))},t}(c)),new(function(e){function t(){return e.call(this,{name:"SplashScreen",platforms:["web"]})||this}return h.c(t,e),t.prototype.show=function(e,t){return Promise.resolve()},t.prototype.hide=function(e,t){return Promise.resolve()},t}(c)),new(function(e){function t(){var t=e.call(this,{name:"Storage",platforms:["web"]})||this;return t.KEY_PREFIX="_cap_",t}return h.c(t,e),t.prototype.get=function(e){var t=this;return new Promise((function(n,r){n({value:window.localStorage.getItem(t.makeKey(e.key))})}))},t.prototype.set=function(e){var t=this;return new Promise((function(n,r){window.localStorage.setItem(t.makeKey(e.key),e.value),n()}))},t.prototype.remove=function(e){var t=this;return new Promise((function(n,r){window.localStorage.removeItem(t.makeKey(e.key)),n()}))},t.prototype.keys=function(){var e=this;return new Promise((function(t,n){t({keys:Object.keys(localStorage).filter((function(t){return e.isKey(t)})).map((function(t){return e.getKey(t)}))})}))},t.prototype.clear=function(){var e=this;return new Promise((function(t,n){Object.keys(localStorage).filter((function(t){return e.isKey(t)})).forEach((function(e){return window.localStorage.removeItem(e)})),t()}))},t.prototype.makeKey=function(e){return this.KEY_PREFIX+e},t.prototype.isKey=function(e){return 0===e.indexOf(this.KEY_PREFIX)},t.prototype.getKey=function(e){return e.substr(this.KEY_PREFIX.length)},t}(c)),new(function(e){function t(){return e.call(this,{name:"Toast",platforms:["web"]})||this}return h.c(t,e),t.prototype.show=function(e){return h.b(this,void 0,void 0,(function(){var t,n;return h.d(this,(function(r){return t=3e3,e.duration&&(t="long"===e.duration?5e3:3e3),(n=document.createElement("pwa-toast")).duration=t,n.message=e.text,document.body.appendChild(n),[2]}))}))},t}(c)),function(e){for(var t=0,n=a.getPlugins();t<n.length;t++)d(e,n[t])}(l);const{Device:f}=l,{Network:b}=l;class v{constructor(){this.infosDevice=new Map,this.infosConnexion=new Map}ngOnInit(){f.getInfo().then(e=>{for(const[t,n]of Object.entries(e))this.infosDevice.set(t,n)}),b.getStatus().then(e=>{for(const[t,n]of Object.entries(e))this.infosConnexion.set(t,n)})}}class m{}var w=n("pMnS"),y=n("oBZk"),g=n("ZZ/e"),P=i.pb({encapsulation:0,styles:[[""]],data:{}});function x(e){return i.Lb(0,[(e()(),i.rb(0,0,null,null,10,"ion-header",[],null,null,null,y.K,y.l)),i.qb(1,49152,null,0,g.z,[i.h,i.k,i.x],null,null),(e()(),i.rb(2,0,null,0,8,"ion-toolbar",[],null,null,null,y.X,y.y)),i.qb(3,49152,null,0,g.Ab,[i.h,i.k,i.x],null,null),(e()(),i.rb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,y.B,y.c)),i.qb(5,49152,null,0,g.j,[i.h,i.k,i.x],null,null),(e()(),i.rb(6,0,null,0,1,"ion-menu-button",[],null,null,null,y.R,y.t)),i.qb(7,49152,null,0,g.P,[i.h,i.k,i.x],null,null),(e()(),i.rb(8,0,null,0,2,"ion-title",[],null,null,null,y.W,y.x)),i.qb(9,49152,null,0,g.yb,[i.h,i.k,i.x],null,null),(e()(),i.Jb(-1,0,["T\xe9l\xe9phone"])),(e()(),i.rb(11,0,null,null,41,"ion-content",[],null,null,null,y.I,y.j)),i.qb(12,49152,null,0,g.s,[i.h,i.k,i.x],null,null),(e()(),i.rb(13,0,null,0,7,"ion-row",[],null,null,null,y.U,y.v)),i.qb(14,49152,null,0,g.hb,[i.h,i.k,i.x],null,null),(e()(),i.rb(15,0,null,0,2,"ion-col",[],null,null,null,y.H,y.i)),i.qb(16,49152,null,0,g.r,[i.h,i.k,i.x],null,null),(e()(),i.Jb(-1,0,["Platform"])),(e()(),i.rb(18,0,null,0,2,"ion-col",[],null,null,null,y.H,y.i)),i.qb(19,49152,null,0,g.r,[i.h,i.k,i.x],null,null),(e()(),i.Jb(20,0,["",""])),(e()(),i.rb(21,0,null,0,7,"ion-row",[],null,null,null,y.U,y.v)),i.qb(22,49152,null,0,g.hb,[i.h,i.k,i.x],null,null),(e()(),i.rb(23,0,null,0,2,"ion-col",[],null,null,null,y.H,y.i)),i.qb(24,49152,null,0,g.r,[i.h,i.k,i.x],null,null),(e()(),i.Jb(-1,0,["Version"])),(e()(),i.rb(26,0,null,0,2,"ion-col",[],null,null,null,y.H,y.i)),i.qb(27,49152,null,0,g.r,[i.h,i.k,i.x],null,null),(e()(),i.Jb(28,0,["",""])),(e()(),i.rb(29,0,null,0,7,"ion-row",[],null,null,null,y.U,y.v)),i.qb(30,49152,null,0,g.hb,[i.h,i.k,i.x],null,null),(e()(),i.rb(31,0,null,0,2,"ion-col",[],null,null,null,y.H,y.i)),i.qb(32,49152,null,0,g.r,[i.h,i.k,i.x],null,null),(e()(),i.Jb(-1,0,["UUID"])),(e()(),i.rb(34,0,null,0,2,"ion-col",[],null,null,null,y.H,y.i)),i.qb(35,49152,null,0,g.r,[i.h,i.k,i.x],null,null),(e()(),i.Jb(36,0,["",""])),(e()(),i.rb(37,0,null,0,7,"ion-row",[],null,null,null,y.U,y.v)),i.qb(38,49152,null,0,g.hb,[i.h,i.k,i.x],null,null),(e()(),i.rb(39,0,null,0,2,"ion-col",[],null,null,null,y.H,y.i)),i.qb(40,49152,null,0,g.r,[i.h,i.k,i.x],null,null),(e()(),i.Jb(-1,0,["Model"])),(e()(),i.rb(42,0,null,0,2,"ion-col",[],null,null,null,y.H,y.i)),i.qb(43,49152,null,0,g.r,[i.h,i.k,i.x],null,null),(e()(),i.Jb(44,0,["",""])),(e()(),i.rb(45,0,null,0,7,"ion-row",[],null,null,null,y.U,y.v)),i.qb(46,49152,null,0,g.hb,[i.h,i.k,i.x],null,null),(e()(),i.rb(47,0,null,0,2,"ion-col",[],null,null,null,y.H,y.i)),i.qb(48,49152,null,0,g.r,[i.h,i.k,i.x],null,null),(e()(),i.Jb(-1,0,["Connection"])),(e()(),i.rb(50,0,null,0,2,"ion-col",[],null,null,null,y.H,y.i)),i.qb(51,49152,null,0,g.r,[i.h,i.k,i.x],null,null),(e()(),i.Jb(52,0,["",""]))],null,(function(e,t){var n=t.component;e(t,20,0,null==n.infosDevice?null:n.infosDevice.get("platform")),e(t,28,0,null==n.infosDevice?null:n.infosDevice.get("osVersion")),e(t,36,0,null==n.infosDevice?null:n.infosDevice.get("uuid")),e(t,44,0,null==n.infosDevice?null:n.infosDevice.get("model")),e(t,52,0,null==n.infosConnexion?null:n.infosConnexion.get("connectionType"))}))}function E(e){return i.Lb(0,[(e()(),i.rb(0,0,null,null,1,"app-telephone",[],null,null,null,x,P)),i.qb(1,114688,null,0,v,[],null,null)],(function(e,t){e(t,1,0)}),null)}var k=i.nb("app-telephone",v,E,{},{},[]),q=n("SVse"),C=n("s7LF"),S=n("iInd");n.d(t,"TelephonePageModuleNgFactory",(function(){return D}));var D=i.ob(m,[],(function(e){return i.Ab([i.Bb(512,i.j,i.Z,[[8,[w.a,k]],[3,i.j],i.v]),i.Bb(4608,q.l,q.k,[i.s,[2,q.s]]),i.Bb(4608,C.c,C.c,[]),i.Bb(4608,g.a,g.a,[i.x,i.g]),i.Bb(4608,g.Eb,g.Eb,[g.a,i.j,i.p]),i.Bb(4608,g.Hb,g.Hb,[g.a,i.j,i.p]),i.Bb(1073742336,q.b,q.b,[]),i.Bb(1073742336,C.b,C.b,[]),i.Bb(1073742336,C.a,C.a,[]),i.Bb(1073742336,g.Cb,g.Cb,[]),i.Bb(1073742336,S.p,S.p,[[2,S.u],[2,S.m]]),i.Bb(1073742336,m,m,[]),i.Bb(1024,S.k,(function(){return[[{path:"",component:v}]]}),[])])}))}}]);