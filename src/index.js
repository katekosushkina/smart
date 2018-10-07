class SmartCalculator {
  constructor(initialValue) {
    this.initialValue = initialValue+'';
    this.value = eval(this.initialValue);
  }

  add(number) {
    this.initialValue = this.initialValue+'+'+number;
    this.value = eval(this.initialValue);
    return this;
  }
  
  subtract(number) {
    this.initialValue = this.initialValue+'-'+number;
    this.value = eval(this.initialValue);
    return this;
  }

  multiply(number) {
    this.initialValue = this.initialValue+'*'+number;
    this.value = eval(this.initialValue);
    return this;
  }

  devide(number) {
    this.initialValue = this.initialValue+'/'+number;
    this.value = eval(this.initialValue);
    return this;
  }

  pow(number) {
    this.initialValue = this.initialValue+'**'+number;
    this.value = eval(this.initialValue);
    return this;
  }
}

module.exports = SmartCalculator;
