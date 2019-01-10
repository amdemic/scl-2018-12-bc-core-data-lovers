global.window = global;
global.assert = require ("chai").assert;
require('../src/data.js');
require("../src/data/pokemon/pokemon.js");

const type = window.POKEMON.pokemon.type;
const data = window.POKEMON.pokemon;


describe ("data", () => {
  it ("deberia ser un objeto", () => {
    global.assert.equal(typeof window.POKEMON.pokemon,"object");
  });
});

describe ("filterData", () => {
  it("deberia ser una funcion",() => {
    global.assert.equal(typeof window.pokemonData.filterData, "function");
  });
  it(`deberia retornar como primer pokemon de clase Planta a Bulbasaur`, () => {
    global.assert.equal(window.pokemonData.filterData (data,"Grass")[0].name, "Bulbasaur");
  });
});




