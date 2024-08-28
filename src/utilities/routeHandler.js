import routes from '../router';

const siteNavTemplate = document.getElementById('site-nav');

export default function navigate(e) {
  // e.preventDefault();
  // console.log('navigate', e.currentTarget.attributes, e.currentTarget.dataset.url);
  let route = e.currentTarget.dataset.url;
  window.history.pushState({}, '', route);
  // console.log(`You are on the ${route} path`);
}