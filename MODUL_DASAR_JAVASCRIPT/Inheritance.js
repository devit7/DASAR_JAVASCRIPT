class persegipanjang{
    constructor(p,l){
        // properti atau atribut dari sebuah object
        // didefinisikan di dalam method construktor
        this.panjang=p
        this.lebar=l
    }

    luas = () => {
        return this.panjang*this.lebar
    }

    keliling = () => {
        return 2* (this.panjang + this.lebar)
    }

}

class balok extends persegipanjang{
    constructor(p,l,t){
        super(p,l)
        this.tinggi=t
    }

    luas = () => {
        return(2 * this.panjang * this.lebar) + (2 * this.panjang * this.tinggi)
        +(2 * this.tinggi * this.lebar)
    }

    volume = () => {
        return this.panjang * this.lebar * this.tinggi
    }
}

let lemari = new balok(10,5,2)
console.log("Luas Lemari = "+lemari.luas())
console.log("Volume Lemari = "+lemari.volume())