import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {Module2Component} from "./module2.component";


const appRoutes: Routes = [
  { path: 'component2', component: Module2Component },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class Module2RoutingModule { }
