let modalProdv = document.getElementById('modalProdv')
let modalProdvContent = document.getElementById('modalProdvContent')

function openModalProdvOne() {
modalProdv.style.display = "block"
modalProdvContent.style.display = "block"
}

function delModalProdv () {
  modalProdv.style.display = "none"
}

let modal = document.getElementById('modal')
let button = document.getElementById('textNews')
let modalCon = document.getElementById('modalContent');

function del () {
    modal.style.display = "none"
}

// REGISTER

function openRegisterModal() {
  let section = document.getElementById('registerSection');
  let article = document.getElementById('registerArticle');
  section.style.display = 'flex'
  article.style.display = 'flex'
}




const passwordReverseSection = document.getElementById('passwordReverseSection')
const passwordReverseButton = document.getElementById('passwordReverseButton')
const register = document.getElementById("buttonRegister")
const text = document.getElementById("inputText")
const password = document.getElementById("inputPassword")
const deleteButtonReg = document.getElementById('deleteButtonReg')

const Login = document.getElementById('inputLogin'),
      passwordLogin = document.getElementById('inputPasswordLogin'),
      buttonLogin = document.getElementById('buttonLogin')

buttonLogin.addEventListener('click', () =>
openSite())

function openSite() {
let data = []
data.push(JSON.parse(localStorage.getItem("Data")))
console.log()
data.map((el) => {
alert(el.Login)
})
}



passwordReverseButton.addEventListener('click', () => {
  passwordReverseSection.style.display = 'flex'
})

register.addEventListener('click', () => {
    if(text.value === password.value) {
        alert("Введите другой пароль, логин")
    } else {
        let data = []
        if(JSON.parse(localStorage.getItem('Data'))) {data.push(...JSON.parse(localStorage.getItem("Data")))}
        delete localStorage.getItem("Data")
        data.push({
            Login: text.value,
            Password: password.value
        })
        localStorage.setItem("Data", JSON.stringify(data))
        alert('Пользователь зарегестрирован')
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
    localStorage.setItem("Data", JSON.stringify(data))
})

// REGISTER


window.onload = load();


document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  addZayavka();
});

function load() {
  if (localStorage.getItem("members") == null) return;
  let members = Array.from(JSON.parse(localStorage.getItem("members")));
  members.forEach(zayavka => {
    const list = document.querySelector("ul");
    const li = document.createElement("li");
    li.innerHTML = `<span style="font-family: sans-serif; font-size: 24px">Заявка на: </span><input type="text" value="${zayavka.zayavka}" class="zayavka" onfocus="getZayavka(this)" onblur="editZayavka(this)">
          <button class="deleteButton" onclick="removeZayavka(this)">Отменить заявку</button>`;
    list.insertBefore(li, list.children[1]);
  });
}

function addZayavka() {
  const zayavka = document.querySelector("form input");
  const list = document.querySelector("ul");
  if (zayavka.value === "") {
    alert("Добавьте номер");
    return false;
  }
  if (document.querySelector(`input[value="${zayavka.value}"]`)) {
    alert("Такая заявка уже есть");
    return false;
  }
  
  localStorage.setItem("members", JSON.stringify([...JSON.parse(localStorage.getItem("members") || "[]"), { zayavka: zayavka.value}]));
  const li = document.createElement("li");
  li.innerHTML = `<span style="font-family: sans-serif; font-size: 24px">Заявка на: </span><input type="text" value="${zayavka.value}" class="zayavka" onfocus="getZayavka(this)" onblur="editZayavka(this)">
  <button class="deleteButton" onclick="removeZayavka(this)">Отменить заявку</button>`;
  list.insertBefore(li, list.children[0]);
  zayavka.value = "";
}

function removeZayavka(event) {
  let members = Array.from(JSON.parse(localStorage.getItem("members")));
  members.forEach(zayavka => {
    if (zayavka.zayavka === event.parentNode.children[1].value) {
      members.splice(members.indexOf(zayavka), 1);
    }
  });
  localStorage.setItem("members", JSON.stringify(members));
  event.parentElement.remove();
}

let currenturrentZayavka = null;
function getZayavka(event) {
  currentZayavka = event.value;
}
function editZayavka(event) {
  let members = Array.from(JSON.parse(localStorage.getItem("members")));
  if (event.value === "") {
    alert("Введите номер");
    event.value = currentZayavka;
    return;
  }
  members.forEach(zayavka => {
    if (zayavka.zayavka === event.value) {
      alert("Task already exist!");
      event.value = currentZayavka;
      return;
    }
  });
  members.forEach(zayavka => {
    if (zayavka.zayavka === currentZayavka) {
      zayavka.zayavka = event.value;
    }
  });

  localStorage.setItem("members", JSON.stringify(members));
}









