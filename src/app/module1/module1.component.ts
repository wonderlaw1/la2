import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-module1',
  templateUrl: './module1.component.html',
  styleUrls: ['./module1.component.css']
})
export class Module1Component implements OnInit, OnDestroy {

  title = '';
  interval;

  constructor() { }

  ngOnInit(): void {
    this.title = 'abc';
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

}
