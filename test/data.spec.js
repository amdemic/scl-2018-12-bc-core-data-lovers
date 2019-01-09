global.window = global;
global.assert = require ("chai").assert;
require('../src/data.js');
require("../src/data/pokemon/pokemon.js");




describe ("window.POKEMON.pokemon", () => {
  it ("deberia ser un objeto", () => {
    assert.equal(typeof window.POKEMON.pokemon,"object");
  });
});

describe ("POKEMON.pokemon.filterData", () => {
  it("deberia ser una funcion",() => {
    assert.equal(typeof window.pokemonData.filterData, "function");
  });
  it(`deberia retornar "Bulbasaur" para "Grass" con "type[0]"`, () => {
    assert.equal(typeof window.pokemonData.filterData ("type[0]",type.Grass), "Bulbasaur");
  });
});


