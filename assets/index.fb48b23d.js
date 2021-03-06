var D=Object.defineProperty;var P=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var B=(n,o,r)=>o in n?D(n,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[o]=r,w=(n,o)=>{for(var r in o||(o={}))H.call(o,r)&&B(n,r,o[r]);if(P)for(var r of P(o))q.call(o,r)&&B(n,r,o[r]);return n};import{s as t,N as E,j as i,a as e,m as p,O as C,U as L,F,u as T,S as J,A as W,b as Q,L as K,c as X,_ as Y,d as Z,e as ee,f as ie,R as ne,g as l,h as te,i as ae,B as re}from"./vendor.65586ee2.js";const oe=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))x(c);new MutationObserver(c=>{for(const s of c)if(s.type==="childList")for(const k of s.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&x(k)}).observe(document,{childList:!0,subtree:!0});function r(c){const s={};return c.integrity&&(s.integrity=c.integrity),c.referrerpolicy&&(s.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?s.credentials="include":c.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function x(c){if(c.ep)return;c.ep=!0;const s=r(c);fetch(c.href,s)}};oe();const ce=()=>i(se,{children:[e(g,{to:"/",children:e("i",{className:"fas fa-home"})}),e(g,{to:"/about",children:e("i",{className:"fas fa-address-card"})}),e(g,{to:"/education",children:e("i",{className:"fas fa-user-graduate"})}),e(g,{to:"/skills",children:e("i",{className:"fas fa-code"})}),e(g,{to:"/portfolio",children:e("i",{className:"fas fa-briefcase"})}),e(g,{to:"/services",children:e("i",{className:"fas fa-laptop-code"})})]}),g=t(E)`
  display: block;
  text-decoration: none;
  padding: 0.5em 1em;
  color: gray;
  transition: 0.3s;

  &.active {
    color: #fff;
    transform: scale(1.5);
  }
`,se=t.nav`
  display: flex;
  justify-content: center;
  padding-top: 1em;
  margin-bottom: 1em;
`,le={hidden:{opacity:0,x:"-10vw"},visible:{opacity:1,x:0,transition:{type:"spring",stiffness:100}},exit:{opacity:0,x:"10vw",transition:{type:"easeInOut"}}},j=({children:n})=>e(p.div,{variants:le,initial:"hidden",animate:"visible",exit:"exit",children:n});var de="/assets/home.5d041ca5.jpg";const he=t.div`
    overflow: hidden;
    width: 90%;
    max-width: 800px;
    margin: 0 auto 3em;
`,pe=t.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1em;
`,v=({children:n})=>e(j,{children:e(me,{children:n})}),me=t.h3`
    text-align: center;
    margin: 0;
    font-size: 1.5em;
`,d=t.h3`
    text-align: center;
    font-size: 1em;
    font-weight: bold;
    margin: 0;
`,a=t.p`
    text-align: center;
    color: gray;
    font-size: 1em;
`,V=t.img`
    border-radius: 20px 0 20px 0;
    margin: 1.5em 0;
    cursor: pointer;
`,m=t.i`
    color: blue;
    font-size: 1.5em;
    margin: 0 .6em .6em;
`,G=t.nav`
    display: flex;
    gap: 1em;
    justify-content: center;
    margin-bottom: 2em;
`,f=t.div`
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    column-gap: 1.5rem;
    text-align: center;
`,u=t.span`
    margin-top: 3em;
    display: inline-block;
    width: 13px;
    height: 13px;
    background: blue;
    border-radius: 50%;
`,b=t.span`
    display: block;
    width: 2px;
    height: 100%;
    background: blue;
    transform: translate(6px, -7px);
`,fe=t.div`
  background-image: url(${de});
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  background-blend-mode: soft-light;
  background-color: rgba(0, 0, 0, 0.6);
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  min-height: 100vh;
`,S=t(E)`
    display: inline-block;
    color: #fff;
    font-size: 1em;
    display: flex;
    gap: .5em;
    align-items: center;
    font-weight: bold;
    padding: .5em 1em;
    border-radius: 20px 0 20px 0; 
    border: 2px solid blue;
    transition: .3s ease;
    cursor: pointer;
    &.active {
        background-color: blue;

        i {
            transform: rotate(180deg);
        }
    }
`,ue=()=>i(fe,{children:[e(ce,{}),e(he,{children:e(C,{})})]}),ge={hidden:{y:"100px",opacity:0},show:{y:"-10px",opacity:1,transition:{duration:3,type:"spring",stiffness:200}}},be={strokeWidth:"4px",fill:"#0000ff"},N={hidden:{pathLength:0,scale:.5},show:{scale:1,pathLength:1,fill:"none",strokeWidth:"8px",transition:{ease:"easeInOut",type:"spring",stiffness:10}}},ve=()=>e(ye,{children:i(p.svg,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 500.09 411.766",variants:ge,style:be,initial:"hidden",animate:"show",children:[e(p.path,{variants:N,d:"M16.101 262.979C-5.614 230.59-8.09 194.077 26.771 162.824c29.364-26.329 77.65-51.302 137.341-91.185 27.773-18.557 42.995-44.574 55.491-71.594 6.279 47.8-10.817 93.485-107.154 140.471-50.919 24.834-82.238 67.232-96.348 122.463z"}),e(p.path,{variants:N,d:"M74.148 333.229c-33.635-34.602-47.288-71.354-10.592-114.391 8.355-9.803 17.294-18.486 26.985-27.083-8.409 14.957-13.21 32.189-13.21 50.513 0 9.199 1.211 18.127 3.48 26.627-3.483 17.927-4.47 38.654-6.663 64.334zm71.762-188.412c13.146-11.603 27.386-24.958 42.889-41.214 27.904-29.267 44.156-66.675 53.908-100.928 13.337 41.638 7.462 87.167-42.145 137.933a103.369 103.369 0 0 0-19.678-1.893c-12.262 0-24.042 2.16-34.974 6.102z"}),e(p.path,{variants:N,d:"M143.593 411.547c-36.726-23.625-56.713-58.084-41.084-101.723 11.086 12.84 25.267 22.943 41.357 29.137-3.885 23.154-3.891 47.418-.273 72.586zm72.912-266.495c2.903-4 5.833-8.072 8.781-12.216 23.536-33.074 32.539-75.066 34.297-110.639 22.316 37.401 26.925 82.874-9.462 143.188-9.726-8.766-21.109-15.727-33.616-20.333z"}),e(p.path,{variants:N,d:"M165.354 176.129h80.784c13.46 0 23.015 3.606 28.643 10.784 5.66 7.177 7.341 16.067 5.048 26.641-1.929 8.893-6.151 16.525-12.671 22.896-4.365 4.234-10.099 7.598-17.231 10.047 9.453 2.592 15.859 7.072 19.238 13.375 3.34 6.336 3.99 14.283 1.918 23.84-1.693 7.807-4.902 14.809-9.603 21.041-4.732 6.232-10.38 11.135-17.02 14.773-4.094 2.24-9.913 3.887-17.448 4.902-10.016 1.365-16.604 2.064-19.791 2.064h-74.477l32.61-150.363zm30.736 58.99h18.757c6.731 0 11.685-1.26 14.889-3.744 3.181-2.521 5.261-6.125 6.278-10.818.949-4.375.395-7.807-1.708-10.258-2.126-2.484-6.445-3.711-12.979-3.711h-19.05l-6.187 28.531zm-12.809 59.063h22.009c7.445 0 12.982-1.4 16.62-4.238 3.671-2.834 6.027-6.65 7.068-11.447.964-4.445.243-8.016-2.195-10.713-2.44-2.695-7.411-4.061-14.985-4.061h-21.911l-6.606 30.459zm133.238-118.053h56.76l2.072 91.48 41.652-91.48h56.564l-32.609 150.365h-35.24l24.865-114.656-52.204 114.656h-31.891l-2.376-114.656-24.865 114.656h-35.338l32.61-150.365zM164.612 0.0"})]})}),ye=t.div`
  stroke: #0000ff;
  width: 200px;
`,xe={hidden:{opacity:0,scale:0},visible:{opacity:1,scale:1,transition:{type:"ease",delayChildren:.5,staggerChildren:.2}}},ke={hidden:{y:20,opacity:0},visible:{y:0,opacity:1}},y=({children:n})=>e(p.div,{variants:xe,initial:"hidden",animate:"visible",children:n}),h=({children:n})=>e(p.div,{variants:ke,children:n}),we=()=>i(Ne,{children:[e(ve,{}),e(a,{children:"Hello I am"}),e(v,{children:"Bruno Millalipe"}),e(a,{children:"- Web Developer -"}),e(y,{children:i(Se,{children:[e(h,{children:i($,{color:"red",children:[e("i",{className:"fas fa-envelope"}),e(a,{children:"brunomstyle@gmail.com"})]})}),e(h,{children:i($,{color:"white",children:[e("i",{className:"fab fa-github-square"}),e(a,{children:"github.com/brunostyle"})]})}),e(h,{children:i($,{color:"yellow",children:[e("i",{className:"fab fa-instagram"}),e(a,{children:"instagram.com/bruno.14"})]})})]})})]}),Ne=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 3em;
`,Se=t.div`
  @media screen and (min-width: 720px) {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;
  }
`,$=t.div`
  display: flex;
  align-items: center;
  gap: 1em;
  i {
    font-size: 1.2em;
    color: ${n=>n.color?n.color:"blue"};
  }

  ${a} {
    color: #fff;
  }
`;var Ce="/assets/bruno.6799e273.jpg",ze="/assets/cv_bruno.2d8a5c4c.pdf";const $e={hidden:{opacity:0,scale:0},visible:{opacity:1,scale:1,transition:{type:"easeInOut"}},exit:{opacity:0,scale:0,transition:{type:"easeInOut"}}},z=({children:n})=>e(p.div,{variants:$e,initial:"hidden",animate:"visible",exit:"exit",children:n}),Ie=()=>e(Le,{children:i(j,{children:[e(v,{children:"About"}),e(a,{children:"My introduction"}),e(z,{children:e(Me,{children:e("img",{src:Ce,alt:"bruno"})})}),e(a,{children:"I am a web developer, with extensive knowledge and years of experience, working in web technologies and UI / UX design, delivering quality work."}),i(je,{children:[i("div",{children:[e(I,{children:"05+"}),e(a,{children:"years of experience"})]}),i("div",{children:[e(I,{children:"20+"}),e(a,{children:"finished projects"})]}),i("div",{children:[e(I,{children:"1000+"}),e(a,{children:"hours worked"})]})]}),i(Ae,{href:ze,download:"cv_bruno.pdf",children:[e("i",{className:"far fa-file-pdf"})," Download CV"]})]})}),Le=t.div`
    text-align: center;
`,je=t.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1em;
    margin-bottom: 1.5em;
`,Pe=L`
    0% {transform: rotate(0deg)}
    100% {transform: rotate(360deg)}
`,Be=L`
    0%{transform: scale(.9); opacity: .8;}
    100%{transform: scale(1); opacity: 1;}
`,Me=t.div`
    animation-name: ${Be};
    animation-duration: 3s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    width: 9.3em;
    height: 9.3em;
    border-radius: 0 50px 0 50px;
    position: relative;
    overflow: hidden;
    margin: auto;

    &::before {
        content: '';
        position: absolute;
        width: 9.3em;
        height: 15em;
        left: 0;
        top: -3.1em;
        background-color: blue;
        animation-name: ${Pe};
        animation-timing-function: linear;
        animation-duration: 8s;
        animation-iteration-count: infinite;
    }

    img {        
        background-color: #141414;
        position: absolute;
        inset: 2px;
        width: 9em;
        height: 9em;
        z-index: 100;
        border-radius: 0 50px 0 50px;
    }
`,I=t.h5`
    font-size: 1em;
    margin-bottom: 0;
`,Ae=t.a`
    color: #fff;
    padding: .5em 1em;
    border-radius: 20px 0 20px 0;
    transition: .3s ease;
    border: none;
    cursor: pointer;
    background-color: blue;
`,Oe=()=>i("div",{children:[e(v,{children:"Education"}),e(a,{children:"My personal education"}),e(z,{children:i(G,{children:[i(S,{end:!0,to:"",children:[e("span",{className:"fas fa-user-graduate"}),e(d,{children:"Technique"}),e("i",{className:"fas fa-chevron-up"})]}),i(S,{to:"courses",children:[e("span",{className:"fas fa-book"}),e(d,{children:"Courses"}),e("i",{className:"fas fa-chevron-up"})]})]})}),e(C,{})]}),M=()=>i(y,{children:[e(h,{children:i(f,{children:[i("div",{children:[e(d,{children:"Escuela Primaria N\xBA 35"}),e(a,{children:"Gobernador Costa - Chubut"}),i("span",{children:[e(m,{className:"far fa-calendar-alt"}),e("a",{children:"2006 - 2011"})]})]}),i("div",{children:[e(u,{}),e(b,{})]}),e("div",{})]})}),e(h,{children:i(f,{children:[e("div",{}),i("div",{children:[e(u,{}),e(b,{})]}),i("div",{children:[e(d,{children:'Escuela Secundaria N\xB0 719 "Pe\xF1ihue"'}),e(a,{children:"Gobernador Costa - Chubut"}),i("span",{children:[e(m,{className:"far fa-calendar-alt"}),e("a",{children:"2012 - 2019"})]})]})]})}),e(h,{children:i(f,{children:[i("div",{children:[e(d,{children:"Universidad del Chubut"}),e(a,{children:"Rawson - Chubut"}),i("span",{children:[e(m,{className:"far fa-calendar-alt"}),e("a",{children:"2020 - 2022"})]})]}),e("div",{children:e(u,{})}),e("div",{})]})})]}),Re=()=>i(y,{children:[e(h,{children:i(f,{children:[i("div",{children:[e(d,{children:"HTML and CSS"}),e(a,{children:"Udemy Courses"}),i("span",{children:[e(m,{className:"far fa-calendar-alt"}),e("a",{children:"2016 - 2017"})]})]}),i("div",{children:[e(u,{}),e(b,{})]}),e("div",{})]})}),e(h,{children:i(f,{children:[e("div",{}),i("div",{children:[e(u,{}),e(b,{})]}),i("div",{children:[e(d,{children:"JavaScript"}),e(a,{children:"Platzi"}),i("span",{children:[e(m,{className:"far fa-calendar-alt"}),e("a",{children:"2017 - 2019"})]})]})]})}),e(h,{children:i(f,{children:[i("div",{children:[e(d,{children:"React and Firebase"}),e(a,{children:"Udemy Courses"}),i("span",{children:[e(m,{className:"far fa-calendar-alt"}),e("a",{children:"2019 - 2020"})]})]}),i("div",{children:[e(u,{}),e(b,{})]}),e("div",{})]})}),e(h,{children:i(f,{children:[e("div",{}),i("div",{children:[e(u,{}),e(b,{})]}),i("div",{children:[e(d,{children:"Bases de Datos Relacionales"}),e(a,{children:"Platzi"}),i("span",{children:[e(m,{className:"far fa-calendar-alt"}),e("a",{children:"2020 - 2021"})]})]})]})}),e(h,{children:i(f,{children:[i("div",{children:[e(d,{children:"PostgreSQL"}),e(a,{children:"Udemy Courses"}),i("span",{children:[e(m,{className:"far fa-calendar-alt"}),e("a",{children:"2020 - 2021"})]})]}),e("div",{children:e(u,{})}),e("div",{})]})})]}),Ee=()=>i("div",{children:[e(v,{children:"Skills"}),e(a,{children:"My technical level"}),e(z,{children:i(G,{children:[i(S,{end:!0,to:"",children:[e("span",{className:"fas fa-code"}),e(d,{children:"Frontend"}),e("i",{className:"fas fa-chevron-up"})]}),i(S,{to:"backend",children:[e("span",{className:"fas fa-database"}),e(d,{children:"Backend"}),e("i",{className:"fas fa-chevron-up"})]})]})}),e(C,{})]}),Te=({skill:n,porcentage:o,icon:r})=>i(F,{children:[i(O,{children:[i(O,{children:[e(Ve,{className:r}),e(A,{children:n})]}),e(A,{children:o})]}),e(Ue,{porcentage:o})]}),A=t.h4`
  font-size: 1em;
`,Ve=t.i`
  font-size: 1.4em;
`,O=t.div`
  display: flex;
  gap: 1em;
  justify-content: space-between;
  align-items: center;
`,Ge=L`
    0% {width: 0%}
    100% {width: ${n=>n.porcentage}}
`,Ue=t.div`
  height: 0.3em;
  background-color: blue;
  width: ${n=>n.porcentage};
  animation-name: ${Ge};
  animation-duration: 0.8s;
  animation-timing-function: ease;
`;var _e=[{id:1,icon:"fab fa-html5",skill:"HTML",porcentage:"100%",category:"frontend"},{id:2,icon:"fab fa-css3",skill:"CSS",porcentage:"100%",category:"frontend"},{id:3,icon:"fab fa-js",skill:"JavaScript",porcentage:"100%",category:"frontend"},{id:4,icon:"fab fa-react",skill:"React",porcentage:"100%",category:"frontend"},{id:5,icon:"fab fa-sass",skill:"Sass",porcentage:"90%",category:"frontend"},{id:6,icon:"fab fa-node",skill:"Node JS",porcentage:"80%",category:"backend"},{id:7,icon:"fab fa-node-js",skill:"Express JS",porcentage:"80%",category:"backend"},{id:8,icon:"fas fa-database",skill:"MongoDB",porcentage:"60%",category:"backend"},{id:9,icon:"fas fa-database",skill:"SQL Server",porcentage:"100%",category:"backend"},{id:10,icon:"fab fa-java",skill:"Java",porcentage:"50%",category:"backend"}];const R=()=>{const{category:n="frontend"}=T(),o=_e.filter(r=>r.category===n);return e(y,{children:o.map(r=>r.category===n&&e(Te,w({},r),r.id))})};J.use([W]);const De=({children:n})=>e(Q,{effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",spaceBetween:40,loop:!0,coverflowEffect:{rotate:0},autoplay:{delay:4e3},children:n}),He=({id:n,image:o,title:r})=>e(K,{to:n.toString(),children:e(V,{src:o,alt:r})});var U=[{id:1,image:"../img/works/3.jpg",title:"Landing Page",description:"Pagina con particulas integradas",link:"https://brunostyle.github.io/landing-page"},{id:2,image:"../img/works/2.jpg",title:"Christmas Gift",description:"Pagina para regalar gifts navide\xF1os",link:"https://brunostyle.github.io/christmas-gift"},{id:3,image:"../img/works/4.jpg",title:"Galery",description:"Galeria de imagenes",link:"https://brunostyle.github.io/galery"},{id:4,image:"../img/works/1.jpg",title:"Mobile App",description:"Pagina de celulares",link:"https://brunostyle.github.io/mobile-app"}];const qe=()=>i("div",{children:[e(v,{children:"Portfolio"}),e(a,{children:"Work Gallery"}),e(j,{children:e(De,{children:U.map(n=>e(X,{className:"portfolio__card",children:e(He,w({},n))},n.id))})}),e(C,{})]}),Fe=({children:n})=>e(Y,{options:{max:50,scale:"105%",transition:!0},children:n}),Je=()=>{const{id:n}=T(),o=Z(),{image:r,description:x,link:c,title:s}=U.find(_=>_.id===Number(n));return e(Xe,{children:e(z,{children:i(Ke,{children:[e(We,{onClick:()=>o("/portfolio"),children:e("i",{className:"fas fa-times"})}),e(Fe,{children:e(V,{src:r,alt:s})}),e(d,{children:s}),e(a,{children:x}),e(Qe,{href:c,target:"_blank",children:"See more"})]})})})},We=t.button`
    position: absolute;
    top: -1em;
    right: -2em;
    padding: .5em;
    font-size: 1.5em;
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
`,Qe=t.a`
    display: inline-block;
    color: #fff;
    font-weight: bold;
    padding: .6em 1em;
    border-radius: 20px 0 20px 0;
    border: 2px solid blue;
    background-color: blue;
`,Ke=t.div`
    position: relative;
    width: 90%;
    max-width: 20em;
    margin: 6em auto 0;
    text-align: center;
`,Xe=t.div`
    background-color: rgba(0,0,0,.9);
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
`;var Ye=[{id:1,icon:"fas fa-mobile-alt",title:"Responsive design",description:"Your site will display correctly on any device, including desktop computers, tablets, and mobile phones."},{id:2,icon:"fas fa-pencil-ruler",title:"Creative design",description:"Good, attractive web design helps you keep your potential customers on your site, which is the digital face of your business."},{id:3,icon:"fas fa-thumbs-up",title:"Social media integration",description:"There are many social platforms, and you should promote your presence on them on your website."},{id:4,icon:"fas fa-search-plus",title:"SEO",description:"I will optimize your site with a smart search engine optimization strategy to generate leads."},{id:5,icon:"fas fa-tachometer-alt",title:"Good performance",description:"Retaining users is essential to improve conversions. High-performing sites attract and retain users"},{id:6,icon:"fas fa-code",title:"Development",description:"I know the importance of web design and I can help you create a website that you like."}];const Ze=({icon:n,title:o,description:r})=>e(ei,{children:i(h,{children:[e(m,{className:n}),e(d,{children:o}),e(a,{children:r})]})}),ei=t.div`
  padding: 1em;
  background-color: #252020;
  border-radius: 5px;
  transition: 0.5s;
  text-align: center;
  box-shadow: 0 2px 10px #111;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  & ${a} {
    transition: 0.5s;
  }

  &:hover ${a} {
    color: #fff;
  }
`,ii=()=>i("div",{children:[e(v,{children:"Services"}),e(a,{children:"Services that I offer to my clients"}),e(y,{children:e(pe,{children:Ye.map(n=>e(Ze,w({},n),n.id))})})]}),ni=()=>{const n=ee();return e(ie,{exitBeforeEnter:!0,children:e(ne,{location:n,children:i(l,{path:"/",element:e(ue,{}),children:[e(l,{index:!0,element:e(we,{})}),e(l,{path:"about",element:e(Ie,{})}),i(l,{path:"education",element:e(Oe,{}),children:[e(l,{index:!0,element:e(M,{})}),e(l,{path:"technique",element:e(M,{})}),e(l,{path:"courses",element:e(Re,{})})]}),i(l,{path:"skills",element:e(Ee,{}),children:[e(l,{index:!0,element:e(R,{})}),e(l,{path:":category",element:e(R,{})})]}),e(l,{path:"portfolio",element:e(qe,{}),children:e(l,{path:":id",element:e(Je,{})})}),e(l,{path:"services",element:e(ii,{})}),e(l,{path:"*",element:e(te,{to:"/"})})]})},n.pathname)})};ae.render(e(re,{children:e(ni,{})}),document.getElementById("root"));
