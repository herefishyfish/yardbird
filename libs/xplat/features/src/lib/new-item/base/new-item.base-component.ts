import { Directive, inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BaseComponent, IYardBirdBaseItem } from '@yardbird/xplat/core';
import { NewItemService } from '../services';
import { Router } from '@angular/router';

@Directive()
export abstract class NewItemBaseComponent extends BaseComponent {
  protected newItemService = inject(NewItemService);
  protected router = inject(Router);
  protected form = new FormGroup<
    Partial<{ [K in keyof IYardBirdBaseItem]: AbstractControl<any> }>
  >({
    name: new FormControl<string>('', [Validators.required]),
    value: new FormControl<number | null>(null, [
      Validators.required,
      Validators.min(0),
    ]),
    category: new FormControl<string>(''),
    condition: new FormControl<string>('', [Validators.required]),
    description: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(50),
    ]),
  });

  async onSubmit() {
    const ref = await this.newItemService.saveItem(this.form.getRawValue());
    console.log('ref', ref);
    this.router.navigate(['item', ref.id]);
  }
}
