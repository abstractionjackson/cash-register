//getDenominationsCount.js
export class Payment {
	//USD values in cents
	denominations = [10000, 5000, 2000, 1000, 500, 100, 25, 10, 5, 1];
	getGreatestDenomination() {
		return this.denominations[0];
	}
	//A storage object that tallies the denominations
	count = {};
	//Increment the count of a given denomination, at least once
	increment(denomination, increments = 1) {
		const { count } = this;
		if (Object.hasOwn(count, denomination)) {
			count[denomination] += increments;
		} else {
			count[denomination] = increments;
		}
	}
	getCount() {
		return this.count;
	}
	//The initial value
	amount;
	//A variable used in subtracting denomination values
	balance;
	constructor(value = 0) {
		const { denominations } = this;
		this.amount = value * 100;
		this.balance = value * 100;
		for (const denomination of denominations) {
			//get the number of times a denomination goes into the balance
			const increments = Math.floor(this.balance / denomination);
			if (increments > 0) {
				this.increment(denomination, increments);
				this.balance -= denomination * increments;
			}
		}
	}
}

function convertToCent(amt) {
	return amt * 100;
}
const convertToDollar = (amt) => amt / 100;
