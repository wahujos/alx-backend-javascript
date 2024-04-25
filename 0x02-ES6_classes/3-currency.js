export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // getter
  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  // setter
  set name(newName) {
    this._name = newName;
  }

  set code(newCode) {
    this._code = newCode;
  }

  // method
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
