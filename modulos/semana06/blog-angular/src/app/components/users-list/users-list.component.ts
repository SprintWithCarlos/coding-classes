import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.css"]
})
export class UsersListComponent implements OnInit {
  private _users = [];
  @Input() users() {
    return this._users;
  }
  constructor() {}
  ngOnInit() {}
}
