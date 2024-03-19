
link.addEventListener('click', (event) => {

  event.preventDefault();
  document.body.insertAdjacentHTML("beforeend",``)
  document.body.insertAdjacentHTML("beforeend",`<section id = "overley"></section>`)
  let section = document.getElementById("registerWindowSection")
  section.style.display = "block"
  let owerley = document.getElementById("overley")
  owerley.style.display = "block"
  
  })