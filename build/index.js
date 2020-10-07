"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("styled-components");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=a(e),i=a(t);const o={primary:"#333",secondary:"#808080",confirm:"rgba(80, 220, 100, 0.9)",cancel:"rgba(255, 40, 0, 0.8)",whitegrey:"#ececec",darkgrey:"#9c9c9c",overlay:"rgba(236,236,236, 0.8)",blue:"rgb(0, 128, 255)"},r={primary:o.secondary,secondary:o.primary},s=t.keyframes`
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
`,({callback:t,children:a,visible:i,setVisible:o})=>{const[r,s]=e.useState(!1),[l]=e.useState((()=>2*Math.round(Math.sqrt(Math.pow(2*window.innerHeight,2)+Math.pow(2*window.innerHeight,2)))));return i||!i&&r?n.default.createElement(c,{style:{animation:""+(i?"fadeIn 0.75s linear":"fadeOut 0.75s linear")},onAnimationEnd:()=>{!i&&t&&(o(!1),t()),s(i)},size:l},i&&r&&a):n.default.createElement(n.default.Fragment,null)}),c=i.default.div.withConfig({displayName:"_Courtain",componentId:"sc-1wqxbz9"})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 97;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @keyframes fadeIn {
    0% {
      background-position: 0%;
    }
    20% {
      background-position: 20%;
    }
    100% {
      background-position: 100%;
    }
  }

  @keyframes fadeOut {
    100% {
      background-position: 0%;
    }
    80% {
      background-position: 20%;
    }
    0% {
      background-position: 100%;
    }
  }

  > {
    margin: 32px 25vw 16px 25vw;

    @media screen and (max-width: 992px) {
      margin: 32px 15vw 16px 15vw;
    }

    @media screen and (max-width: 600px) {
      margin: 32px 5vw 16px 5vw;
    }
  }

  background: none;
  background-image: linear-gradient(
    45deg,
    transparent 50%,
    ${o.primary} 50%
  );
  background-position: 100%;
  background-size: ${({size:e})=>e?`${e}px ${e}px`:"264%"};
`,d=i.default.div.withConfig({displayName:"Title",componentId:"sc-1bqi4vp"})`
  font-family: "Asap";
  text-align: center;
  font-size: 2.75em;
  height: 1.2em;
  min-height: 1.2em;
`,u=i.default.div.withConfig({displayName:"Body",componentId:"sc-1n6529d"})`
  margin: 0 3% 0 3%;
  min-height: 30%;
`,p=i.default.div.withConfig({displayName:"Buttons",componentId:"sc-3l7aih"})`
  height: 30%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 2em;
`;const m=t.css`
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
      color: ${o.whitegrey};
      background-position: 80%;
    }
    75% {
      -webkit-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
      -moz-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
      box-shadow: 0px 0px 40px 8px rgba(0, 0, 0, 0.1);
    }
    100% {
      color: ${o.primary};
      background-position: 0%;
      -webkit-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0);
      -moz-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0);
      box-shadow: 0px 0px 40px 8px rgba(0, 0, 0, 0);
    }
  }
`,g=i.default((function({className:e,modalClassName:t,style:a,title:i,body:o,buttons:r,onAnimationEnd:s,passRef:l,visible:c,customHTML:m}){return n.default.createElement("div",{className:e+" "+t,style:a,onAnimationEnd:s,ref:l},c&&!m&&n.default.createElement(d,null,i),c&&!m&&n.default.createElement(u,null,o),c&&!m&&n.default.createElement(p,null,r),c&&m)})).withConfig({displayName:"Modal",componentId:"sc-1idweqk"})`
  ${({customKeyframes:e})=>e||m};
  transition: height 0.25s, width 0.25s;

  margin: 15vh auto;
  width: ${({width:e})=>e};
  height: ${({height:e})=>e};

  padding: 1.4em 3.3em;
  border-radius: 6px;

  -webkit-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 40px 8px rgba(0, 0, 0, 0.1);

  color: ${o.whitegrey};
  background: none;
  background-image: linear-gradient(
    45deg,
    transparent 50%,
    ${({color:e})=>e||o.primary} 50%
  );
  background-position: 100%;
  background-size: 264%;

  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-content: stretch;
  position: relative;
  overflow-y: hidden;
`,b=i.default((({visible:t,setProps:a,hide:i,callback:o,className:r,modalClassName:s,overlayClassName:l,height:c,width:d,position:u,title:p,body:m,buttons:b,duration:h,customHTML:f,color:x})=>{const[y,v]=e.useState(!1),w=e.useRef(null);e.useEffect((()=>{t?v(!0):h&&k()}),[t]);const k=()=>{v(!1),o&&o(),a({})};return y?n.default.createElement("div",{className:r+" "+l,onClick:e=>{w&&w.current&&w.current.contains(e.target)||i()}},n.default.createElement(g,{style:{animation:""+(h?"fadeOut "+1*h+"ms linear":t?"fadeIn 1s ease-out":"fadeOut .4s ease-out")},title:p,body:m,buttons:b,onAnimationEnd:h?void 0:()=>{t||k()},passRef:w,height:c,width:d,position:u,modalClassName:s,customHTML:f,visible:t,color:x})):n.default.createElement(n.default.Fragment,null)})).withConfig({displayName:"Alert",componentId:"sc-sg0yid"})`
  position: fixed;
  z-index: 999;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
  background-color: ${({overlayColor:e})=>e||o.overlay};
`;b.defaultProps={visible:!1,height:"350px",width:"500px"};const h=n.default.createContext({}),f=i.default((({className:e,children:t,onClick:a})=>n.default.createElement("button",{className:e,onClick:a},t))).withConfig({displayName:"Button",componentId:"sc-jkmrhb"})`
  font-family: "Asap";
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: ${({reverseColor:e,variant:t})=>e?o.whitegrey:o[t]};

  animation: 0.6s linear 0s 1 ${s};

  border: 0.1em solid
    ${({reverseColor:e,variant:t})=>e?o.whitegrey:o[t]};
  border-radius: 24px;

  width: fit-content;
  padding: 1.4em 3.3em;
  cursor: pointer;

  transition: background 600ms ease-in-out, color 600ms ease-in-out;

  background: none;
  background-image: linear-gradient(
    45deg,
    transparent 50%,
    ${({reverseColor:e,variant:t})=>e?o.whitegrey:o[t]}
      50%
  );
  background-position: 25%;
  background-size: 400%;

  &:hover:not(:active) {
    color: ${({reverseColor:e})=>e?o.primary:o.whitegrey};
    background-position: 90%;
  }

  &:focus {
    outline: none;
  }

  &:active {
    transition: background 100ms ease-in-out;
    background-position: 25%;
  }
`;f.defaultProps={reverseColor:!1,variant:"primary"};var x={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},y=e.createContext&&e.createContext(x),v=function(){return(v=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var i in t=arguments[a])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},w=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&(a[n[i]]=e[n[i]])}return a};function k(t){return t&&t.map((function(t,a){return e.createElement(t.tag,v({key:a},t.attr),k(t.child))}))}function C(t){return function(a){return e.createElement($,v({attr:v({},t.attr)},a),k(t.child))}}function $(t){var a=function(a){var n,i=t.size||a.size||"1em";a.className&&(n=a.className),t.className&&(n=(n?n+" ":"")+t.className);var o=t.attr,r=t.title,s=w(t,["attr","title"]);return e.createElement("svg",v({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,o,s,{className:n,style:v({color:t.color||a.color},a.style,t.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),r&&e.createElement("title",null,r),t.children)};return void 0!==y?e.createElement(y.Consumer,null,(function(e){return a(e)})):a(x)}const E=({icon:e,size:t,onClick:a,variant:i,color:o,hover:r})=>n.default.createElement(N,{onClick:a,variant:i,color:o,hover:r},n.default.createElement(e,{size:t})),N=i.default((({className:e,onClick:t,children:a})=>n.default.createElement("div",{className:e,onClick:t},a))).withConfig({displayName:"_IconButton",componentId:"sc-1qrr2qi"})`
  display: flex;
  align-items: center;
  color: ${({variant:e,color:t})=>t||o[e]};
  transition: color 250ms ease-in-out;

  &:hover:not(:active) {
    color: ${({variant:e,hover:t})=>t||r[e]};
  }

  &:active {
    color: black;
  }
`;E.defaultProps={icon:function(e){return C({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"}}]})(e)},size:25,variant:"primary"};const z=t.css`
  position: relative;
  display: inline-block;
  height: ${({height:e})=>e};

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
`,O=t.css`
  .blur {
    height: calc(100% - 16px);
    width: 100%;
    position: absolute;
    background: linear-gradient(
      90deg,
      rgba(51, 51, 51, 0) 0%,
      rgba(51, 51, 51, 0) ${({icon:e})=>e?"60%":"35%"},
      rgba(51, 51, 51, 1) ${({icon:e})=>e?"85%":"60%"},
      rgba(51, 51, 51, 1) 100%
    );
    ${({reverseColor:e,icon:t})=>e?`background: linear-gradient(\n          90deg,\n          rgba(236, 236, 236, 0) 0%,\n          rgba(236, 236, 236, 0) ${t?"60%":"35%"},\n          rgba(236, 236, 236, 1) ${t?"85%":"60%"},\n          rgba(236, 236, 236, 1) 100%)`:`background: linear-gradient(\n          90deg,\n          rgba(51, 51, 51, 0) 0 %,\n          rgba(51, 51, 51, 0) ${t?"60%":"35%"},\n          rgba(51, 51, 51, 1) ${t?"85%":"60%"},\n          rgba(51, 51, 51, 1) 100 %)`};
    top: 8px;
    right: 0;
    border-radius: 8px;
    pointer-events: none;
    visibility: visible;
    opacity: 1;
    transition: visibility 600ms linear, width 400ms ease-in-out;
    transition-delay: 200ms;
  }

  input:focus ~ .blur {
    visibility: hidden;
    width: 0;
    transition: visibility 300ms linear, width 900ms ease-in-out;
  }

  input:-webkit-autofill ~ .blur {
    right: 0.1em;
    background: linear-gradient(
      90deg,
      rgba(232, 240, 254, 0) 0%,
      rgba(232, 240, 254, 0) 35%,
      rgba(232, 240, 254, 1) 60%,
      rgba(232, 240, 254, 1) 100%
    );
  }
`,I=t.css`
  .underline {
    position: absolute;
    height: 1px;
    width: ${({icon:e,placeholder:t})=>e?"calc(90% - 1.6em)":t?"calc(65% - 1.6em)":"calc(100% - 1.6em)"};
    bottom: 8px;
    left: 0.8em;
    z-index: 1;

    transition: background 600ms ease-in-out, width 600ms ease-in-out;

    background: ${({reverseColor:e})=>e?o.whitegrey:o.primary};
    background-image: linear-gradient(
      45deg,
      transparent 50%,
      ${({reverseColor:e})=>e?o.primary:o.whitegrey}
        50%
    );
    background-position: 100%;
    background-size: 400%;
  }

  input:focus + .underline {
    background-position: 25%;
    width: calc(100% - 1.6em);
  }

  input:-webkit-autofill ~ .underline {
    background: ${o.primary}
    background-image: linear-gradient(45deg, transparent 50%, #e8f0fe 50%);
  }
`,j=t.css`
  > input {
    font-family: "Asap";
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    color: ${({reverseColor:e})=>e?o.primary:o.whitegrey};

    border: 0.1em solid
      ${({reverseColor:e})=>e?o.whitegrey:o.primary};
    border-radius: 8px;

    padding: 0.8em 1em;
    width: ${({width:e})=>e};
    height: calc(100% - 1.8em);
    cursor: text;

    transition: background 600ms ease-in-out, color 600ms ease-in-out;

    background: none;
    background-image: linear-gradient(
      45deg,
      transparent 50%,
      ${({reverseColor:e})=>e?o.whitegrey:o.primary}
        50%
    );
    background-position: 100%;
    background-size: 400%;

    &:focus {
      outline: none;
      color: ${({reverseColor:e})=>e?o.whitegrey:o.primary};
      background-position: 25%;
    }
  }
`,P=i.default((({className:t,value:a,placeholder:i,type:o,onChange:r,autoR:s})=>{const[l,c]=e.useState(1),d=e.useRef(null);function u(e){e.preventDefault();const t=String(e.target.value).length;c(t),r&&r(e)}return e.useEffect((()=>{d.current&&c(d.current.value.length||1)}),[]),s?n.default.createElement("span",{className:t},n.default.createElement("input",{ref:d,value:a,type:o,placeholder:i,onChange:u,style:{width:"calc("+l+" * 0.65em)"}}),n.default.createElement("div",null)):n.default.createElement("span",{className:t},n.default.createElement("input",{value:a,type:o,placeholder:i,onChange:u}),n.default.createElement("div",null))})).withConfig({displayName:"RawInput",componentId:"sc-108n3kb"})`
  ${z}
  > input {
    min-width: 2em;
    height: inherit;
    width: ${({width:e})=>e};
    font-family: "Baloo 2";
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    border: none;
    background: transparent;
    color: ${({color:e})=>e};

    &:focus {
      outline: none;
    }
  }

  > div {
    height: inherit;
    width: inherit;
    border-bottom: 0.1em solid ${o.whitegrey};
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    z-index: -20;
    transition: border-bottom 500ms linear;
  }

  input:focus + div {
    border-bottom: 0.1em solid ${o.darkgrey};
  }
`,S=i.default((({className:e,value:t,placeholder:a,type:i,onChange:o,icon:r})=>n.default.createElement("span",{className:e},n.default.createElement("input",{value:t,type:i,placeholder:a,onChange:function(e){o&&o(e)}}),n.default.createElement("span",{className:"underline"}),n.default.createElement("div",{className:"blur"}),n.default.createElement(r,null)))).withConfig({displayName:"IconInput",componentId:"sc-ark72k"})`
  ${z}
  ${O}
  ${I}
  ${j}

  > svg {
    height: inherit;
    position: absolute;
    color: white;
    right: 8px;
    z-index: 2;
    visibility: visible;
    opacity: 1;
    transition: visibility 600ms, opacity 600ms ease-in-out;
    pointer-events: none;
    transition-delay: 300ms;
  }

  input:focus ~ svg {
    visibility: hidden;
    opacity: 0;
    transition: visibility 900ms linear, opacity 250ms ease-in-out;
  }

  input:-webkit-autofill ~ svg {
    color: ${o.primary};
  }
`,M=i.default((({className:e,value:t,placeholder:a,type:i,onChange:o,label:r})=>n.default.createElement("span",{className:e},n.default.createElement("input",{value:t,type:i,placeholder:a,onChange:function(e){o&&o(e)}}),n.default.createElement("span",{className:"underline"}),n.default.createElement("div",{className:"blur"}),n.default.createElement("span",{className:"label"},r)))).withConfig({displayName:"LabelInput",componentId:"sc-1jiwvv4"})`
  ${z}
  ${O}
  ${I}
  ${j}

  .label {
    height: inherit;
    position: absolute;
    top: 0;
    right: 8px;
    z-index: 2;
    display: flex;
    align-items: center;
    color: ${({reverseColor:e})=>e?o.primary:o.whitegrey};
    font-family: "Baloo 2";
    text-transform: lowercase;
    pointer-events: none;
    visibility: visible;
    transform: scaleX(1);
    transform-origin: right;
    transition: visibility 600ms linear, transform 300ms ease-in-out;
    transition-delay: 300ms;
  }

  input:focus ~ .label {
    visibility: hidden;
    transform: scaleX(0);
    transition: visibility 900ms linear, transform 300ms ease-in-out;
  }

  input:-webkit-autofill ~ .label {
    color: ${o.primary};
  }
`,A=i.default((({className:e,value:t,placeholder:a,type:i,onChange:o})=>n.default.createElement("span",{className:e},n.default.createElement("input",{value:t,type:i,placeholder:a,onChange:function(e){o&&o(e)}}),n.default.createElement("span",{className:"underline"})))).withConfig({displayName:"Input",componentId:"sc-1fuqw4t"})`
  ${z}
  ${I}
  ${j}
`,R={value:void 0,type:"text",placeholder:void 0,width:"auto",height:"40px"};P.defaultProps=Object.assign(Object.assign({},R),{color:"black",autoR:!1}),S.defaultProps=Object.assign(Object.assign({},R),{icon:null}),M.defaultProps=Object.assign(Object.assign({},R),{label:"Label",reverseColor:!1}),A.defaultProps=R;const q=({count:e=1,duration:a=1.2,width:o,wrapper:r,height:s,circle:l,style:c,className:d,highlightColor:u,baseColor:p})=>{const m=t.keyframes`
    0% {
        background-position: -200px 0;
    }
    100% {
        background-position: calc(200px + 100%) 0;
    }
  `,g=t.css`
    background-color: ${p};
    background-image: linear-gradient(
      90deg,
      ${p},
      ${u},
      ${p}
    );
    background-size: 200px 100%;
    background-repeat: no-repeat;
    border-radius: 4px;
    display: inline-block;
    line-height: 1;
    width: 100%;
  `,b=i.default.span.withConfig({displayName:"Span",componentId:"sc-p2djh"})`
    ${g}
    animation: ${m} ${a}s ease-in-out infinite;
  `,h=[];for(let t=0;t<e;t++){var f={width:o||void 0,height:s||void 0,borderRadius:void 0};null!==f.width&&null!==f.height&&l&&(f.borderRadius="50%");var x="skeleton";d&&(x+=" "+d),h.push(n.default.createElement(b,{key:t,className:x,style:Object.assign(Object.assign({},c),f)},"‌"))}return n.default.createElement(n.default.Fragment,null,r?h.map(((e,t)=>n.default.createElement(r,{key:t,skeleton:!0},e,"‌"))):h)};q.defaultProps={baseColor:"#eee",highlightColor:"#f5f5f5"},exports.AlertContext=h,exports.AlertProvider=function({children:t}){const[a,i]=e.useState(!1),[o,r]=e.useState(!1),[s,c]=e.useState({});var d;const u=e=>{d&&clearTimeout(d),c(e)},p=()=>{i(!1),r(!1)};return n.default.createElement(h.Provider,{value:{show:e=>{u(e),i(!0),e.duration&&(d=setTimeout((()=>p()),e.duration))},hide:p,courtain:e=>{u(e||{}),r(!0),console.log(o)}}},n.default.createElement(b,Object.assign({},Object.assign(Object.assign({},s),{visible:a,setProps:c,hide:p}))),n.default.createElement(l,Object.assign({},Object.assign(Object.assign({},s),{visible:o,setVisible:r}))),t)},exports.Button=f,exports.Example=()=>n.default.createElement("div",{role:"heading"},"My Component"),exports.IconButton=E,exports.IconInput=S,exports.Input=A,exports.LabelInput=M,exports.RawInput=P,exports.Skeleton=q;
//# sourceMappingURL=index.js.map
