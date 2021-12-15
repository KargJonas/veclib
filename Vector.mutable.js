class MVector {
  constructor(...components) {
    this.setComponents(components);
  }

  setComponents(components) {
    this.components = components.slice(0);
    this.x = components[0];
    this.y = components[1];
    this.z = components[2];
  }

  // Initialize MVector using polar coordinates in n dimensions
  static fromPolar(radius, ...angles) {
    let euclidean = Array(angles.length + 1).fill(0);
    let sinProduct = 1;

    for (let i = 0; i < angles.length; i++) {
      euclidean[i] = sinProduct * Math.cos(angles[i]);
      sinProduct *= Math.sin(angles[i]);
    }

    euclidean[angles.length] = sinProduct;
    euclidean = euclidean
      .map(coordinate => coordinate * radius);

    return new MVector(...euclidean);
  }

  clone() {
    return new MVector(...this.components);
  }

  mul(factor) {
    this.setComponents(this.components.map(c => c * factor));
    return this;
  }

  div(factor) {
    this.setComponents(this.components.map(c => c / factor));
    return this;
  }

  mag() {
    return Math.sqrt(
      this.components
        .map(component => Math.sqrt(component, 2))
        .reduce((acc, value) => acc + value));
  }

  unit() {
    return this.div(this.mag());
  }

  scale(length) {
    return this.unit().mul(length);
  }

  add(other) {

    this.setComponents(this.components.map((e, index) => e + other.components[index]));

    return this;
  }

  sub(other) {
    return new MVector(...this.components.map(
      (component, index) => component - other.components[index]));
  }

  dist(other) {
    return this.sub(other).mag();
  }

  dot(other) {
    return this.components
      .map((component, index) => component * other.components[index])
      .reduce((acc, value) => acc + value);
  }

  cross(other) {
    return new MVector(
      this.y * other.z - this.z * other.y,
      this.z * other.x - this.x * other.z,
      this.x * other.y - this.y * other.x
    );
  }
}