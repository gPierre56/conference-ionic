(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"mas+":function(l,n,u){"use strict";u.r(n);var o=u("CcnG"),b=u("gcOT"),t=b.c.Device,i=b.c.Network,e=function(){function l(){this.infosDevice=new Map,this.infosConnexion=new Map}return l.prototype.ngOnInit=function(){var l=this;t.getInfo().then((function(n){for(var u=0,o=Object.entries(n);u<o.length;u++){var b=o[u];l.infosDevice.set(b[0],b[1])}})),i.getStatus().then((function(n){for(var u=0,o=Object.entries(n);u<o.length;u++){var b=o[u];l.infosConnexion.set(b[0],b[1])}}))},l}(),s=function(){return function(){}}(),c=u("pMnS"),r=u("oBZk"),a=u("ZZ/e"),h=o.rb({encapsulation:0,styles:[[""]],data:{}});function f(l){return o.Ob(0,[(l()(),o.tb(0,0,null,null,10,"ion-header",[],null,null,null,r.N,r.l)),o.sb(1,49152,null,0,a.A,[o.h,o.k,o.z],null,null),(l()(),o.tb(2,0,null,0,8,"ion-toolbar",[],null,null,null,r.db,r.B)),o.sb(3,49152,null,0,a.Bb,[o.h,o.k,o.z],null,null),(l()(),o.tb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,r.E,r.c)),o.sb(5,49152,null,0,a.k,[o.h,o.k,o.z],null,null),(l()(),o.tb(6,0,null,0,1,"ion-menu-button",[],null,null,null,r.U,r.t)),o.sb(7,49152,null,0,a.Q,[o.h,o.k,o.z],null,null),(l()(),o.tb(8,0,null,0,2,"ion-title",[],null,null,null,r.bb,r.z)),o.sb(9,49152,null,0,a.zb,[o.h,o.k,o.z],null,null),(l()(),o.Mb(-1,0,["T\xe9l\xe9phone"])),(l()(),o.tb(11,0,null,null,41,"ion-content",[],null,null,null,r.L,r.j)),o.sb(12,49152,null,0,a.t,[o.h,o.k,o.z],null,null),(l()(),o.tb(13,0,null,0,7,"ion-row",[],null,null,null,r.X,r.v)),o.sb(14,49152,null,0,a.ib,[o.h,o.k,o.z],null,null),(l()(),o.tb(15,0,null,0,2,"ion-col",[],null,null,null,r.K,r.i)),o.sb(16,49152,null,0,a.s,[o.h,o.k,o.z],null,null),(l()(),o.Mb(-1,0,["Platform"])),(l()(),o.tb(18,0,null,0,2,"ion-col",[],null,null,null,r.K,r.i)),o.sb(19,49152,null,0,a.s,[o.h,o.k,o.z],null,null),(l()(),o.Mb(20,0,["",""])),(l()(),o.tb(21,0,null,0,7,"ion-row",[],null,null,null,r.X,r.v)),o.sb(22,49152,null,0,a.ib,[o.h,o.k,o.z],null,null),(l()(),o.tb(23,0,null,0,2,"ion-col",[],null,null,null,r.K,r.i)),o.sb(24,49152,null,0,a.s,[o.h,o.k,o.z],null,null),(l()(),o.Mb(-1,0,["Version"])),(l()(),o.tb(26,0,null,0,2,"ion-col",[],null,null,null,r.K,r.i)),o.sb(27,49152,null,0,a.s,[o.h,o.k,o.z],null,null),(l()(),o.Mb(28,0,["",""])),(l()(),o.tb(29,0,null,0,7,"ion-row",[],null,null,null,r.X,r.v)),o.sb(30,49152,null,0,a.ib,[o.h,o.k,o.z],null,null),(l()(),o.tb(31,0,null,0,2,"ion-col",[],null,null,null,r.K,r.i)),o.sb(32,49152,null,0,a.s,[o.h,o.k,o.z],null,null),(l()(),o.Mb(-1,0,["UUID"])),(l()(),o.tb(34,0,null,0,2,"ion-col",[],null,null,null,r.K,r.i)),o.sb(35,49152,null,0,a.s,[o.h,o.k,o.z],null,null),(l()(),o.Mb(36,0,["",""])),(l()(),o.tb(37,0,null,0,7,"ion-row",[],null,null,null,r.X,r.v)),o.sb(38,49152,null,0,a.ib,[o.h,o.k,o.z],null,null),(l()(),o.tb(39,0,null,0,2,"ion-col",[],null,null,null,r.K,r.i)),o.sb(40,49152,null,0,a.s,[o.h,o.k,o.z],null,null),(l()(),o.Mb(-1,0,["Model"])),(l()(),o.tb(42,0,null,0,2,"ion-col",[],null,null,null,r.K,r.i)),o.sb(43,49152,null,0,a.s,[o.h,o.k,o.z],null,null),(l()(),o.Mb(44,0,["",""])),(l()(),o.tb(45,0,null,0,7,"ion-row",[],null,null,null,r.X,r.v)),o.sb(46,49152,null,0,a.ib,[o.h,o.k,o.z],null,null),(l()(),o.tb(47,0,null,0,2,"ion-col",[],null,null,null,r.K,r.i)),o.sb(48,49152,null,0,a.s,[o.h,o.k,o.z],null,null),(l()(),o.Mb(-1,0,["Connection"])),(l()(),o.tb(50,0,null,0,2,"ion-col",[],null,null,null,r.K,r.i)),o.sb(51,49152,null,0,a.s,[o.h,o.k,o.z],null,null),(l()(),o.Mb(52,0,["",""]))],null,(function(l,n){var u=n.component;l(n,20,0,null==u.infosDevice?null:u.infosDevice.get("platform")),l(n,28,0,null==u.infosDevice?null:u.infosDevice.get("osVersion")),l(n,36,0,null==u.infosDevice?null:u.infosDevice.get("uuid")),l(n,44,0,null==u.infosDevice?null:u.infosDevice.get("model")),l(n,52,0,null==u.infosConnexion?null:u.infosConnexion.get("connectionType"))}))}function k(l){return o.Ob(0,[(l()(),o.tb(0,0,null,null,1,"app-telephone",[],null,null,null,f,h)),o.sb(1,114688,null,0,e,[],null,null)],(function(l,n){l(n,1,0)}),null)}var p=o.pb("app-telephone",e,k,{},{},[]),D=u("Ip0R"),v=u("gIcY"),z=u("ZYCi");u.d(n,"TelephonePageModuleNgFactory",(function(){return M}));var M=o.qb(s,[],(function(l){return o.Cb([o.Db(512,o.j,o.bb,[[8,[c.a,p]],[3,o.j],o.x]),o.Db(4608,D.l,D.k,[o.u,[2,D.s]]),o.Db(4608,v.d,v.d,[]),o.Db(4608,a.a,a.a,[o.z,o.g]),o.Db(4608,a.Fb,a.Fb,[a.a,o.j,o.q]),o.Db(4608,a.Ib,a.Ib,[a.a,o.j,o.q]),o.Db(1073742336,D.b,D.b,[]),o.Db(1073742336,v.c,v.c,[]),o.Db(1073742336,v.a,v.a,[]),o.Db(1073742336,a.Db,a.Db,[]),o.Db(1073742336,z.p,z.p,[[2,z.u],[2,z.m]]),o.Db(1073742336,s,s,[]),o.Db(1024,z.k,(function(){return[[{path:"",component:e}]]}),[])])}))}}]);