(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{piEU:function(n,l,t){"use strict";t.r(l);var u=t("CcnG"),o=t("mrSG"),s=t("IfdK"),e=t("gcOT"),i=function(){return function(){}}(),r=e.c.Camera,c=e.c.Device,a=function(){function n(n,l,t){this.sessionService=n,this.activatedRoute=l,this.location=t}return n.prototype.goback=function(){this.location.back()},n.prototype.takePhoto=function(){return o.b(this,void 0,void 0,(function(){var n,l,t=this;return o.e(this,(function(u){switch(u.label){case 0:return n=localStorage.getItem("notes_session_".concat(this.session.id.toString())),l=[],[4,r.getPhoto({quality:90,allowEditing:!1,source:e.b.Camera,resultType:e.a.Base64}).then((function(u){if(t.session.infosSession.listePhotos.push(u.base64String),null===n)l.push(u.base64String),localStorage.setItem("photos_session_".concat(t.session.id.toString()),JSON.stringify(l));else{var o=JSON.parse(n);o.push(u.base64String),localStorage.setItem("photos_session_".concat(t.session.id.toString()),JSON.stringify(o))}}))];case 1:return u.sent(),[2]}}))}))},n.prototype.uploadPhoto=function(){return o.b(this,void 0,void 0,(function(){return o.e(this,(function(n){switch(n.label){case 0:return[4,r.getPhoto({quality:90,allowEditing:!1,resultType:e.a.Base64,source:e.b.Photos})];case 1:return n.sent(),[2]}}))}))},n.prototype.enregistrerNote=function(){var n=localStorage.getItem("notes_session_".concat(this.session.id.toString())),l=document.getElementById("corps_note").value,t=[];if(this.session.infosSession.listeNotes.push(l),null===n)t.push(l),localStorage.setItem("notes_session_".concat(this.session.id.toString()),JSON.stringify(t));else{var u=JSON.parse(n);u.push(l),localStorage.setItem("notes_session_".concat(this.session.id.toString()),JSON.stringify(u))}},n.prototype.ngOnInit=function(){var n=this;c.getInfo().then((function(l){n.typeAppareil=l.platform})),this.sessionService.recupererDonneesSessionDeAPI().subscribe((function(l){n.listeSessions=l})),this.activatedRoute.paramMap.subscribe((function(l){n.session=n.listeSessions.filter((function(n){return n.id.toString()===l.get("id").toString()}))[0],null==n.session.infosSession&&(n.session.infosSession=new i,n.session.infosSession.listeNotes=[],n.session.infosSession.listePhotos=[]),localStorage.getItem("notes_session_".concat(n.session.id.toString()))&&JSON.parse(localStorage.getItem("notes_session_".concat(n.session.id.toString()))).forEach((function(l){return n.session.infosSession.listeNotes.push(l)})),localStorage.getItem("photos_session_".concat(n.session.id.toString()))&&JSON.parse(localStorage.getItem("photos_session_".concat(n.session.id.toString()))).forEach((function(l){return n.session.infosSession.listePhotos.push(l)}))}))},n}(),b=function(){return function(){}}(),h=t("pMnS"),g=t("oBZk"),f=t("ZZ/e"),p=t("Ip0R"),m=t("gIcY"),d=t("ZYCi"),k=u.rb({encapsulation:0,styles:[[""]],data:{}});function S(n){return u.Ob(0,[(n()(),u.tb(0,0,null,null,3,"ion-button",[["class","ion-margin-start"]],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.uploadPhoto()&&u),u}),g.D,g.b)),u.sb(1,49152,null,0,f.j,[u.h,u.k,u.z],null,null),(n()(),u.tb(2,0,null,0,1,"ion-icon",[["name","md-image"]],null,null,null,g.O,g.m)),u.sb(3,49152,null,0,f.B,[u.h,u.k,u.z],{name:[0,"name"]},null)],(function(n,l){n(l,3,0,"md-image")}),null)}function v(n){return u.Ob(0,[(n()(),u.tb(0,0,null,null,6,"ion-row",[],null,null,null,g.X,g.v)),u.sb(1,49152,null,0,f.ib,[u.h,u.k,u.z],null,null),(n()(),u.tb(2,0,null,0,4,"ion-col",[],null,null,null,g.K,g.i)),u.sb(3,49152,null,0,f.s,[u.h,u.k,u.z],null,null),(n()(),u.tb(4,0,null,0,2,"ion-text",[],null,null,null,g.Z,g.x)),u.sb(5,49152,null,0,f.wb,[u.h,u.k,u.z],null,null),(n()(),u.Mb(6,0,["",""]))],null,(function(n,l){n(l,6,0,l.context.$implicit)}))}function z(n){return u.Ob(0,[(n()(),u.tb(0,0,null,null,5,"ion-row",[],null,null,null,g.X,g.v)),u.sb(1,49152,null,0,f.ib,[u.h,u.k,u.z],null,null),(n()(),u.tb(2,0,null,0,3,"ion-col",[],null,null,null,g.K,g.i)),u.sb(3,49152,null,0,f.s,[u.h,u.k,u.z],null,null),(n()(),u.tb(4,0,null,0,1,"ion-img",[],null,null,null,g.P,g.n)),u.sb(5,49152,null,0,f.C,[u.h,u.k,u.z],{src:[0,"src"]},null)],(function(n,l){n(l,5,0,u.xb(1,"data:image/png;base64, ",l.context.$implicit,""))}),null)}function y(n){return u.Ob(0,[(n()(),u.tb(0,0,null,null,10,"ion-header",[],null,null,null,g.N,g.l)),u.sb(1,49152,null,0,f.A,[u.h,u.k,u.z],null,null),(n()(),u.tb(2,0,null,0,8,"ion-toolbar",[],null,null,null,g.db,g.B)),u.sb(3,49152,null,0,f.Bb,[u.h,u.k,u.z],null,null),(n()(),u.tb(4,0,null,0,3,"ion-buttons",[["class","ion-margin-start"],["slot","start"]],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.goback()&&u),u}),g.E,g.c)),u.sb(5,49152,null,0,f.k,[u.h,u.k,u.z],null,null),(n()(),u.tb(6,0,null,0,1,"ion-icon",[["icon","arrow-back"]],null,null,null,g.O,g.m)),u.sb(7,49152,null,0,f.B,[u.h,u.k,u.z],{icon:[0,"icon"]},null),(n()(),u.tb(8,0,null,0,2,"ion-title",[],null,null,null,g.bb,g.z)),u.sb(9,49152,null,0,f.zb,[u.h,u.k,u.z],null,null),(n()(),u.Mb(-1,0,["Ajouter une note"])),(n()(),u.tb(11,0,null,null,46,"ion-content",[],null,null,null,g.L,g.j)),u.sb(12,49152,null,0,f.t,[u.h,u.k,u.z],null,null),(n()(),u.tb(13,0,null,0,3,"ion-row",[["class","ion-justify-content-center"]],null,null,null,g.X,g.v)),u.sb(14,49152,null,0,f.ib,[u.h,u.k,u.z],null,null),(n()(),u.tb(15,0,null,0,1,"h1",[],null,null,null,null,null)),(n()(),u.Mb(16,null,["",""])),(n()(),u.tb(17,0,null,0,7,"ion-row",[["class","ion-justify-content-center"]],null,null,null,g.X,g.v)),u.sb(18,49152,null,0,f.ib,[u.h,u.k,u.z],null,null),(n()(),u.tb(19,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.takePhoto()&&u),u}),g.D,g.b)),u.sb(20,49152,null,0,f.j,[u.h,u.k,u.z],null,null),(n()(),u.tb(21,0,null,0,1,"ion-icon",[["name","md-camera"]],null,null,null,g.O,g.m)),u.sb(22,49152,null,0,f.B,[u.h,u.k,u.z],{name:[0,"name"]},null),(n()(),u.ib(16777216,null,0,1,null,S)),u.sb(24,16384,null,0,p.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(n()(),u.tb(25,0,null,0,5,"ion-row",[["class","ion-margin-start ion-justify-content-center"]],null,null,null,g.X,g.v)),u.sb(26,49152,null,0,f.ib,[u.h,u.k,u.z],null,null),(n()(),u.tb(27,0,null,0,3,"ion-textarea",[["color","primary"],["id","corps_note"],["maxlength","300"],["placeholder","Notes sur cette session..."],["style","border: solid; max-width: 50%; min-height: 100px"]],null,[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,t){var o=!0;return"ionBlur"===l&&(o=!1!==u.Fb(n,30)._handleBlurEvent(t.target)&&o),"ionChange"===l&&(o=!1!==u.Fb(n,30)._handleInputEvent(t.target)&&o),o}),g.ab,g.y)),u.Jb(5120,null,m.b,(function(n){return[n]}),[f.Kb]),u.sb(29,49152,null,0,f.xb,[u.h,u.k,u.z],{color:[0,"color"],maxlength:[1,"maxlength"],placeholder:[2,"placeholder"]},null),u.sb(30,16384,null,0,f.Kb,[u.k],null,null),(n()(),u.tb(31,0,null,0,4,"ion-row",[["class","ion-margin-top ion-justify-content-center"]],null,null,null,g.X,g.v)),u.sb(32,49152,null,0,f.ib,[u.h,u.k,u.z],null,null),(n()(),u.tb(33,0,null,0,2,"ion-button",[],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.enregistrerNote()&&u),u}),g.D,g.b)),u.sb(34,49152,null,0,f.j,[u.h,u.k,u.z],null,null),(n()(),u.Mb(-1,0,["Enregistrer"])),(n()(),u.tb(36,0,null,0,10,"ion-row",[],null,null,null,g.X,g.v)),u.sb(37,49152,null,0,f.ib,[u.h,u.k,u.z],null,null),(n()(),u.tb(38,0,null,0,8,"ion-card",[],null,null,null,g.J,g.d)),u.sb(39,49152,null,0,f.l,[u.h,u.k,u.z],null,null),(n()(),u.tb(40,0,null,0,2,"ion-card-subtitle",[],null,null,null,g.H,g.g)),u.sb(41,49152,null,0,f.o,[u.h,u.k,u.z],null,null),(n()(),u.Mb(-1,0,["Commentaires enregistr\xe9s :"])),(n()(),u.tb(43,0,null,0,3,"ion-card-content",[],null,null,null,g.F,g.e)),u.sb(44,49152,null,0,f.m,[u.h,u.k,u.z],null,null),(n()(),u.ib(16777216,null,0,1,null,v)),u.sb(46,278528,null,0,p.i,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null),(n()(),u.tb(47,0,null,0,10,"ion-row",[],null,null,null,g.X,g.v)),u.sb(48,49152,null,0,f.ib,[u.h,u.k,u.z],null,null),(n()(),u.tb(49,0,null,0,8,"ion-card",[],null,null,null,g.J,g.d)),u.sb(50,49152,null,0,f.l,[u.h,u.k,u.z],null,null),(n()(),u.tb(51,0,null,0,2,"ion-card-subtitle",[],null,null,null,g.H,g.g)),u.sb(52,49152,null,0,f.o,[u.h,u.k,u.z],null,null),(n()(),u.Mb(-1,0,["Photos enregistr\xe9es :"])),(n()(),u.tb(54,0,null,0,3,"ion-card-content",[],null,null,null,g.F,g.e)),u.sb(55,49152,null,0,f.m,[u.h,u.k,u.z],null,null),(n()(),u.ib(16777216,null,0,1,null,z)),u.sb(57,278528,null,0,p.i,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var t=l.component;n(l,7,0,"arrow-back"),n(l,22,0,"md-camera"),n(l,24,0,"web"!==t.typeAppareil),n(l,29,0,"primary","300","Notes sur cette session..."),n(l,46,0,null==t.session?null:null==t.session.infosSession?null:t.session.infosSession.listeNotes),n(l,57,0,null==t.session?null:null==t.session.infosSession?null:t.session.infosSession.listePhotos)}),(function(n,l){n(l,16,0,l.component.session.title)}))}function O(n){return u.Ob(0,[(n()(),u.tb(0,0,null,null,1,"app-notes",[],null,null,null,y,k)),u.sb(1,114688,null,0,a,[s.a,d.a,p.g],null,null)],(function(n,l){n(l,1,0)}),null)}var w=u.pb("app-notes",a,O,{},{},[]);t.d(l,"NotesPageModuleNgFactory",(function(){return _}));var _=u.qb(b,[],(function(n){return u.Cb([u.Db(512,u.j,u.bb,[[8,[h.a,w]],[3,u.j],u.x]),u.Db(4608,p.l,p.k,[u.u,[2,p.s]]),u.Db(4608,m.d,m.d,[]),u.Db(4608,f.a,f.a,[u.z,u.g]),u.Db(4608,f.Fb,f.Fb,[f.a,u.j,u.q]),u.Db(4608,f.Ib,f.Ib,[f.a,u.j,u.q]),u.Db(1073742336,p.b,p.b,[]),u.Db(1073742336,m.c,m.c,[]),u.Db(1073742336,m.a,m.a,[]),u.Db(1073742336,f.Db,f.Db,[]),u.Db(1073742336,d.p,d.p,[[2,d.u],[2,d.m]]),u.Db(1073742336,b,b,[]),u.Db(1024,d.k,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);