function openModalOne() {
    modal.style.display = "grid"
    modalCon.style.display = "block"
    modal.style.display = "f"
    modalCon.innerHTML = `<button onclick="del()" class="close">Close</button>
    <section>
      <article id="imgModalArt">
    <img id="autoModalImg" src="modallll1.png" alt="">
    <article id="navigationModal">
    <section id="navModalText">
     <article id="ellipse">
       <img src="modalImgEllipse1.png" alt="">
       <p id="modalNavName">Елена Тонкова, 21 мар. 2023</p>
     </article>
     <article id="alphaNewsModal">
<p>Alpha-News</p>
     </article>
    </section>
</article>
  </article>

  <section id="TextModal" style="width:1179px;">
    <p style="font-weight: bold;">В Киргизии откроют автозавод, машины которого могут привезти в Россию</p>
<p style="padding-top: 15px;">Его построят в 50 километрах от Бишкека, а технологическим партнером станет узбекская
автокомпания «Узавтосаноат», выпускающая машины Chevrolet на мощностях UzAuto Motors.
Об этом сообщается на сайте Кабмина Киргизии. В год предприятие планирует выпускать более
30 тысяч автомобилей, и немалый объем придется на Россию, уверены эксперты.</p>
<p style="padding-top:10px;"></p>
<p>На первом этапе на заводе наладят крупноузловую сборку, создав 500 рабочих мест. В течение первых
трех лет он будет выпускать до 10 тысяч машин, а затем локализацию начнут повышать. К 4-5 году
она должна составить 15-20 процентов, а объем производства — более 20 тысяч машин в год.</p>
<p style="padding-top:10px;"></p>
<p>Мелкоузловой выпуск планируют наладить на шестой год работы завода. К тому моменту
с конвеера будет сходить уже больше 30 тысяч автомобилей ежегодно, а комплектующие для
них будут изготавливать местные компании. При этом продукцию освободят от НДС, дадут заводу
преференции по госзакупке и другие поблажки.</p>
  </section>
   </section>`
}

function openModalTwo() {
    modal.style.display = "grid"
    modalCon.style.display = "block"
    modal.style.display = "f"
    modalCon.innerHTML = `<button onclick="del()" class="close">Close</button>
    <section>
      <article id="imgModalArt">
    <img id="autoModalImg" src="modalTwoImg.png" alt="">
    <article id="navigationModal">
    <section id="navModalText">
     <article id="ellipse">
       <img src="modalImgEllipse1.png" alt="">
       <p id="modalNavName">Елена Тонкова, 21 мар. 2023</p>
     </article>
     <article id="alphaNewsModal">
<p>Alpha-News</p>
     </article>
    </section>
</article>
  </article>

  <section id="TextModal" style="width:1179px;">
    <p style="font-weight: bold;">Российский союз автостраховщиков составил рейтинг популярных автомобилей</p>
<p style="padding-top: 15px;">Эксперты Российского союза страховщиков и Всероссийского союза страховщиков, изучили авторынок 
и составили рейтинг иномарок, которые пользуются спросом в Москве и регионах. 
Москва лидирует по количеству автомобилей Renault, Nissan, Ford и Volkswagen.</p>

<p style="padding-top:10px;"></p>

<p>Около 6,9 процента всех Renault ездит по дорогам Москвы, столько же зарегистрировано в Подмосковье. 
В Санкт-Петербурге — 4,5%, в Татарстане — 4,2%, в Башкортостане — 3,9%.</p>

<p style="padding-top:10px;"></p>

<p>Автомобильная марка Nissan также популярна в Москве. На столичных дорогах 11,8% таких автомобилей.
 На втором и третьем местах также находятся Московская область и Петербург с показателями 8,1 и 4,3%. 
 Далее — Краснодарский край, где процент автомобилей составляет 3,9, и Свердловская область с 3,1%.</p>
  </section>
   </section>`
}

function openModalThree() {
    modal.style.display = "grid"
    modalCon.style.display = "block"
    modal.style.display = "f"
    modalCon.innerHTML = `<button onclick="del()" class="close">Close</button>
    <section>
      <article id="imgModalArt">
    <img id="autoModalImg" src="modalImage3.png" alt="">
    <article id="navigationModal">
    <section id="navModalText">
     <article id="ellipse">
       <img src="modalImgEllipse1.png" alt="">
       <p id="modalNavName">Елена Тонкова, 21 мар. 2023</p>
     </article>
     <article id="alphaNewsModal">
<p>Alpha-News</p>
     </article>
    </section>
</article>
  </article>

  <section id="TextModal" style="width:1179px;">
    <p style="font-weight: bold;">С 20 марта новых автомобилей повысится в два раза</p>
<p style="padding-top: 15px;">С понедельника, 20 марта компания АвтоВАЗ будет выпускать более 120 новых автомобилей
 Lada Vesta NG на ежедневной основе. Для сравнения, на сегодняшний день конвейера сходит не более 70 машин. Таким 
 образом, темпы производства увеличатся почти в два раза. Об этом сообщают инсайдеры в социальной сети «ВКонтакте».</p>

<p style="padding-top:10px;"></p>

<p>«Линия 1, где собирают Lada Vesta NG, пока задействована с понедельника по пятницу только в дневную смену продолжительностью 8 часов.
 Ожидается, что до конца марта этот конвейер выйдет на показатель почти в 170 автомобилей в день», — сообщают инсайдеры.</p>

<p style="padding-top:10px;"></p>

<p>Производство Lada Vesta NG на заводе В тольятти стартовало в начале марта. Ранее сборка производилась в Ижевске, 
сейчас этот завод переключили на производство запчастей.</p>
  </section>
   </section>`
}

