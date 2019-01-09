global.window = global;
global.assert = requiere ("chai").assert;
require('../src/data.js');
require('./data.spec.js');


describe("filterData", () => {


  it("deberia mostrar los pokemones de todos los tipos", () => {
    assert.equal(typeof filterData,"tipo");
  });

describe("data.filter", () => {
it("deberia mostrar los pokemones correspondientes a un tipo seleccionado",() => {
  assert.equal(typeof data.filter,"function");
});

it("deberia retornar Dragonair, Dragonite, Dratini para tipo Dragón", () => {
    assert.equal(data.filter(type[15]));

  });

});


