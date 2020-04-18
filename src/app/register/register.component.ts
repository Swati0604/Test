import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //registrationForm = new FormGroup({
    //first_name: new FormControl(''),
    //last: new FormControl(''),
    //email: new FormControl(''),
    //password: new FormControl(''),
  //});
  constructor(
    private fb: FormBuilder,
    private _authService: AuthenticationService,
  ) { } 

  registrationForm = this.fb.group({
    first_name: ['', [Validators.required, Validators.minLength(3)]],
    last_name : ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.minLength(9)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    c_password: ['', [Validators.required, Validators.minLength(8)]],
    mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(12)]]   
  })

  loadApiData(){
    this.registrationForm.setValue({
      first_name: 'Swati',
    last: 'Jha',
    email: 'jhaswati0604@gm ail.com',
    password: '1234',
    });
  }

  onSubmit(){
    console.log(this.registrationForm.value);
    this._authService.register(this.registrationForm.value)
    .subscribe(
      response => console.log("Success", response, alert("Registration Successful")),
      error => console.log("Error", error),
    )
    
  }

  ngOnInit(): void {
  }


 
}
