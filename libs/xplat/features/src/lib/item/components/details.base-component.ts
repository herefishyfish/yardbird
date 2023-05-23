import { inject } from "@angular/core";
import { ItemService } from "../services";

export abstract class DetailsBaseComponent {
  item$;
  private itemService = inject(ItemService);

  constructor() {
    this.item$ = this.itemService.item$;
  }
}
