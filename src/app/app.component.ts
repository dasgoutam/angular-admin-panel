import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserDataService } from './services/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'admin-panel';
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  user = "";
  login = true;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private route: ActivatedRoute, private userService: UserDataService) {
    this.mobileQuery = media.matchMedia('(max-width: 900px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  ngOnInit() {
    this.userService.usernameValue.subscribe(data => {
      if (data) {
        this.user = data.name; 
        console.log("useron=",data);
        this.login = false;
      }
      else {
        this.login = true;
      }
    })
  }

  goToLogin() {
    // this.router.navigate()
  }

  signout() {
    this.login = true;
    this.user = "";
    localStorage.removeItem('currentUser');
  }
}
