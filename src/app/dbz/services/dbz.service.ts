import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  public characters: Character[] =[
    {
      id: uuid(),
      name:'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name:'Krillin',
      power:1000
    },
    {
      id: uuid(),
      name:"Vegeta",
      power:9500
    }
  ];

  onNewCharacter(character:Character):void{
    const newCharacter: Character = {
      ... character, id: uuid(),
    }

    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index:number):void{
  //   let removed = this.characters.splice(index, 1);
  //   console.log(removed)
  // }
  deleteCharacterById( id: string){
    console.log("el id a borrar:",id)
    this.characters = this.characters.filter(character => character.id != id)
    console.log(this.characters)
  }

}
