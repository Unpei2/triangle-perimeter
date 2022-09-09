// Triangle Perimeter Assignment Start Code
let xA = +document.getElementById("xA").value
let yA = +document.getElementById("yA").value
let xB = +document.getElementById("xB").value
let yB = +document.getElementById("yB").value
let xC = +document.getElementById("xC").value
let yC = +document.getElementById("yC").value

let AB = document.getElementById("abdist")
let AC = document.getElementById("acdist")
let BC = document.getElementById("bcdist")
let Perimeter = document.getElementById("perimeter")

document.getElementById("button").addEventListener("click",click)
function click(){
AB.innerHTML = dist(xA,yA,xB,yB)
AC.innerHTML = "hello!"
BC.innerHTML = "hellosdasd"
Perimeter.innerHTML = "ab + ac + bc"
}
function dist(x1, y1, x2, y2){
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)
}