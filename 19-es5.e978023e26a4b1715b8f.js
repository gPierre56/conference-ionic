(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{EI1s:function(n,l,u){"use strict";u.r(l);var t=u("CcnG"),e=u("fkq2"),r=function(){function n(n,l){this.presentateurService=n,this.router=l}return n.prototype.naviguerDetailsPresentateurs=function(n){this.router.navigate(["details-presentateur",n])},n.prototype.ngOnInit=function(){var n=this;this.presentateurService.recupererDonneesPresentateur().subscribe((function(l){n.listePresentateurs=l}))},n}(),i=function(){return function(){}}(),o=u("pMnS"),b=u("oBZk"),s=u("ZZ/e"),a=u("Ip0R"),c=u("ZYCi"),p=t.rb({encapsulation:0,styles:[[""]],data:{}});function f(n){return t.Nb(0,[(n()(),t.tb(0,0,null,null,6,"ion-row",[],null,null,null,b.U,b.v)),t.sb(1,49152,null,0,s.hb,[t.h,t.k,t.z],null,null),(n()(),t.tb(2,0,null,0,4,"ion-button",[["class","ion-margin-start ion-margin-top primary"],["style","width: 80%;"]],null,[[null,"click"]],(function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.naviguerDetailsPresentateurs(n.context.$implicit.id.toString())&&t),t}),b.A,b.b)),t.sb(3,49152,null,0,s.i,[t.h,t.k,t.z],null,null),(n()(),t.Lb(4,0,[""," "])),(n()(),t.tb(5,0,null,0,1,"ion-icon",[["color","light"],["name","send"],["slot","end"]],null,null,null,b.L,b.m)),t.sb(6,49152,null,0,s.A,[t.h,t.k,t.z],{color:[0,"color"],name:[1,"name"]},null)],(function(n,l){n(l,6,0,"light","send")}),(function(n,l){n(l,4,0,l.context.$implicit.name)}))}function h(n){return t.Nb(0,[(n()(),t.tb(0,0,null,null,10,"ion-header",[],null,null,null,b.K,b.l)),t.sb(1,49152,null,0,s.z,[t.h,t.k,t.z],null,null),(n()(),t.tb(2,0,null,0,8,"ion-toolbar",[],null,null,null,b.X,b.y)),t.sb(3,49152,null,0,s.Ab,[t.h,t.k,t.z],null,null),(n()(),t.tb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,b.B,b.c)),t.sb(5,49152,null,0,s.j,[t.h,t.k,t.z],null,null),(n()(),t.tb(6,0,null,0,1,"ion-menu-button",[],null,null,null,b.R,b.t)),t.sb(7,49152,null,0,s.P,[t.h,t.k,t.z],null,null),(n()(),t.tb(8,0,null,0,2,"ion-title",[],null,null,null,b.W,b.x)),t.sb(9,49152,null,0,s.yb,[t.h,t.k,t.z],null,null),(n()(),t.Lb(-1,0,["Pr\xe9sentateurs"])),(n()(),t.tb(11,0,null,null,3,"ion-content",[],null,null,null,b.I,b.j)),t.sb(12,49152,null,0,s.s,[t.h,t.k,t.z],null,null),(n()(),t.ib(16777216,null,0,1,null,f)),t.sb(14,278528,null,0,a.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,14,0,l.component.listePresentateurs)}),null)}function k(n){return t.Nb(0,[(n()(),t.tb(0,0,null,null,1,"app-presentateur",[],null,null,null,h,p)),t.sb(1,114688,null,0,r,[e.a,c.m],null,null)],(function(n,l){n(l,1,0)}),null)}var m=t.pb("app-presentateur",r,k,{},{},[]),D=u("gIcY");u.d(l,"PresentateurPageModuleNgFactory",(function(){return g}));var g=t.qb(i,[],(function(n){return t.Cb([t.Db(512,t.j,t.bb,[[8,[o.a,m]],[3,t.j],t.x]),t.Db(4608,a.l,a.k,[t.u,[2,a.s]]),t.Db(4608,D.c,D.c,[]),t.Db(4608,s.a,s.a,[t.z,t.g]),t.Db(4608,s.Eb,s.Eb,[s.a,t.j,t.q]),t.Db(4608,s.Hb,s.Hb,[s.a,t.j,t.q]),t.Db(1073742336,a.b,a.b,[]),t.Db(1073742336,D.b,D.b,[]),t.Db(1073742336,D.a,D.a,[]),t.Db(1073742336,s.Cb,s.Cb,[]),t.Db(1073742336,c.p,c.p,[[2,c.u],[2,c.m]]),t.Db(1073742336,i,i,[]),t.Db(1024,c.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);