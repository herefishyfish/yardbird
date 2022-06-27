import { Directive } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from '@yardbird/xplat/core';

export interface IYardBirdItemForm {
  name: FormControl<string | null>;
  value: FormControl<number | null>;
  description: FormControl<string | null>;
  condition: FormControl<string | null>;
  category: FormControl<string | null>;
}

@Directive()
export abstract class NewItemBaseComponent extends BaseComponent {
  form = new FormGroup<IYardBirdItemForm>({
    name: new FormControl('', [Validators.required]),
    value: new FormControl(null, [
      Validators.required,
      Validators.min(0),
    ]),
    category: new FormControl(''),
    condition: new FormControl('', [Validators.required]),
    description: new FormControl('', [
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
