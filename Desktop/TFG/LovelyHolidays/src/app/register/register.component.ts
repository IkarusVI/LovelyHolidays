import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HostService } from '../host.service';
import { User } from '../user';
import e from 'express';
import { GuestService } from '../guest.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  respuestaServidor: any;
  myForm: FormGroup;
  user: User = { userName: '', email: '', password: '' };

  constructor(private hostService: HostService, private form: FormBuilder, private guestService: GuestService){ 
    this.myForm = this.form.group({
      userName: ['', Validators.required],
      email:    ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      userType: ['', Validators.required],
    });
  }

  hasErrors(controlName: string, error: string){
    return this.myForm.get(controlName)?.hasError(error) && this.myForm.get(controlName)?.touched;
  }

  submit(){
    if(this.user){
      this.user.userName= this.myForm.get("userName")?.value;
      this.user.email=    this.myForm.get("email")?.value;
      this.user.password= this.myForm.get("password")?.value;

      if(this.myForm.get("userType")?.value == "host"){
        this.hostService.createHost(this.user).subscribe(
          (response: any) => {
            this.respuestaServidor = response;
            console.log(this.respuestaServidor);
          },
          (error: any) => {
            console.error(error);
          }
        );
      }

      if(this.myForm.get("userType")?.value == "guest"){
        this.guestService.createGuest(this.user).subscribe(
          (response: any) => {
            this.respuestaServidor = response;
            console.log(this.respuestaServidor);
          },
          (error: any) => {
            console.error(error);
          }
        );
      }
    }
  }
}
