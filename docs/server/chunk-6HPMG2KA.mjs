import './polyfills.server.mjs';
import{a as o}from"./chunk-PQSTYRC2.mjs";import{r as a}from"./chunk-FQA2SOH3.mjs";import{S as n,Y as s,da as i}from"./chunk-3ISFVPN5.mjs";var d=(()=>{class t{constructor(){this._HttpClient=s(a)}setProduct(){return this._HttpClient.get(`${o.BaseUrl}/api/v1/products`)}setSpecificProduct(r){return this._HttpClient.get(`${o.BaseUrl}/api/v1/products/${r}`)}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275prov=n({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var P=(()=>{class t{transform(r,e){return r.split(" ",e).join("")}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275pipe=i({name:"tittle",type:t,pure:!0,standalone:!0})}}return t})();var C=(()=>{class t{transform(r,e){return r.filter(c=>c.title.toLowerCase().includes(e.toLowerCase()))}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275pipe=i({name:"search",type:t,pure:!0,standalone:!0})}}return t})();export{d as a,P as b,C as c};