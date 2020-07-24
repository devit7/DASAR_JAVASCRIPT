class Lingkaran{
    constructor(r,pi){
        // properti atau atribut dari sebuah object
        // didefinisikan di dalam method construktor
        this.r=r //jari-jari
        this.pi=pi //pi
    }
    luas = () => {
        return this.pi * (this.r**2)
    }
    keliling = () => {
        return 2*(this.pi * this.r)
    }
}
class bola extends Lingkaran{
    constructor(pi,r){
        super(pi,r)
    }
    luas_permukaan = () => {
        return  4 * this.pi * (this.r**2)
    }
    volume = () => {
        return 4/3 * this.pi *(this.r**3)
    }
}
class kerucut extends Lingkaran{
    constructor(pi,r,t){
        super(pi,r)
        this.t=t //tinggi
        var s= Math.sqrt((r**2) + (t**2))
        this.s=s //sisi
    }
    luas_permukaan = () => {
        return   (this.pi * (this.r**2)) + (this.pi * this.r * this.s)
    }
    luas_selimut = () => {
        return     this.pi * this.r * this.s
    }
    volume = () => {
        return 1/3 * this.pi * (this.r**3) * this.t
    }
}
class tabung extends Lingkaran{
    constructor(pi,r,t){
        super(pi,r)
        this.t=t
    }
    luas_permukaan = () => {
        return   2 * this.pi * this.r * (this.r + this.t)
    }
    luas_selimut = () => {
        return     2 * this.pi * this.r * this.t
    }
    volume = () => {
        return this.pi * (this.r**2) * this.t
    }
}
let Bola = new bola(3.14 , 15)
console.log("---------- BOLA ----------")
console.log("Luas Permukaan bola = "+Bola.luas_permukaan())
console.log("Volume Bola = "+Bola.volume())

let Kerucut = new kerucut(3.14 , 10, 40)
console.log("---------- KERUCUT ----------")
console.log("Luas Permukaan Kerucut = "+Kerucut.luas_permukaan())
console.log("Luas Selimut Kerucut = "+Kerucut.luas_selimut() )
console.log("Volume Kerucut = "+Kerucut.volume())

let Tabung = new tabung(3.14 , 7, 50)
console.log("---------- TABUNG ----------")
console.log("Luas Permukaan Tabung = "+Tabung.luas_permukaan())
console.log("Luas Selimut Tabung = "+Tabung.luas_selimut() )
console.log("Volume Tabung = "+Tabung.volume())