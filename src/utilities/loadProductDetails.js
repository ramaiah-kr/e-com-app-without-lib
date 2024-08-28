import { state, setState } from "../store";

export default async function loadProductDetails(id) {
    const productDetail = state.products.find((product)=>product.id == id);

    const appDynamicContent = document.getElementById('app-dynamic-content');
    const productDetailTmpl = document.getElementById('product-detail');
    console.log('productDetail',productDetail);
    const itemListClone = productDetailTmpl.content.cloneNode(true);
    itemListClone.querySelector('.product-detail__img').src = productDetail.image;
    itemListClone.querySelector('.product-detail__name').textContent = productDetail.title;
    itemListClone.querySelector('.product-detail__price').textContent = productDetail.price;
    itemListClone.querySelector('.product-detail__rating').textContent = productDetail.rating;
    itemListClone.querySelector('.product-detail__breif').textContent = 1;
    itemListClone.querySelector('.product-detail__quantity').textContent = productDetail.description;

    appDynamicContent.replaceChildren(itemListClone);
}