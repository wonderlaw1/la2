import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Hero} from "../../containers/heroes/heroes.component";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  isLoaded: boolean = false;

  @Output() submit: EventEmitter<Hero> = new EventEmitter<Hero>();

  @Input()
  set hero(value: Hero) {
    if (value) {
      this.form.patchValue(value);
      this.isLoaded = true;
    }
    if (value && !value.id) {
      this.form.controls.id.clearValidators();
    }
  }

  constructor(private fb: FormBuilder) { }

  form = this.fb.group({
    id: this.fb.control(null, Validators.required),
    name: this.fb.control(null, Validators.required),
    age: this.fb.control(null, Validators.required),
    email: this.fb.control(null, [Validators.email, Validators.required]),
  });

  ngOnInit() {

  }

  onSubmit() {
    this.isLoaded = false;
    this.submit.emit(this.form.value);
  }
}