function openModalFour() {
    modal.style.display = "grid"
    modalCon.style.display = "block"
    modal.style.display = "f"
    modalCon.innerHTML = `<button onclick="del()" class="close">Close</button>
    <section>
      <article id="imgModalArt">
    <img id="autoModalImg" src="modalImage4.png" alt="">
    <article id="navigationModal">
    <section id="navModalText">
     <article id="ellipse">
       <img src="modalImgEllipse1.png" alt="">
       <p id="modalNavName">Ксения Рахубовская, 25 апр. 2023</p>
     </article>
     <article id="alphaNewsModal">
<p>Alpha-News</p>
     </article>
    </section>
</article>
  </article>

  <section id="TextModal" style="width:1179px;">
    <p style="font-weight: bold;">Российские владельцы зарубежных электромобилей получили уведомления с требованиями доплатить утильсбор</p>
<p style="padding-top: 15px;">Владельцы зарубежных электромобилей, ввезенных в Россию, получили уведомления
 от таможенных органов с требованиями доплатить утилизационный сбор. О том, что происходит разбирались в авторском материале "Известий".</p>

<p style="padding-top:10px;"></p>

<p>В соответствии с правилами уплаты утилизационного сбора, владельцы частных электромобилей должны заплатить утильсбор
 в размере 3,4 тыс. рублей для новых моделей, а 5,2 тыс. рублей — для машин старше трех лет. Однако таможенники постановили, что эти суммы недостаточны, 
 и стали требовать от владельца одной модели электромобиля Tesla доплатить 29,2 тыс. рублей.</p>

<p style="padding-top:10px;"></p>

<p></p>
  </section>
   </section>`
}

function openModalFive() {
    modal.style.display = "grid"
    modalCon.style.display = "block"
    modal.style.display = "f"
    modalCon.innerHTML = `<button onclick="del()" class="close">Close</button>
    <section>
      <article id="imgModalArt">
    <img id="autoModalImg" src="modalImage5.png" alt="">
    <article id="navigationModal">
    <section id="navModalText">
     <article id="ellipse">
       <img src="modalImgEllipse1.png" alt="">
       <p id="modalNavName">Дарья Бугаева, 21 мар. 2023</p>
     </article>
     <article id="alphaNewsModal">
<p>Alpha-News</p>
     </article>
    </section>
</article>
  </article>

  <section id="TextModal" style="width:1179px;">
    <p style="font-weight: bold;">Кроссовер попал в страну через Беларусь</p>

<p style="padding-top: 15px;">В Россию вернулся Renault Duster, но под маркой Dacia. Автомобиль можно приобрести по цене 2,6 миллиона рублей 
у частника. Судя по объявлению, автомобиль 2022 года выпуска и 2023 модельного года, был растаможен в Беларуси и имеет все документы для 
постановки на учет в нашей стране.</p>

<p style="padding-top:10px;"></p>

<p>В число функций автомобиля входит подогрев передних сидений, система контроля спуска с горы, датчик давления шин, 
складываемые зеркала с подогревом, система помощи при парковке, камера заднего вида и климат-контроль. Также он имеет 1,5-литровый 
дизельный мотор с отдачей в 115 л.с. Коробка механическая, а привод полный.</p>

<p style="padding-top:10px;">На российском рынке Renault Duster, и другие модели бренда не представлены, 
по причине того, что компания в мае 2022 года объявила о своем уходе из страны и передаче своих активов государству.</p>

<p></p>
  </section>
   </section>`
}

