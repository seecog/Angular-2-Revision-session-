import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { MusiclistComponent } from './musiclist/musiclist.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { MycolDirective } from './mycol.directive';
import { Mycol } from './directives/mycol.directive';

@NgModule({
  declarations: [CategoriesComponent, MusiclistComponent, TransactionsComponent,Mycol],
  imports: [
    CommonModule
  ],
  exports : []
})
export class MusicModule { }
