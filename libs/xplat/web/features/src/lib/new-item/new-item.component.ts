import { Component } from '@angular/core';
import { NewItemBaseComponent } from '@yardbird/xplat/features';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ButtonDirective } from '../ui';

@Component({
  selector: 'yrdbrd-new-item',
  templateUrl: 'new-item.component.html',
  styleUrls: ['./new-item.component.scss'],
  standalone: true,
  imports: [NgIf, FormsModule, ReactiveFormsModule, ButtonDirective],
})
export class NewItemComponent extends NewItemBaseComponent {}