function openModalSix() {
    modal.style.display = "grid"
    modalCon.style.display = "block"
    modal.style.display = "f"
    modalCon.innerHTML = `<button onclick="del()" class="close">Close</button>
    <section>
      <article id="imgModalArt">
    <img id="autoModalImg" src="modalImageSix.png" alt="">
    <article id="navigationModal">
    <section id="navModalText">
     <article id="ellipse">
       <img src="modalImgEllipse1.png" alt="">
       <p id="modalNavName">Ксения Рахубовская, 24 апр. 2023</p>
     </article>
     <article id="alphaNewsModal">
<p>Alpha-News</p>
     </article>
    </section>
</article>
  </article>

  <section id="TextModal" style="width:1179px;">
    <p style="font-weight: bold;">Эксперт высказал мнение о преимуществах иранских автомобилей на российском рынке</p>

<p style="padding-top: 15px;">Автоконцерн SAIPA планирует начать продажу своих бюджетных машин в России с 1 июня 2021 года.</p>

<p style="padding-top:10px;"></p>

<p>Андрей Трой отметил, что иранские автомобили хороши тем, что они простые. Они не являются сложными моделями
 типа BMW, где без специального оборудования не обходится даже обычный ремонт.</p>

<p style="padding-top:10px;"></p>

<p>Иранские автобренды добились практически стопроцентной локализации производства,
что означает, что при приобретении иранской машины не возникнет проблемы с поставками комплектующих.</p>

<p style="padding-top:10px;"></p>

<p>Однако иранские модели не обладают сенсорными экранами, камерами, круиз-контролем или парковочным автопилотом. 
Но для российского рынка обещан подогрев кресел. Эксперт считает, что иранские автомобили конкурировать будут с компанией «АвтоВАЗ»,
 а не с китайскими брендами. Иранские модели будут продаваться на Российском рынке по цене от 1 млн до 1,7 млн рублей.</p>
  </section>
   </section>`
}

function openModalSeven() {
    modal.style.display = "grid"
    modalCon.style.display = "block"
    modal.style.display = "f"
    modalCon.innerHTML = `<button onclick="del()" class="close">Close</button>
    <section>
      <article id="imgModalArt">
    <img id="autoModalImg" src="modalImageSeven.png" alt="">
    <article id="navigationModal">
    <section id="navModalText">
     <article id="ellipse">
       <img src="modalImgEllipse1.png" alt="">
       <p id="modalNavName">Ксения Рахубовская, 24 апр. 2023</p>
     </article>
     <article id="alphaNewsModal">
<p>Alpha-News</p>
     </article>
    </section>
</article>
  </article>

  <section id="TextModal" style="width:1179px;">
    <p style="font-weight: bold;">Собственников газовых автомобилей в Приамурье собираются освободить от уплаты транспортного налога на пять лет</p>

<p style="padding-top: 15px;"></p>


<p>Андрей Трой отметил, что иранские автомобили хороши тем, что они простые. Они не являются сложными моделями
 типа BMW, где без специального оборудования не обходится даже обычный ремонт.</p>

<p style="padding-top:10px;"></p>

<p>Новый законопроект был принят в первом чтении Законодательным собранием Амурской области 24 апреля. Согласно предложению,
 преимущества будут предоставлены автовладельцам, которые купили транспортное средство с газобаллонным оборудованием, установленным 
 на заводе-изготовителе, либо установили такое оборудование самостоятельно и зарегистрировали этот факт в ГИБДД. Однако, речь
  идет только о машинах, использующих сжатый природный газ (метан), и не будет распространяться на автомобили, потребляющие сжиженный нефтяной газ (пропан-бутан).</p>

<p style="padding-top:10px;"></p>

<p></p>
  </section>
   </section>`
}



function modalF1One() {
  modal.style.display = "grid"
  modalCon.style.display = "block"
  modal.style.display = "f"
  modalCon.innerHTML = `<button onclick="del()" class="close">Close</button>
  <section>
    <article id="imgModalArt">
  <img id="autoModalImg" src="modalF1One.png" alt="">
  <article id="navigationModal">
  <section id="navModalText">
   <article id="ellipse">
     <img src="modalImgEllipse1.png" alt="">
     <p id="modalNavName">Ксения Рахубовская, 24 апр. 2023</p>
   </article>
   <article id="alphaNewsModal">
<p>Alpha-News</p>
   </article>
  </section>
</article>
</article>

<section id="TextModal" style="width:1179px;">
  <p style="font-weight: bold;">В FIA отклонили протест Ferrari</p>

<p style="padding-top: 15px;">В FIA отклонили апелляцию Ferrari по поводу штрафа, наложенного на Карлоса Сайнcа в Австралии, посчитав, что команда не представила новых доказательств.</p>

<p style="padding-top:10px;"></p>

<p>Стюарды наказали Сайнса прибавкой пяти секунд за столкновение с Фернандо Алонсо на выходе из первого поворота после второго рестарта.
 Этот штраф привёл к тому, что с четвёртого места гонщик Ferrari опустился на 12-е в итоговой классификации.</p>

<p style="padding-top:10px;"></p>

<p>После наказания, которое команда и гонщик посчитали несправедливым, 
Ferrari потребовала права на пересмотр дела, в ходе которого должна была представить новые доказательства.</p>

<p style="padding-top:10px;"></p>

<p>В ходе видео-слушания, проведенного во вторник утром, Ferrari представила данные телеметрии, относящиеся к инциденту и
 контакту Сайнcа с Алонсо. Стюарды сочли, что никаких новых сведений они не получили, отклонив протест.</p>
</section>
 </section>`
}

