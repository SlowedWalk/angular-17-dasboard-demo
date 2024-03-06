import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  public buttonText = '';

  @Input()
	set text(name: string) {
		this.buttonText = name.toUpperCase();
  }

	get name(): string {
		return this.buttonText;
  }

  @Input() type: string = 'button';

  @Input() icon: string = 'button';

  @Input() isDisabled = false;

  @Output() btnClick = new EventEmitter();

  constructor() { }

  onClick() {
		this.btnClick.emit();
	}
}
