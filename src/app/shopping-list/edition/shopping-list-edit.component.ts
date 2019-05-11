import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;
  @Output() ingredientCreated = new EventEmitter<Ingredient>();

  constructor() {
  }

  ngOnInit() {
  }

  newIngredient() {
    // tslint:disable-next-line:radix
    const elemento = new Ingredient(this.name.nativeElement.value, parseInt(this.amount.nativeElement.value));
    console.log(elemento);
    this.ingredientCreated.emit(elemento);
  }

}
