import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyhttpService {

  constructor(private httpClient: HttpClient) { }

  getSavedGame () {
  	return this.httpClient.get('https://api.myjson.com/bins/i216a');
  }
}
