const p = 20.5 , l = 30 , harga = 1500000
let total = (p*l)*harga
console.log("Tanah yang dipesan adalah "+p +" x "+ l);
console.log("harga tanah = Rp."+ total + " , Pajak 15% = Rp."+ (total * 0.15));
console.log("Total Rp."+(total + (total * 0.15)));