let barang =[
    {nama: "Beras",harga: 10000,jumlah: 5},
    {nama: "Gula",harga: 14000,jumlah: 5},
    {nama: "Telur",harga: 20000,jumlah: 2},
    {nama: "Minyak Goreng",harga: 9000,jumlah: 10}
]
var total=0
for(var i=0;i < barang.length;i++){
    var x=barang[i],totalharga=(x.harga * x.jumlah)
    console.log("===============================");
    console.log("Total dari barang "+ x.nama);
    console.log("Total "+ totalharga);    
    total += totalharga
}
console.log("TOTAL Belanja Keseluruhan : Rp." + total);