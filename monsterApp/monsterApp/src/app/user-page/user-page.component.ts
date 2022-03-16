import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users-service.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  users : any;
  resources: any;

  constructor(private dataUser:UsersService) { }

  ngOnInit(): void {

    this.dataUser.getUsers().subscribe(data => {
      this.users = data
    });

    this.dataUser.getResources().subscribe(data => {
      this.resources = data
    });


  }

}
