import { Component, input, model, output } from '@angular/core';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-dropdown',
  imports: [SelectModule, FormsModule],
  templateUrl: './dropdown.html',
  styleUrl: './dropdown.scss',
})
export class Dropdown {
  options = input<any[]>([]);
  optionLabel = input<string>('label');
  optionValue = input<string>('value');
  placeholder = input<string>('Select an option');
  disabled = input<boolean>(false);

  selectedValue = model<any>(null);
  selectionChange = output<any>();

  onSelectionChange(value: any) {
    this.selectionChange.emit(value);
  }
}
