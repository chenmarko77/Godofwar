const navbarButton = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('#navbarSupportedContent');

//Modal///////////////////////////////////////////////////

const btnBuyNow1 = document.querySelector('.editions__list__item__btn1')
const btnBuyNow2 = document.querySelector('.editions__list__item__btn2')
const btnBuyNow3 = document.querySelector('.editions__list__item__btn3')
const price1 = document.querySelector('.editions__list__item__price1')
const price2 = document.querySelector('.editions__list__item__price2')
const price3 = document.querySelector('.editions__list__item__price3')


const ModalFormSum = document.querySelector('.modal-form-summa')

btnBuyNow1.addEventListener('click', function(){
ModalFormSum.textContent = price1.textContent 
})
btnBuyNow2.addEventListener('click', function(){
ModalFormSum.textContent = price2.textContent
})
btnBuyNow3.addEventListener('click', function(){
ModalFormSum.textContent = price3.textContent 
})






//Trailer Section/////////////////////////////////////////////////////////////

// Initialize the YouTube player variable
let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-iframe', {
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    document.getElementById('play-btn').addEventListener('click', function() {
        document.querySelector('.trailer__video').style.display = 'block'; // Show the video
        document.querySelector('.trailer__box__title').style.display = 'none'; // Hide title
        document.getElementById('play-btn').style.display = 'none'; // Hide button
        player.playVideo(); // Play the video
        console.log("Video is playing"); // Debugging
    });
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
        document.querySelector('.trailer__video').style.display = 'none'; // Hide the video
        player.stopVideo(); // Stop the video instead of seeking
        document.querySelector('.trailer__box__title').style.display = 'block'; // Show title
        document.getElementById('play-btn').style.display = 'block'; // Show button
        console.log("Video has ended"); // Debugging
    }
}

// Ensure the YouTube API script is loaded before executing this
window.onload = function() {
    const script = document.createElement('script');
    script.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(script);
};


// document.getElementById('play-btn').addEventListener('click', function() {
//     var video = document.getElementById('trailerVideo');
//     video.style.display = 'block'; // Show the video when the button is clicked
// });



// Explore section ////////////////////////////////////

exploreToggleBtn = document.querySelector('.explore__toggle__btn')
exploreToggle = document.querySelector('.explore__toggle__btn__circle') 
exploreToggleMin = document.querySelector('.explore__toggle__min')
exploreToggleRecom = document.querySelector('.explore__toggle__recom')
exploreCPU = document.querySelector('.explore__box__desc__CPU')
exploreRAM = document.querySelector('.explore__box__desc__RAM')
exploreOS = document.querySelector('.explore__box__desc__OS')
exploreVideo = document.querySelector('.explore__box__desc__video')
explorePixel = document.querySelector('.explore__box__desc__pixel')
exploreVertex = document.querySelector('.explore__box__desc__vertex')
exploreSpace = document.querySelector('.explore__box__desc__space')
explorevRAM = document.querySelector('.explore__box__desc__vRAM')

const exploreOriginalToggle = exploreToggle.style.marginLeft
const exploreOriginalToggleMin = exploreToggleMin.style.color
const exploreOriginalToggleRecom = exploreToggleRecom.style.color

const CPUOriginalText = exploreCPU.textContent;
const RAMOriginalText = exploreRAM.textContent;
const OSOriginalText = exploreOS.textContent;
const VideoOriginalText = exploreVideo.textContent;
const vRAMOriginalText = explorevRAM.textContent;

let isToggled = false;

exploreToggleBtn.addEventListener('click', ()=>{
    if (isToggled) {
        // If currently toggled, revert to original text
        exploreCPU.textContent = CPUOriginalText;
        exploreRAM.textContent = RAMOriginalText;
        exploreOS.textContent = OSOriginalText;
        exploreVideo.textContent = VideoOriginalText;
        explorevRAM.textContent = vRAMOriginalText;
        exploreToggle.style.marginLeft = exploreOriginalToggle;
        exploreToggleMin.style.color = exploreOriginalToggleMin
        exploreToggleRecom.style.color = exploreOriginalToggleRecom
    } else {
        // If not toggled, change to new text
        exploreCPU.textContent = 'Intel i5-3200k or AMD Ryzen 5 1200';
        exploreRAM.textContent = '16 GB';
        exploreOS.textContent = 'Windows 11 64-bit';
        exploreVideo.textContent = 'NVIDIA GTX 1060 (6 GB) or AMD RX 570 (4 GB)';
        explorevRAM.textContent = '6 GB';
        exploreToggle.style.marginLeft = '20px';
        exploreToggleMin.style.color = '#30373f';
        exploreToggleRecom.style.color = 'white';
    }
    // Flip the toggle state
    isToggled = !isToggled;
})

//Explore Section - part 2 //////////////////////////////////////////

exploreToggle2Btn = document.querySelector('.explore__toggle2__btn')
exploreToggle2 = document.querySelector('.explore__toggle2__btn__circle') 
exploreToggle2Stand = document.querySelector('.explore__toggle2__stand')
exploreToggle2Limit = document.querySelector('.explore__toggle2__limit')
explorePlatform = document.querySelector('.explore__box2__desc__platform')
explorePremiere = document.querySelector('.explore__box2__desc__premiere')
explorePublisher = document.querySelector('.explore__box2__desc__publisher')
exploreSpecies = document.querySelector('.explore__box2__desc__species')
exploreVoice = document.querySelector('.explore__box2__desc__voice')
exploreLang = document.querySelector('.explore__box2__desc__lang')

const exploreOriginalToggle2 = exploreToggle2.style.marginLeft
const exploreOriginalToggle2Stand = exploreToggle2Stand.style.color
const exploreOriginalToggle2Limit = exploreToggle2Limit.style.color

const PlatformOriginalText = explorePlatform.textContent;
const VoiceOriginalText = exploreVoice.textContent;
const LangOriginalText = exploreLang.textContent;


let isToggled2 = false;

exploreToggle2Btn.addEventListener('click', ()=>{
    if (isToggled2) {
        // If currently toggled, revert to original text
        explorePlatform.textContent = PlatformOriginalText;
        exploreVoice.textContent = VoiceOriginalText;
        exploreLang.textContent = LangOriginalText;
        exploreToggle2.style.marginLeft = exploreOriginalToggle2;
        exploreToggle2Stand.style.color = exploreOriginalToggle2Stand
        exploreToggle2Limit.style.color = exploreOriginalToggle2Limit
    } else {
        // If not toggled, change to new text
        explorePlatform.textContent = 'PS4, PS5';
        exploreVoice.textContent = 'English, German, Ukrainian';
        exploreLang.textContent = 'English, German, Polish, Dutch, Ukranian';
        exploreToggle2.style.marginLeft = '20px';
        exploreToggle2Stand.style.color = '#30373f';
        exploreToggle2Limit.style.color = 'white';
    }
    // Flip the toggle state
    isToggled2 = !isToggled2;
})









//Swiper/////////////////////////////////////////////////////////

// Swiper initialization
const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

// Accordion button click event
document.querySelectorAll('.accordion-button').forEach(button => {
  button.addEventListener('click', function() {
    const isExpanded = this.getAttribute('aria-expanded') === 'true';

    if (isExpanded) {
      // Change to open icon when collapsed
      this.style.setProperty('--icon-image', "url('/img/icon_close.svg')");
    } else {
      // Change to close icon when expanded
      this.style.setProperty('--icon-image', "url('/img/icon_open.svg')");
    }
  });
});