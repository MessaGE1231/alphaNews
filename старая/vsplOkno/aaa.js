let modal = document.getElementById('modal')
let button = document.getElementById('myButton')
let span = document.getElementsByClassName("close")[0];
let modalCon = document.getElementById('modalContent');


button.onclick = function () {
    modal.style.display = "block"
    modalCon.style.display = "block"
    modal.style.display = "f"
}

span.onclick = function () {
    modal.style.display = "none"
}