import { Component, OnInit } from "@angular/core";
import { UsersService } from "../../services/users.service";
@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
  users: {} = [];
  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getUsers().subscribe(users => {
      console.log(users);
      this.users = users;
    });
  }
}