function modalF1Two() {
  modal.style.display = "grid"
  modalCon.style.display = "block"
  modal.style.display = "f"
  modalCon.innerHTML = `<button onclick="del()" class="close">Close</button>
  <section>
    <article id="imgModalArt">
  <img id="autoModalImg" src="modalF1Two.png" alt="">
  <article id="navigationModal">
  <section id="navModalText">
   <article id="ellipse">
     <img src="modalImgEllipse1.png" alt="">
     <p id="modalNavName">Ксения Рахубовская, 24 апр. 2023</p>
   </article>
   <article id="alphaNewsModal">
<p>Alpha-News</p>
   </article>
  </section>
</article>
</article>

<section id="TextModal" style="width:1179px;">
  <p style="font-weight: bold;">Официально: Гран При Эмилии-Романьи отменён</p>

<p style="padding-top: 15px;">В Формуле 1 приняли решение не проводить Гран При Эмилии-Романьи в итальянской Имоле 
в этот уик-энд. Решение связано с невозможностью обеспечить безопасность болельщиков, сотрудников команд и персонала 
автодрома из-за наводнений в регионе.</p>

<p style="padding-top:10px;"></p>

<p>«Сообщество Формулы 1 выражает поддержку пострадавшим жителям региона Эмилия-Романья, – говорится в официальном заявлении Формулы 1. 
– Мы хотим отдать должное работе всех экстренных служб, которые делают всё возможное для помощи нуждающимся.</p>

<p style="padding-top:10px;"></p>

<p>После обсуждений, на которых присутствовали представители Формулы 1, президент FIA и компетентные органы, включая соответствующих министров, 
президента Автомобильного клуба Италии, главы региона Эмилия-Романья, мэра города и промоутеров, было принято решение 
не проводить гоночный уик-энд в Имоле.</p>

<p></p>
</section>
 </section>`
}

function modalF1Three() {
  modal.style.display = "grid"
  modalCon.style.display = "block"
  modal.style.display = "f"
  modalCon.innerHTML = `<button onclick="del()" class="close">Close</button>
  <section>
    <article id="imgModalArt">
  <img id="autoModalImg" src="modalF1Three.png" alt="">
  <article id="navigationModal">
  <section id="navModalText">
   <article id="ellipse">
     <img src="modalImgEllipse1.png" alt="">
     <p id="modalNavName">Ксения Рахубовская, 24 апр. 2023</p>
   </article>
   <article id="alphaNewsModal">
<p>Alpha-News</p>
   </article>
  </section>
</article>
</article>

<section id="TextModal" style="width:1179px;">
  <p style="font-weight: bold;">Франц Тост оставит пост руководителя AlphaTauri</p>

<p style="padding-top: 15px;">Франц Тост оставит пост руководителя AlphaTauri после завершения сезона 2023 года. Вместо него команду 
из Фаэнцы возглавит Лоран Мекис, в настоящее время занимающий пост спортивного директора Ferrari. В 2024-м Тост продолжит работать
 в AlphaTauri в роли консультанта.</p>

<p style="padding-top:10px;"></p>

<p>В руководстве AlphaTauri произошли и другие перемены. Питер Байер, который до лета 2022 года занимал пост
 генерального секретаря FIA и исполнительного директора Формулы 1, стал исполнительным директором команды. Он будет отвечать 
 за стратегические направления на базах AlphaTauri в Фаэнце и Великобритании.</p>

<p style="padding-top:10px;"></p>

<p>Мне уже 67 лет, поэтому настало время передать руководство нашему новому исполнительному директору Питеру и Лорану, 
который станет руководителем команды. Мы нашли двух настоящих профессионалов, которые выведут команду на
 следующий уровень. Я благодарен всем за сотрудничество».</p>

<p></p>
</section>
 </section>`
}

function modalF1Four() {
  modal.style.display = "grid"
  modalCon.style.display = "block"
  modal.style.display = "f"
  modalCon.innerHTML = `<button onclick="del()" class="close">Close</button>
  <section>
    <article id="imgModalArt">
  <img id="autoModalImg" src="modalF1Four.png" alt="">
  <article id="navigationModal">
  <section id="navModalText">
   <article id="ellipse">
     <img src="modalImgEllipse1.png" alt="">
     <p id="modalNavName">Ксения Рахубовская, 24 апр. 2023</p>
   </article>
   <article id="alphaNewsModal">
<p>Alpha-News</p>
   </article>
  </section>
</article>
</article>

<section id="TextModal" style="width:1179px;">
  <p style="font-weight: bold;">Люк Браунинг принят в Гоночную академию Williams</p>

<p style="padding-top: 15px;">Чемпион британской Формулы 3 прошлого сезона и действующий гонщик команды Hitech 
Pulse-Eight в Формуле 3 Люк Браунинг стал новым участником Гоночной академии Williams. Молодой гонщик будет работать с командой 
на базе и на трассе, а также много времени проведёт на симуляторе в Гроуве.</p>

<p style="padding-top:10px;"></p>

<p>Люк Браунинг: «Я рад стать участником Гоночной академии Williams и говорю огромное спасибо всем в Williams Racing за предоставленную возможность.</p>

<p style="padding-top:10px;"></p>

<p>Я принят в гоночную семью, которая обладает феноменальным наследием – моя мечта исполнилась. 
Мне не терпится узнать, каких результатов мы добьёмся, начав сотрудничество».</p>

<p></p>
</section>
 </section>`
}

