(self.webpackChunkrick_srick=self.webpackChunkrick_srick||[]).push([[197],{3204:function(e){"use strict";const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,i=new RegExp("^"+s.source),l=new RegExp(s.source+n.source,"gu"),c=new RegExp("\\d+"+n.source,"gu"),o=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),o=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?o(e):s(e);return e!==s(e)&&(e=((e,r,n)=>{let s=!1,i=!1,l=!1;for(let c=0;c<e.length;c++){const o=e[c];s&&t.test(o)?(e=e.slice(0,c)+"-"+e.slice(c),s=!1,l=i,i=!0,c++):i&&l&&a.test(o)?(e=e.slice(0,c-1)+"-"+e.slice(c-1),l=i,i=!1,s=!0):(s=r(o)===o&&n(o)!==o,l=i,i=n(o)===o&&r(o)!==o)}return e})(e,s,o)),e=e.replace(i,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,s):s(e),n.pascalCase&&(e=o(e.charAt(0))+e.slice(1)),((e,t)=>(l.lastIndex=0,c.lastIndex=0,e.replace(l,((e,a)=>t(a))).replace(c,(e=>t(e)))))(e,o)};e.exports=o,e.exports.default=o},8032:function(e,t,a){"use strict";a.d(t,{L:function(){return g},M:function(){return k},P:function(){return E},S:function(){return H},_:function(){return l},a:function(){return i},b:function(){return u},g:function(){return d},h:function(){return c}});var r=a(7294),n=(a(3204),a(5697)),s=a.n(n);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(n[a]=e[a]);return n}const c=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function o(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function u(e,t,a,r,n){return void 0===n&&(n={}),i({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,s,l,c){const o={};s&&(o.backgroundColor=s,"fixed"===a?(o.width=r,o.height=n,o.backgroundColor=s,o.position="relative"):("constrained"===a||"fullWidth"===a)&&(o.position="absolute",o.top=0,o.left=0,o.bottom=0,o.right=0)),l&&(o.objectFit=l),c&&(o.objectPosition=c);const u=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},o)});return u}const m=["children"],p=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=l(e,m);return r.createElement(r.Fragment,null,r.createElement(p,i({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:n,alt:s="",shouldLoad:c}=e,o=l(e,f);return r.createElement("img",i({},o,{decoding:"async",loading:n,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,alt:s}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,s=l(e,h);const c=s.sizes||(null==t?void 0:t.sizes),o=r.createElement(y,i({},s,t,{sizes:c,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return r.createElement("source",{key:t+"-"+s+"-"+a,type:s,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:c})})),o):o};var w;y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},b.displayName="Picture",b.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const v=["fallback"],E=function(e){let{fallback:t}=e,a=l(e,v);return t?r.createElement(b,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},a))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(w=b.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const k=function(e){return r.createElement(r.Fragment,null,r.createElement(b,i({},e)),r.createElement("noscript",null,r.createElement(b,i({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=b.propTypes;const L=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],x=["style","className"],S=e=>e.replace(/\n/g,""),C=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),i=3;i<r;i++)n[i-3]=arguments[i];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},N={image:s().object.isRequired,alt:C},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],I=["style","className"],j=new Set;let R,O;const _=function(e){let{as:t="div",image:n,style:s,backgroundColor:u,className:d,class:m,onStartLoad:p,onLoad:g,onError:f}=e,h=l(e,T);const{width:y,height:b,layout:w}=n,v=o(y,b,w),{style:E,className:k}=v,L=l(v,I),x=(0,r.useRef)(),S=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(d=m);const C=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(w,y,b);return(0,r.useEffect)((()=>{R||(R=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return O=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=x.current.querySelector("[data-gatsby-image-ssr]");if(e&&c())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void j.add(S);if(O&&j.has(S))return;let t,r;return R.then((e=>{let{renderImageToString:a,swapPlaceholderImage:l}=e;x.current&&(x.current.innerHTML=a(i({isLoading:!0,isLoaded:j.has(S),image:n},h)),j.has(S)||(t=requestAnimationFrame((()=>{x.current&&(r=l(x.current,S,j,s,p,g,f))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{j.has(S)&&O&&(x.current.innerHTML=O(i({isLoading:j.has(S),isLoaded:j.has(S),image:n},h)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,r.createElement)(t,i({},L,{style:i({},E,s,{backgroundColor:u}),className:k+(d?" "+d:""),ref:x,dangerouslySetInnerHTML:{__html:C},suppressHydrationWarning:!0}))},A=(0,r.memo)((function(e){return e.image?(0,r.createElement)(_,e):null}));A.propTypes=N,A.displayName="GatsbyImage";const q=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function z(e){return function(t){let{src:a,__imageData:n,__error:s}=t,c=l(t,q);return s&&console.warn(s),n?r.createElement(e,i({image:n},c)):(console.warn("Image not loaded",a),null)}}const M=z((function(e){let{as:t="div",className:a,class:n,style:s,image:c,loading:m="lazy",imgClassName:p,imgStyle:f,backgroundColor:h,objectFit:y,objectPosition:b}=e,w=l(e,L);if(!c)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),f=i({objectFit:y,objectPosition:b,backgroundColor:h},f);const{width:v,height:C,layout:N,images:T,placeholder:I,backgroundColor:j}=c,R=o(v,C,N),{style:O,className:_}=R,A=l(R,x),q={fallback:void 0,sources:[]};return T.fallback&&(q.fallback=i({},T.fallback,{srcSet:T.fallback.srcSet?S(T.fallback.srcSet):void 0})),T.sources&&(q.sources=T.sources.map((e=>i({},e,{srcSet:S(e.srcSet)})))),r.createElement(t,i({},A,{style:i({},O,s,{backgroundColor:h}),className:_+(a?" "+a:"")}),r.createElement(g,{layout:N,width:v,height:C},r.createElement(E,i({},d(I,!1,N,v,C,j,y,b))),r.createElement(k,i({"data-gatsby-image-ssr":"",className:p},w,u("eager"===m,!1,q,m,f)))))})),P=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},W=new Set(["fixed","fullWidth","constrained"]),F={src:s().string.isRequired,alt:C,width:P,height:P,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!W.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};M.displayName="StaticImage",M.propTypes=F;const H=z(A);H.displayName="StaticImage",H.propTypes=F},8678:function(e,t,a){"use strict";var r=a(7294),n=a(1883),s=a(8032),i=a(2789),l=a.n(i);const c=[{url:"/",label:"Home"},{url:"/about",label:"About"},{url:"/blog",label:"Blog"}],o=[{url:"https://github.com/RickSrick",label:"GitHub"}];t.Z=e=>{let{pageTitle:t,children:i}=e;return r.createElement(r.Fragment,null,r.createElement("div",{className:"nbar"},r.createElement("div",{className:"d-flex justify-content-center",style:{marginBottom:"0.3rem"}},r.createElement(n.Link,{to:"/"},r.createElement(s.S,{alt:"logo",src:"../images/icon.png",width:32,height:32,__imageData:a(9602)}))),r.createElement("ul",{className:"nav justify-content-center"},c.map((e=>r.createElement("li",{className:"nav-item"},r.createElement(n.Link,{activeClassName:"active",to:e.url,className:"nav-link"},e.label)))),o.map((e=>r.createElement("li",{className:"nav-item"},r.createElement("a",{className:"nav-link nav-link-text",href:e.url,key:e.label,rel:"noreferrer"},e.label,r.createElement(l(),null))))))),r.createElement("div",{className:"my-container"},r.createElement("main",null,i)),r.createElement("footer",{className:"footer mt-auto text-muted py-5 ",Style:"background-color:#f7f2f0;"},r.createElement("div",{className:"d-flex justify-content-center"},r.createElement("p",{className:"mb-1"},"Riccardo Modolo (RickSrick) © Bootstrap, 2023"))))}},9357:function(e,t,a){"use strict";var r=a(7294),n=a(1883);t.Z=e=>{let{title:t}=e;const a=(0,n.useStaticQuery)("3159585216");return r.createElement("title",null,t," | ",a.site.siteMetadata.title)}},2789:function(e,t,a){var r=a(7294);function n(e){return r.createElement("svg",e,[r.createElement("path",{d:"M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z",key:0}),r.createElement("path",{d:"M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z",key:1})])}n.defaultProps={width:"16",height:"16",fill:"currentColor",className:"bi bi-link-45deg",viewBox:"0 0 16 16"},e.exports=n,n.default=n},9602:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#282838","images":{"fallback":{"src":"/me/static/3f2fc7728f361c1370194caacbc48cbf/914ee/icon.png","srcSet":"/me/static/3f2fc7728f361c1370194caacbc48cbf/22867/icon.png 8w,\\n/me/static/3f2fc7728f361c1370194caacbc48cbf/fbc98/icon.png 16w,\\n/me/static/3f2fc7728f361c1370194caacbc48cbf/914ee/icon.png 32w,\\n/me/static/3f2fc7728f361c1370194caacbc48cbf/1c9ce/icon.png 64w","sizes":"(min-width: 32px) 32px, 100vw"},"sources":[{"srcSet":"/me/static/3f2fc7728f361c1370194caacbc48cbf/5d252/icon.webp 8w,\\n/me/static/3f2fc7728f361c1370194caacbc48cbf/e789a/icon.webp 16w,\\n/me/static/3f2fc7728f361c1370194caacbc48cbf/ef6ff/icon.webp 32w,\\n/me/static/3f2fc7728f361c1370194caacbc48cbf/8257c/icon.webp 64w","type":"image/webp","sizes":"(min-width: 32px) 32px, 100vw"}]},"width":32,"height":32}')}}]);
//# sourceMappingURL=68d272213b899b8d29809b12e725b50561e24b00-a17e61f6b7c1e6febcc4.js.map