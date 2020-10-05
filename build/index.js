"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("styled-components");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=o(e),r=o(t);const n={primary:"#333",secondary:"#808080",confirm:"rgba(80, 220, 100, 0.9)",cancel:"rgba(255, 40, 0, 0.8)",whitegrey:"#ececec",darkgrey:"#9c9c9c",overlay:"rgba(236,236,236, 0.8)",blue:"rgb(0, 128, 255)"},i={primary:n.secondary,secondary:n.primary},s=t.keyframes`
  0% {
      background-position: 90%;
  }
  20% {
    background-position: 80%;
}
  100% {
      background-position: 0%;
  }
`,l=(t.keyframes`
  0% {
      background-position: 0%;
  }
  20% {
    background-position: 20%;
}
  100% {
      background-position: 90%;
  }
`,r.default.div.withConfig({displayName:"Title",componentId:"sc-1bqi4vp"})`
  font-family: "Asap";
  text-align: center;
  font-size: 2.75em;
  height: 1.2em;
  min-height: 1.2em;
`),c=r.default.div.withConfig({displayName:"Body",componentId:"sc-1n6529d"})`
  margin: 0 3% 0 3%;
  min-height: 30%;
`,d=r.default.div.withConfig({displayName:"Buttons",componentId:"sc-3l7aih"})`
  height: 30%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 2em;
`;const p=t.css`
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
      color: ${n.whitegrey};
      background-position: 80%;
    }
    75% {
      -webkit-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
      -moz-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
      box-shadow: 0px 0px 40px 8px rgba(0, 0, 0, 0.1);
    }
    100% {
      color: ${n.primary};
      background-position: 0%;
      -webkit-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0);
      -moz-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0);
      box-shadow: 0px 0px 40px 8px rgba(0, 0, 0, 0);
    }
  }
`,u=r.default((function({className:e,modalClassName:t,style:o,title:r,body:n,buttons:i,onAnimationEnd:s,passRef:p,visible:u,customHTML:m}){return a.default.createElement("div",{className:e+" "+t,style:o,onAnimationEnd:s,ref:p},u&&!m&&a.default.createElement(l,null,r),u&&!m&&a.default.createElement(c,null,n),u&&!m&&a.default.createElement(d,null,i),u&&m)})).withConfig({displayName:"Modal",componentId:"sc-1idweqk"})`
  ${({customKeyframes:e})=>e||p};
  transition: height 0.25s, width 0.25s;

  margin: 15vh auto;
  width: ${({width:e})=>e};
  height: ${({height:e})=>e};

  padding: 1.4em 3.3em;
  border-radius: 6px;

  -webkit-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 40px 8px rgba(0, 0, 0, 0.1);

  color: ${n.whitegrey};
  background: none;
  background-image: linear-gradient(
    45deg,
    transparent 50%,
    ${({color:e})=>e||n.primary} 50%
  );
  background-position: 100%;
  background-size: 264%;

  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-content: stretch;
  position: relative;
  overflow-y: hidden;
`,m=a.default.createContext({}),x=r.default(({visible:t,setProps:o,hide:r,callback:n,className:i,modalClassName:s,overlayClassName:l,height:c,width:d,position:p,title:m,body:x,buttons:g,duration:b,customHTML:h,color:f})=>{const[v,y]=e.useState(!1),w=e.useRef(null);e.useEffect(()=>{t?y(!0):b&&k()},[t]);const k=()=>{y(!1),n&&n(),o({})};return v?a.default.createElement("div",{className:i+" "+l,onClick:e=>{w&&w.current&&w.current.contains(e.target)||r()}},a.default.createElement(u,{style:{animation:""+(b?"fadeOut "+1*b+"ms linear":t?"fadeIn 1s ease-out":"fadeOut .4s ease-out")},title:m,body:x,buttons:g,onAnimationEnd:b?void 0:()=>{t||k()},passRef:w,height:c,width:d,position:p,modalClassName:s,customHTML:h,visible:t,color:f})):a.default.createElement(a.default.Fragment,null)}).withConfig({displayName:"Alert",componentId:"sc-sg0yid"})`
  position: fixed;
  z-index: 999;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
  background-color: ${({overlayColor:e})=>e||n.overlay};
