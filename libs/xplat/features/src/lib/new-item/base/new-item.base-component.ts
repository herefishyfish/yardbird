import { Directive } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BaseComponent, IYardBirdBaseItem } from '@yardbird/xplat/core';

@Directive()
export abstract class NewItemBaseComponent extends BaseComponent {
  form = new FormGroup<
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

  constructor() {
    super();
  }

  onSubmit() {
    console.log(this.form.getRawValue());
  }
}
