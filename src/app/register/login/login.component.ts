import { Component, OnInit } from '@angular/core'; 
import { AuthenticationService } from 'src/app/authentication.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../register.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authenticationService : AuthenticationService,
    private fb: FormBuilder,
  ) { }


  LoginForm = this.fb.group({
    email: ['', [Validators.required, Validators.minLength(9)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  })
  ngOnInit(): void {
  }



  onSubmit(){
    console.log(this.LoginForm.value);
    this.authenticationService.loginUser(this.LoginForm.value)
    .subscribe(
      response => console.log("Success", response, alert("LogIn Successful")),
      error => console.log("Error", error, alert("Wrong Credential")),
    )

}
}
