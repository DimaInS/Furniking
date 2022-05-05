 "use strict"

    document.addEventListener('DOMContentLoaded', function() {
      const form = document.getElementById('form');
      form.addEventListener('submit', formSend);

      async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);
        formData.append('image', formImage.files[0]);

        if (error === 0) {
          form.classList.add('_sending');
          let response = await fetch('sendmail.php', {
            method: 'POST',
            body: formData
          });
          if (response.ok) {
            let result = await response.json();
            alert(result.message);
            formPreview.innerHTML = '';
            form.reset();
            form.classList.remove('_sending');
          } else {
            alert("Помилка");
            form.classList.remove('_sending');
          }
        } else {
          alert('Заповніть поле з зірочкою');
        }
        
      }

      function formValidate(form) {
        let error = 0;
        let formReq =document.querySelectorAll('._req')

        for (let index = 0; index < formReq.length; index++) {
          const input = formReq[index];
          formRemoveError(input);

          if (input.classList.contains('_email')) {
            if (emailTest(input)){
              formAddError(input);
              error++;
            }
          }else if(input.getAttribute("type")  === "checkbox" && input.checked ===false){
            formAddError(input);
              error++;
          } else {
            if (input.value === '') {
              formAddError(input);
              error++;
            }
          }
        }
        return error;
      } 

      function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
      }
       function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
       }

      //  тест email
      function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
      }

      // получае инпут файл в переменую
      const formImage = document.getElementById('formImage');
      // получаем див для превью в перемнную
      const formPreview = document.getElementById('formPreview');

      // Спостерігаемо за змінами в инпут файлі
      formImage.addEventListener('change', () => {
        uploadFile(formImage.files[0]);
      });

      function uploadFile(file) {
        //  перевірка типу файла
        if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
          alert('Дозволені тільки зображення.');
          formImage.value = '';
          return;
        }
        // перевіряємо розмір файлу (<2МБ.)
        if (file.size > 2 *1024 *1024) {
          alert('Файл повинен бути меншим за 2 МБ');
        return;
        }
        var reader = new FileReader();
    reader.onload = function(e) {
      formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
    };
    reader.onerror = function (e) {
      alert('Помилка');
     
    };
    
 reader.readAsDataURL(file);
      }
    });

    


$(function() {
    $('.menu__btn').on('click', function() {
      $('.menu__list').toggleClass('menu__list--active');
    })

    new Swiper('.reviews__swiper',{
      loop: true,
        navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
    });
       

      $('.trending__gallery').slick({
           arrows: false,
          dots: true,
         
    
      });

     

    $('.trending__btn').on('click', function() {
      $('.trending__btn').removeClass('trending__btn--active')
      $(this).addClass('trending__btn--active')
    });

     $('.products__btn').on('click', function() {
      $('.products__btn').removeClass('products__btn--active')
      $(this).addClass('products__btn--active')
    });

    $(".star").rateYo({
      readOnly: true,
      starWidth: "10.53px",
      normalFill: "#cccccc",
      ratedFill: "#8499B7",
      spacing: "3.58px",
      starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"/></svg>'
  });

  $('.first__slider').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $('.select').styler();
  $('.header-top__select').styler();
  $('.header-bottom__select').styler();

  //timer1
  function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  
  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  
  const daysSpan = clock.querySelector('.special__clock-days');
  const hoursSpan = clock.querySelector('.special__clock-hours');
  const minutesSpan = clock.querySelector('.special__clock-minutes');
  const secondsSpan = clock.querySelector('.special__clock-seconds');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}


const line = $('.timer').attr('data-time');
const deadline = $('.timer2').attr('data-time');

initializeClock('first', line);
initializeClock('countdown', deadline);




// для нескольких галлерей ( тут 2-Х)

 var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');
 
  var config = {
    controls: {
      scope: 'local'
    }
  };
 


 var mixer1 = mixitup(containerEl1, config);
var mixer2 = mixitup(containerEl2, config);    
});