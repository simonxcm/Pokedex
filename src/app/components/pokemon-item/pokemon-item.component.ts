import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})

export class PokemonItemComponent implements OnInit {

  nbCaught = 0;
  addPokemonButton = false;
  deletePokemonButton = false;
  pokemonName = "";
  currentAddTimeout : any;
  constructor() { }

  ngOnInit(): void {

  }

  pokemonNameChanged($event: Event) {

    const inputElement = $event.target as HTMLInputElement;
    this.pokemonName = inputElement.value;
  }

  addPokemon($event: Event) {

    console.log($event);
    this.addPokemonButton = true;
    this.deletePokemonButton = false;
    this.nbCaught += 1;
  }

  deletePokemon($event: Event) {

    console.log($event);
    this.deletePokemonButton = true;
    this.nbCaught -= 1;
    if (this.nbCaught >= 1) {
      this.addPokemonButton = true;
    } else {
      this.addPokemonButton = false;
    }

    if (this.currentAddTimeout) return;
    this.currentAddTimeout = setTimeout(() => {
      this.deletePokemonButton = false;
    }, 3000);
  }
}
