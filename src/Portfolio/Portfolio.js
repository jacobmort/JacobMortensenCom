import MemoirSS from './images/memoir-ss.png';
import NescafeSS from './images/nescafe-ss.png';
import MicSS from './images/mic-ss.png';
import StreetCleanPark from './images/streetcleanpark-ss.png';
import MuzeiPhotos from './images/muzei-photos-ss.png';
import StenoSS from './images/steno-ss.png';
import FeedlyGlassSS from './images/feedly-glass-ss.png';
import askBrooklyn from './images/ask-brooklyn.png';

import androidIcon from './images/frameworks/android.png';
import awsIcon from './images/frameworks/aws.png';
import backboneIcon from './images/frameworks/backbone.png';
import browserifyIcon from './images/frameworks/browserify-icon.svg';
import bootstrapIcon from './images/frameworks/bootstrap.png';
import dropboxIcon from './images/frameworks/dropbox.png';
import facebookIcon from './images/frameworks/facebook.svg';
import feedlyIcon from './images/frameworks/feedly.png';
import firebaseIcon from './images/frameworks/firebase.png';
import glassIcon from './images/frameworks/glass_logo_32.png';
import gaeIcon from './images/frameworks/gae.png';
import googleMapsIcon from './images/frameworks/google-maps.png';
import googlePhotosIcon from './images/frameworks/google-photos.png';
import googlePlayServicesIcon from './images/frameworks/google-play-services.png';
import gulpIcon from './images/frameworks/gulp.png';
import handlebarsIcon from './images/frameworks/handlebars.png';
import ibeaconIcon from './images/frameworks/ibeacon.png';
import instagramIcon from './images/frameworks/instagram.png';
import muzeiIcon from './images/frameworks/muzei.png';
import modernizerIcon from './images/frameworks/modernizer.svg';
import pythonIcon from './images/frameworks/python.png';
import requireIcon from './images/frameworks/require.png';
import rubyIcon from './images/frameworks/ruby_on_rails.png';
import sassIcon from './images/frameworks/sass.png';
import swarmIcon from './images/frameworks/swarm.png';
import tumblrIcon from './images/frameworks/tumblr_logo_blue-white_transparent-32.png';
import twitterIcon from './images/frameworks/Twitter_Logo_Blue.svg';

const portfolio = [{
  title: "Memoir Landing Page",
  img: MemoirSS,
  desc: "Signup page for Memoir app to increase user signups",
  pageLink: "https://www.yourmemoir.com",
  tech: [rubyIcon, awsIcon, twitterIcon, facebookIcon, instagramIcon, dropboxIcon, tumblrIcon, swarmIcon, bootstrapIcon]
},{
  title: "Nescafe Redesign",
  img: NescafeSS,
  desc: "Rebuild of nescafe.com website.  Built on top of tumblr.",
  pageLink: "http://www.nescafe.com/",
  tech: [backboneIcon, tumblrIcon, bootstrapIcon, sassIcon, requireIcon, handlebarsIcon, modernizerIcon]
},{
  title: "MIC Marriot Quiz",
  img: MicSS,
  desc: "Work as lead developer with http://happyfuncorp.com/ to buid interactive quiz site.",
  pageLink: "http://mic.com/marriott-travel-quiz/",
  tech: [backboneIcon, browserifyIcon, gulpIcon]
},{
  title: "ASK Brooklyn Museum",
  img: askBrooklyn,
  desc: "Port IOS app to Android.",
  pageLink: "https://play.google.com/store/apps/details?id=porqueno.streetcleanpark&hl=en",
  tech: [androidIcon, ibeaconIcon, googlePlayServicesIcon]
},{
  title: "SF Street Clean Park",
  img: StreetCleanPark,
  desc: "Android app to avoid parking tickets from street cleaning in San Francisco.",
  pageLink: "https://play.google.com/store/apps/details?id=porqueno.streetcleanpark&hl=en",
  tech: [androidIcon, firebaseIcon, googleMapsIcon, googlePlayServicesIcon]
},{
  title: "Muzei Extension for Google Photos",
  img: MuzeiPhotos,
  desc: "Android app to add Google Photos as a source to the Muzei App.",
  pageLink: "https://play.google.com/store/apps/details?id=porqueno.muzeigooglephotos&hl=en",
  tech: [androidIcon, googlePhotosIcon, muzeiIcon, googlePlayServicesIcon]
},{
  title: "StenoSpeak",
  img: StenoSS,
  desc: "Turn typed stenography into spoken words in real time.  Built during NYU ABILITY Technology Hackathon and won 2nd place.",
  pageLink: "http://devpost.com/software/stenospeak-for-android",
  tech: [androidIcon]
},{
  title: "Feedly Glassware",
  img: FeedlyGlassSS,
  desc: "Google Glass application for Feedly RSS reader.",
  pageLink: "https://feedly-glass.appspot.com/",
  tech: [glassIcon, pythonIcon, feedlyIcon, gaeIcon]
}]

export default portfolio;
