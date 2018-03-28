import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HttpService {
  constructor(private _http: Http){
    this.getPokemon();
  }

getPokemon(){
  let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
  bulbasaur.subscribe((data) => {
    var poke_data = data.json();
    var abilities = poke_data.abilities;
    console.log(`${poke_data.name} has ability ${abilities[0].ability.name}`);
    var this_ability = this._http.get(abilities[0].ability.url);
    this_ability.subscribe((data) => {
      var ability_list = [];
      var poke_ability = data.json();
      var same_ability = poke_ability.pokemon
      var same_length = same_ability.length
      console.log(`${(same_length)} Pokemon, in total, have ability ${abilities[0].ability.name}`)
      for(var i=0; i<same_length; i++){
        ability_list.push(same_ability[i].pokemon.name)
      };
      console.log(ability_list)
  });
});
};
};
