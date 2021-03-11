import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  user: any[]=[];

  constructor(public usser : UserService) { }

  ngOnInit(): void {
    this.usser.getUser().subscribe((data:any)=>{
      console.log(data);
      this.user = data;
    });
  }

  
 
   


}
