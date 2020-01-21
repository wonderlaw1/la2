import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './containers/heroes/heroes.component';
import {HeroesRoutingModule} from "./heroes.routing-module";
import { HeroesTableComponent } from './components/heroes-table/heroes-table.component';
import { HeroComponent } from './containers/hero/hero.component';
import { HeroFormComponent } from './components/hero-form/hero-form.component';


@NgModule({
  declarations: [HeroesComponent, HeroesTableComponent, HeroComponent, HeroFormComponent],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
