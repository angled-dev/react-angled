import e,{useState as t,useRef as i,useEffect as n,createContext as o,createElement as a}from"react";import r,{keyframes as s,css as l}from"styled-components";const c=()=>e.createElement("div",{role:"heading"},"My Component"),p={primary:"#333",secondary:"#808080",confirm:"rgba(80, 220, 100, 0.9)",cancel:"rgba(255, 40, 0, 0.8)",whitegrey:"#ececec",darkgrey:"#9c9c9c",overlay:"rgba(236,236,236, 0.8)",blue:"rgb(0, 128, 255)"},d={primary:p.secondary,secondary:p.primary},g=s`
  0% {
      background-position: 90%;
  }
  20% {
    background-position: 80%;
}
  100% {
      background-position: 0%;
  }
`,u=(s`
  0% {
      background-position: 0%;
  }
  20% {
    background-position: 20%;
}
  100% {
      background-position: 90%;
  }
`,({callback:i,children:n,visible:o,setVisible:a})=>{const[r,s]=t(!1),[l]=t((()=>2*Math.round(Math.sqrt(Math.pow(2*window.innerHeight,2)+Math.pow(2*window.innerHeight,2)))));return o||!o&&r?e.createElement(m,{style:{animation:""+(o?"fadeIn 0.75s linear":"fadeOut 0.75s linear")},onAnimationEnd:()=>{!o&&i&&(a(!1),i()),s(o)},size:l},o&&r&&n):e.createElement(e.Fragment,null)}),m=r.div.withConfig({displayName:"_Courtain",componentId:"sc-1wqxbz9"})`
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
    ${p.primary} 50%
  );
  background-position: 100%;
  background-size: ${({size:e})=>e?`${e}px ${e}px`:"264%"};
`,b=r.div.withConfig({displayName:"Title",componentId:"sc-1bqi4vp"})`
  font-family: "Asap";
  text-align: center;
  font-size: 2.75em;
  height: 1.2em;
  min-height: 1.2em;
`,h=r.div.withConfig({displayName:"Body",componentId:"sc-1n6529d"})`
  margin: 0 3% 0 3%;
  min-height: 30%;
`,x=r.div.withConfig({displayName:"Buttons",componentId:"sc-3l7aih"})`
  height: 30%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 2em;
`;const v=l`
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
`,y=r((function({className:t,modalClassName:i,style:n,title:o,body:a,buttons:r,onAnimationEnd:s,passRef:l,visible:c,customHTML:p}){return e.createElement("div",{className:t+" "+i,style:n,onAnimationEnd:s,ref:l},c&&!p&&e.createElement(b,null,o),c&&!p&&e.createElement(h,null,a),c&&!p&&e.createElement(x,null,r),c&&p)})).withConfig({displayName:"Modal",componentId:"sc-1idweqk"})`
  ${({customKeyframes:e})=>e||v};
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
    ${({color:e})=>e||p.primary} 50%
  );
  background-position: 100%;
  background-size: 264%;

  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-content: stretch;
  position: relative;
  overflow-y: hidden;
`,f=r((({visible:o,setProps:a,hide:r,callback:s,className:l,modalClassName:c,overlayClassName:p,height:d,width:g,position:u,title:m,body:b,buttons:h,duration:x,customHTML:v,color:f})=>{const[w,k]=t(!1),$=i(null);n((()=>{o?k(!0):x&&C()}),[o]);const C=()=>{k(!1),s&&s(),a({})};return w?e.createElement("div",{className:l+" "+p,onClick:e=>{$&&$.current&&$.current.contains(e.target)||r()}},e.createElement(y,{style:{animation:""+(x?"fadeOut "+1*x+"ms linear":o?"fadeIn 1s ease-out":"fadeOut .4s ease-out")},title:m,body:b,buttons:h,onAnimationEnd:x?void 0:()=>{o||C()},passRef:$,height:d,width:g,position:u,modalClassName:c,customHTML:v,visible:o,color:f})):e.createElement(e.Fragment,null)})).withConfig({displayName:"Alert",componentId:"sc-sg0yid"})`
  position: fixed;
  z-index: 999;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
  background-color: ${({overlayColor:e})=>e||p.overlay};
`;function w({children:i}){const[n,o]=t(!1),[a,r]=t(!1),[s,l]=t({});var c;const p=e=>{c&&clearTimeout(c),l(e)},d=()=>{o(!1),r(!1)};return e.createElement(k.Provider,{value:{show:e=>{p(e),o(!0),e.duration&&(c=setTimeout((()=>d()),e.duration))},hide:d,courtain:e=>{p(e||{}),r(!0),console.log(a)}}},e.createElement(f,Object.assign({},Object.assign(Object.assign({},s),{visible:n,setProps:l,hide:d}))),e.createElement(u,Object.assign({},Object.assign(Object.assign({},s),{visible:a,setVisible:r}))),i)}f.defaultProps={visible:!1,height:"350px",width:"500px"};const k=e.createContext({}),$=r((({className:t,children:i,onClick:n})=>e.createElement("button",{className:t,onClick:n},i))).withConfig({displayName:"Button",componentId:"sc-jkmrhb"})`
  font-family: "Asap";
  font-weight: 700;
  font-size: 0.75rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: ${({reverseColor:e,variant:t})=>e?p.whitegrey:p[t]};

  animation: 0.6s linear 0s 1 ${g};

  border: 0.1em solid
    ${({reverseColor:e,variant:t})=>e?p.whitegrey:p[t]};
  border-radius: 24px;

  width: fit-content;
  padding: 1.4em 3.3em;
  cursor: pointer;

  transition: background 600ms ease-in-out, color 600ms ease-in-out;

  background: none;
  background-image: linear-gradient(
    45deg,
    transparent 50%,
    ${({reverseColor:e,variant:t})=>e?p.whitegrey:p[t]}
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
`;$.defaultProps={reverseColor:!1,variant:"primary"};var C={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},N=o&&o(C),E=function(){return(E=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var o in t=arguments[i])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},z=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&(i[n[o]]=e[n[o]])}return i};function O(e){return e&&e.map((function(e,t){return a(e.tag,E({key:t},e.attr),O(e.child))}))}function j(e){return function(t){return a(I,E({attr:E({},e.attr)},t),O(e.child))}}function I(e){var t=function(t){var i,n=e.size||t.size||"1em";t.className&&(i=t.className),e.className&&(i=(i?i+" ":"")+e.className);var o=e.attr,r=e.title,s=z(e,["attr","title"]);return a("svg",E({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,s,{className:i,style:E({color:e.color||t.color},t.style,e.style),height:n,width:n,xmlns:"http://www.w3.org/2000/svg"}),r&&a("title",null,r),e.children)};return void 0!==N?a(N.Consumer,null,(function(e){return t(e)})):t(C)}const P=({icon:t,size:i,onClick:n,variant:o,color:a,hover:r})=>e.createElement(M,{onClick:n,variant:o,color:a,hover:r},e.createElement(t,{size:i})),M=r((({className:t,onClick:i,children:n})=>e.createElement("div",{className:t,onClick:i},n))).withConfig({displayName:"_IconButton",componentId:"sc-1qrr2qi"})`
  display: flex;
  align-items: center;
  color: ${({variant:e,color:t})=>t||p[e]};
  transition: color 250ms ease-in-out;

  &:hover:not(:active) {
    color: ${({variant:e,hover:t})=>t||d[e]};
  }

  &:active {
    color: black;
  }
`;P.defaultProps={icon:function(e){return j({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"}}]})(e)},size:25,variant:"primary"};const A=l`
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
`,q=l`
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
`,B=l`
  .underline {
    position: absolute;
    height: 1px;
    width: ${({icon:e,placeholder:t})=>e?"calc(90% - 1.6em)":t?"calc(65% - 1.6em)":"calc(100% - 1.6em)"};
    bottom: 8px;
    left: 0.8em;
    z-index: 1;

    transition: background 600ms ease-in-out, width 600ms ease-in-out;

    background: ${({reverseColor:e})=>e?p.whitegrey:p.primary};
    background-image: linear-gradient(
      45deg,
      transparent 50%,
      ${({reverseColor:e})=>e?p.primary:p.whitegrey}
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
    background: ${p.primary}
    background-image: linear-gradient(45deg, transparent 50%, #e8f0fe 50%);
  }
`,R=l`
  > input {
    font-family: "Asap";
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    color: ${({reverseColor:e})=>e?p.primary:p.whitegrey};

    border: 0.1em solid
      ${({reverseColor:e})=>e?p.whitegrey:p.primary};
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
      ${({reverseColor:e})=>e?p.whitegrey:p.primary}
        50%
    );
    background-position: 100%;
    background-size: 400%;

    &:focus {
      outline: none;
      color: ${({reverseColor:e})=>e?p.whitegrey:p.primary};
      background-position: 25%;
    }
  }
`,H=r((({className:o,value:a,placeholder:r,type:s,onChange:l,autoR:c})=>{const[p,d]=t(1),g=i(null);function u(e){e.preventDefault();const t=String(e.target.value).length;d(t),l&&l(e)}return n((()=>{g.current&&d(g.current.value.length||1)}),[]),c?e.createElement("span",{className:o},e.createElement("input",{ref:g,value:a,type:s,placeholder:r,onChange:u,style:{width:"calc("+p+" * 0.65em)"}}),e.createElement("div",null)):e.createElement("span",{className:o},e.createElement("input",{value:a,type:s,placeholder:r,onChange:u}),e.createElement("div",null))})).withConfig({displayName:"RawInput",componentId:"sc-108n3kb"})`
  ${A}
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
    border-bottom: 0.1em solid ${p.whitegrey};
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    z-index: -20;
    transition: border-bottom 500ms linear;
  }

  input:focus + div {
    border-bottom: 0.1em solid ${p.darkgrey};
  }
`,T=r((({className:t,value:i,placeholder:n,type:o,onChange:a,icon:r})=>e.createElement("span",{className:t},e.createElement("input",{value:i,type:o,placeholder:n,onChange:function(e){a&&a(e)}}),e.createElement("span",{className:"underline"}),e.createElement("div",{className:"blur"}),e.createElement(r,null)))).withConfig({displayName:"IconInput",componentId:"sc-ark72k"})`
  ${A}
  ${q}
  ${B}
  ${R}

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
    color: ${p.primary};
  }
`,L=r((({className:t,value:i,placeholder:n,type:o,onChange:a,label:r})=>e.createElement("span",{className:t},e.createElement("input",{value:i,type:o,placeholder:n,onChange:function(e){a&&a(e)}}),e.createElement("span",{className:"underline"}),e.createElement("div",{className:"blur"}),e.createElement("span",{className:"label"},r)))).withConfig({displayName:"LabelInput",componentId:"sc-1jiwvv4"})`
  ${A}
  ${q}
  ${B}
  ${R}

  .label {
    height: inherit;
    position: absolute;
    top: 0;
    right: 8px;
    z-index: 2;
    display: flex;
    align-items: center;
    color: ${({reverseColor:e})=>e?p.primary:p.whitegrey};
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
    color: ${p.primary};
  }
`,S=r((({className:t,value:i,placeholder:n,type:o,onChange:a})=>e.createElement("span",{className:t},e.createElement("input",{value:i,type:o,placeholder:n,onChange:function(e){a&&a(e)}}),e.createElement("span",{className:"underline"})))).withConfig({displayName:"Input",componentId:"sc-1fuqw4t"})`
  ${A}
  ${B}
  ${R}
`,F={value:void 0,type:"text",placeholder:void 0,width:"auto",height:"40px"};H.defaultProps=Object.assign(Object.assign({},F),{color:"black",autoR:!1}),T.defaultProps=Object.assign(Object.assign({},F),{icon:null}),L.defaultProps=Object.assign(Object.assign({},F),{label:"Label",reverseColor:!1}),S.defaultProps=F;const V=({count:t=1,duration:i=1.2,width:n,wrapper:o,height:a,circle:c,style:p,className:d,highlightColor:g,baseColor:u})=>{const m=s`
    0% {
        background-position: -200px 0;
    }
    100% {
        background-position: calc(200px + 100%) 0;
    }
  `,b=l`
    background-color: ${u};
    background-image: linear-gradient(
      90deg,
      ${u},
      ${g},
      ${u}
    );
    background-size: 200px 100%;
    background-repeat: no-repeat;
    border-radius: 4px;
    display: inline-block;
    line-height: 1;
    width: 100%;
  `,h=r.span.withConfig({displayName:"Span",componentId:"sc-p2djh"})`
    ${b}
    animation: ${m} ${i}s ease-in-out infinite;
  `,x=[];for(let i=0;i<t;i++){var v={width:n||void 0,height:a||void 0,borderRadius:void 0};null!==v.width&&null!==v.height&&c&&(v.borderRadius="50%");var y="skeleton";d&&(y+=" "+d),x.push(e.createElement(h,{key:i,className:y,style:Object.assign(Object.assign({},p),v)},"‌"))}return e.createElement(e.Fragment,null,o?x.map(((t,i)=>e.createElement(o,{key:i,skeleton:!0},t,"‌"))):x)};V.defaultProps={baseColor:"#eee",highlightColor:"#f5f5f5"};export{k as AlertContext,w as AlertProvider,$ as Button,c as Example,P as IconButton,T as IconInput,S as Input,L as LabelInput,H as RawInput,V as Skeleton};
//# sourceMappingURL=index.es.js.map
