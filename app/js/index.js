import {Slider} from './components/slider.js';
import {Opener} from './components/popupOpener.js';


const sliderElement = document.querySelector('.slider');
if (sliderElement) {
    const slider = new Slider('slider');
}


const openerElement = document.querySelector('[data-java]');
if (openerElement) {
    const openPopup = new Opener(openerElement);
}
