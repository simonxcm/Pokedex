import { ComponentFactoryResolver, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemons: string [] = [];

  constructor() {
    const storagePokemons = localStorage.getItem('pokemons');
    if (!storagePokemons) return;
    this.pokemons = JSON.parse(storagePokemons);
  }

  storePokemonList() {
    localStorage.setItem('pokemons', JSON.stringify(this.pokemons));
  }

  addPokemon(name: string) {
    this.pokemons.push(name);
    this.storePokemonList
  }

  removePokemon(index: number) {
    this.pokemons.splice(index, 1);
    this.storePokemonList();
  }

  removePokemonByName(name: string | undefined) {
    if (!name) {
      throw new Error('Pokemon Name should be set')
    }
    this.pokemons.splice(this.pokemons.indexOf(name), 1);
  }

}