function modalF1Five() {
  modal.style.display = "grid"
  modalCon.style.display = "block"
  modal.style.display = "f"
  modalCon.innerHTML = `<button onclick="del()" class="close">Close</button>
  <section>
    <article id="imgModalArt">
  <img id="autoModalImg" src="modalF1Five.png" alt="">
  <article id="navigationModal">
  <section id="navModalText">
   <article id="ellipse">
     <img src="modalImgEllipse1.png" alt="">
     <p id="modalNavName">Ксения Рахубовская, 24 апр. 2023</p>
   </article>
   <article id="alphaNewsModal">
<p>Alpha-News</p>
   </article>
  </section>
</article>
</article>

<section id="TextModal" style="width:1179px;">
  <p style="font-weight: bold;">Cерия Russian Endurance Challenge открывает новый сезон!</p>

<p style="padding-top: 15px;">Российская серия гонок на выносливость Russian Endurance Challenge (REC) возвращается 
на автодромы после сезонного перерыва.  Календарь 2023 года включает пять этапов, которые пройдут 
на автодромах в Москве, Санкт-Петербурге и Сочи.</p>

<p style="padding-top:10px;"></p>

<p>14 мая участники снова выйдут на старт главных «длинных» гонок в России. Первый и второй этапы 
четырехчасового марафона Russian Endurance Challenge в этом году пройдут в статусе двухэтапного ГРАН-ПРИ Москвы на подмосковной трассе 
Moscow Raceway. Старт первой гонки в 15.00.</p>

<p style="padding-top:10px;"></p>

<p>В соответствии с регламентом в гонке будут соревноваться автомобили разных классов, 
участвующих в кольцевых автогонках: от мощных спортпрототипов и суперкаров категории GT до 
автомобилей национальных классов, шорткатов и нестареющей «классики».</p>
</section>
 </section>`
}

function modalF1Six() {
  modal.style.display = "grid"
  modalCon.style.display = "block"
  modal.style.display = "f"
  modalCon.innerHTML = `<button onclick="del()" class="close">Close</button>
  <section>
    <article id="imgModalArt">
  <img id="autoModalImg" src="modalF1Six.png" alt="">
  <article id="navigationModal">
  <section id="navModalText">
   <article id="ellipse">
     <img src="modalImgEllipse1.png" alt="">
     <p id="modalNavName">Ксения Рахубовская, 24 апр. 2023</p>
   </article>
   <article id="alphaNewsModal">
<p>Alpha-News</p>
   </article>
  </section>
</article>
</article>

<section id="TextModal" style="width:1179px;">
  <p style="font-weight: bold;">В Баку сократили зону DRS на стартовой прямой</p>

<p style="padding-top: 15px;">Накануне Гран При Азербайджана в FIA подтвердили расположение двух независимых зон 
DRS на городской трассе в Баку. По сравнению с прошлым годом, на 100 метров сокращена вторая зона DRS, расположенная на стартовой прямой.</p>

<p style="padding-top:10px;"></p>

<p>Точка замера интервала между машинами перед первой зоной DRS совпадает со второй линией автомобиля безопасности, 
а использовать систему можно через 54 метра после второго поворота.</p>

<p style="padding-top:10px;"></p>

<p>Точка замера второй зоны DRS находится на апексе 20 поворота, а активировать систему можно через 447 метров после поворота.</p>
</section>
 </section>`
}

