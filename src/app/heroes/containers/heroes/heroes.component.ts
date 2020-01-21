import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";


export interface Hero {
  id: number;
  name: string;
  email: string;
  age?: number;
}

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<Hero[]>('http://localhost:3000/heroes').subscribe(heroes => {
      this.heroes = heroes;
    });
  }

}
