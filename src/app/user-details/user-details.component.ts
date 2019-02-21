import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { ValidationService } from '../services/validation.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit {
  myform: FormGroup;
  items = [
    { id: 1, label: 'Male' },
    { id: 2, label: 'Female' }
    ];
  selected = 1;
  sourceList: string[] = [
    'English',
    'French',
    'German',
  ];
  constructor() { }
  ngOnInit() {
    this.createFormControls();
  }

  createFormControls() {
    this.myform = new FormGroup({
      firstName: new FormControl(null, [Validators.required, ValidationService.alphabets]),
      lastName: new FormControl(null, [Validators.required, ValidationService.alphabets]),
      email: new FormControl(null, [Validators.required, ValidationService.emailValidator]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      language: new FormControl(''),
      // editdropdown: new FormControl(''),
      checkbox: new FormControl('')
    });
  }

  onSubmit(e) {
    if (this.myform.valid && this.myform.dirty) {
      console.log('submit', e, this.myform.getRawValue());
    } else {
      ValidationService.validateAllFormFields(this.myform);
    }
  }

  sourceChangeEditable(e) {
    console.log('sourceChangeEditable', e);
  }

  onReset(e) {
    this.myform.reset();
  }

  checkCheckBoxValue(event) {
    console.log('checkValue', event.target.value, event.target.id);
 }

}
