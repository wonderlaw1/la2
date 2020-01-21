import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import { Hero } from '../heroes/heroes.component';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  hero: Hero;
  private id: string;

  constructor(private route: ActivatedRoute,
              private http: HttpClient) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.http.get<Hero>(`http://localhost:3000/heroes/${this.id}`).subscribe(hero => {
      this.hero = hero;
    })
  }

}
