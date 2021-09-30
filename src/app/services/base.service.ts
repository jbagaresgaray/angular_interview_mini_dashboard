import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  private _jsonURL = './assets/example.json';

  constructor(private http: HttpClient) {}

  public async getJSON(): Promise<any> {
    return await this.http.get(this._jsonURL).toPromise();
  }
}
