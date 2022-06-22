export class Plate {
  constructor (letters, number){
    this.letters= letters;
    this.numbers= number;
  }
  getLastDigit(){
    return this.numbers[this.numbers.length-1]
  }
}