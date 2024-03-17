import { Component } from '@angular/core';

@Component({
  selector: 'input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent {
  inputValue: string = '';

  submit() {
    alert(`Submitted Value: ${this.inputValue}`);
    this.inputValue = ''; // Reset input
  }
}

