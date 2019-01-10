global.window = global;
global.assert = require ("chai").assert;
require('../src/data.js');
require("../src/data/pokemon/pokemon.js");

const type = window.POKEMON.pokemon.type;
const data = window.POKEMON.pokemon;
const num = window.POKEMON.pokemon.num;
const name = window.POKEMON.pokemon.name;


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

describe ("sortData", () => {
  it("deberia ser una funcion", () => {
    global.assert.equal(typeof window.pokemonData.sortData, "function");
  });

  it ("deberia retornar el numero 001 como el primer numero ordenado de 1-151", () => {
    global.assert.equal(window.pokemonData.sortData (data,"num"), "1-151"[0].num,"001");
  });

  it ("deberia retornar el numero 151 como el primer numero ordenado de 151-1", () => {
    global.assert.equal(window.pokemonData.sortData (data,"num").higher, "151-1"[151].num,"151");
  });

  it ("deberia retornar el nombre Abra como el primer nombre ordenado de a-z", () => { 
    global.assert.equal(window.pokemonData.sortData (data,"name"), "A-Z"[0].name, "Abra");
  });

  it ("deberia retornar el nombre Zubat como el primer nombre ordenado de z-a", () => {
    global.assert.equal(window.pokemonData.sortData (data,"name"), "Z-A"[151].name, "Zubat");
  })



});



