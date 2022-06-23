import { DetailsComponent } from './details/details.component';
import { ItemComponent } from '../item.component';
import { RelatedItemsComponent } from './related-items/related-items.component';

export const ITEM_COMPONENTS = [ItemComponent, DetailsComponent, RelatedItemsComponent];

export * from '../item.component';
export * from './details/details.component';
export * from './related-items/related-items.component';
