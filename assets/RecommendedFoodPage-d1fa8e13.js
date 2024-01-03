import{s as n,H as r,u as c,V as x,r as a,j as e,C as m,t as p,q as l,A as g}from"./index-f816ea25.js";import{g as f,a as h,b as u,c as b,d as w}from"./getRecommendedFood-be8f4d82.js";const j="/fs-84-react-node-Tasitaforme/assets/food-desk@1x-a984dc19.png",k="/fs-84-react-node-Tasitaforme/assets/food-desk@2x-1318a229.png",F="/fs-84-react-node-Tasitaforme/assets/food-tab@1x-20ca8956.png",T="/fs-84-react-node-Tasitaforme/assets/food-tab@2x-f20df540.png",R="/fs-84-react-node-Tasitaforme/assets/food-mob@1x-411148cb.png",v="/fs-84-react-node-Tasitaforme/assets/food-mob@2x-5a8c6e43.png",I=n.section`
  padding-top: 16px;
  padding-bottom: 40px;

  @media screen and (min-width: 834px) {
    padding-top: 24px;
    padding-bottom: 100px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 20px;
    padding-bottom: 60px;
  }
`,$=n(r)`
  margin-bottom: 16px;

  @media screen and (min-width: 834px) {
    margin-bottom: 20px;
  }
`,y=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 24px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    column-gap: 44px;
    justify-content: flex-start;
    align-items: flex-start;
  }
`,L=n.div`
  width: 300px;
  height: 312px;
  flex-shrink: 0;

  background-image: url(${R});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${v});
  }

  @media screen and (min-width: 834px) {
    width: 380px;
    height: 396px;
    background-image: url(${F});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${T});
    }
  }

  @media screen and (min-width: 1440px) {
    width: 536px;
    height: 560px;
    background-image: url(${j});
    margin-left: 116px;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${k});
    }
  }
`,S=n.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 20px;
  }
  @media screen and (min-width: 1440px) {
    width: 676px;
  }
`;function C(){const i=c(x),[d,s]=a.useState([]),t=f(d,10);return a.useEffect(()=>{i&&h().then(o=>{s(o)}).catch(o=>console.log(o))},[i]),e.jsx("main",{children:e.jsx(I,{children:e.jsxs(m,{children:[e.jsx($,{children:"Recommended food"}),e.jsxs(y,{children:[e.jsx(L,{alt:"Illustration of women with food",width:"536px"}),d.length===0?e.jsx(p,{}):e.jsx(S,{children:t.map(o=>e.jsxs(u,{children:[e.jsx("img",{src:o.img,alt:o.name,width:"46px"}),e.jsxs("div",{children:[e.jsx(b,{children:o.name}),e.jsxs(w,{children:[e.jsx(l,{children:o.amount}),e.jsxs(g,{children:[o.calories," calories"]})]})]})]},o._id))})]})]})})})}export{C as default};
