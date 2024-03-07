import { Component, Input, OnInit } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { heroBanknotes, heroUserGroup, heroClock, heroInbox } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgIcon],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  public iconMap: any = {
    collected: heroBanknotes,
    customers: heroUserGroup,
    pending: heroClock,
    invoices: heroInbox,
  };

  public Icon: any;

  @Input()
  public title!: string;

  @Input()
  public value!: string;

  @Input()
  public type = 'invoices' || 'customers' || 'pending' || 'collected';

  @Input()
  public color = 'bg-red-200' || 'bg-green-200' || 'bg-blue-200' || 'bg-yellow-200';

  constructor() { }

  ngOnInit(): void {
    this.Icon = this.iconMap[this.type];
  }

}
