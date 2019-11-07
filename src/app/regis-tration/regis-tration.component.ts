import { Component, OnInit } from '@angular/core';
import { phoneNumberValidator } from '../validator/phone-validator';
//import { FormGroup } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-regis-tration',
  templateUrl: './regis-tration.component.html',
  styleUrls: ['./regis-tration.component.css']
})
export class RegisTrationComponent implements OnInit {

  registrationForm: FormGroup;
  constructor() {
    this.registrationForm = this.createFormGroup();
  }

  ngOnInit() {
  }

  createFormGroup() {
    return new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required, phoneNumberValidator]),
    });
  }


  get firstname() {
    return this.registrationForm.get('firstname');
  }
  get lastname() {
    return this.registrationForm.get('lastname');
  }

  get mobile() {
    return this.registrationForm.get('mobile');
  }

  revert() {
    this.registrationForm.reset();
  }

  onSubmit() {
    //...
    console.log('onsubmit');
  }

}
