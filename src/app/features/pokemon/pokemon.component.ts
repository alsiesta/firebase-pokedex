import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { PokedexFirestoreService } from 'src/app/core/pokedex-firestore.service';
import { Pokemon } from './interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit{
  pokemon$: Observable<Pokemon[]>;
  selectedPokemon: Pokemon;

  constructor(
    private readonly pokedexService: PokedexFirestoreService,
    private readonly dialog: MatDialog
  ) { }
  
  ngOnInit(): void {
    this.pokemon$ = this.pokedexService.getAll();
  }
}
