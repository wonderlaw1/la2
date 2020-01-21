import { Component, OnInit, Input } from '@angular/core';
import {Hero} from "../../containers/heroes/heroes.component";

@Component({
  selector: 'app-heroes-table',
  templateUrl: './heroes-table.component.html',
  styleUrls: ['./heroes-table.component.css']
})
export class HeroesTableComponent implements OnInit {

  @Input() heroes: Hero[];

  constructor() { }

  ngOnInit() {
  }

}
