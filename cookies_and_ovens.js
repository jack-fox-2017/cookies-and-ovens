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

class Oven {
	constructor(items) {
		this.items = items
	}

	bake(minutes) {
		// return {
		// 	baked: items.filter(item => {return item.bakeTime <= minutes}), 
		// 	unbaked: items.filter(item => {return item.bakeTime > minutes})
		// }
		let timer = 0
		let status = ['mentah', 'hampir matang']
		while(timer < minutes) {
			timer += 5
			if (timer > minutes) timer = minutes

			console.log(`Menit ke-${timer} : `);
			this.items.map(item => {
				if (timer < item.bakeTime)
					item.status = status[Math.floor((timer / item.bakeTime) * status.length)]
				else if (timer == item.bakeTime)
					item.status = 'selesai'
				else
					item.status = 'hangus'
				console.log(`${item.name} -> ${item.status}`);			
			})
		}
	}
}

class Kue {
	constructor(name, bakeTime) {
		this.name = name
		this.bakeTime = bakeTime	
		this.status = 'mentah'
	}
}

class KueCoklat extends Kue {
	constructor(name) {
		super(name, 20)
	}
}

class KueKacang extends Kue {
	constructor(name) {
		super(name, 30)
	}
}

class KueKeju extends Kue {
	constructor(name) {
		super(name, 35)
	}
}

class OtherKue extends Kue {
	constructor(name) {
		super(name, 10)
	}
}

class Kitchen {
	static preapare(items) {
		let result = []
		for (let i = 0; i < items.length; i++) {
			switch(items[i]) {
				case 'kue kacang':
					result.push(new KueKacang(items[i]))
					break;
				case 'kue coklat':
					result.push(new KueCoklat(items[i]))
					break;
				case 'kue keju':
					result.push(new KueKeju(items[i]))
					break;
				default:
					result.push(new OtherKue(items[i]))
			}
		}
		return result
	}
}

let kueList = ['kue coklat', 'kue kacang', 'kue keju']
let kuekue = Kitchen.preapare(kueList)
let oven = new Oven(kuekue)
oven.bake(20)