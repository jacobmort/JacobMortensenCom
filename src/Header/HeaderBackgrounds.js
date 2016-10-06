import peyto from './images/backgrounds/peyto.png';
import parker from './images/backgrounds/parker-ridge.png';
import joshuaTree from './images/backgrounds/joshua-tree.png';
import icelandBoat from './images/backgrounds/iceland-boat.png';
import landmannalaugar from './images/backgrounds/landmannalaugar.png';
import blueLagoon from './images/backgrounds/blue-lagoon.png';
import grindavikurvegur from './images/backgrounds/grindavikurvegur.png';
import craterLake from './images/backgrounds/crater-lake.png';
import glacier from './images/backgrounds/glacier.png';
import glacierGarden from './images/backgrounds/glacier-garden.png';

const HeaderBackgrounds = [
  {
    img: peyto,
    desc: "Peyto Lake, Canadian Rockies"
  },
  {
    img: parker,
    desc: "Parker Ridge Trail, Canadian Rockies"
  },
  {
    img: joshuaTree,
    desc: "Johua Tree National Park"
  }, {
    img: icelandBoat,
    desc: "Westfjords, Iceland"
  }, {
    img: landmannalaugar,
    desc:"Landmannalaugar, Iceland"
  },{
    img: blueLagoon,
    desc:"Blue Lagoon, Iceland"
  },{
    img: grindavikurvegur,
    desc:"Grindavíkurvegur, Iceland"
  },{
    img: craterLake,
    desc: "Crater Lake National Park"
  },{
    img: glacier,
    desc: "Glacier National Park"
  },{
    img: glacierGarden,
    desc: "Glacier National Park"
  }
];

function selectBackground() {
  const idx = Math.floor(Math.random()*HeaderBackgrounds.length);
  return HeaderBackgrounds[idx];
  //return HeaderBackgrounds[9];
}

export default selectBackground;
