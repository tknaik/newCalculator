import{R as e,C as t,a as n}from"./vendor.b410e576.js";const a=[7,8,9,4,5,6,1,2,3,"",0,"C"],r=t=>e.createElement("div",{className:"key_container",onClick:e=>{e.target.value&&"C"!==e.target.value?t.onClick(e.target.value):"C"===e.target.value&&t.onDelete()}},a.map((t=>e.createElement("input",{type:"button",key:t,value:t})))),l=()=>[Math.floor(6*Math.random()+13),Math.floor(7*Math.random()+3)],o=()=>{const[n,a]=t.exports.useState(l()),[o,c]=t.exports.useState("");return e.createElement("div",{className:"main_container"},e.createElement("div",{className:"question_box"},e.createElement("div",{className:"question"},n[0]," × ",n[1]),e.createElement("div",{className:"input"},e.createElement("input",{type:"number",value:o,onChange:e=>{c(e.target.value)}}),e.createElement("button",{onClick:()=>{return e=o,console.log(`The answer I got is ${e}`),void(parseInt(e)===n[0]*n[1]?(console.log("Great Correct Answer"),a(l()),c("")):console.log("Wrong Answer!! Right answer is ",n[0]*n[1]));var e}},"Check")),e.createElement(r,{onClick:e=>{c((t=>t+e))},onDelete:()=>{o.length>0&&c((e=>e.slice(0,e.length-1)))}})))};function c(){return e.createElement(o,null)}n.render(e.createElement(e.StrictMode,null,e.createElement(c,null)),document.getElementById("root"));