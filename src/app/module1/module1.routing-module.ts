import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {Module1Component} from "./module1.component";


const appRoutes: Routes = [
  { path: 'component1', component: Module1Component },
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
export class Module1RoutingModule { }
