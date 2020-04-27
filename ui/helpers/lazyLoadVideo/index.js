import forEach from '@runroom/purejs/lib/forEach';
import intersectionObserver from '../utils/intersectionObserver';

const VIDEO_CLASS = 'lazyload';
const HANDLED_CLASS = 'lazyloaded';
const CONFIG = {
  elementsClass: `.${VIDEO_CLASS}`
};

const loadVideo = video => {
  const sources = [].slice.call(video.children);

  forEach(sources, source => {
    const { src } = source.dataset;
    source.src = src;
  });

  video.load();
  video.addEventListener('canplaythrough', () => {
    video.classList.add(HANDLED_CLASS);

    if (video.getAttribute('autoplay')) {
      video.play();
    }
  }, false);
};

const lazyLoadVideo = () => intersectionObserver(CONFIG, loadVideo);

export default lazyLoadVideo;
