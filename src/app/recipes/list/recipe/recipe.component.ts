import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../../recipe.model';

@Component({
  selector: 'app-ingredient',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  @Input('recipe') recipe: Recipe;

  constructor() {
  }

  ngOnInit() {
  }

}
