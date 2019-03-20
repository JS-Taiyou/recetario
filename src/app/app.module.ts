import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {ShoppingListEditComponent} from './shopping-list/edition/shopping-list-edit.component';
import {IngredientComponent} from './recipes/list/ingredient/ingredient.component';
import {RecipeListComponent} from './recipes/list/recipe-list.component';
import {RecipeDetailComponent} from './recipes/list/ingredient/detail/recipe-detail.component';
import {RecipesComponent} from './recipes/recipes.component';
import {HeaderComponent} from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    IngredientComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
