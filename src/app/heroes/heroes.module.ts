import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './containers/heroes/heroes.component';
import {HeroesRoutingModule} from "./heroes.routing-module";
import { HeroesTableComponent } from './components/heroes-table/heroes-table.component';
import { HeroComponent } from './containers/hero/hero.component';
import { HeroFormComponent } from './components/hero-form/hero-form.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [HeroesComponent, HeroesTableComponent, HeroComponent, HeroFormComponent],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class HeroesModule { }
