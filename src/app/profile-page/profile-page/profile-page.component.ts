import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { MatGridList } from '@angular/material/grid-list';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit, AfterContentInit {
  @ViewChild('grid') grid: MatGridList;
  @ViewChild('grid2') grid2: MatGridList;

  user_data;
  salary = 40000;
  colspan1 = 3;
  colspan2 = 2;

  gridByBreakpoint = {
    xl: 8,
    lg: 4,
    md: 2,
    sm: 2,
    xs: 1
  }

  secondBreakpoint = {
    xl: 5,
    lg: 5,
    md: 3,
    sm: 3,
    xs: 1
  }

  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor(private observableMedia: MediaObserver) { }

  ngOnInit(): void {
    this.user_data = JSON.parse(localStorage.getItem("currentUser"));
  }

  ngAfterContentInit() {
    this.observableMedia.asObservable().subscribe((change: MediaChange[]) => {
      this.grid.cols = this.gridByBreakpoint[change[0].mqAlias];
      this.grid2.cols = this.secondBreakpoint[change[0].mqAlias];
      console.log(change[0].mqAlias)
      if(change[0].mqAlias == 'md' || change[0].mqAlias == 'sm') {
        this.colspan1 = 2;
        this.colspan2 = 1;
      }
      else if (change[0].mqAlias == 'xs') {
        this.colspan1 = 1;
        this.colspan2 = 1;
      }
      else if (change[0].mqAlias == 'lg' || change[0].mqAlias == 'xl') {
        this.colspan1 = 3;
        this.colspan2 = 2;
      }
    });
  }

}
