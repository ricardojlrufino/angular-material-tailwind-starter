import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-demo2';
  accountForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {

    this.accountForm = this._formBuilder.group({
      cardHolder: ['Brian Hughes'],
      cardNumber: ['brianh'],
      cardExpiration: ['Senior Frontend Developer'],
      cardCVC: ['YXZ'],
      about: [
        "Hey! This is Brian; husband, father and gamer. I'm mostly passionate about bleeding edge tech and chocolate! 🍫",
      ],
      email: ['hughes.brian@mail.com', Validators.email],
      phone: ['121-490-33-12'],
      country: ['usa'],
      language: ['english'],
    });
  }

  ngOnInit(): void {

  }
}
