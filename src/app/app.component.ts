import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BreadcrumbsService, IBreadcrumb } from './breadcrumbs/breadcrumbs.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private bs: BreadcrumbsService, private route: Router) { 
    this.route.events.subscribe(params => {
      if(params instanceof NavigationEnd) {
        let breadcrumb: IBreadcrumb = {
          route: params.url.slice(1),
          displayText: ''
        }
        if(breadcrumb.route === '') {
          this.bs.initBreadcrumbs();
        } else {
          switch(breadcrumb.route) {
            case 'profile':
              breadcrumb.displayText = "Profile";
              break;
            case 'preferences':
              breadcrumb.displayText = "Preferences";
              break;
          }
          this.bs.setBreadcrumbs(breadcrumb);
        }
      }
    })
  }

  ngOnInit(): void {
    this.bs.initBreadcrumbs();
  }
}
