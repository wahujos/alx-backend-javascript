export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }
  // toString() {
  //     return `[${this._code}] { _name: ${this._name}, _code: ${this._code }}`
  // }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
