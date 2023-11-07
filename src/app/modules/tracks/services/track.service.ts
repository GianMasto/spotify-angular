import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { environment } from '@env/environment';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TrackService {
  private readonly URL = environment.api;
  private readonly token = environment.token;

  private skipTrackById(
    trackArr: TrackModel[],
    _id: Number
  ): Promise<TrackModel[]> {
    return new Promise((resolve, reject) => {
      const tmpArr = trackArr.filter((el) => el._id !== _id);
      resolve(tmpArr);
    });
  }

  constructor(private http: HttpClient) {}

  getAllTracks$(): Observable<any> {
    return this.http
      .get(`${this.URL}/api/1.0/tracks`, {
        headers: new HttpHeaders().set('authorization', `Bearer ${this.token}`),
      })
      .pipe(map(({ data }: any) => data));
  }

  getAllRandom$(): Observable<any> {
    return this.http
      .get(`${this.URL}/api/1.0/tracks`, {
        headers: new HttpHeaders().set('authorization', `Bearer ${this.token}`),
      })
      .pipe(
        mergeMap(({ data }: any) => this.skipTrackById(data, 1)),
        catchError((err) => {
          return of([]);
        })
      );
  }
}
