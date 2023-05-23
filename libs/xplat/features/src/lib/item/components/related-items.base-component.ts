import { inject } from "@angular/core";
import { ItemService } from "../services";

export abstract class RelatedItemsBaseComponent {
  relatedItems$;
  itemService = inject(ItemService);

  constructor() {
    this.relatedItems$ = this.itemService.relatedItems$;
  }
}
