let div1 = document.createElement("div");
div1.setAttribute("id","container")

let div2 = document.createElement("div");
div2.setAttribute("id","row")

let div3 = document.createElement("div");
div3.setAttribute("id","column")



div2.appendChild(div3)
div1.appendChild(div2)
document.body.append(div1);
document.body.append(div2);
document.body.append(div3);