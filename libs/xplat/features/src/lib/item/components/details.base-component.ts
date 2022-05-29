import { ItemService } from "../services/item.service";

export abstract class DetailsBaseComponent {
  item$;

  constructor(private itemService: ItemService) {
    this.item$ = this.itemService.item$;
  }
}
