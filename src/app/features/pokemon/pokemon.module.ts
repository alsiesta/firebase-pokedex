import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonComponent } from './pokemon.component';
import { FormComponent } from './components/form/form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';
import { TemplateCommentDirective } from './template-comment.directive';

@NgModule({
  declarations: [
    PokemonComponent,
    FormComponent,
    ListComponent,
    DetailComponent,TemplateCommentDirective
  ],
  imports: [CommonModule,PokemonRoutingModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatCardModule,MatDialogModule]
})
export class PokemonModule { }
