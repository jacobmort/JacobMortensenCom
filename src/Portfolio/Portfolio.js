import MemoirSS from './images/memoir-ss.png';
import NescafeSS from './images/nescafe-ss.png';
import MicSS from './images/mic-ss.png';
import StreetCleanPark from './images/streetcleanpark-ss.png';
import MuzeiPhotos from './images/muzei-photos-ss.png';
import StenoSS from './images/steno-ss.png';
import FeedlyGlassSS from './images/feedly-glass-ss.png';
import askBrooklyn from './images/ask-brooklyn.png';

import androidIcon from './images/platforms/android.png';
import awsIcon from './images/platforms/aws.png';
import backboneIcon from './images/platforms/backbone.png';
import browserifyIcon from './images/platforms/browserify-icon.svg';
import bootstrapIcon from './images/platforms/bootstrap.png';
import dropboxIcon from './images/platforms/dropbox.png';
import facebookIcon from './images/platforms/facebook.svg';
import feedlyIcon from './images/platforms/feedly.png';
import firebaseIcon from './images/platforms/firebase.png';
import glassIcon from './images/platforms/glass_logo_32.png';
import gaeIcon from './images/platforms/gae.png';
import googleMapsIcon from './images/platforms/google-maps.png';
import googlePhotosIcon from './images/platforms/google-photos.png';
import googlePlayServicesIcon from './images/platforms/google-play-services.png';
import gulpIcon from './images/platforms/gulp.png';
import handlebarsIcon from './images/platforms/handlebars.png';
import ibeaconIcon from './images/platforms/ibeacon.png';
import instagramIcon from './images/platforms/instagram.png';
import muzeiIcon from './images/platforms/muzei.png';
import modernizerIcon from './images/platforms/modernizer.svg';
import pythonIcon from './images/platforms/python.png';
import requireIcon from './images/platforms/require.png';
import rubyIcon from './images/platforms/ruby_on_rails.png';
import sassIcon from './images/platforms/sass.png';
import swarmIcon from './images/platforms/swarm.png';
import tumblrIcon from './images/platforms/tumblr_logo_blue-white_transparent-32.png';
import twitterIcon from './images/platforms/Twitter_Logo_Blue.svg';

const platforms = {
  "android": {
    img: androidIcon,
    link: "https://developer.android.com/index.html",
    alt: "Android"
  }, "aws": {
    img: awsIcon,
    link: "https://aws.amazon.com/",
    alt: "Amazon Web Services"
  }, "backbone": {
    img: backboneIcon,
    link: "http://backbonejs.org/",
    alt: "Backbone JS"
  }, "browserify": {
    img: browserifyIcon,
    link: "http://browserify.org/",
    alt: "Browserify"
  }, "bootstrap":{
    img: bootstrapIcon,
    link: "http://getbootstrap.com/",
    alt: "Bootstrap"
  }, "dropbox": {
    img: dropboxIcon,
    link: "https://www.dropbox.com/developers",
    alt: "Dropbox"
  }, "facebook": {
    img: facebookIcon,
    link: "https://developers.facebook.com/",
    alt: "Facebook"
  }, "feedly": {
    img: feedlyIcon,
    link: "https://developer.feedly.com/",
    alt: "Feedly"
  }, "firebase": {
    img: firebaseIcon,
    link: "https://firebase.google.com/",
    alt: "Firebase"
  }, "glass": {
    img: glassIcon,
    link: "https://developers.google.com/glass/",
    alt: "Google Glass"
  }, "gae": {
    img: gaeIcon,
    link: "https://cloud.google.com/appengine/",
    alt: "Google App Engine"
  }, "googleMaps": {
    img: googleMapsIcon,
    link: "https://developers.google.com/maps/",
    alt: "Google Maps"
  }, "googlePhotos": {
    img: googlePhotosIcon,
    link: "https://photos.google.com/",
    alt: "Google Photos"
  }, "googlePlay": {
    img: googlePlayServicesIcon,
    link: "https://developers.google.com/android/guides/overview",
    alt: "Google Play Services"
  }, "gulp": {
    img: gulpIcon,
    link: "http://gulpjs.com/",
    alt: "Gulp JS"
  }, "handlebars": {
    img: handlebarsIcon,
    link: "http://handlebarsjs.com/",
    alt: "Handlebars JS"
  }, "ibeacon": {
    img: ibeaconIcon,
    link: "http://estimote.com/",
    alt: "iBeacons"
  }, "instagram": {
    img: instagramIcon,
    link: "https://www.instagram.com/developer/",
    alt: "Instagram"
  }, "muzei": {
    img: muzeiIcon,
    link: "https://github.com/romannurik/muzei/wiki/API",
    alt: "Muzei"
  }, "modernizr": {
    img: modernizerIcon,
    link: "https://modernizr.com/",
    alt: "Modernizr"
  }, "python": {
    img: pythonIcon,
    link: "https://www.python.org/",
    alt: "Python"
  }, "require": {
    img: requireIcon,
    link: "http://requirejs.org/",
    alt: "Require JS"
  }, "ruby": {
    img: rubyIcon,
    link: "http://rubyonrails.org/",
    alt: "Ruby on Rails"
  }, "sass": {
    img: sassIcon,
    link: "http://sass-lang.com/",
    alt: "Sass"
  }, "swarm": {
    img: swarmIcon,
    link: "https://developer.foursquare.com",
    alt: "Swarm"
  }, "tumblr": {
    img: tumblrIcon,
    link: "https://www.tumblr.com/developers",
    alt: "Tumblr"
  }, "twitter": {
    img: twitterIcon,
    link: "https://dev.twitter.com/",
    alt: "Twitter"
  }
};



