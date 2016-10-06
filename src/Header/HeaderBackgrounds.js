import peyto from './images/backgrounds/peyto.png';
import parker from './images/backgrounds/parker-ridge.png';

const HeaderBackgrounds = [
  {
    img: peyto,
    desc: "Peyto Lake, Canadian Rockies"
  },
  {
    img: parker,
    desc: "Parker Ridge Trail, Canadian Rockies"
  }
];

function selectBackground() {
  const idx = Math.floor(Math.random()*HeaderBackgrounds.length);
  return HeaderBackgrounds[idx];
}

export default selectBackground;
