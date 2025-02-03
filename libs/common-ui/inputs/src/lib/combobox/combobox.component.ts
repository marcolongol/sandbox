import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboBoxComponent } from '@progress/kendo-angular-dropdowns';

@Component({
  selector: 'common-ui-combobox',
  imports: [CommonModule, ComboBoxComponent],
  templateUrl: './combobox.component.html',
  styleUrl: './combobox.component.scss',
})
export class ComboboxComponent {
  public data = input(['One', 'Two', 'Three']);
}
