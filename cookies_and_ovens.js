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
    this._status = `mentah`
    this._name = nama
    this._rasa = rasa
    this._lamaMasak = 0
  }

  panggang(){
    this._status = ``
  }
}

class KueCokelat extends Kue {
  constructor(nama,rasa){
    super(nama,rasa)
    this._lamaMasak = 20
  }
}


class KueKacang extends Kue {
  constructor(nama,rasa){
    super(nama,rasa)
    this._lamaMasak = 30
  }
}

class KueKeju extends Kue {
  constructor(nama,rasa) {
    super(nama,rasa)
    this._lamaMasak = 35
  }
}

class PabrikKue {
  constructor(){}

  static produksi(daftarKueArr){
    var result = []
    for (var i = 0; i < daftarKueArr.length; i++) {
      if (daftarKueArr[i] === 'kue cokelat') {
        result.push(new KueCokelat(`kue cokelat`,`cokelat`))
      } else if (daftarKueArr[i] === 'kue kacang') {
        result.push(new KueKacang(`kue kacang`,`kacang`))
      } if (daftarKueArr[i] === `kue keju`) {
        result.push(new KueKeju(`kue keju`,`keju`))
      }
    }

    return result

  }
}

var daftar1 = [`kue kacang`,`kue keju`,`kue cokelat`]
var pesanan1 = PabrikKue.produksi(daftar1)


console.log(pesanan1);
