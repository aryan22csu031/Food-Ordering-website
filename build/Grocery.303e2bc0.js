function e(e,a,r,s){Object.defineProperty(e,a,{get:r,set:s,enumerable:!0,configurable:!0})}var a=globalThis.parcelRequireea38,r=a.register;r("63M6l",function(r,s){Object.defineProperty(r.exports,"__esModule",{value:!0,configurable:!0}),e(r.exports,"default",()=>o);var t=a("ayMG0"),l=a("acw62"),n=a("7miKo"),o=()=>{let[e,a]=(0,l.useState)(""),[r,s]=(0,l.useState)("apple");(0,l.useEffect)(()=>{o()},[]);let o=async()=>{let a=await fetch("https://api.spoonacular.com/food/search?query="+e+"&number=1&apiKey=de2965f2809a4cec998ca602d7456597"),r=await a.json();s(r),console.log(r)};return console.log(e),(0,t.jsxs)("div",{className:"flex flex-col justify-evenly items-center",children:[(0,t.jsxs)("div",{className:"head my-7 flex flex-col items-center",children:[(0,t.jsx)("h1",{className:"text-7xl font-extrabold text-green-500",children:"EaseMart"}),(0,t.jsx)("p",{className:" mt-5 font-medium text-2xl ",children:"- Your Pantry Partner"})]}),(0,t.jsxs)("div",{className:"flex justify-between my-3 gap-6",children:[(0,t.jsx)("input",{type:"text",placeholder:"search items",className:"border border-black rounded-xl px-2 text-wrap",onChange:e=>a(e.target.value)}),(0,t.jsx)("button",{className:"border-0 border-black rounded-lg p-2 w-20 font-normal text-black bg-red-500 hover:bg-red-600",onClick:o,children:"search"})]}),(0,t.jsx)("div",{className:"body flex flex-wrap justify-around",children:(0,t.jsx)(n.default,{item:r})})]})}}),r("7miKo",function(r,s){e(r.exports,"default",()=>l);var t=a("ayMG0");a("acw62");var l=({item:e})=>{let a=parseInt(100*Math.random(0,8)),r=parseInt(20*Math.random(100,200));console.log(e);let s=e?.searchResults?.[0]?.results?.[0]?.image,l=e?.searchResults?.[0]?.results?.[0]?.name;return(0,t.jsxs)("div",{className:"res-card p-3 m-2 bg-slate-200 w-fit min-h-[38rem] max-h-[38rem] flex flex-col justify-evenly items-center rounded-2xl",children:[(0,t.jsx)("img",{className:"res-logo w-[20rem] mb-[1rem] min-h-[10rem]",src:s}),(0,t.jsx)("h3",{className:"font-bold text-red-500 text-xl",children:l}),(0,t.jsxs)("h4",{className:"font-semibold w-[15rem] text-center",children:["Rs.",a,"/kg"]}),(0,t.jsxs)("h4",{className:"font-semibold",children:[r," mins away"]}),(0,t.jsx)("button",{className:"border-0 border-black rounded-lg p-2 w-32 font-normal text-black bg-green-500 hover:bg-green-600",children:"Buy Now"})]})}});
//# sourceMappingURL=Grocery.303e2bc0.js.map
