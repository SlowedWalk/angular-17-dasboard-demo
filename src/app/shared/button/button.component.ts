import { Component, Input, Output } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgIcon],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  public buttonText = '';

  @Input()
  pending: boolean = false;

  @Input()
	set text(name: string) {
		this.buttonText = name.toUpperCase();
  }

	get name(): string {
		return this.buttonText;
  }

  @Input()
  type: string = 'button';

  @Input()
  icon: string = 'heroArrowRight';

  @Input()
  isDisabled = false;

  // @Output()
  // btnClick = new EventEmitter();

  constructor() {
    // set the icon's value
  }

  onClick(event: any) {
    this.pending = true;
    // this.btnClick.emit(event);
    console.log('Button clicked');

	}
}
