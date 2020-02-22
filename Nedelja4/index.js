// Zadatak1
const pokemonList = [
    {
        name: 'Pokedex',
        species: 'Wild Duck Pokemon',
        abilities: ['Keen Eye', 'Inner Focus'],
        characteristics: {
            speed: 60,
            attack: 90,
            defense: 55
        },
        img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'
    },
    {
        name: 'Arbook',
        species: 'Cobra Pokemon',
        abilities: ['Intimidate', 'Shed Skin'],
        characteristics: {
            speed: 80,
            attack: 95,
            defense: 69
        },
        img: 'https://img.pokemondb.net/artwork/large/arbok.jpg'
    },
    {
        name: 'Pikachu',
        species: 'Mouse Pokemon',
        abilities: ['Static Lightning Rod'],
        characteristics: {
            speed: 90,
            attack: 55,
            defense: 40
        },
        img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'
    },
    {
        name: 'Voltorb',
        species: 'Ball Pokemon',
        abilities: ['Soundproof', 'Static'],
        characteristics: {
            speed: 100,
            attack: 30,
            defense: 50
        },
        img: 'https://img.pokemondb.net/artwork/large/voltorb.jpg'
    }
]

// Zadatak2
const getAllAbilities = (pokemons) => {
    let abilities = [];
    pokemons.forEach(pokemon => {
        abilities.push(...pokemon.abilities);
    })
    return abilities;
}

// Zadatak3
const sortRising = () => {
    pokemonList.sort((a, b) => {
        return a.characteristics.speed - a.characteristics.speed
    });
}

sortRising();

// Zadatak4
const getStrongestPokemon = pokemons => {
    let attack = 0;
    let strongestPokemon;
    pokemons.forEach(pokemon => {
        if(pokemon.characteristics.attack > attack){
            attack = pokemon.characteristics.attack;
            strongestPokemon = pokemon;
        }
    })
    return strongestPokemon;
}