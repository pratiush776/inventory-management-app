(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9379:function(e,t,n){Promise.resolve().then(n.bind(n,3656))},3656:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var i=n(7437),a=n(2265),r=n(1326),s=n(8620),l=n(511),o=n(8700),c=n(7738),d=n(5965),h=n(5236),u=n(9842);let x=(0,h.ZF)({apiKey:"AIzaSyD_79QqsjbogPCf-xCkjNsZQeTPCwtbjRQ",authDomain:"inventory-management-sys-d710c.firebaseapp.com",projectId:"inventory-management-sys-d710c",storageBucket:"inventory-management-sys-d710c.appspot.com",messagingSenderId:"413309388954",appId:"1:413309388954:web:29ea176bd2c8db4e24f723",measurementId:"G-CEBHR7Y0FZ"}),f=(0,u.ad)(x);function p(){let[e,t]=(0,a.useState)([]),[n,h]=(0,a.useState)(!1),[x,p]=(0,a.useState)(""),m=async()=>{let e=(0,u.IO)((0,u.hJ)(f,"inventory")),n=await (0,u.PL)(e),i=[];n.forEach(e=>{i.push({name:e.id,...e.data()})}),t(i)},g=async e=>{let t=(0,u.JU)((0,u.hJ)(f,"inventory"),e),n=await (0,u.QT)(t);if(n.exists()){let{quantity:e}=n.data();1==e?await (0,u.oe)(t):await (0,u.pl)(t,{quantity:e-1})}m()},y=async e=>{let t=(0,u.JU)((0,u.hJ)(f,"inventory"),e),n=await (0,u.QT)(t);if(n.exists()){let{quantity:e}=n.data();await (0,u.pl)(t,{quantity:e+1})}else await (0,u.pl)(t,{quantity:1});m()},j=async e=>{let t=(0,u.JU)((0,u.hJ)(f,"inventory"),e);await (0,u.oe)(t),m()},v=()=>h(!0),w=()=>h(!1);return(0,a.useEffect)(()=>{m()},[]),(0,i.jsxs)(r.Z,{width:"100vw",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:2,children:[(0,i.jsx)(s.Z,{open:n,onClose:w,children:(0,i.jsxs)(r.Z,{position:"absolute",top:"50%",left:"50%",sx:{transform:"translate(-50%,-50%)"},bgcolor:"white",border:"2px solid black",boxShadow:24,p:4,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:3,children:[(0,i.jsx)(l.Z,{variant:"h6",children:"Add Item"}),(0,i.jsxs)(o.Z,{width:"100%",direction:"row",spacing:2,children:[(0,i.jsx)(c.Z,{variant:"outlined",fullWidth:!0,value:x,onChange:e=>p(e.target.value)}),(0,i.jsx)(d.Z,{variant:"outlined",onClick:()=>{y(x),p(""),w()},children:" Add "})]})]})}),(0,i.jsx)(d.Z,{onClick:()=>v(),variant:"outlined",children:"Add New Item"}),(0,i.jsxs)(r.Z,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",children:[(0,i.jsx)(r.Z,{width:"800px",height:"100px",bgcolor:"#ADD8E6",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"2em",margin:"2em",children:(0,i.jsx)(l.Z,{variant:"h2",color:"#333",textAlign:"center",children:"Inventory Items"})}),(0,i.jsx)(o.Z,{width:"800px","max-height":"80vh",spacing:2,overflow:"auto",display:"flex",alignItems:"center",justifyContent:"center",children:e.map(e=>{let{name:t,quantity:n}=e;return(0,i.jsxs)(r.Z,{width:"100%",minHeight:"5rem",display:"flex",justifyContent:"space-between",alignItems:"center",bgcolor:"#f0f0f0",paddingX:5,borderRadius:"2em",children:[(0,i.jsx)(l.Z,{variant:"h5",color:"#333",textAlign:"center",width:"4em",overflow:"hidden",children:t.charAt(0).toUpperCase()+t.slice(1)}),(0,i.jsx)(l.Z,{variant:"h5",color:"#333",textAlign:"center",children:n}),(0,i.jsxs)(r.Z,{bgcolor:"#ADD8E6",borderRadius:"2em",children:[(0,i.jsx)(d.Z,{onClick:()=>g(t),children:" - "}),(0,i.jsx)(d.Z,{onClick:()=>y(t),children:" + "})]}),(0,i.jsx)(d.Z,{variant:"contained",onClick:()=>j(t),children:"Remove"})]},t)})})]})]})}}},function(e){e.O(0,[358,125,971,23,744],function(){return e(e.s=9379)}),_N_E=e.O()}]);