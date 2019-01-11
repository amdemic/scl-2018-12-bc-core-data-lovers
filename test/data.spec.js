global.window = global;
global.assert = require ("chai").assert;
require('../src/data.js');
require("../src/data/pokemon/pokemon.js");

//const type = window.POKEMON.pokemon.type;
const data = window.POKEMON.pokemon;
//const num = window.POKEMON.pokemon.num;
//const name = window.POKEMON.pokemon.name; 


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

  it ("deberia retornar el numero 002 como el segundo numero ordenado de 1-151", () => {
    global.assert.equal(window.pokemonData.sortData (data,"num"), "1-151"[1].num,"002"); 
  });

  it ("deberia retornar el numero 151 como el primer numero ordenado de 151-1", () => {
    global.assert.equal(window.pokemonData.sortData (data,"num"), "151-1"[0].num,"151");
  });

  it ("deberia retornar el numero 150 como el segundo numero ordenado de 151-1", () => {
    global.assert.equal(window.pokemonData.sortData (data,"num"), "151-1"[1].num,"150");
  });

  it ("deberia retornar el nombre Abra como el primer nombre ordenado de a-z", () => { 
    global.assert.equal(window.pokemonData.sortData (data,"name"), "A-Z"[0].name, "Abra");
  });

  it("debería retornar el nombre Aerodactil como el segundo nombre ordenado de a-z", () => {
    global.assert.equal(window.pokemonData.sortData (data,"name"), "A-Z"[1].name, "Aerodactil");
  });

  it ("deberia retornar el nombre Zubat como el primer nombre ordenado de z-a", () => {
    global.assert.equal(window.pokemonData.sortData (data,"name"), "Z-A"[0].name, "Zubat");
  })
  it ("deberia retornar el nombre Zapdos como el segundo nombre ordenado de z-a", () => {
    global.assert.equal(window.pokemonData.sortData (data,"name"), "Z-A"[1].name, "Zapdos");
  })

describe ("computeStats", () => {
  it("deberia ser una funcion", () => {
    global.assert.equal(typeof window.pokemonData.computeStats, "function");
  });
  it("debiera retornar el numero 14 para la suma de los pokemones del tipo Planta", () => {
    global.assert(window.pokemonData.computeStats (data,"Grass"),"14");
  });
});


});



