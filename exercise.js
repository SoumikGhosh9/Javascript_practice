// Calculate 18% GST on iPhone15 ₹79,990 and 2 airpods pro ₹24990 each

let iphone = 79990+(18/100*79990);
let iphone_gst = (18/100*79990);
let airpods_pro = 2*24990;
let bill = iphone+airpods_pro;
console.log("Your total GST amount for iphone is ", iphone_gst);
console.log("Your total airpods pro amount is ", airpods_pro);
console.log("Your total bill amount is ", bill);
