const open = document.getElementById("buttonOpen"),
        register = document.getElementById("buttonRegister"),
        text = document.getElementById("inputText"),
        password = document.getElementById("inputPassword")

register.addEventListener('click', () => {
    if(!text.value && !password.value) {
        alert("Error")
        console.error("Error")
    } else {
        let data = []
        if(JSON.parse(localStorage.getItem('Data'))) {data.push(...JSON.parse(localStorage.getItem("Data")))}
        delete localStorage.getItem("Data")
        data.push({
            Login: text.value,
            Password: password.value
        })
        
        localStorage.setItem("Data", JSON.stringify(data))
    }
})

document.getElementById("revers").addEventListener("click", () =>{
    let data = []
    data.push(...JSON.parse(localStorage.getItem("Data")))
    delete localStorage.Data
    data.map((el) => {
        if(el.Login === document.getElementById("reversPasswordLoginInput").value) {
            el.Password = document.getElementById("nowPassword").value
        }
        return 0;
    })
    console.log(data)
    localStorage.setItem("Data", JSON.stringify(data))
})