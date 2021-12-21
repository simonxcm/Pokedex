import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  pokemonName: string | undefined;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.pokemonName = this.activatedRoute.snapshot.params['name'];
  }
}
