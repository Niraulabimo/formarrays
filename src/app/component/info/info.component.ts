import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {
  email!: FormControl;
  name = new FormControl('');
  constructor() {}
  ngOnInit() {
    this.email = new FormControl('', Validators.required);
    this.name.setValue('John Doe');
  }
}
