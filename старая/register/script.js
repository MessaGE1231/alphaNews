



document.getElementById("registerButton").addEventListener("click", () => {
  const Data = []
  if(!document.getElementById("loginInput").value && !document.getElementById("passwordInput").value) {
    alert("Error register")
  } else {

    if(localStorage.getItem("data")) {
    Data.push(...JSON.parse(localStorage.getItem("data"))) 
    }

    Data.push({
      Name: document.getElementById("loginInput").value,
      Password: document.getElementById("passwordInput").value,
      Status: "User"
    })

    delete localStorage.data

    localStorage.setItem('data', JSON.stringify(Data))
  }

})


document.getElementById("openButton").addEventListener("click", () => {
  if(!document.getElementById("loginInput").value && !document.getElementById("passwordInput").value) {
    alert("Error register")
  } else {

    JSON.parse(localStorage.getItem("data")).map((el) => {
      if(document.getElementById("loginInput").value === el.Name && document.getElementById("passwordInput").value === el.Password) {
        alert("Open gut")
      }
    })
  }
})