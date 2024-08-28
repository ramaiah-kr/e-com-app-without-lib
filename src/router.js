const routes = [
  { path: '/', name: "Home", callback: () => console.log('Home page') },
  { path: '/products/category/women', name: "CategoryWomen", callback: () => console.log('Women category product list page') },
  { path: '/products/category/men',  name: "CategoryMen", callback: () => console.log('Men category product list page') },
  { path: '/products/category/electronics',  name: "CategoryElectronics", callback: () => console.log('Electronics(Smart Gear) category product list page') },
  { path: '/products/category/accessories',  name: "CategoryAccessories", callback: () => console.log('Accessories(jewellery) category product list page') },
  { path: '/product/product_id',  name: "Product", callback: () => console.log('Product Detail Page') },
];

export default routes;