export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (new.target === Building) {
      throw new Error('cannot instantiate an abstract class');
    }
  }

  // getter
  get sqft() {
    return this._sqft;
  }

  // abstract method
  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
