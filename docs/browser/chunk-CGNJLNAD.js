import{a as y,c as g,d as x,e as O,f as l,h as w,i as _,j as E,m as F}from"./chunk-5KM7MKCY.js";import{k as C,s as S,z as a}from"./chunk-3LHV7TNE.js";import{$ as p,Hb as n,Ob as b,Ra as f,W as d,aa as m,da as u,ib as h,qb as o,rb as r,sb as s,zb as v}from"./chunk-CKFUAD2Q.js";var N=(()=>{class t{constructor(e){this._HttpClient=e}checkOut(e,i){return this._HttpClient.post(`${a.BaseUrl}/api/v1/orders/checkout-session/${e}?url=${a.serverUrl}`,{shippingAddress:i})}static{this.\u0275fac=function(i){return new(i||t)(p(C))}}static{this.\u0275prov=d({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var U=(()=>{class t{constructor(){this._ActivatedRoute=m(S),this._OrderService=m(N),this.cartId="",this.orders=new O({details:new l(null),phone:new l(null),city:new l(null)})}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:e=>{this.cartId=e.get("id")}})}ordersSubmit(){console.log(this.orders.value),this._OrderService.checkOut(this.cartId,this.orders.value).subscribe({next:e=>{e.status=="success"&&window.open(e.session.url,"_self")},error:e=>{console.log(e)}})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=u({type:t,selectors:[["app-orders"]],standalone:!0,features:[b],decls:18,vars:1,consts:[[1,"bg-main-light","shadow","my-3","p-4","rounded-4","w-75","mx-auto"],[1,"text-center"],[3,"ngSubmit","formGroup"],[1,"my-1"],["for","details"],["id","details","formControlName","details",1,"form-control"],["for","phone"],["id","phone","type","tel","formControlName","phone",1,"form-control"],["for","city"],["id","city","type","text","formControlName","city",1,"form-control"],["type","submit",1,"btn-main"]],template:function(i,c){i&1&&(o(0,"section",0)(1,"h1",1),n(2,"Check Out"),r(),o(3,"form",2),v("ngSubmit",function(){return c.ordersSubmit()}),o(4,"div",3)(5,"label",4),n(6,"Details"),r(),s(7,"textarea",5),r(),o(8,"div",3)(9,"label",6),n(10,"phone"),r(),s(11,"input",7),r(),o(12,"div",3)(13,"label",8),n(14,"city"),r(),s(15,"input",9),r(),o(16,"button",10),n(17,"Check Out"),r()()()),i&2&&(f(3),h("formGroup",c.orders))},dependencies:[F,w,y,g,x,_,E]})}}return t})();export{U as OrdersComponent};