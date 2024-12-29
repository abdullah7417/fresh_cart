import './polyfills.server.mjs';
import{B as C,J as P,M as R,Ra as M,S as h,T as X,V as v,X as o,ba as z,da as W,hc as Z,j as L,l as c,ma as y,n as I,r as V,ra as f,s as F,t as q,z as J}from"./chunk-3ISFVPN5.mjs";import{a as _}from"./chunk-VVCT4QZE.mjs";var d=class{},Q=(()=>{class n extends d{getTranslation(e){return L({})}static \u0275fac=(()=>{let e;return function(s){return(e||(e=y(n)))(s||n)}})();static \u0275prov=h({token:n,factory:n.\u0275fac})}return n})(),m=class{},Y=(()=>{class n{handle(e){return e.key}static \u0275fac=function(t){return new(t||n)};static \u0275prov=h({token:n,factory:n.\u0275fac})}return n})();function E(n,r){if(n===r)return!0;if(n===null||r===null)return!1;if(n!==n&&r!==r)return!0;let e=typeof n,t=typeof r,s,i,a;if(e==t&&e=="object")if(Array.isArray(n)){if(!Array.isArray(r))return!1;if((s=n.length)==r.length){for(i=0;i<s;i++)if(!E(n[i],r[i]))return!1;return!0}}else{if(Array.isArray(r))return!1;a=Object.create(null);for(i in n){if(!E(n[i],r[i]))return!1;a[i]=!0}for(i in r)if(!(i in a)&&typeof r[i]<"u")return!1;return!0}return!1}function u(n){return typeof n<"u"&&n!==null}function D(n){return S(n)&&!H(n)}function S(n){return typeof n=="object"}function H(n){return Array.isArray(n)}function $(n){return typeof n=="string"}function ne(n){return typeof n=="function"}function N(n,r){let e=Object.assign({},n);return S(n)?(S(n)&&S(r)&&Object.keys(r).forEach(t=>{D(r[t])?t in n?e[t]=N(n[t],r[t]):Object.assign(e,{[t]:r[t]}):Object.assign(e,{[t]:r[t]})}),e):N({},r)}function K(n,r){let e=r.split(".");r="";do r+=e.shift(),u(n)&&u(n[r])&&(D(n[r])||H(n[r])||!e.length)?(n=n[r],r=""):e.length?r+=".":n=void 0;while(e.length);return n}function se(n,r,e){let t=r.split("."),s=n;for(let i=0;i<t.length;i++){let a=t[i];i===t.length-1?s[a]=e:((!s[a]||!D(s[a]))&&(s[a]={}),s=s[a])}}var g=class{},k=(()=>{class n extends g{templateMatcher=/{{\s?([^{}\s]*)\s?}}/g;interpolate(e,t){if($(e))return this.interpolateString(e,t);if(ne(e))return this.interpolateFunction(e,t)}interpolateFunction(e,t){return e(t)}interpolateString(e,t){return t?e.replace(this.templateMatcher,(s,i)=>{let a=K(t,i);return u(a)?a:s}):e}static \u0275fac=(()=>{let e;return function(s){return(e||(e=y(n)))(s||n)}})();static \u0275prov=h({token:n,factory:n.\u0275fac})}return n})(),p=class{},ee=(()=>{class n extends p{compile(e,t){return e}compileTranslations(e,t){return e}static \u0275fac=(()=>{let e;return function(s){return(e||(e=y(n)))(s||n)}})();static \u0275prov=h({token:n,factory:n.\u0275fac})}return n})(),j=class{defaultLang;currentLang=this.defaultLang;translations={};langs=[];onTranslationChange=new f;onLangChange=new f;onDefaultLangChange=new f},x=new v("ISOALTE_TRANSLATE_SERVICE"),O=new v("USE_DEFAULT_LANG"),U=new v("DEFAULT_LANGUAGE"),B=new v("USE_EXTEND"),b=n=>c(n)?n:L(n),G=(()=>{class n{store;currentLoader;compiler;parser;missingTranslationHandler;useDefaultLang;isolate;extend;loadingTranslations;pending=!1;_onTranslationChange=new f;_onLangChange=new f;_onDefaultLangChange=new f;_defaultLang;_currentLang;_langs=[];_translations={};_translationRequests={};lastUseLanguage=null;get onTranslationChange(){return this.isolate?this._onTranslationChange:this.store.onTranslationChange}get onLangChange(){return this.isolate?this._onLangChange:this.store.onLangChange}get onDefaultLangChange(){return this.isolate?this._onDefaultLangChange:this.store.onDefaultLangChange}get defaultLang(){return this.isolate?this._defaultLang:this.store.defaultLang}set defaultLang(e){this.isolate?this._defaultLang=e:this.store.defaultLang=e}get currentLang(){return this.isolate?this._currentLang:this.store.currentLang}set currentLang(e){this.isolate?this._currentLang=e:this.store.currentLang=e}get langs(){return this.isolate?this._langs:this.store.langs}set langs(e){this.isolate?this._langs=e:this.store.langs=e}get translations(){return this.isolate?this._translations:this.store.translations}set translations(e){this.isolate?this._translations=e:this.store.translations=e}constructor(e,t,s,i,a,A=!0,l=!1,T=!1,w){this.store=e,this.currentLoader=t,this.compiler=s,this.parser=i,this.missingTranslationHandler=a,this.useDefaultLang=A,this.isolate=l,this.extend=T,w&&this.setDefaultLang(w)}setDefaultLang(e){if(e===this.defaultLang)return;let t=this.retrieveTranslations(e);typeof t<"u"?(this.defaultLang==null&&(this.defaultLang=e),t.pipe(C(1)).subscribe(()=>{this.changeDefaultLang(e)})):this.changeDefaultLang(e)}getDefaultLang(){return this.defaultLang}use(e){if(this.lastUseLanguage=e,e===this.currentLang)return L(this.translations[e]);this.currentLang||(this.currentLang=e);let t=this.retrieveTranslations(e);return c(t)?(t.pipe(C(1)).subscribe(()=>{this.changeLang(e)}),t):(this.changeLang(e),L(this.translations[e]))}changeLang(e){e===this.lastUseLanguage&&(this.currentLang=e,this.onLangChange.emit({lang:e,translations:this.translations[e]}),this.defaultLang==null&&this.changeDefaultLang(e))}retrieveTranslations(e){if(typeof this.translations[e]>"u"||this.extend)return this._translationRequests[e]=this._translationRequests[e]||this.loadAndCompileTranslations(e),this._translationRequests[e]}getTranslation(e){return this.loadAndCompileTranslations(e)}loadAndCompileTranslations(e){this.pending=!0;let t=this.currentLoader.getTranslation(e).pipe(P(1),C(1));return this.loadingTranslations=t.pipe(I(s=>this.compiler.compileTranslations(s,e)),P(1),C(1)),this.loadingTranslations.subscribe({next:s=>{this.translations[e]=this.extend&&this.translations[e]?_(_({},s),this.translations[e]):s,this.updateLangs(),this.pending=!1},error:s=>{this.pending=!1}}),t}setTranslation(e,t,s=!1){let i=this.compiler.compileTranslations(t,e);(s||this.extend)&&this.translations[e]?this.translations[e]=N(this.translations[e],i):this.translations[e]=i,this.updateLangs(),this.onTranslationChange.emit({lang:e,translations:this.translations[e]})}getLangs(){return this.langs}addLangs(e){e.forEach(t=>{this.langs.indexOf(t)===-1&&this.langs.push(t)})}updateLangs(){this.addLangs(Object.keys(this.translations))}getParsedResultForKey(e,t,s){let i;if(e&&(i=this.runInterpolation(K(e,t),s)),i===void 0&&this.defaultLang!=null&&this.defaultLang!==this.currentLang&&this.useDefaultLang&&(i=this.runInterpolation(K(this.translations[this.defaultLang],t),s)),i===void 0){let a={key:t,translateService:this};typeof s<"u"&&(a.interpolateParams=s),i=this.missingTranslationHandler.handle(a)}return i!==void 0?i:t}runInterpolation(e,t){if(H(e))return e.map(s=>this.runInterpolation(s,t));if(D(e)){let s={};for(let i in e)s[i]=this.runInterpolation(e[i],t);return s}else return this.parser.interpolate(e,t)}getParsedResult(e,t,s){if(t instanceof Array){let i={},a=!1;for(let l of t)i[l]=this.getParsedResultForKey(e,l,s),a=a||c(i[l]);if(!a)return i;let A=t.map(l=>b(i[l]));return q(A).pipe(I(l=>{let T={};return l.forEach((w,te)=>{T[t[te]]=w}),T}))}return this.getParsedResultForKey(e,t,s)}get(e,t){if(!u(e)||!e.length)throw new Error('Parameter "key" is required and cannot be empty');return this.pending?this.loadingTranslations.pipe(J(s=>b(this.getParsedResult(s,e,t)))):b(this.getParsedResult(this.translations[this.currentLang],e,t))}getStreamOnTranslationChange(e,t){if(!u(e)||!e.length)throw new Error('Parameter "key" is required and cannot be empty');return V(F(()=>this.get(e,t)),this.onTranslationChange.pipe(R(s=>{let i=this.getParsedResult(s.translations,e,t);return b(i)})))}stream(e,t){if(!u(e)||!e.length)throw new Error('Parameter "key" required');return V(F(()=>this.get(e,t)),this.onLangChange.pipe(R(s=>{let i=this.getParsedResult(s.translations,e,t);return b(i)})))}instant(e,t){if(!u(e)||e.length===0)throw new Error('Parameter "key" is required and cannot be empty');let s=this.getParsedResult(this.translations[this.currentLang],e,t);return c(s)?Array.isArray(e)?e.reduce((i,a)=>(i[a]=a,i),{}):e:s}set(e,t,s=this.currentLang){se(this.translations[s],e,$(t)?this.compiler.compile(t,s):this.compiler.compileTranslations(t,s)),this.updateLangs(),this.onTranslationChange.emit({lang:s,translations:this.translations[s]})}changeDefaultLang(e){this.defaultLang=e,this.onDefaultLangChange.emit({lang:e,translations:this.translations[e]})}reloadLang(e){return this.resetLang(e),this.loadAndCompileTranslations(e)}resetLang(e){delete this._translationRequests[e],delete this.translations[e]}getBrowserLang(){if(typeof window>"u"||!window.navigator)return;let e=this.getBrowserCultureLang();return e?e.split(/[-_]/)[0]:void 0}getBrowserCultureLang(){if(!(typeof window>"u"||typeof window.navigator>"u"))return window.navigator.languages?window.navigator.languages[0]:window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage}static \u0275fac=function(t){return new(t||n)(o(j),o(d),o(p),o(g),o(m),o(O),o(x),o(B),o(U))};static \u0275prov=h({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ce=(()=>{class n{translate;_ref;value="";lastKey=null;lastParams=[];onTranslationChange;onLangChange;onDefaultLangChange;constructor(e,t){this.translate=e,this._ref=t}updateValue(e,t,s){let i=a=>{this.value=a!==void 0?a:e,this.lastKey=e,this._ref.markForCheck()};if(s){let a=this.translate.getParsedResult(s,e,t);c(a)?a.subscribe(i):i(a)}this.translate.get(e,t).subscribe(i)}transform(e,...t){if(!e||!e.length)return e;if(E(e,this.lastKey)&&E(t,this.lastParams))return this.value;let s;if(u(t[0])&&t.length)if($(t[0])&&t[0].length){let i=t[0].replace(/(')?([a-zA-Z0-9_]+)(')?(\s)?:/g,'"$2":').replace(/:(\s)?(')(.*?)(')/g,':"$3"');try{s=JSON.parse(i)}catch(a){throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${t[0]}`)}}else D(t[0])&&(s=t[0]);return this.lastKey=e,this.lastParams=t,this.updateValue(e,s),this._dispose(),this.onTranslationChange||(this.onTranslationChange=this.translate.onTranslationChange.subscribe(i=>{this.lastKey&&i.lang===this.translate.currentLang&&(this.lastKey=null,this.updateValue(e,s,i.translations))})),this.onLangChange||(this.onLangChange=this.translate.onLangChange.subscribe(i=>{this.lastKey&&(this.lastKey=null,this.updateValue(e,s,i.translations))})),this.onDefaultLangChange||(this.onDefaultLangChange=this.translate.onDefaultLangChange.subscribe(()=>{this.lastKey&&(this.lastKey=null,this.updateValue(e,s))})),this.value}_dispose(){typeof this.onTranslationChange<"u"&&(this.onTranslationChange.unsubscribe(),this.onTranslationChange=void 0),typeof this.onLangChange<"u"&&(this.onLangChange.unsubscribe(),this.onLangChange=void 0),typeof this.onDefaultLangChange<"u"&&(this.onDefaultLangChange.unsubscribe(),this.onDefaultLangChange=void 0)}ngOnDestroy(){this._dispose()}static \u0275fac=function(t){return new(t||n)(M(G,16),M(Z,16))};static \u0275pipe=W({name:"translate",type:n,pure:!1,standalone:!0});static \u0275prov=h({token:n,factory:n.\u0275fac})}return n})();var ve=(()=>{class n{static forRoot(e={}){return{ngModule:n,providers:[e.loader||{provide:d,useClass:Q},e.compiler||{provide:p,useClass:ee},e.parser||{provide:g,useClass:k},e.missingTranslationHandler||{provide:m,useClass:Y},j,{provide:x,useValue:e.isolate},{provide:O,useValue:e.useDefaultLang},{provide:B,useValue:e.extend},{provide:U,useValue:e.defaultLanguage},G]}}static forChild(e={}){return{ngModule:n,providers:[e.loader||{provide:d,useClass:Q},e.compiler||{provide:p,useClass:ee},e.parser||{provide:g,useClass:k},e.missingTranslationHandler||{provide:m,useClass:Y},{provide:x,useValue:e.isolate},{provide:O,useValue:e.useDefaultLang},{provide:B,useValue:e.extend},{provide:U,useValue:e.defaultLanguage},G]}}static \u0275fac=function(t){return new(t||n)};static \u0275mod=z({type:n});static \u0275inj=X({})}return n})();export{d as a,G as b,Ce as c,ve as d};