function modalF1Seven() {
  modal.style.display = "grid"
  modalCon.style.display = "block"
  modal.style.display = "f"
  modalCon.innerHTML = `<button onclick="del()" class="close">Close</button>
  <section>
    <article id="imgModalArt">
  <img id="autoModalImg" src="modalF1Seven.png" alt="">
  <article id="navigationModal">
  <section id="navModalText">
   <article id="ellipse">
     <img src="modalImgEllipse1.png" alt="">
     <p id="modalNavName">Ксения Рахубовская, 24 апр. 2023</p>
   </article>
   <article id="alphaNewsModal">
<p>Alpha-News</p>
   </article>
  </section>
</article>
</article>

<section id="TextModal" style="width:1179px;">
  <p style="font-weight: bold;">Штайнер о том, почему Леклер не выступал за Haas F1</p>

<p style="padding-top: 15px;">Шарль Леклер дебютировал в чемпионате мира в 2018-м в Sauber, но ещё в
 2016 году, когда учился в Гоночной академии Ferrari и выступал в серии GP3, начал сотрудничать с Haas F1 в качестве 
 «девелопмент-драйвера». Проще говоря, в американской команде он проходил стажировку, и логично было предположить, что именно в
  ней Леклер и начнёт свою карьеру в Формуле 1.</p>

<p style="padding-top:10px;"></p>

<p>Но получилось по-другому: в 2017-м Шарль выиграл титул в Формуле 2, 
где в том сезоне ему не было равных – кстати, вице-чемпионом молодёжной серии тогда стал российский
 гонщик Артём Маркелов. Затем Леклера пригласили в Sauber, и всё, что происходило потом – уже история.</p>

<p style="padding-top:10px;"></p>

<p>О том, почему Леклер дебютировал в Ф1 в швейцарской команде, а не в Haas, объяснил Гюнтер Штайнер, принимая участие в эфире телеканала Sky Sports.</p>
</section>
 </section>`
}

function modalF1Eight() {
  modal.style.display = "grid"
  modalCon.style.display = "block"
  modal.style.display = "f"
  modalCon.innerHTML = `<button onclick="del()" class="close">Close</button>
  <section>
    <article id="imgModalArt">
  <img id="autoModalImg" src="modalF1Eight.png" alt="">
  <article id="navigationModal">
  <section id="navModalText">
   <article id="ellipse">
     <img src="modalImgEllipse1.png" alt="">
     <p id="modalNavName">Ксения Рахубовская, 24 апр. 2023</p>
   </article>
   <article id="alphaNewsModal">
<p>Alpha-News</p>
   </article>
  </section>
</article>
</article>

<section id="TextModal" style="width:1179px;">
  <p style="font-weight: bold;">Леклер: Нас ждёт один из самых сложных этапов сезона</p>

<p style="padding-top: 15px;">В апрельской паузе между гонками Шарль Леклер выпустил свой первый сингл. В Баку гонщик Ferrari 
рассказал, что не ожидал настолько сильную реакцию на своё творчество.</p>

<p style="padding-top:10px;"></p>

<p>Шарль Леклер: «Меня удивила реакция. Я знал, что люди обратят внимание, поскольку не каждый день 
гонщик Формулы 1 выпускает музыкальное произведение. Я не хотел устраивать большую маркетинговую кампанию – моя 
цель заключалась в том, чтобы дать послушать людям мою историю, которую я сыграл на фортепиано.</p>

<p style="padding-top:10px;"></p>

<p>Это не профессиональная работа, я сделал запись ради удовольствия. Для меня музыка – способ отвлечься от гонок и подумать о чём-то другом».</p>
</section>
 </section>`
}

function modalF1Nine() {
  modal.style.display = "grid"
  modalCon.style.display = "block"
  modal.style.display = "f"
  modalCon.innerHTML = `<button onclick="del()" class="close">Close</button>
  <section>
    <article id="imgModalArt">
  <img id="autoModalImg" src="modalF1Nine.png" alt="">
  <article id="navigationModal">
  <section id="navModalText">
   <article id="ellipse">
     <img src="modalImgEllipse1.png" alt="">
     <p id="modalNavName">Ксения Рахубовская, 24 апр. 2023</p>
   </article>
   <article id="alphaNewsModal">
<p>Alpha-News</p>
   </article>
  </section>
</article>
</article>

<section id="TextModal" style="width:1179px;">
  <p style="font-weight: bold;">Гоночную серию F1 Academy не покажут в прямом эфире</p>

<p style="padding-top: 15px;">В этот уик-энд в австрийском Шпильберге состоится первый этап новой
 женской гоночной серии F1 Academy, однако заезды не будут показаны по телевидению в прямом эфире.</p>

<p style="padding-top:10px;"></p>

<p>По информации издания The Race, организаторы F1 Academy из Формулы 1, оценив финансовые затраты и технические требования, 
решили не вкладывать средства в организацию прямых трансляций первых шести этапов сезона. Вместо этого болельщикам предложено 
следить за событиями на трассе по официальному таймингу. В понедельник будут опубликованы 7-10 минутные обзоры лучших моментов каждой из трёх гонок этапа.</p>

<p style="padding-top:10px;"></p>

<p>Ожидается, что в прямом эфире будет показан финальный этап сезона F1 Academy в Остине, который пройдёт в рамках гоночного уик-энда Формулы 1.</p>
</section>
 </section>`
}

