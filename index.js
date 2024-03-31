
//кнопка "Наверх"
const butt_up = document.querySelector('.butt_up');
// Плавная прокрутка при клике на кнопку
    butt_up.addEventListener("click", function (event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
  
    });

// кнопка "Отправить" для отправки сообщений
    const button = document.querySelector('.butt_add');
    button.addEventListener('click', addMail)
    
    function addMail() {
      const input_em = document.querySelector('.email');
      let inp_em = input_em.value;
    
      if (inp_em === "" || inp_em === " "){
        input_em.value = "";
        alert("Заполните пожалуйста поле E_mail!");
        document.querySelector('.email').select();
        return  
      };

      const input_n = document.querySelector('.name');
      let inp_n = input_n.value;
    
      if (inp_n === "" || inp_n === " "){
        input_n.value = "";
        alert("Заполните пожалуйста поле Имя!");
        document.querySelector('.name').select();
        return  
      };

      const input_t = document.querySelector('.telefon');
      let inp_t = input_t.value;
    
      if (inp_t === "" || inp_t === " "){
        input_t.value = "";
        alert("Заполните пожалуйста поле Телефон!");
        document.querySelector('.telefon').select();
        return 
      };

      const input_с = document.querySelector('.comment');

      input_em.value = "";
      input_n.value = "";
      input_t.value = ""
      input_с.value = ""; 
    }

      function vis_logo(){
        document.getElementById('bclog').style.height = "220px";
        document.getElementById('bclog').style.width = "100%";
        document.getElementById('nbb').style.visibility = 'visible';
        document.getElementById('vbb').style.visibility = 'hidden';
        document.getElementById('blog').style.visibility = 'visible';
        document.getElementById('blog').style.height = "65%";
        document.getElementById('blog').style.width = "70%";
        document.getElementById('bcbutt').style.visibility = 'visible';

        //document.getElementById('bcbutt').style.height = "300px";
        document.getElementById('bcbutt').style.height = "150px";

        document.getElementById('b1').style.fontSize = "1.5pc";
        document.getElementById('b2').style.fontSize = "1.5pc";
        document.getElementById('b3').style.fontSize = "1.5pc";
      }

      function nvis_logo(){
        document.getElementById('blog').style.visibility = 'hidden';
        document.getElementById('bclog').style.height = "0px";
        document.getElementById('bclog').style.width = "0%";
        document.getElementById('vbb').style.visibility = 'visible';
        document.getElementById('nbb').style.visibility = 'hidden';
        document.getElementById('blog').style.height = "0px";
        document.getElementById('bcbutt').style.visibility = 'hidden';
        document.getElementById('bcbutt').style.height = "0px";
      }
    