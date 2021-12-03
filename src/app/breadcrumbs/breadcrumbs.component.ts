import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreadcrumbsService, IBreadcrumb } from './breadcrumbs.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  breadcrumbs$: Observable<IBreadcrumb[]>

  constructor(private bs: BreadcrumbsService) { }

  ngOnInit() {
    this.breadcrumbs$ = this.bs.breadcrumbs$;
  }

}