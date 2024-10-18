import {  Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';



@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  @Input()
  public characterList: Character[] = []

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  //Emitimos aqui y se escucha en el mainpage.html


  onDeleteCharacter(id?:string):void{
    //Asi emito el ID del personaje
    this.onDelete.emit(id);
  }
}
