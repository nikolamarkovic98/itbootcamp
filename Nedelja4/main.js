// Zadatak5

const convertAbilitiesToString = abilities => {
    let mario = ``;
    abilities.forEach(ability => mario += `${ability}, `);
    return mario;
}

const displayPokemon = pokemon => {
    return `
        <div class="box">
            <div class="info">
                <p><b>Name:</b> <span>${pokemon.name}</span></p>
                <p><b>Species:</b> <span>${pokemon.species}</span></p>
                <p><b>Abilities:</b> <span>${convertAbilitiesToString(pokemon.abilities)}</span></p>
                <p><b>Speed:</b> <span>${pokemon.characteristics.speed}</span></p>
                <p><b>Attack:</b> <span>${pokemon.characteristics.attack}</span></p>
                <p><b>Defense:</b> <span>${pokemon.characteristics.defense}</span></p>
            </div>
            <img src="${pokemon.img}" />
        </div>
    `
}

const displayPokemons = (pokemons, app, side) => {
    console.log(side);
    if(side == 'left')
        app.innerHTML = '<button id="close_left" class="close">&#10005;</button>';
    else if(side == 'right')
        app.innerHTML = '<button id="close_right" class="close">&#10005;</button>';
    pokemons.forEach(pokemon => app.innerHTML += displayPokemon(pokemon));
}

const initLeft = app => {
    app.innerHTML = '<h1 id="show-pokemons">SHOW POKEMONS</h1>';
    init();
}

const initRight = app => {
    app.innerHTML = '<h1 id="strongest-pokemon">SHOW STRONGEST POKEMON</h1>';
    init();
}

const init = () => {
    const show_pokemons = document.querySelector('#show-pokemons');
    show_pokemons.addEventListener('click', e => {
        displayPokemons(pokemonList, e.target.parentElement, 'left');
        let close_left = document.querySelector('#close_left');
        close_left.addEventListener('click', e => {
            initLeft(e.target.parentElement);
        });
    });
    const strongest_pokemon = document.querySelector('#strongest-pokemon');
    strongest_pokemon.addEventListener('click', e => {
        displayPokemons([getStrongestPokemon(pokemonList)], e.target.parentElement, 'right');
        let close_right = document.querySelector('#close_right');
        close_right.addEventListener('click', e => {
            initRight(e.target.parentElement);
        })
    })
}

init();