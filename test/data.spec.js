global.window = global;
global.assert = require("chai").assert;
require('../src/data.js');
require("../src/data/pokemon/pokemon.js");

const data = window.POKEMON.pokemon;

describe("data", () => {
  it("deberia ser un objeto", () => {
    global.assert.equal(typeof window.POKEMON.pokemon, "object");
  });
});

describe("filterData", () => {
  it("deberia ser una funcion", () => {
    global.assert.equal(typeof window.pokemonData.filterData, "function");
  });

  it(`deberia retornar como primer pokemon de clase Planta a Bulbasaur`, () => {
    global.assert.equal(window.pokemonData.filterData(data, "Grass")[0].name, "Bulbasaur");
  });

  it(`deberia retornar todos los pokemones sin importar el orden previamente seleccionado`, () => {
    global.assert.equal(window.pokemonData.filterData(data, "0"), data);
  });
});

describe("sortData", () => {
  it("deberia ser una funcion", () => {
    global.assert.equal(typeof window.pokemonData.sortData, "function");
  });

  it("deberia retornar el numero 001 como el primer numero ordenado de 1-151", () => {
    global.assert.equal(window.pokemonData.sortData(data, "num"), "1-151"[0].num, "001");
  });

  it("debería retornar el numero 001 antes de 002 con un orden lower", () => {
    global.assert.equal(window.pokemonData.sortData(data, "lower")[0].num < data[1].num, "001" < "002");
  });

  it("deberia retornar el numero 151 como el primer numero ordenado de 151-1", () => {
    global.assert.equal(window.pokemonData.sortData(data, "num"), "151-1"[0].num, "151");
  });

  it("debería retornar el numero 151 antes de 150 con un orden higher", () => {
    global.assert.equal(window.pokemonData.sortData(data, "higher")[0].num > data[1].num, "151" > "150");
  });

  it("deberia retornar el nombre Abra como el primer nombre ordenado de a-z", () => {
    global.assert.equal(window.pokemonData.sortData(data, "name"), "A-Z"[0].name, "Abra");
  });

  it("debería retornar el nombre Abra antes de Aerodactil con un orden a-z", () => {
    global.assert.equal(window.pokemonData.sortData(data, "az")[0].name < data[1].name, "Abra" < "Aerodactil");
  });

  it("deberia retornar el nombre Zubat como el primer nombre ordenado de z-a", () => {
    global.assert.equal(window.pokemonData.sortData(data, "name"), "Z-A"[0].name, "Zubat");
  })

  it("debería retornar el nombre Zubat antes de Zapdos con un orden z-a", () => {
    global.assert.equal(window.pokemonData.sortData(data, "za")[0].name > data[1].name, "Zubat" > "Zapdos");
  });

  describe("computeStats", () => {
    it("deberia ser una funcion", () => {
      global.assert.equal(typeof window.pokemonData.computeStats, "function");
    });

    it("debiera retornar el numero 14 para la suma de los pokemones del tipo Planta", () => {
      global.assert(window.pokemonData.computeStats(data, "Grass"), "14");
    });
  });
});



