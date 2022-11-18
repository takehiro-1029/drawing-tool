import { Size } from "~/interfaces/Geom.interface";

export class SizeModel {
  private d: Size;

  constructor(d: Size) {
    this.d = d;
  }

  value() {
    return this.d;
  }

  width() {
    return this.d.width;
  }

  height() {
    return this.d.height;
  }

  // add(amount: number){}
  // subtract(amount: number){}
  multiply(amount: number) {
    return new SizeModel({
      width: this.width() * amount,
      height: this.height() * amount,
    });
  }

  divide(amount: number) {
    return new SizeModel({
      width: this.width() / amount,
      height: this.height() / amount,
    });
  }
}
