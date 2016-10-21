// Large size
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

// Small size
import peytoMed from './images/backgrounds/small/peyto.png';
import parkerMed from './images/backgrounds/small/parker-ridge.png';
import joshuaTreeMed from './images/backgrounds/small/joshua-tree.png';
import icelandBoatMed from './images/backgrounds/small/iceland-boat.png';
import landmannalaugarMed from './images/backgrounds/small/landmannalaugar.png';
import blueLagoonMed from './images/backgrounds/small/blue-lagoon.png';
import grindavikurvegurMed from './images/backgrounds/small/grindavikurvegur.png';
import craterLakeMed from './images/backgrounds/small/crater-lake.png';
import glacierMed from './images/backgrounds/small/glacier.png';
import glacierGardenMed from './images/backgrounds/small/glacier-garden.png';

const HeaderBackgrounds = [
  {
    img: peyto,
    imgSm: peytoMed,
    desc: "Peyto Lake, Canadian Rockies"
  },
  {
    img: parker,
    imgSm: parkerMed,
    desc: "Parker Ridge Trail, Canadian Rockies"
  },
  {
    img: joshuaTree,
    imgSm: joshuaTreeMed,
    desc: "Joshua Tree National Park"
  }, {
    img: icelandBoat,
    imgSm: icelandBoatMed,
    desc: "Westfjords, Iceland"
  }, {
    img: landmannalaugar,
    imgSm: landmannalaugarMed,
    desc:"Landmannalaugar, Iceland"
  },{
    img: blueLagoon,
    imgSm: blueLagoonMed,
    desc:"Blue Lagoon, Iceland"
  },{
    img: grindavikurvegur,
    imgSm: grindavikurvegurMed,
    desc:"Grindavíkurvegur, Iceland"
  },{
    img: craterLake,
    imgSm: craterLakeMed,
    desc: "Crater Lake National Park"
  },{
    img: glacier,
    imgSm: glacierMed,
    desc: "Glacier National Park"
  },{
    img: glacierGarden,
    imgSm: glacierGardenMed,
    desc: "Glacier National Park"
  }
];

function selectBackground() {
  const idx = Math.floor(Math.random()*HeaderBackgrounds.length);
  return HeaderBackgrounds[idx];
  //return HeaderBackgrounds[9];
}

export default selectBackground;
