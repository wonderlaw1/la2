import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module1Component } from './module1.component';
import {Module1RoutingModule} from "./module1.routing-module";
import { Component1Component } from './component1/component1.component';



@NgModule({
  declarations: [Module1Component, Component1Component],
  imports: [
    CommonModule,
    Module1RoutingModule
  ]
})
export class Module1Module { }
