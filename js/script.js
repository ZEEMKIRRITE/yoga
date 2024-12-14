const tabs = () => {
    console.log('module is loaded');

    const infoHeaderTab = document.querySelectorAll('.info-header-tab')
    const infoTabcontent = document.querySelectorAll('.info-tabcontent')

    const hideAllTabContent = () => {
        for (let j = 0; j < infoTabcontent.length; j++) {
            infoTabcontent[j].classList.remove('show')
            infoTabcontent[j].classList.add('hide')
        }
    }

    const showTabContent = (n) => {
        hideAllTabContent()
        infoTabcontent[n].classList.add('show')
    }

    showTabContent(0)
    
    infoHeaderTab.forEach((infoTabContent, index) => {
        infoTabContent.addEventListener('click', () => {
            showTabContent(index)
        })
    })
}

const modal = () => {
    const modal = document.querySelector('.overlay')
    const more = document.querySelectorAll('.more_btn')
    const close = document.querySelector('.popup-close')

    more.forEach((btn) => {
        btn.addEventListener('click', () => {
            modal.style.display = 'flex'
            document.body.style.overflow = 'hidden'
        })
    })
    // close.addEventListener('click', () => {
    //     modal.style.display = 'none'
    //     document.body.style.overflow = ''
    // })
    modal.addEventListener('click', (e) => {
        target = e.target
        if (target === modal || target === close) {
            modal.style.display = 'none'
            document.body.style.overflow = ''
        }
    })
}

const timer = () => {

    let deadline = '2024-12-31';
    const getTimeRemaining = (deadline) => {
        let t = Date.parse(deadline) - Date.parse(new Date());
        let seconds = Math.floor((t/1000) % 60);
        let minutes = Math.floor((t/1000/60) % 60);
        let hours = Math.floor(t/(1000*60*60));
        

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    };

    const setTime = () => {
        let t = getTimeRemaining(deadline)
        
        const timer = document.getElementById('timer')
        const hours = timer.querySelector('.hours')
        const minutes = timer.querySelector('.minutes')
        const seconds = timer.querySelector('.seconds')
        

        function addZero(n) { return (n <= 9 ? '0' : '') + n;}
            
        hours.textContent = addZero(t.hours)
        minutes.textContent = addZero(t.minutes)
        seconds.textContent = addZero(t.seconds)
        
        if (t.total <= 0) {
            clearInterval(timeInterval)
            hours.textContent = '00'
            minutes.textContent = '00'
            seconds.textContent = '00'
        }
    }
    let timeInterval = setInterval(setTime, 1000)
}


// const slider = () => {
//     let slideIndex = 1;
//     const slides = document.querySelectorAll('.slider-item');
//     const prev = document.querySelector('.prev');
//     const next = document.querySelector('.next');
//     const dots = document.querySelectorAll('.dot')

//     const showSlide = (n) => {
//         slides.forEach((item) => {
//             item.style.display = 'none'
//         })
//         dots.forEach((item) => {
//             item.style.display = 'none'
//             dots[index].classList.remove('dot-active')
//         })
//         if (n>slides.length) {slideIndex = 1}
//         if (n < 1) {slideIndex = slides.length}{
//             slides[slideIndex-1].style.display = 'block'
//             dots[slideIndex-1].classList.add('dot-active')
//         }
//         if ( n<1 ){
//             slideIndex = slides.length
//         }
//         slides[slideIndex-1].style.display = 'block'
//     }

//     showSlide(slideIndex)

//     const plusSlide = (n) => {
//         showSlide(slideIndex += n)
//     }
//     const currentSlide = (n) => {
//         showSlide(slideIndex = n)
//     }

//     dots.forEach((dot,index) => {
//         dot.addEventListener('click', () =>{
//             currentSlide(index+1)
//         })
//     })
//     next.addEventListener('click', (e) => {
//         plusSlide(1)
//     })
//     prev.addEventListener('click', (e) => {
//         plusSlide(-1)
//     })
// }

const calc = () => {
    const person = document.querySelectorAll('.counter-block-input')[0]
    const restdays = document.querySelectorAll('.counter-block-input')[1]
    const place = document.getElementById('select')
    const totalValue = document.getElementById('total')
    let personSum = 0
    let daysSum = 0
    let total = 0

    person.addEventListener('change', ()=> {
        personSum = +person.value 
        total = (daysSum + personSum) * 10000
        if (restdays.value = '') {
            totalValue.innerHTML = 0
        } else (totalValue.innerHTML = total)
    })
    restdays.addEventListener('change', ()=>{
        daysSum = +restdays.value
        total = (daysSum + personSum) * 10000

        if(person.value == '') {
            totalValue.innerHTML = 0
        }else (totalValue.innerHTML = total)
    })

    place.addEventListener('input', function() {
        if ( person.value == '' || restdays.value == '') {
            totalValue.innerHTML = 0
        } else {
            let a = total
            totalValue.innerHTML = a * place.value
        }
    })
}
const form_sender =() => {
    const form = document.getElementById('contacts')
    const phone = form.querySelector('input[name="phone"]')
    const email = form.querySelector('input[name="email"]')

    const token = '6930757208:AAH7EWB0L27_20_eY4aQ0gM0Aum-5_LdnTE'
    const chatId = '1164085834'
    const url = `https://api.telegram.org/bot${token}/sendMessage`

    form.addEventListener('submit', (e)=> {
        e.preventDefault()

        const user = {
            email: email.value,
            phone: phone.value
        }

        console.log(user)

        fetch(url,{
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: 'Новый клиент:/n Email:${user.mail}/nPhone:${user.phone}'

        })
    })
    .then((data)=>{
        console.log(data.json())
        
        email.value =''
        phone.value = ''
    })

    })
}

tabs()
modal()
timer()
// slider()
calc()
form_sender()