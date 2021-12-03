import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface IBreadcrumb {
  route: string,
  displayText: string
}

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {
  home: IBreadcrumb = { route: '', displayText: 'Home' };
  breadcrumbs: IBreadcrumb[] = [];
  breadcrumbsSubject: BehaviorSubject<IBreadcrumb[]> = new BehaviorSubject([]);
  breadcrumbs$: Observable<IBreadcrumb[]> = this.breadcrumbsSubject.asObservable();

  setBreadcrumbs(newBreadcrumb: IBreadcrumb) {
    this.breadcrumbs.push(newBreadcrumb);
    this.breadcrumbsSubject.next(this.breadcrumbs);
  }

  initBreadcrumbs(newBreadcrumb?: IBreadcrumb) {
    this.breadcrumbs = newBreadcrumb ? [this.home, newBreadcrumb] : [this.home];
    this.breadcrumbsSubject.next(this.breadcrumbs);
  }

}