import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private builder: FormBuilder, private service: AuthService, private router: Router,
              private toastr: ToastrService) {
    localStorage.clear();
  }

  userdata: any;

  loginform = this.builder.group({
    username: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required),
  })


  proceedlogin() {
    if (this.loginform.valid) {
      this.service.Getbycode(this.loginform.value.username).subscribe(res => {
          this.userdata = res;
        console.log(this.userdata);

        if(this.userdata.password === this.loginform.value.password){
          if(this.userdata.isactive){
            localStorage.setItem('username',this.userdata.id);
            localStorage.setItem('userrole',this.userdata.role);
            this.router.navigate(['']);
          }else {
            this.toastr.error("Invalid Credentials");
          }
        }else {
          this.toastr.error("Invalid Credentials");
        }

      })
    }
  }
}
    //   this.service.Proceedregister(this.loginform.value).subscribe(res => {
    //     this.toastr.success('Please contact admin for enable access', 'Registered Successfully');
    //     this.router.navigate(["Login"]);
    //   })
    // } else {
    //   this.toastr.warning('Please enter valid data.')
    //   console.log("hello");
    // }
