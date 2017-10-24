import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { appConfig } from '../app.config';

@Injectable()
export class PostService {

  constructor(private http: Http) { }

  getCategory(category: number) {
    return this.http.get(appConfig.apiUrl + '/api/blog/category/' + category + '/').map((response: Response) => response.json().results);
  }

  getClick(item_id: number) {
    return this.http.get(appConfig.apiUrl + '/api/blog/item/' + item_id + '/click/' ).map((response: Response) => response.json().results);
  }
}
