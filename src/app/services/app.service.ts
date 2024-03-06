import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private API_URL = environment.apiUrl;

  constructor(@Inject() private _http: HttpClient) { }

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
      const data = this._http.get<any>(`${this.API_URL}/revenue`);

      console.log('Data fetch completed after 3 seconds.');

      return data;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch revenue data.');
    }
  }
}
