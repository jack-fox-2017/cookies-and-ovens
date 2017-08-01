// Answer These Questions:
//
// - What are essential classes?
// - What attributes will each class have?
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
//
//
// Your code here


class Kue{
  constructor(nama,rasa){
    this._status = 0
    this._name = nama
    this._rasa = rasa
  }
}

class KueCokelat extends Kue {
  constructor(){
    super(`kue cokelat`,`cokelat`)
    this._lamaMasak = 20
  }
}


class KueKacang extends Kue {
  constructor(){
    super(`kue kacang`,`kacang`)
    this._lamaMasak = 30
  }
}

class KueKeju extends Kue {
  constructor() {
    super(`kue keju`,`keju`)
    this._lamaMasak = 35
  }
}

class PabrikKue {
  constructor(){}
  static produksi(daftarKueArr){
    var result = []
    for (var i = 0; i < daftarKueArr.length; i++) {
      if (daftarKueArr[i] === 'kue cokelat') {
        result.push(new KueCokelat())
      } else if (daftarKueArr[i] === 'kue kacang') {
        result.push(new KueKacang())
      } if (daftarKueArr[i] === `kue keju`) {
        result.push(new KueKeju())
      }
    }
    return result
  }
}


class Panggangan {
  constructor(pesanan){
    this._pesanan=pesanan
  }
  panggang(waktuPanggang){
    var status = [`mentah`,`hampir matang`,`matang`,'gosong']

    for (var i = 0; i <= waktuPanggang; i+=5) {
      console.log(`Panggang menit ke ${i}`);

      for (var j = 0; j < this._pesanan.length; j++) {

        let step = this._pesanan[j][`_lamaMasak`] / 2

        if (i > this._pesanan[j][`_lamaMasak`]) {
          this._pesanan[j][`_status`] = 3
        } else if ( i/step >= this._pesanan[j][`_status`]+1) {
          this._pesanan[j][`_status`] ++
        }
        var tempStatus = status[this._pesanan[j][`_status`]]
        console.log(`${this._pesanan[j][`_name`]} --> ${tempStatus}`);
      }
      console.log(``);
    }
  }
}

var daftar1 = [`kue kacang`,`kue keju`,`kue cokelat`]
var pesanan1 = PabrikKue.produksi(daftar1)
console.log(pesanan1);
console.log(`-------------`);

var kueMasukPanggangan = new Panggangan(pesanan1)
kueMasukPanggangan.panggang(35);
