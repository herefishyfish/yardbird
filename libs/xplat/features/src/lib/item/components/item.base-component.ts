import { Router } from "@angular/router";

export abstract class ItemBaseComponent {

  constructor(private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
}
