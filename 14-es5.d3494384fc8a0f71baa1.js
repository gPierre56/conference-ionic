(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{Esmy:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=u("fkq2"),i=u("IfdK"),s=function(){function l(l,n,u,t){this.presentateurService=l,this.sessionService=n,this.activatedRoute=u,this.location=t,this.listeSessions=[]}return l.prototype.backClicked=function(){this.location.back()},l.prototype.ngOnInit=function(){var l=this;this.presentateurService.recupererDonneesPresentateur().subscribe((function(n){l.listePresentateurs=n})),this.activatedRoute.paramMap.subscribe((function(n){l.presentateur=l.listePresentateurs.filter((function(l){return l.id.toString()===n.get("id")}))[0]})),this.sessionService.recupererDonneesSessionDeAPI().subscribe((function(n){l.listeSessions=n})),this.sessions=this.listeSessions.filter((function(n){return n.speakers&&n.speakers.toString()===l.presentateur.id.toString()}))},l}(),o=function(){return function(){}}(),r=u("pMnS"),b=u("ZZ/e"),c=u("Ip0R"),a=u("ZYCi"),p=u("oBZk"),h=t.rb({encapsulation:0,styles:[[""]],data:{}});function k(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Fb(l,1).onClick(u)&&e),"click"===n&&(e=!1!==t.Fb(l,2).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e}),null,null)),t.sb(1,737280,null,0,b.Ib,[c.h,b.Fb,t.k,a.m,[2,a.n]],null,null),t.sb(2,671744,null,0,a.o,[a.m,a.a,c.h],{routerLink:[0,"routerLink"]},null),(l()(),t.Lb(3,null,["",""]))],(function(l,n){l(n,1,0),l(n,2,0,t.xb(1,"/details-session/",n.context.$implicit.id,""))}),(function(l,n){l(n,0,0,t.Fb(n,2).target,t.Fb(n,2).href),l(n,3,0,n.context.$implicit.title)}))}function f(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,3,"ion-row",[],null,null,null,p.U,p.v)),t.sb(1,49152,null,0,b.hb,[t.h,t.k,t.z],null,null),(l()(),t.ib(16777216,null,0,1,null,k)),t.sb(3,278528,null,0,c.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,3,0,n.component.sessions)}),null)}function d(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,10,"ion-header",[],null,null,null,p.K,p.l)),t.sb(1,49152,null,0,b.z,[t.h,t.k,t.z],null,null),(l()(),t.tb(2,0,null,0,8,"ion-toolbar",[],null,null,null,p.X,p.y)),t.sb(3,49152,null,0,b.Ab,[t.h,t.k,t.z],null,null),(l()(),t.tb(4,0,null,0,3,"ion-buttons",[["class","ion-margin-start"],["slot","start"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.backClicked()&&t),t}),p.B,p.c)),t.sb(5,49152,null,0,b.j,[t.h,t.k,t.z],null,null),(l()(),t.tb(6,0,null,0,1,"ion-icon",[["icon","arrow-back"]],null,null,null,p.L,p.m)),t.sb(7,49152,null,0,b.A,[t.h,t.k,t.z],{icon:[0,"icon"]},null),(l()(),t.tb(8,0,null,0,2,"ion-title",[["slot","end"]],null,null,null,p.W,p.x)),t.sb(9,49152,null,0,b.yb,[t.h,t.k,t.z],null,null),(l()(),t.Lb(-1,0,[" Description du pr\xe9sentateur "])),(l()(),t.tb(11,0,null,null,25,"ion-content",[],null,null,null,p.I,p.j)),t.sb(12,49152,null,0,b.s,[t.h,t.k,t.z],null,null),(l()(),t.tb(13,0,null,0,16,"ion-card",[],null,null,null,p.G,p.d)),t.sb(14,49152,null,0,b.k,[t.h,t.k,t.z],null,null),(l()(),t.tb(15,0,null,0,2,"ion-card-title",[["class","ion-margin-start"]],null,null,null,p.F,p.h)),t.sb(16,49152,null,0,b.o,[t.h,t.k,t.z],null,null),(l()(),t.Lb(17,0,["",""])),(l()(),t.tb(18,0,null,0,3,"ion-card-subtitle",[],null,null,null,p.E,p.g)),t.sb(19,49152,null,0,b.n,[t.h,t.k,t.z],null,null),(l()(),t.tb(20,0,null,0,1,"ion-img",[],null,null,null,p.M,p.n)),t.sb(21,49152,null,0,b.B,[t.h,t.k,t.z],{src:[0,"src"]},null),(l()(),t.tb(22,0,null,0,7,"ion-card-content",[],null,null,null,p.C,p.e)),t.sb(23,49152,null,0,b.l,[t.h,t.k,t.z],null,null),(l()(),t.tb(24,0,null,0,2,"ion-row",[["style","font-weight: bold;"]],null,null,null,p.U,p.v)),t.sb(25,49152,null,0,b.hb,[t.h,t.k,t.z],null,null),(l()(),t.Lb(-1,0,["Biographie :"])),(l()(),t.tb(27,0,null,0,2,"ion-row",[["class","ion-margin-top"]],null,null,null,p.U,p.v)),t.sb(28,49152,null,0,b.hb,[t.h,t.k,t.z],null,null),(l()(),t.Lb(29,0,["",""])),(l()(),t.tb(30,0,null,0,6,"ion-card",[],null,null,null,p.G,p.d)),t.sb(31,49152,null,0,b.k,[t.h,t.k,t.z],null,null),(l()(),t.tb(32,0,null,0,2,"ion-row",[],null,null,null,p.U,p.v)),t.sb(33,49152,null,0,b.hb,[t.h,t.k,t.z],null,null),(l()(),t.Lb(-1,0,["Ses pr\xe9sentations :"])),(l()(),t.ib(16777216,null,0,1,null,f)),t.sb(36,16384,null,0,c.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,7,0,"arrow-back"),l(n,21,0,t.xb(1,"https://devfest2018.gdgnantes.com/",u.presentateur.photoUrl,"")),l(n,36,0,u.sessions)}),(function(l,n){var u=n.component;l(n,17,0,u.presentateur.name),l(n,29,0,u.presentateur.bio)}))}function g(l){return t.Nb(0,[(l()(),t.tb(0,0,null,null,1,"app-details-presentateurs",[],null,null,null,d,h)),t.sb(1,114688,null,0,s,[e.a,i.a,a.a,c.g],null,null)],(function(l,n){l(n,1,0)}),null)}var m=t.pb("app-details-presentateurs",s,g,{},{},[]),v=u("gIcY");u.d(n,"DetailsPresentateursPageModuleNgFactory",(function(){return z}));var z=t.qb(o,[],(function(l){return t.Cb([t.Db(512,t.j,t.bb,[[8,[r.a,m]],[3,t.j],t.x]),t.Db(4608,c.l,c.k,[t.u,[2,c.s]]),t.Db(4608,v.c,v.c,[]),t.Db(4608,b.a,b.a,[t.z,t.g]),t.Db(4608,b.Eb,b.Eb,[b.a,t.j,t.q]),t.Db(4608,b.Hb,b.Hb,[b.a,t.j,t.q]),t.Db(1073742336,c.b,c.b,[]),t.Db(1073742336,v.b,v.b,[]),t.Db(1073742336,v.a,v.a,[]),t.Db(1073742336,b.Cb,b.Cb,[]),t.Db(1073742336,a.p,a.p,[[2,a.u],[2,a.m]]),t.Db(1073742336,o,o,[]),t.Db(1024,a.k,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);