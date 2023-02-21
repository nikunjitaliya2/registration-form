import { Component } from '@angular/core';
import { FormBuilder, Validators} from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { ToastrService } from "ngx-toastr";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  // constructor(private builder:FormBuilder) {
  // }
  constructor(private builder: FormBuilder, private service: AuthService, private router: Router,
              private toastr: ToastrService) {

  }

  registerform = this.builder.group({
    id:this.builder.control('', Validators.compose([Validators.required,Validators.minLength(5)])),
    name:this.builder.control('',Validators.required),
    password:this.builder.control('',Validators.compose([Validators.required,Validators.pattern('(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')])),
    email:this.builder.control('',Validators.compose([Validators.required,Validators.email])),
    gender:this.builder.control('male'),
    role:this.builder.control('',Validators.required),
    isactive:this.builder.control(false),
  })

  proceedregistation() {
    if (this.registerform.valid) {
      this.service.Proceedregister(this.registerform.value).subscribe((res)=>{
        this.toastr.success('Please contact admin for enable access','Registered Successfully');
        this.router.navigate(["Login"]);
      })
    } else {
      this.toastr.warning('Please enter valid data.')
    }
  }

}
