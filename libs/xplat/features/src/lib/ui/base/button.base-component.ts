import { Directive, Input, HostBinding, HostListener } from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

import { BaseComponent } from '@yardbird/xplat/core';

@Directive()
export abstract class ButtonBaseComponent extends BaseComponent {
  @HostBinding('class.status-warning')
  @Input()
  get warning() {
    return this._warning;
  }
  set warning(value: BooleanInput) {
    this._warning = coerceBooleanProperty(value);
  }
  private _warning = false;

  @HostBinding('class.status-error')
  @Input()
  get error() {
    return this._error;
  }
  set error(value: BooleanInput) {
    this._error = coerceBooleanProperty(value);
  }
  private _error = false;

  @HostBinding('class.status-focus')
  @Input()
  get focus() {
    return this._focus;
  }
  set focus(value: BooleanInput) {
    this._focus = coerceBooleanProperty(value);
  }
  private _focus = false;

  @HostBinding('class.status-info')
  @Input()
  get info() {
    return this._info;
  }
  set info(value: BooleanInput) {
    this._info = coerceBooleanProperty(value);
  }
  private _info = false;

  @HostBinding('class.status-success')
  @Input()
  get success() {
    return this._success;
  }
  set success(value: BooleanInput) {
    this._success = coerceBooleanProperty(value);
  }
  private _success = false;

  @HostBinding('class.appearance-filled')
  get filled() {
    return this.appearance == 'filled';
  }

  @HostBinding('class.appearance-outline')
  get outline() {
    return this.appearance == 'outline';
  }

  @HostListener('isEnabled', ['$event'])
  @HostListener('disabled', ['$event'])
  disable(value: boolean) {
    console.log(value);
    this.disabled = value;
  }

  @HostBinding('class.disabled')
  public set disabled(value) {
    this._disabled = value;
  }
  public get disabled() {
    return this._disabled;
  }
  private _disabled = false;

  @Input()
  appearance: 'filled' | 'outline' = 'filled';
}
