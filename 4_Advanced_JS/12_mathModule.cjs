// CommonJS module system (default module system).
// use .cjs extension bcz When you set "type": "module" in your package.json, all .js files are treated as ES modules by default.

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

module.exports = {
  add,
  sub,
  mul,
};
