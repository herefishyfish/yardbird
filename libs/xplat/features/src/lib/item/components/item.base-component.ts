import { inject } from "@angular/core";
import { Router } from "@angular/router";

export abstract class ItemBaseComponent {
  private router = inject(Router);

  constructor() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
}
