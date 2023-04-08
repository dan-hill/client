import {Component, Inject} from '@angular/core';
import {UserService} from "./user.service";
import {StorageService} from "./storage.service";
import { Router } from '@angular/router';
import {DOCUMENT} from "@angular/common";
import * as _ from 'lodash';
import {LOGIN_URL} from './constants/url';
import {INVALID_TOKEN} from "./constants/error";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = { email: null };

  constructor(
    private userService: UserService,
    private storage: StorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userService.get().subscribe((data: any) => {
      if (data.error === INVALID_TOKEN) {
        this.storage.clearUser();
      } else {
        this.storage.setUser(data);
      }
    });

    if (_.isEmpty(this.storage.getUser())) {
      this.router.navigateByUrl(LOGIN_URL)
    } else {
      this.user = this.storage.getUser();
    }
  }

}
