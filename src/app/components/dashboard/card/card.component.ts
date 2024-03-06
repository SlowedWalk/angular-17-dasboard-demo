import { Component } from '@angular/core';
import { banknotes, userGroup, clock, inbox } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  public iconMap = {
    collected: banknotes,
    customers: userGroup,
    pending: clock,
    invoices: inbox,
  };

  @Input()
  public title!: string;

  @Input()
  public value!: string;

  @Input()
  public type = 'invoices' || 'customers' || 'pending' || 'collected';

  @Input()
  public color = 'bg-red-200' || 'bg-green-200' || 'bg-blue-200' || 'bg-yellow-200';

  constructor() { }

  public Icon: any = this.iconMap[this.type];

}
