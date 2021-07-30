import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // constructor() { }
  //
  // form: FormGroup = new FormGroup({
  //   $key: new FormControl(null)
  // });

  constructor(private formBuilder:FormBuilder){}

  profileForm = this.formBuilder.group({
    $key: new FormControl(null),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    streetName: new FormControl('', Validators.required),
    streetNumber: new FormControl('', Validators.required),
    streetAdd: new FormControl('', Validators.required),
    zipCode: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    birthDate: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10)]),
    emailAddress: new FormControl('', Validators.required)
  });

  saveForm() {
    console.log('De gegevens zijn opgeslagen', this.profileForm.value);
  }

// Validaties

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Voer e-mailadres in';

    }
  }

  onClear() {
    this.profileForm.reset();
    this.profileForm.setValue({
      $key: null,
      firstName: '',
      lastName: '',
      streetName: '',
      streetNumber: '',
      streetAdd: '',
      zipCode: '',
      city: '',
      birthDate: '',
      phoneNumber: '',
      emailAddress: ''
    });
  }
}
