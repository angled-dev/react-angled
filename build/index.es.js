import e,{useState as o,useRef as t,useEffect as n,createContext as r,createElement as a}from"react";import i,{keyframes as s,css as c}from"styled-components";const l=()=>e.createElement("div",{role:"heading"},"My Component"),p={primary:"#333",secondary:"#808080",confirm:"rgba(80, 220, 100, 0.9)",cancel:"rgba(255, 40, 0, 0.8)",whitegrey:"#ececec",darkgrey:"#9c9c9c",overlay:"rgba(236,236,236, 0.8)",blue:"rgb(0, 128, 255)"},d={primary:p.secondary,secondary:p.primary},m=s`
  0% {
      background-position: 90%;
  }
  20% {
    background-position: 80%;
}
  100% {
      background-position: 0%;
  }
`,g=(s`
  0% {
      background-position: 0%;
  }
  20% {
    background-position: 20%;
}
  100% {
      background-position: 90%;
  }
`,i.div.withConfig({displayName:"Title",componentId:"sc-1bqi4vp"})`
  font-family: "Asap";
  text-align: center;
  font-size: 2.75em;
  height: 1.2em;
  min-height: 1.2em;
`),x=i.div.withConfig({displayName:"Body",componentId:"sc-1n6529d"})`
  margin: 0 3% 0 3%;
  min-height: 30%;
`,u=i.div.withConfig({displayName:"Buttons",componentId:"sc-3l7aih"})`
  height: 30%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 2em;
`;const b=c`
  @keyframes fadeIn {
    0% {
      background-position: 0%;
      -webkit-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0);
      -moz-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0);
      box-shadow: 0px 0px 40px 8px rgba(0, 0, 0, 0);
    }
    20% {
      background-position: 20%;
      -webkit-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.02);
      -moz-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.02);
      box-shadow: 0px 0px 40px 8px rgba(0, 0, 0, 0.02);
    }
    100% {
      background-position: 100%;
      -webkit-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
      -moz-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
      box-shadow: 0px 0px 40px 8px rgba(0, 0, 0, 0.1);
    }
  }

  @keyframes fadeOut {
    0% {
      background-position: 100%;
    }
    20% {
      color: ${p.whitegrey};
      background-position: 80%;
    }
    75% {
      -webkit-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
      -moz-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
      box-shadow: 0px 0px 40px 8px rgba(0, 0, 0, 0.1);
    }
    100% {
      color: ${p.primary};
      background-position: 0%;
      -webkit-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0);
      -moz-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0);
      box-shadow: 0px 0px 40px 8px rgba(0, 0, 0, 0);
    }
  }
`,h=i((function({className:o,modalClassName:t,style:n,title:r,body:a,buttons:i,onAnimationEnd:s,passRef:c,visible:l,customHTML:p}){return e.createElement("div",{className:o+" "+t,style:n,onAnimationEnd:s,ref:c},l&&!p&&e.createElement(g,null,r),l&&!p&&e.createElement(x,null,a),l&&!p&&e.createElement(u,null,i),l&&p)})).withConfig({displayName:"Modal",componentId:"sc-1idweqk"})`
  ${({customKeyframes:e})=>e||b};
  transition: height 0.25s, width 0.25s;

  margin: 15vh auto;
  width: ${({width:e})=>e};
  height: ${({height:e})=>e};

  padding: 1.4em 3.3em;
  border-radius: 6px;

  -webkit-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 40px 8px rgba(0, 0, 0, 0.1);

  color: ${p.whitegrey};
  background: none;
  background-image: linear-gradient(
    45deg,
    transparent 50%,
    ${p.primary} 50%
  );
  background-position: 100%;
  background-size: 264%;

  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-content: stretch;
  position: relative;
  overflow-y: hidden;
`,v=e.createContext({}),f=i(({visible:r,setProps:a,hide:i,callback:s,className:c,modalClassName:l,overlayClassName:p,height:d,width:m,position:g,title:x,body:u,buttons:b,duration:v,customHTML:f})=>{const[y,w]=o(!1),k=t(null);n(()=>{r?w(!0):v&&C()},[r]);const C=()=>{w(!1),s&&s(),a({})};return y?e.createElement("div",{className:c+" "+p,onClick:e=>{k&&k.current&&k.current.contains(e.target)||i()}},e.createElement(h,{style:{animation:""+(v?"fadeOut "+1*v+"ms linear":r?"fadeIn 1s ease-out":"fadeOut .4s ease-out")},title:x,body:u,buttons:b,onAnimationEnd:v?void 0:()=>{r||C()},passRef:k,height:d,width:m,position:g,modalClassName:l,customHTML:f,visible:r})):e.createElement(e.Fragment,null)}).withConfig({displayName:"Alert",componentId:"sc-sg0yid"})`
  position: fixed;
  z-index: 999;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
  background-color: ${p.overlay};
`;function y({children:t}){const[n,r]=o(!1),[a,i]=o({});var s;const c=()=>{r(!1)};return e.createElement(v.Provider,{value:{show:e=>{s&&clearTimeout(s),i(e),r(!0),e.duration&&(s=setTimeout(()=>c(),e.duration))},hide:c}},e.createElement(f,Object.assign({},Object.assign(Object.assign({},a),{visible:n,setProps:i,hide:c}))),t)}f.defaultProps={visible:!1,height:"350px",width:"500px"};const w=i(({className:o,children:t,onClick:n})=>e.createElement("button",{className:o,onClick:n},t)).withConfig({displayName:"Button",componentId:"sc-jkmrhb"})`
  font-family: "Asap";
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: ${({reverseColor:e,variant:o})=>e?p.whitegrey:p[o]};

  animation: 0.6s linear 0s 1 ${m};

  border: 0.1em solid
    ${({reverseColor:e,variant:o})=>e?p.whitegrey:p[o]};
  border-radius: 24px;

  width: fit-content;
  padding: 1.4em 3.3em;
  cursor: pointer;

  transition: background 600ms ease-in-out, color 600ms ease-in-out;

  background: none;
  background-image: linear-gradient(
    45deg,
    transparent 50%,
    ${({reverseColor:e,variant:o})=>e?p.whitegrey:p[o]}
      50%
  );
  background-position: 25%;
  background-size: 400%;

  &:hover:not(:active) {
    color: ${({reverseColor:e})=>e?p.primary:p.whitegrey};
    background-position: 90%;
  }

  &:focus {
    outline: none;
  }

  &:active {
    transition: background 100ms ease-in-out;
    background-position: 25%;
  }
`;w.defaultProps={reverseColor:!1,variant:"primary"};var k={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},C=r&&r(k),N=function(){return(N=Object.assign||function(e){for(var o,t=1,n=arguments.length;t<n;t++)for(var r in o=arguments[t])Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);return e}).apply(this,arguments)},z=function(e,o){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&o.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)o.indexOf(n[r])<0&&(t[n[r]]=e[n[r]])}return t};function E(e){return e&&e.map((function(e,o){return a(e.tag,N({key:o},e.attr),E(e.child))}))}function O(e){return function(o){return a($,N({attr:N({},e.attr)},o),E(e.child))}}function $(e){var o=function(o){var t,n=e.size||o.size||"1em";o.className&&(t=o.className),e.className&&(t=(t?t+" ":"")+e.className);var r=e.attr,i=e.title,s=z(e,["attr","title"]);return a("svg",N({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},o.attr,r,s,{className:t,style:N({color:e.color||o.color},o.style,e.style),height:n,width:n,xmlns:"http://www.w3.org/2000/svg"}),i&&a("title",null,i),e.children)};return void 0!==C?a(C.Consumer,null,(function(e){return o(e)})):o(k)}const j=({icon:o,size:t,onClick:n,variant:r,color:a,hover:i})=>e.createElement(I,{onClick:n,variant:r,color:a,hover:i},e.createElement(o,{size:t})),I=i(({className:o,onClick:t,children:n})=>e.createElement("div",{className:o,onClick:t},n)).withConfig({displayName:"_IconButton",componentId:"sc-1qrr2qi"})`
  display: flex;
  align-items: center;
  color: ${({variant:e,color:o})=>o||p[e]};
  transition: color 250ms ease-in-out;

  &:hover:not(:active) {
    color: ${({variant:e,hover:o})=>o||d[e]};
  }

  &:active {
    color: black;
  }
`;j.defaultProps={icon:function(e){return O({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"}}]})(e)},size:25,variant:"primary"};export{v as AlertContext,y as AlertProvider,w as Button,l as Example,j as IconButton};
//# sourceMappingURL=index.es.js.map
