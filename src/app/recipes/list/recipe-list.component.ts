import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Enchiladas verdes', 'Tradicionales enchiladas bañadas en salsa verde gratinadas con queso oaxaca o mozzarela',
      'http://saboramexico.com.mx/sabor2/images/PORTADA/P11_enchiladas_verdes.png'),
    new Recipe('Enchiladas verdes', 'Tradicionales enchiladas bañadas en salsa verde gratinadas con queso oaxaca o mozzarela',
      'http://saboramexico.com.mx/sabor2/images/PORTADA/P11_enchiladas_verdes.png'),
    new Recipe('Enchiladas verdes', 'Tradicionales enchiladas bañadas en salsa verde gratinadas con queso oaxaca o mozzarela',
      'http://saboramexico.com.mx/sabor2/images/PORTADA/P11_enchiladas_verdes.png'),
  ];
  @Output() selectedRecipe = new EventEmitter<Recipe>();

  constructor() {
  }

  ngOnInit() {
  }

  recipeSelect(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }

}
