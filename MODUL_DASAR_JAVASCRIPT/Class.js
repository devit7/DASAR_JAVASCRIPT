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

let tanah =new persegipanjang(10,50)
console.log("Luas Tanah = "+tanah.luas())
console.log("Keliling Tanah = "+tanah.keliling())