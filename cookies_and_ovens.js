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

class Cookie {
  constructor(name, status) {
    this.name = name;
    this.status = status;
  }
}

class KueApem extends Cookie {
  constructor(name, status) {
    super(name, status)
    this.status = this.matang(status);
  }
  matang(param) {
    let maks = 25;
    if (param > maks) {
      return 'gosong'
    }
    if (param < maks) {
      return 'kurang matang'
    }
    if (param = maks) {
      return 'matang'
    }
  }
}

class KueCincin extends Cookie {
  constructor(name, status) {
    super(name, status)
    this.status = this.matang(status);
  }
  matang(param) {
    let maks = 30;
    if (param > maks) {
      return 'gosong'
    }
    if (param < maks) {
      return 'kurang matang'
    }
    if (param = maks) {
      return 'matang'
    }
  }
}

class KueSagu extends Cookie {
  constructor(name, status) {
    super(name, status)
    this.status = this.matang(status);
  }
  matang(param) {
    let maks = 35;
    if (param > maks) {
      return 'gosong'
    }
    if (param < maks) {
      return 'kurang matang'
    }
    if (param = maks) {
      return 'matang'
    }
  }
}

class Oven {
  constructor() {

  }
  static bake(options, min) {
    var toples = [];
    let arr = options.split(',')
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].match(/ape\w/)) {
        var kuki = new KueApem(arr[i], min);
        toples.push(kuki)
      }
      if (arr[i].match(/cinci\w/)) {
        var kuki = new KueCincin(arr[i], min)
        toples.push(kuki)
      }
      if (arr[i].match(/sag\w/)) {
        var kuki = new KueSagu(arr[i], min)
        toples.push(kuki)
      }
    }
    return toples
  }
}



// console.log(Oven.bake('kue cincin', 16));
// console.log(Oven.bake('kue sagu', 40));
console.log(Oven.bake('kue apem, kue sagu, kue cincin', 30));