import { fetchRequest } from './restCall.js';
import { state, setState } from "../store";
import navigate from './routeHandler.js';

export default async function loadProductData(url) {
  try {
    const productsData = await fetchRequest(url);
    // const productsData = json;
    setState({ ...state, products: [...productsData] });
    console.log('getProductData state', state);

    const appDynamicContent = document.getElementById('app-dynamic-content');
    const productListTmpl = document.getElementById('product-list-by-category');
    const productListItemTmpl = document.getElementById('product-list-item');

    const itemListClone = productListTmpl.content.cloneNode(true);
    state.products.forEach(product => {
      const itemTmpl = productListItemTmpl.content.cloneNode(true);
      itemTmpl.querySelector('a').dataset.url = `/product/${product.id}`;
      itemTmpl.querySelector('a').addEventListener('click', navigate, true);
      itemTmpl.querySelector(".product__image img").src = product.image;
      itemTmpl.querySelector(".product__title").textContent = product.title;
      itemTmpl.querySelector(".product__price").textContent = '$' + product.price;

      itemListClone.querySelector('.product-list').append(itemTmpl);
    });

    appDynamicContent.appendChild(itemListClone)
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }

}