let product = {
    company : 'Mango',
    price: 899,
    item_name: 'T_Shirt',
    displayPrice :function(){
        console.log(`The price of the product is ${this.price}`)
    }
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

product.displayPrice();


//AutoBoxing

console.log("Hey this is Soumik".length);
console.log("Hey this is Soumik".toUpperCase());
console.log("Hey this is Soumik".replace('this is','I am'));

