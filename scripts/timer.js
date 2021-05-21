 (function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    let birthday = "may 30, 2021 00:00:00",
        countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          let now = new Date().getTime(),
              distance = countDown - now;
  
          let d =  Math.floor(distance / (day)),
            h = Math.floor((distance % (day)) / (hour)),
            m = Math.floor((distance % (hour)) / (minute)),
            s = Math.floor((distance % (minute)) / second);
            document.querySelector(".days").innerText =(d < 10 ? '0' + d : d );
            document.querySelector(".hours").innerText =(h < 10 ? '0' + h : h );
            document.querySelector(".minutes").innerText = (m < 10 ? '0' + m : m );
            document.querySelector(".seconds").innerText =(s < 10 ? '0' + s : s );

          //do something later when date is reached
          if (distance < 0) {
            let countdown = document.querySelector(".countdown");
            countdown.innerText = "Акция закончилась";
            clearInterval(x);
          }
          //seconds
        }, 0)
    }()); 



    /* Тимер для модалки */


    (function () {
      const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;
    
      let birthday = "may 30, 2021 00:00:00",
          countDown = new Date(birthday).getTime(),
          x = setInterval(function() {    
    
            let now = new Date().getTime(),
                distance = countDown - now;
    
            let dD =  Math.floor(distance / (day)),
              hH = Math.floor((distance % (day)) / (hour)),
              mM = Math.floor((distance % (hour)) / (minute)),
              sS = Math.floor((distance % (minute)) / second);
              document.querySelector(".days-modal").innerText =(dD < 10 ? '0' + dD : dD );
              document.querySelector(".hours-modal").innerText =(hH < 10 ? '0' + hH : hH );
              document.querySelector(".minutes-modal").innerText = (mM < 10 ? '0' + mM : mM );
              document.querySelector(".seconds-modal").innerText =(sS < 10 ? '0' + sS : sS );
  
            //do something later when date is reached
            if (distance < 0) {
              let countdown = document.querySelector(".countdown");
              countdown.innerText = "Акция закончилась";
              clearInterval(x);
            }
            //seconds
          }, 0)
      }());