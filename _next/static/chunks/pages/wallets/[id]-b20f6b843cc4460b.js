(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[258],{5561:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/wallets/[id]",function(){return c(4374)}])},3034:function(a,b,c){"use strict";var d=c(1799),e=c(9396),f=c(9534),g=c(5893),h=c(6089),i=c.n(h),j=c(7294),k=c(2083),l=(0,j.forwardRef)(function(a,b){var c=a.outlined,h=(0,f.Z)(a,["outlined"]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("input",(0,e.Z)((0,d.Z)({},h),{ref:b,className:i().dynamic([["9b0bdb6e62601b6",[c?"1px solid #aaa":"1px solid transparent",c?"transparent":"rgba(255, 255, 255, 0.05)",k.Z.primary,k.Z.primary]]])+" "+(h&&null!=h.className&&h.className||"")})),(0,g.jsx)(i(),{id:"9b0bdb6e62601b6",dynamic:[c?"1px solid #aaa":"1px solid transparent",c?"transparent":"rgba(255, 255, 255, 0.05)",k.Z.primary,k.Z.primary],children:"input.__jsx-style-dynamic-selector{padding:12px 8px;min-width:150px;max-width:300px;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;border:".concat(c?"1px solid #aaa":"1px solid transparent",";-webkit-transition:.1s;-moz-transition:.1s;-o-transition:.1s;transition:.1s;outline:none;background:").concat(c?"transparent":"rgba(255, 255, 255, 0.05)",";color:white}input.__jsx-style-dynamic-selector:hover{background-image:-webkit-linear-gradient(rgba(255,255,255,.1),rgba(255,255,255,.1));background-image:-moz-linear-gradient(rgba(255,255,255,.1),rgba(255,255,255,.1));background-image:-o-linear-gradient(rgba(255,255,255,.1),rgba(255,255,255,.1));background-image:linear-gradient(rgba(255,255,255,.1),rgba(255,255,255,.1))}input.__jsx-style-dynamic-selector:hover,input.__jsx-style-dynamic-selector:focus{border:1px solid ").concat(k.Z.primary,";color:").concat(k.Z.primary,"}")})]})});b.Z=l},4374:function(a,b,c){"use strict";c.r(b);var d=c(1799),e=c(9396),f=c(5893),g=c(6089),h=c.n(g),i=c(9008),j=c.n(i),k=c(7814),l=c(1436),m=c(271),n=c(570),o=c(3258),p=c(3023),q=c(5358),r=c(4888),s=c(8870),t=c(1163),u=c(2083),v=c(2036),w=c(7294),x=c(8417),y=c(7901),z=c(3034),A=c(4810),B=c(4276),C=c(2747);function D(a){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:"jsx-61f3f103846b11de transaction-wrapper",children:[(0,f.jsx)("div",{className:"jsx-61f3f103846b11de currency",children:"$"}),(0,f.jsx)("div",{className:"jsx-61f3f103846b11de dollars",children:a.dollars}),(0,f.jsx)("div",{className:"jsx-61f3f103846b11de cents",children:a.cents})]}),(0,f.jsx)(h(),{id:"61f3f103846b11de",children:".transaction-wrapper.jsx-61f3f103846b11de{font-size:4rem;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;font-weight:700;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.currency.jsx-61f3f103846b11de{margin-right:8px}.cents.jsx-61f3f103846b11de{font-size:2rem;-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start}"})]})}b.default=function(){var a=(0,t.useRouter)(),b=(0,v.T)(),c=(0,v.C)(function(a){return a.auth.token}),g=(0,w.useState)(!1),i=g[0],E=g[1],F=(0,w.useRef)(null),G=(0,w.useRef)(null),H=(0,w.useState)(null),I=H[0],J=H[1];(0,w.useEffect)(function(){b((0,y.tF)()),fetch(x.Sg+x.ZP.WALLET.STATS+"?wallet="+a.query.id,{headers:{Authorization:"Token "+c}}).then(function(c){if(401!==c.status)return c.json();a.push("/login"),b((0,C.q)("Please login before accessing this page"))}).then(function(a){a.data.daily.sort(function(a,b){return a.day>b.day?1:-1}),a.data.weekly.sort(function(a,b){return a.week>b.week?1:-1}),a.data.monthly.sort(function(a,b){return a.month>b.month?1:-1}),b((0,y.Md)()),J(a.data)})},[c,b]);var K=function(){var a,c;I&&b((0,A.K8)(null==I?void 0:I.wallet.id,{name:null===(a=F.current)|| void 0===a?void 0:a.value,description:null===(c=G.current)|| void 0===c?void 0:c.value},function(a){E(!1),J(function(b){return(0,e.Z)((0,d.Z)({},b),{wallet:a})})}))};return I&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(j(),{children:[(0,f.jsx)("title",{className:"jsx-c558d9bd855e9dcd",children:I.wallet.name}),(0,f.jsx)("meta",{name:"description",content:"Generated by create next app",className:"jsx-c558d9bd855e9dcd"}),(0,f.jsx)("link",{rel:"icon",href:"/favicon.ico",className:"jsx-c558d9bd855e9dcd"})]}),(0,f.jsxs)("main",{className:"jsx-c558d9bd855e9dcd",children:[(0,f.jsxs)("div",{className:"jsx-c558d9bd855e9dcd mainWrapper",children:[(0,f.jsx)("div",{onClick:function(){return E(!0)},className:"jsx-c558d9bd855e9dcd title",children:(0,f.jsxs)("div",{className:"jsx-c558d9bd855e9dcd",children:[(0,f.jsx)("h1",{className:"jsx-c558d9bd855e9dcd",children:I.wallet.name}),(0,f.jsx)("h3",{className:"jsx-c558d9bd855e9dcd",children:I.wallet.description})]})}),(0,f.jsxs)("div",{className:"jsx-c558d9bd855e9dcd primaryContainer",children:[(0,f.jsx)("div",{className:"jsx-c558d9bd855e9dcd cardContainer",children:(0,f.jsxs)("div",{className:"jsx-c558d9bd855e9dcd progressWrapper",children:[(0,f.jsx)("span",{className:"jsx-c558d9bd855e9dcd button-like",children:"current balance"}),(0,f.jsx)(D,{dollars:Math.floor(I.wallet.balance),cents:Math.round(I.wallet.balance%1*100)}),(0,f.jsxs)("div",{className:"jsx-c558d9bd855e9dcd stats",children:[(0,f.jsxs)("div",{className:"jsx-c558d9bd855e9dcd",children:[(0,f.jsx)("span",{className:"jsx-c558d9bd855e9dcd button-like",children:"Spent today:"}),(0,f.jsxs)("span",{className:"jsx-c558d9bd855e9dcd value button-like",children:["$",I.transactions.today[0]&&I.transactions.today[0].spent]})]}),(0,f.jsxs)("div",{className:"jsx-c558d9bd855e9dcd",children:[(0,f.jsx)("span",{className:"jsx-c558d9bd855e9dcd button-like",children:"spent this week:"}),(0,f.jsxs)("span",{className:"jsx-c558d9bd855e9dcd value button-like",children:["$",I.transactions.this_week[0].spent]})]}),(0,f.jsxs)("div",{className:"jsx-c558d9bd855e9dcd",children:[(0,f.jsx)("span",{className:"jsx-c558d9bd855e9dcd button-like",children:"spent this month:"}),(0,f.jsxs)("span",{className:"jsx-c558d9bd855e9dcd value button-like",children:["$",I.transactions.this_month[0].spent]})]}),(0,f.jsxs)("div",{className:"jsx-c558d9bd855e9dcd",children:[(0,f.jsx)("span",{className:"jsx-c558d9bd855e9dcd button-like",children:"total transactions this month:"}),(0,f.jsx)("span",{className:"jsx-c558d9bd855e9dcd value button-like",children:I.transactions.this_month[0].count})]})]})]})}),(0,f.jsxs)("div",{className:"jsx-c558d9bd855e9dcd search",children:[(0,f.jsx)(k.G,{icon:l.wn1,strokeWidth:1}),(0,f.jsx)("input",{placeholder:"Search...",className:"jsx-c558d9bd855e9dcd"})]})]})]}),(0,f.jsxs)("div",{className:"jsx-c558d9bd855e9dcd section",children:[(0,f.jsx)("h2",{className:"jsx-c558d9bd855e9dcd",children:"Statistics"}),(0,f.jsxs)("div",{className:"jsx-c558d9bd855e9dcd cardGrid",children:[(0,f.jsxs)("div",{className:"jsx-c558d9bd855e9dcd",children:[(0,f.jsx)("h3",{className:"jsx-c558d9bd855e9dcd",children:"Spends in this week"}),(0,f.jsxs)(o.w,{width:300,height:200,data:I.daily,margin:{top:5,right:30,left:20,bottom:5},children:[(0,f.jsx)(p.K,{dataKey:"day"}),(0,f.jsx)(q.B,{}),(0,f.jsx)(r.u,{wrapperStyle:{borderRadius:"8px"},contentStyle:{background:"#000",borderRadius:"16px",border:"none"}}),(0,f.jsx)(s.x,{type:"monotone",dataKey:"spent",stroke:u.Z.primary})]})]}),(0,f.jsxs)("div",{className:"jsx-c558d9bd855e9dcd",children:[(0,f.jsx)("h3",{className:"jsx-c558d9bd855e9dcd",children:"Spends in this month"}),(0,f.jsxs)(o.w,{width:300,height:200,data:I.weekly,margin:{top:5,right:30,left:20,bottom:5},children:[(0,f.jsx)(p.K,{dataKey:"week"}),(0,f.jsx)(q.B,{}),(0,f.jsx)(r.u,{wrapperStyle:{borderRadius:"8px"},contentStyle:{background:"#000",borderRadius:"16px",border:"none"}}),(0,f.jsx)(s.x,{type:"monotone",dataKey:"spent",stroke:u.Z.primary})]})]}),(0,f.jsxs)("div",{className:"jsx-c558d9bd855e9dcd",children:[(0,f.jsx)("h3",{className:"jsx-c558d9bd855e9dcd",children:"Spends in this year"}),(0,f.jsxs)(o.w,{width:300,height:200,data:I.monthly,margin:{top:5,right:30,left:20,bottom:5},children:[(0,f.jsx)(p.K,{dataKey:"month"}),(0,f.jsx)(q.B,{}),(0,f.jsx)(r.u,{wrapperStyle:{borderRadius:"8px"},contentStyle:{background:"#000",borderRadius:"16px",border:"none"}}),(0,f.jsx)(s.x,{type:"monotone",dataKey:"spent",stroke:u.Z.primary})]})]})]}),(0,f.jsxs)("div",{className:"jsx-c558d9bd855e9dcd",children:[(0,f.jsx)("h2",{className:"jsx-c558d9bd855e9dcd",children:"Recent Transactions"}),0===I.recents.length?(0,f.jsxs)("div",{className:"jsx-c558d9bd855e9dcd no-data",children:[(0,f.jsx)("span",{className:"jsx-c558d9bd855e9dcd",children:"Seems like you haven't added any transactions yet."}),(0,f.jsx)(n.Z,{startIcon:l.XSk,small:!0,secondary:!0,onClick:function(){return a.push("/add")},children:"Create one now!"})]}):(0,f.jsx)("div",{className:"jsx-c558d9bd855e9dcd horizontalGrid",children:(0,f.jsx)("div",{className:"jsx-c558d9bd855e9dcd horizontalGridWrapper",children:I.recents.map(function(a){return(0,f.jsx)(m.Z,{data:a},a.id)})})}),(0,f.jsx)("div",{style:{float:"right"},className:"jsx-c558d9bd855e9dcd",children:(0,f.jsx)(n.Z,{secondary:!0,small:!0,endIcon:l.yOZ,onClick:function(){return a.push("/transactions?wallets="+I.wallet.id)},children:"View all"})})]})]}),(0,f.jsxs)("div",{style:{display:i?"block":"none"},className:"jsx-c558d9bd855e9dcd create",children:[(0,f.jsxs)("div",{className:"jsx-c558d9bd855e9dcd title",children:[(0,f.jsx)("h2",{className:"jsx-c558d9bd855e9dcd",children:"Edit Wallet"}),(0,f.jsx)(k.G,{icon:l.YIN,onClick:function(){return E(!1)}})]}),(0,f.jsx)("h3",{className:"jsx-c558d9bd855e9dcd",children:"Name:"}),(0,f.jsx)(z.Z,{ref:F,defaultValue:I.wallet.name,type:"text",placeholder:"Name"}),(0,f.jsx)("h3",{className:"jsx-c558d9bd855e9dcd",children:"Description"}),(0,f.jsx)("textarea",{placeholder:"Description",rows:4,ref:G,defaultValue:I.wallet.description,className:"jsx-c558d9bd855e9dcd description"}),(0,f.jsx)(n.Z,{startIcon:l.LEp,onClick:K,children:"Update"})]})]}),(0,f.jsx)("div",{style:{width:"100vw",height:"72px"},className:"jsx-c558d9bd855e9dcd"}),(0,f.jsx)(B.Z,{}),(0,f.jsx)(h(),{id:"c558d9bd855e9dcd",children:'main.jsx-c558d9bd855e9dcd{padding:12px}h1.jsx-c558d9bd855e9dcd{font-weight:700;color:white;font-size:4rem;text-align:center}.mainWrapper.jsx-c558d9bd855e9dcd{width:100%;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.mainWrapper.jsx-c558d9bd855e9dcd .title.jsx-c558d9bd855e9dcd,.mainWrapper.jsx-c558d9bd855e9dcd .primaryContainer.jsx-c558d9bd855e9dcd{-webkit-flex-basis:50%;-ms-flex-preferred-size:50%;flex-basis:50%;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center}.title.jsx-c558d9bd855e9dcd div.jsx-c558d9bd855e9dcd{text-align:center;width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:12px 0}.title.jsx-c558d9bd855e9dcd h1.jsx-c558d9bd855e9dcd,.title.jsx-c558d9bd855e9dcd h3.jsx-c558d9bd855e9dcd{max-width:350px;text-align:center;margin-top:0;margin-bottom:8px}.title.jsx-c558d9bd855e9dcd h1.jsx-c558d9bd855e9dcd{font-weight:700;color:white;font-size:4rem}.title.jsx-c558d9bd855e9dcd h3.jsx-c558d9bd855e9dcd{color:rgba(150,150,150,.8)}.primaryContainer.jsx-c558d9bd855e9dcd{max-width:500px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.cardContainer.jsx-c558d9bd855e9dcd{padding:16px;-webkit-border-radius:16px;-moz-border-radius:16px;border-radius:16px}.progressWrapper.jsx-c558d9bd855e9dcd{-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.search.jsx-c558d9bd855e9dcd{width:100%;padding:0px 16px;-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;background:rgba(255,255,255,.05);margin-top:8px}.search.jsx-c558d9bd855e9dcd input.jsx-c558d9bd855e9dcd{margin-left:8px;padding:12px 8px;background:transparent;border:none;width:80%;color:#fff8}.search.jsx-c558d9bd855e9dcd input.jsx-c558d9bd855e9dcd:hover,.search.jsx-c558d9bd855e9dcd input.jsx-c558d9bd855e9dcd:focus{outline:none}.search.jsx-c558d9bd855e9dcd svg.jsx-c558d9bd855e9dcd{stroke-width:1px}.mainWrapper.jsx-c558d9bd855e9dcd,.progressWrapper.jsx-c558d9bd855e9dcd{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.progressWrapper.jsx-c558d9bd855e9dcd{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.cardGrid.jsx-c558d9bd855e9dcd{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.cardGrid.jsx-c558d9bd855e9dcd h3.jsx-c558d9bd855e9dcd{text-align:center;font-size:12px;text-transform:uppercase;font-weight:900}.stats.jsx-c558d9bd855e9dcd{width:100%;margin-top:32px}.button-like.jsx-c558d9bd855e9dcd{text-transform:uppercase;letter-spacing:1px;font-weight:900;font-size:12px}.value.jsx-c558d9bd855e9dcd{color:rgba(255,255,255,.7);float:right}.horizontalGrid.jsx-c558d9bd855e9dcd{max-width:100vw;overflow-x:auto}.horizontalGridWrapper.jsx-c558d9bd855e9dcd{width:-webkit-max-content;width:-moz-max-content;width:max-content;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}h2.jsx-c558d9bd855e9dcd{margin-left:12px}.no-data.jsx-c558d9bd855e9dcd{width:100%;height:150px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;text-align:center;color:rgba(228,228,228,.8)}.create.jsx-c558d9bd855e9dcd{position:fixed;top:0;right:0;height:100vh;width:350px;background-color:rgba(0,0,0,.9);background-image:-webkit-linear-gradient(rgba(255,255,255,.1),rgba(255,255,255,.1));background-image:-moz-linear-gradient(rgba(255,255,255,.1),rgba(255,255,255,.1));background-image:-o-linear-gradient(rgba(255,255,255,.1),rgba(255,255,255,.1));background-image:linear-gradient(rgba(255,255,255,.1),rgba(255,255,255,.1));-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);padding:24px 32px;-webkit-border-radius:12px 0 0 12px;-moz-border-radius:12px 0 0 12px;border-radius:12px 0 0 12px;-webkit-animation:slide-from-right.3s ease-out forwards;-moz-animation:slide-from-right.3s ease-out forwards;-o-animation:slide-from-right.3s ease-out forwards;animation:slide-from-right.3s ease-out forwards}.create.jsx-c558d9bd855e9dcd>.title.jsx-c558d9bd855e9dcd{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.title.jsx-c558d9bd855e9dcd>svg{width:24px;height:24px;cursor:pointer}.create.jsx-c558d9bd855e9dcd>input,.create.jsx-c558d9bd855e9dcd>button,.description.jsx-c558d9bd855e9dcd{width:100%;margin:12px 0}.create.jsx-c558d9bd855e9dcd h3.jsx-c558d9bd855e9dcd{font-size:12px;text-transform:uppercase;letter-spacing:1px;font-family:"Roboto";font-weight:700;margin-top:12px;margin-bottom:0px}.description.jsx-c558d9bd855e9dcd{background:rgba(255,255,255,.1);border:none;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;color:white;padding:12px;margin-top:12px}.description.jsx-c558d9bd855e9dcd:focus{outline:none}@-webkit-keyframes slide-from-right{from{-webkit-transform:translateX(100%);transform:translateX(100%)}90%{-webkit-transform:translateX(-5%);transform:translateX(-5%)}to{-webkit-transform:translateX(0);transform:translateX(0)}}@-moz-keyframes slide-from-right{from{-moz-transform:translateX(100%);transform:translateX(100%)}90%{-moz-transform:translateX(-5%);transform:translateX(-5%)}to{-moz-transform:translateX(0);transform:translateX(0)}}@-o-keyframes slide-from-right{from{-o-transform:translateX(100%);transform:translateX(100%)}90%{-o-transform:translateX(-5%);transform:translateX(-5%)}to{-o-transform:translateX(0);transform:translateX(0)}}@keyframes slide-from-right{from{-webkit-transform:translateX(100%);-moz-transform:translateX(100%);-o-transform:translateX(100%);transform:translateX(100%)}90%{-webkit-transform:translateX(-5%);-moz-transform:translateX(-5%);-o-transform:translateX(-5%);transform:translateX(-5%)}to{-webkit-transform:translateX(0);-moz-transform:translateX(0);-o-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes slide-from-bottom{from{-webkit-transform:translateY(100%);transform:translateY(100%)}90%{-webkit-transform:translateY(-5%);transform:translateY(-5%)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@-moz-keyframes slide-from-bottom{from{-moz-transform:translateY(100%);transform:translateY(100%)}90%{-moz-transform:translateY(-5%);transform:translateY(-5%)}to{-moz-transform:translateY(0);transform:translateY(0)}}@-o-keyframes slide-from-bottom{from{-o-transform:translateY(100%);transform:translateY(100%)}90%{-o-transform:translateY(-5%);transform:translateY(-5%)}to{-o-transform:translateY(0);transform:translateY(0)}}@keyframes slide-from-bottom{from{-webkit-transform:translateY(100%);-moz-transform:translateY(100%);-o-transform:translateY(100%);transform:translateY(100%)}90%{-webkit-transform:translateY(-5%);-moz-transform:translateY(-5%);-o-transform:translateY(-5%);transform:translateY(-5%)}to{-webkit-transform:translateY(0);-moz-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0)}}@media(max-width:850px){.mainWrapper.jsx-c558d9bd855e9dcd{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}@media(max-width:500px){.mainWrapper.jsx-c558d9bd855e9dcd{margin-top:32px}.create.jsx-c558d9bd855e9dcd{width:100vw;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;top:auto;bottom:0;-webkit-border-radius:12px 12px 0 0;-moz-border-radius:12px 12px 0 0;border-radius:12px 12px 0 0;padding-bottom:84px;-webkit-animation:slide-from-bottom.3s ease-out forwards;-moz-animation:slide-from-bottom.3s ease-out forwards;-o-animation:slide-from-bottom.3s ease-out forwards;animation:slide-from-bottom.3s ease-out forwards}.progressWrapper.jsx-c558d9bd855e9dcd>.progressContainer{margin:6px}.progressBar{width:30px!important;-webkit-border-radius:8px!important;-moz-border-radius:8px!important;border-radius:8px!important}.progressElement{width:24px!important;-webkit-border-radius:6px!important;-moz-border-radius:6px!important;border-radius:6px!important}.cardContainer.jsx-c558d9bd855e9dcd{padding:8px;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px}h1.jsx-c558d9bd855e9dcd{font-size:3rem!important}}'})]})}},9396:function(a,b,c){"use strict";function d(a,b){return b=null!=b?b:{},Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):(function(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);c.push.apply(c,d)}return c})(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))}),a}c.d(b,{Z:function(){return d}})},9534:function(a,b,c){"use strict";function d(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}c.d(b,{Z:function(){return d}})}},function(a){a.O(0,[766,927,872,954,774,888,179],function(){var b;return a(a.s=5561)}),_N_E=a.O()}])