import { Component } from '@angular/core';
import { Dice } from './dice';
import { DICES } from './dices';
import {NgFor} from '@angular/common';


@Component({
  selector: 'app-dices',
  templateUrl: './dices.component.html',
  styleUrls: ['./dices.component.scss']
})
export class DicesComponent {
dices: Dice[] = DICES;
dice?: Dice

onInit(){
 this.dice= DICES.find(dice => dice.id === 4);
 }

onSelect(id:number): void {
this.dice=DICES.find(dice => dice.id === id);
console.log(this.dice);

}
}
