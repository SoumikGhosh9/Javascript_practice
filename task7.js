let product = {
    company : 'Mango',
    price: 899,
    item_name: 'T_Shirt'
}
// console.log(product);
// console.log(product.company);
// console.log(product.item_name);
// console.log(product.price);

product.company = 'banana';
console.log(product);
console.log(product['company']);
console.log(product['item_name']);
console.log(product['price']);


delete product.company;
console.log(product);