`;x.defaultProps={visible:!1,height:"350px",width:"500px"};const g=r.default(({className:e,children:t,onClick:o})=>a.default.createElement("button",{className:e,onClick:o},t)).withConfig({displayName:"Button",componentId:"sc-jkmrhb"})`
  font-family: "Asap";
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: ${({reverseColor:e,variant:t})=>e?n.whitegrey:n[t]};

  animation: 0.6s linear 0s 1 ${s};

  border: 0.1em solid
    ${({reverseColor:e,variant:t})=>e?n.whitegrey:n[t]};
  border-radius: 24px;

  width: fit-content;
  padding: 1.4em 3.3em;
  cursor: pointer;

  transition: background 600ms ease-in-out, color 600ms ease-in-out;

  background: none;
  background-image: linear-gradient(
    45deg,
    transparent 50%,
    ${({reverseColor:e,variant:t})=>e?n.whitegrey:n[t]}
      50%
  );
  background-position: 25%;
  background-size: 400%;

  &:hover:not(:active) {
    color: ${({reverseColor:e})=>e?n.primary:n.whitegrey};
    background-position: 90%;
  }

  &:focus {
    outline: none;
  }

  &:active {
    transition: background 100ms ease-in-out;
    background-position: 25%;
  }
`;g.defaultProps={reverseColor:!1,variant:"primary"};var b={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},h=e.createContext&&e.createContext(b),f=function(){return(f=Object.assign||function(e){for(var t,o=1,a=arguments.length;o<a;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},v=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(o[a[r]]=e[a[r]])}return o};function y(t){return t&&t.map((function(t,o){return e.createElement(t.tag,f({key:o},t.attr),y(t.child))}))}function w(t){return function(o){return e.createElement(k,f({attr:f({},t.attr)},o),y(t.child))}}function k(t){var o=function(o){var a,r=t.size||o.size||"1em";o.className&&(a=o.className),t.className&&(a=(a?a+" ":"")+t.className);var n=t.attr,i=t.title,s=v(t,["attr","title"]);return e.createElement("svg",f({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},o.attr,n,s,{className:a,style:f({color:t.color||o.color},o.style,t.style),height:r,width:r,xmlns:"http://www.w3.org/2000/svg"}),i&&e.createElement("title",null,i),t.children)};return void 0!==h?e.createElement(h.Consumer,null,(function(e){return o(e)})):o(b)}const C=({icon:e,size:t,onClick:o,variant:r,color:n,hover:i})=>a.default.createElement(N,{onClick:o,variant:r,color:n,hover:i},a.default.createElement(e,{size:t})),N=r.default(({className:e,onClick:t,children:o})=>a.default.createElement("div",{className:e,onClick:t},o)).withConfig({displayName:"_IconButton",componentId:"sc-1qrr2qi"})`
  display: flex;
  align-items: center;
  color: ${({variant:e,color:t})=>t||n[e]};
  transition: color 250ms ease-in-out;

  &:hover:not(:active) {
    color: ${({variant:e,hover:t})=>t||i[e]};
  }

  &:active {
    color: black;
  }
`;C.defaultProps={icon:function(e){return w({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"}}]})(e)},size:25,variant:"primary"},exports.AlertContext=m,exports.AlertProvider=function({children:t}){const[o,r]=e.useState(!1),[n,i]=e.useState({});var s;const l=()=>{r(!1)};return a.default.createElement(m.Provider,{value:{show:e=>{s&&clearTimeout(s),i(e),r(!0),e.duration&&(s=setTimeout(()=>l(),e.duration))},hide:l}},a.default.createElement(x,Object.assign({},Object.assign(Object.assign({},n),{visible:o,setProps:i,hide:l}))),t)},exports.Button=g,exports.Example=()=>a.default.createElement("div",{role:"heading"},"My Component"),exports.IconButton=C;
//# sourceMappingURL=index.js.map
