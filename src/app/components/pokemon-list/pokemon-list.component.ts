import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})

export class PokemonListComponent implements OnInit{

  @ViewChild('nameinput') nameInputElementRef: ElementRef | undefined;

  nbCaught = 0;
  addPokemonButton = false;
  deletePokemonButton = false;
  pokemonName = "";
  pokemons!: string[];

  constructor(private pokemonService: PokemonService, private router: Router) {
    this.pokemons = this.pokemonService.pokemons;
  }

  ngOnInit(): void {
  }


  generateBackgroundColor(){

    return this.nbCaught >= 5 ? '#00D679' : '#212529';
  }

  pokemonNameChanged($event: Event) {

    const inputElement = $event.target as HTMLInputElement;
    this.pokemonName = inputElement.value;
  }

  addPokemon() {

    this.addPokemonButton = true;
    this.deletePokemonButton = false;
    this.nbCaught += 1;
    this.pokemons.push(this.pokemonName);
    this.pokemonName = "";
  }

  deletePokemon(index: number) {

    this.deletePokemonButton = true;
    this.nbCaught -= 1;
    this.pokemonService.removePokemon(index)
    if (this.nbCaught >= 1) {
      this.addPokemonButton = true;
    } else {
      this.addPokemonButton = false;
    }

    setTimeout(() => {

      this.deletePokemonButton = false;
    }, 3000);
  }

}
