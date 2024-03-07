import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-card-wrapper',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './card-wrapper.component.html',
  styleUrl: './card-wrapper.component.css'
})
export class CardWrapperComponent implements OnInit {
  constructor(private readonly _http: HttpClient) { }
  cardData: any;

  ngOnInit(): void {
    this.cardData = this._http.get('https://api.example.com/data').subscribe((data) => {
      console.log(data);
    });
  }

}
