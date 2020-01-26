import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
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
              private http: HttpClient,
              private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    if (this.id) {
      this.http.get<Hero>(`http://localhost:3000/heroes/${this.id}`).subscribe(hero => {
        this.hero = hero;
      });
      return;
    }
    this.hero = {} as Hero;
  }

  onHeroSubmit(hero: Hero) {
    if (hero.id) {
      this.http.put(`http://localhost:3000/heroes/${hero.id}`, hero).subscribe(() => {
        this.router.navigate(["../"]);
      });
      return;
    }
    this.http.post('http://localhost:3000/heroes/', hero).subscribe(() => {
      this.router.navigate(["../"]);
    });
  }

}
