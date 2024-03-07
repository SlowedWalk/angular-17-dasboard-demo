import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Revenue } from '../models/models';
import { environment } from '../../environments/environment';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private API_URL = environment.apiUrl;

  params = new URLSearchParams();

  constructor(
    private readonly _http: HttpClient,
    private readonly _router: Router,
  ) { }

  search(term: any): void {
    this.params.set('page', '1');

    if (term) {
      this.params.set('query', term);
    } else {
      this.params.delete('query');
    }

    this._router.navigate(['/'], { queryParams: this.params });
  }

  fetchRevenue() {
    // Prevent the response from being cached.
    // This is equivalent to in fetch(..., {cache: 'no-store'}).
    try {
      // Artificially delay a response for demo purposes.
      // Don't do this in production :)

      console.log('Fetching revenue data...');

      // replace this with the Observable version of setTimeout
      new Promise((resolve) => setTimeout(resolve, 3000));

      // `SELECT * FROM revenue`;
      const data = this._http.get<Revenue>(`${this.API_URL}/revenue`);

      console.log('Data fetch completed after 3 seconds.');

      return data;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch revenue data.');
    }
  }
}
