'use strict'
import "./styles.css";
import loadProductData from "./utilities/loadProductData.js";
import { state, setState } from "./store";
import loadProductDetails from "./utilities/loadProductDetails";

const url = 'https://fakestoreapi.com/products';

loadProductData(url);

console.log('state', state);

window.addEventListener("popstate", (event) => {
  const currentPath = window.location.pathname;
  console.log(`location: ${document.location}, state: ${JSON.stringify(event.state)}`, window.location.pathname);;
	console.log('localtion split', /^\/product\//.test(currentPath));
  
  if (currentPath === '/') {

  } else if(/^\/product\//.test(currentPath)) {
    const productId = currentPath.split('/')[2];
    loadProductDetails(productId);
    // console.log('state', state);
  }
});
