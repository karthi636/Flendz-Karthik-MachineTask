import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;

  password:string;

  msg:string;
  constructor(public router : Router) { }

  ngOnInit(): void {
  }

  formSumbit(form:NgForm){
    console.log("sumbit");
    console.log(form.value);

    if(form.value.uemail == "admin@email.com" && form.value.upass == "admin"){
      console.log("if_loop");
      this.router.navigateByUrl("/user");
    }
    else{
      this.msg = "invalidlogin";
    }
  }

}