function modalF1Ten() {
  modal.style.display = "grid"
  modalCon.style.display = "block"
  modal.style.display = "f"
  modalCon.innerHTML = `<button onclick="del()" class="close">Close</button>
  <section>
    <article id="imgModalArt">
  <img id="autoModalImg" src="modalF1Ten.png" alt="">
  <article id="navigationModal">
  <section id="navModalText">
   <article id="ellipse">
     <img src="modalImgEllipse1.png" alt="">
     <p id="modalNavName">Ксения Рахубовская, 24 апр. 2023</p>
   </article>
   <article id="alphaNewsModal">
<p>Alpha-News</p>
   </article>
  </section>
</article>
</article>

<section id="TextModal" style="width:1179px;">
  <p style="font-weight: bold;">Расселл: FIA стоит прислушиваться к мнению гонщиков</p>

<p style="padding-top: 15px;">На пресс-конференции перед Гран При Азербайджана гонщик Mercedes и директор
 профсоюза гонщиков GPDA Джордж Расселл выразил обеспокоенность решениями дирекции гонки…</p>

<p style="padding-top:10px;"></p>

<p>Джордж Расселл: «Мы будем общаться с FIA, чтобы понять мотивацию их действий в Австралии. 
Это будет непросто для нас и для FIA. Понятно, что парни там работают неглупые, они стремятся как можно 
лучше выполнить свою работу, но нам важно понять, чем они при этом руководствуются.</p>

<p style="padding-top:10px;"></p>

<p>Все, конечно, видели инцидент в региональной Формуле в Имоле, где юный гонщик сломал позвоночник об
 один из этих высоких поребриков, на которые мы жалуемся много лет.</p>
</section>
 </section>`
}

function modalF1Eleven() {
  modal.style.display = "grid"
  modalCon.style.display = "block"
  modal.style.display = "f"
  modalCon.innerHTML = `<button onclick="del()" class="close">Close</button>
  <section>
    <article id="imgModalArt">
  <img id="autoModalImg" src="modalF1Eleven.png" alt="">
  <article id="navigationModal">
  <section id="navModalText">
   <article id="ellipse">
     <img src="modalImgEllipse1.png" alt="">
     <p id="modalNavName">Ксения Рахубовская, 24 апр. 2023</p>
   </article>
   <article id="alphaNewsModal">
<p>Alpha-News</p>
   </article>
  </section>
</article>
</article>

<section id="TextModal" style="width:1179px;">
  <p style="font-weight: bold;">Хэмилтон: Нас ждёт самый захватывающий этап сезона</p>

<p style="padding-top: 15px;">В минувший уик-энд Льюис Хэмилтон побывал на автодроме в Донингтоне на 
гонке британского чемпионата по турингу, в котором выступал его младший брат Николас, и семикратный чемпион мира подчеркнул, 
что для него это было важное событие.</p>

<p style="padding-top:10px;"></p>

<p>Разумеется, он также затронул и другие темы, 
связанные с командой Mercedes и задачами на предстоящий Гран При Азербайджана.</p>

<p style="padding-top:10px;"></p>

<p>Льюис Хэмилтон: «Я очень горжусь братом, ведь каждый год он сам находит бюджет, чтобы выступать в гонках, 
и занимается спортом, в который крайне сложно попасть людям с ограниченными возможностями. В жизни ему пришлось преодолеть 
очень много трудностей, но он продолжает бороться, и в одной из гонок минувшего уик-энда Николас занял шестое место.</p>
</section>
 </section>`
}

function openModalRDSOne() {
  modal.style.display = "grid"
  modalCon.style.display = "block"
  modal.style.display = "f"
  modalCon.innerHTML = `<button onclick="del()" class="close">Close</button>
  <section>
    <article id="imgModalArt">
  <img id="autoModalImg" src="modalF1Eleven.png" alt="">
  <article id="navigationModal">
  <section id="navModalText">
   <article id="ellipse">
     <img src="modalImgEllipse1.png" alt="">
     <p id="modalNavName">Ксения Рахубовская, 24 апр. 2023</p>
   </article>
   <article id="alphaNewsModal">
<p>Alpha-News</p>
   </article>
  </section>
</article>
</article>

<section id="TextModal" style="width:1179px;">
  <p style="font-weight: bold;">Хэмилтон: Нас ждёт самый захватывающий этап сезона</p>

<p style="padding-top: 15px;">В минувший уик-энд Льюис Хэмилтон побывал на автодроме в Донингтоне на 
гонке британского чемпионата по турингу, в котором выступал его младший брат Николас, и семикратный чемпион мира подчеркнул, 
что для него это было важное событие.</p>

<p style="padding-top:10px;"></p>

<p>Разумеется, он также затронул и другие темы, 
связанные с командой Mercedes и задачами на предстоящий Гран При Азербайджана.</p>

<p style="padding-top:10px;"></p>

<p>Льюис Хэмилтон: «Я очень горжусь братом, ведь каждый год он сам находит бюджет, чтобы выступать в гонках, 
и занимается спортом, в который крайне сложно попасть людям с ограниченными возможностями. В жизни ему пришлось преодолеть 
очень много трудностей, но он продолжает бороться, и в одной из гонок минувшего уик-энда Николас занял шестое место.</p>
</section>
 </section>`
}