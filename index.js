function onClick1() {
    document.getElementById("btn-2").style.display = "block"
    document.getElementById("btn-3").style.display = "block"
}

function onClick2() {
    document.getElementById("btn-1").innerText = "2"
    document.getElementById("btn-2").style.display = "none"
}

function onClick3() {
    document.getElementById("btn-1").innerText = "3"
    document.getElementById("btn-3").style.display = "none"
}