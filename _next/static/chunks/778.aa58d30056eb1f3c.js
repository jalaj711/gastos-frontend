"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[778,790],{3790:function(a,b,c){c.r(b);var d=c(5893),e=c(6089),f=c.n(e),g=c(7294),h=c(935);b.default=function(a){var b=a.dimension||150,c=a.lineWidth||10,e=b/2-c,i=a.range||360,j=(0,g.useMemo)(function(){return{stroke:a.colors&&a.colors.stroke||h.Z.primary,gaugeMarks:a.colors&&a.colors.gaugeMarks||"#fff",needle:a.colors&&a.colors.needle||"#fff",backgroundTrack:a.colors&&a.colors.backgroundTrack||"rgba(255, 255, 255, 0.1)"}},[a.colors]),k=a.offSet||90;return(0,g.useEffect)(function(){var b=document.getElementById(a.id),d=b.getContext("2d"),f=b.width/2,g=b.height/2;if(d){d.clearRect(0,0,b.width,b.height);var h=function(){d.beginPath(),d.arc(f,g,e,Math.PI/180*k,Math.PI/180*(i+k)),d.strokeStyle=j.backgroundTrack,d.lineWidth=c,d.stroke()},l=function(){d.beginPath(),d.strokeStyle=j.stroke,d.lineWidth=c+.3*c,d.arc(f,g,e,Math.PI/180*k,Math.PI/180*(i/100*a.value+k)),d.stroke()},m=function(){for(var b=5,h=a.gaugeMarkSeperation||45,l=-k+90,m=function(){d.beginPath(),d.moveTo(f+(e-c-b)*Math.sin(Math.PI/180*l),g+(e-c-b)*Math.cos(Math.PI/180*l)),d.lineTo(f+(e-c)*Math.sin(Math.PI/180*l),g+(e-c)*Math.cos(Math.PI/180*l)),d.strokeStyle=j.gaugeMarks,d.lineWidth=1,d.stroke()};l>= -i-k+90;)m(),l-=h},n=function(){var b=-(a.value*i)/100-k+90;d.beginPath(),d.moveTo(f,g),d.lineTo(f+(e-c-10)*Math.sin(Math.PI/180*b),g+(e-c-10)*Math.cos(Math.PI/180*b)),d.strokeStyle=j.needle,d.lineWidth=c,d.stroke()};d.lineCap="round",h(),a.gaugeMarks&&m(),a.centralNeedle&&n(),l()}},[a.id,a.value,a.gaugeMarks,a.centralNeedle,a.gaugeMarkSeperation,e,c,i,k,j]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:f().dynamic([["96dba00a06136328",[b,b]]])+" progressWrap",children:[(0,d.jsx)("canvas",{id:a.id,width:b,height:b,className:f().dynamic([["96dba00a06136328",[b,b]]])}),a.showValue&&(0,d.jsxs)("span",{className:f().dynamic([["96dba00a06136328",[b,b]]])+" progressValue",children:[a.value,"%"]})]}),(0,d.jsx)(f(),{id:"96dba00a06136328",dynamic:[b,b],children:".progressValue.__jsx-style-dynamic-selector{display:block;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%);color:white}.progressWrap.__jsx-style-dynamic-selector{position:relative;width:".concat(b,"px;height:").concat(b,"px}")})]})}},8778:function(a,b,c){c.r(b),c.d(b,{default:function(){return f}});var d=c(5893),e=c(3790);function f(a){var b=window.innerWidth||500,c=window.innerHeight||300,f=(b-b%2)/2;return(0,d.jsx)(e.default,{value:a.value,id:"performanceCircular",dimension:2*f,range:180/Math.PI*2*Math.asin(c/(2*f))+10,offSet:85+180/Math.PI*Math.acos(c/(2*f)),lineWidth:.015*b})}}}])