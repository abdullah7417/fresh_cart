import './polyfills.server.mjs';
import{a as j,b as K,c as ee}from"./chunk-6HPMG2KA.mjs";import{a as z,b as U,c as $,d as J}from"./chunk-INY7BVDY.mjs";import{c as R,d as q}from"./chunk-JBUZYEQU.mjs";import{a as Q,c as X,g as Y,l as Z}from"./chunk-WAQ6KLHP.mjs";import{a as G,b as H}from"./chunk-77LZ4CQU.mjs";import"./chunk-J4BDXTMW.mjs";import"./chunk-PQSTYRC2.mjs";import{H as W,k as V}from"./chunk-FQA2SOH3.mjs";import{$a as x,Gb as l,Hb as c,Ib as M,Jb as k,Kb as L,Lb as D,Ma as h,Nb as A,Ob as N,Pb as O,Qa as i,Tb as s,Ub as g,Vb as f,Y as d,aa as w,fb as S,hb as m,ka as b,la as F,lb as B,mb as y,nb as _,ob as v,pb as r,qb as o,rb as u,ub as E,yb as I,zb as P}from"./chunk-3ISFVPN5.mjs";import"./chunk-VVCT4QZE.mjs";var te=(t,p)=>p._id,ie=t=>["/details",t],re=()=>[1,2,3,4,5];function oe(t,p){if(t&1&&(r(0,"div"),u(1,"img",5),r(2,"h3",6),l(3),o()()),t&2){let e=P().$implicit;i(),m("src",e.image,h)("alt",e.name),i(2),c(e.name)}}function ne(t,p){t&1&&S(0,oe,4,3,"ng-template",1)}function ae(t,p){t&1&&(r(0,"span"),u(1,"i",16),o())}function le(t,p){t&1&&u(0,"i",13)}function ce(t,p){if(t&1){let e=E();r(0,"div",4)(1,"div",7)(2,"div",8),u(3,"img",9),r(4,"h3",10),l(5),o(),r(6,"h4",11),l(7),s(8,"tittle"),o(),r(9,"div",12)(10,"span"),l(11),s(12,"currency"),o(),r(13,"div"),_(14,ae,2,0,"span",null,y),S(16,le,1,0,"i",13),r(17,"span",14),l(18),o()()()(),r(19,"button",15),I("click",function(){let a=b(e).$implicit,T=P();return F(T.addCart(a.id))}),l(20),s(21,"translate"),o()()()}if(t&2){let e=p.$implicit;i(2),m("routerLink",O(17,ie,e.id)),i(),m("src",e.imageCover,h)("alt",e.title),i(2),c(e.category.nam),i(2),c(f(8,9,e.title,2)),i(4),c(f(12,12,e.price,"GBP")),i(3),v(N(19,re).slice(0,e.ratingsAverage)),i(2),B(16,e.ratingsAverage%1!==0?16:-1),i(2),c(e.ratingsAverage),i(2),M("",g(21,15,"home.Add To Cart")," ")}}var be=(()=>{class t{constructor(){this._ProductsService=d(j),this._CartService=d(G),this._ToastrService=d(H),this._CategoriesService=d(J),this.producList=x([]),this.categoryList=x([]),this.text="",this.customOptionsCat={loop:!0,mouseDrag:!0,touchDrag:!0,autoplay:!0,rtl:!0,autoplayTimeout:2e3,autoplayHoverPause:!0,pullDrag:!1,dots:!0,navSpeed:700,navText:["",""],responsive:{0:{items:1},400:{items:2},740:{items:3},940:{items:5}},nav:!1}}ngOnInit(){this._CategoriesService.setCategory().subscribe({next:e=>{this.categoryList.set(e.data),console.log(e)}}),this._ProductsService.setProduct().subscribe({next:e=>{console.log(e.data),this.producList.set(e.data)},error:e=>{console.log(e)}})}addCart(e){this._CartService.addToCart(e).subscribe({next:n=>{console.log(n),this._ToastrService.success(n.message,"Frech Cart"),this._CartService.cartNumber.set(n.numOfCartItems),console.log(this._CartService.cartNumber)},error:n=>{console.log(n)}})}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=w({type:t,selectors:[["app-product"]],standalone:!0,features:[A],decls:17,vars:14,consts:[[3,"options"],["carouselSlide",""],["type","search",1,"form-control","w-50","mx-auto","my-5",3,"ngModelChange","ngModel","placeholder"],[1,"row","g-3"],[1,"col-lg-2","col-md-4","col-sm-6","col-xs-12"],["height","280px",1,"w-100",3,"src","alt"],[1,"h6","text-main"],[1,"product","p-2"],[3,"routerLink"],[1,"w-100",3,"src","alt"],[1,"small","text-main"],[1,"h6"],[1,"d-flex","justify-content-between","align-items-center"],[1,"fa-solid","fa-star-half-stroke","rating-color"],[1,"text-muted"],[1,"btn","btn-main","w-100",3,"click"],[1,"fas","fa-star","rating-color"]],template:function(n,a){n&1&&(r(0,"section")(1,"h2"),l(2),s(3,"translate"),o(),r(4,"owl-carousel-o",0),_(5,ne,1,0,null,1,te),o()(),r(7,"section")(8,"h3"),l(9),s(10,"translate"),o(),r(11,"input",2),s(12,"translate"),D("ngModelChange",function(C){return L(a.text,C)||(a.text=C),C}),o(),r(13,"div",3),_(14,ce,22,20,"div",4,y),s(16,"search"),o()()),n&2&&(i(2),c(g(3,5,"home.Popular Categories")),i(2),m("options",a.customOptionsCat),i(),v(a.categoryList()),i(4),c(g(10,7,"home.Popular Products")),i(2),k("ngModel",a.text),m("placeholder",g(12,9,"home.Search By Name....")),i(3),v(f(16,11,a.producList(),a.text)))},dependencies:[K,V,Z,Q,X,Y,ee,W,q,R,$,U,z]})}}return t})();export{be as ProductComponent};
