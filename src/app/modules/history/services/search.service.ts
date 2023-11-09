import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient) {}

  searchTracks$(term: string) {
    return this.http
      .get(`${this.URL}/tracks/${term}`)
      .pipe(map(({ data }: any) => data));
  }
}
