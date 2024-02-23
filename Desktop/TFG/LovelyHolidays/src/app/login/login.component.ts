import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { HostService } from '../host.service';
import { GuestService } from '../guest.service';
import { LoginService } from '../login.service';
import { error } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  respuestaServidor: any;
  myForm: FormGroup;
  user: User = { userName: '', email: '', password: '' };

  constructor(private form: FormBuilder, private logingService: LoginService){ 
    this.myForm = this.form.group({
      userNameEmail: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  credential: string = "";

  hasErrors(controlName: string, error: string){
    return this.myForm.get(controlName)?.hasError(error) && this.myForm.get(controlName)?.touched;
  }

  submit(){
    if(this.user){
      this.credential = this.myForm.get("userNameEmail")?.value;

      if(this.credential.indexOf("@") != -1){
        this.user.email = this.credential;
      }else{
        this.user.userName = this.credential;
      }

      this.user.password= this.myForm.get("password")?.value;

      this.logingService.login(this.user).subscribe(
        (response: any) =>{
            this.respuestaServidor = response;
            console.log(this.respuestaServidor);
        },
        (error: any) =>{
          console.error(error);
        }
      );
    }
  }
}


