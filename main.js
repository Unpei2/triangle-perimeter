// Triangle Perimeter Assignment Start Code





document.getElementById("button").addEventListener("click",click)
function click(){


let Perimeter = document.getElementById("perimeter")

let xA = +document.getElementById("xA").value
let yA = +document.getElementById("yA").value
let xB = +document.getElementById("xB").value
let yB = +document.getElementById("yB").value
let xC = +document.getElementById("xC").value
let yC = +document.getElementById("yC").value

let AB = dist(xA,yA,xB,yB)
let AC = dist(xA,yA,xC,yC)
let BC = dist(xB,yB,xC,yC)
Perimeter.innerHTML = AB + AC + BC 

document.getElementById("abdist").innerHTML = AB
document.getElementById("acdist").innerHTML = AC
document.getElementById("bcdist").innerHTML = BC

}

function dist(x1, y1, x2, y2){
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)
}