const portfolio = [{
  title: "Memoir Landing Page",
  img: MemoirSS,
  desc: "Signup page for Memoir app to increase user signups",
  pageLink: "https://www.yourmemoir.com",
  platforms: [
    platforms.ruby,
    platforms.aws,
    platforms.twitter,
    platforms.facebook,
    platforms.instagram,
    platforms.dropbox,
    platforms.tumblr,
    platforms.swarm,
    platforms.bootstrap
  ]
},{
  title: "Nescafe Redesign",
  img: NescafeSS,
  desc: "Rebuild of nescafe.com website.  Built on top of tumblr.",
  pageLink: "http://www.nescafe.com/",
  platforms: [
    platforms.backbone,
    platforms.tumblr,
    platforms.bootstrap,
    platforms.sass,
    platforms.require,
    platforms.handlebars,
    platforms.modernizr
  ]
},{
  title: "MIC Marriot Quiz",
  img: MicSS,
  desc: "Work as lead developer with http://happyfuncorp.com/ to buid interactive quiz site.",
  pageLink: "http://mic.com/marriott-travel-quiz/",
  platforms: [platforms.backbone, platforms.browserify, platforms.gulp]
},{
  title: "ASK Brooklyn Museum",
  img: askBrooklyn,
  desc: "Port IOS app to Android.",
  pageLink: "https://play.google.com/store/apps/details?id=porqueno.streetcleanpark&hl=en",
  platforms: [platforms.android, platforms.ibeacon, platforms.googlePlay]
},{
  title: "SF Street Clean Park",
  img: StreetCleanPark,
  desc: "Android app to avoid parking tickets from street cleaning in San Francisco.",
  pageLink: "https://play.google.com/store/apps/details?id=porqueno.streetcleanpark&hl=en",
  platforms: [platforms.android, platforms.firebase, platforms.googleMaps, platforms.googlePlay]
},{
  title: "Muzei Extension for Google Photos",
  img: MuzeiPhotos,
  desc: "Android app to add Google Photos as a source to the Muzei App.",
  pageLink: "https://play.google.com/store/apps/details?id=porqueno.muzeigooglephotos&hl=en",
  platforms: [platforms.android, platforms.googlePhotos, platforms.muzei, platforms.googlePlay]
},{
  title: "StenoSpeak",
  img: StenoSS,
  desc: "Turn typed stenography into spoken words in real time.  Built during NYU ABILITY Technology Hackathon and won 2nd place.",
  pageLink: "http://devpost.com/software/stenospeak-for-android",
  platforms: [platforms.android]
},{
  title: "Feedly Glassware",
  img: FeedlyGlassSS,
  desc: "Google Glass application for Feedly RSS reader.",
  pageLink: "https://feedly-glass.appspot.com/",
  platforms: [platforms.glass, platforms.python, platforms.feedly, platforms.gae]
}]

export default portfolio;
