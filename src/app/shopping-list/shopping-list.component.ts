import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredientes: Ingredient[] = [
    new Ingredient('Manzana', 2)
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
