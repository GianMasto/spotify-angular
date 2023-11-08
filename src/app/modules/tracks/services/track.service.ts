import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { environment } from '@env/environment';
import { CookieService } from 'ngx-cookie-service';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TrackService {
  private readonly URL = environment.api;
  private readonly token = this.cookie.get('token');

  private skipTrackById(
    trackArr: TrackModel[],
    _id: Number
  ): Promise<TrackModel[]> {
    return new Promise((resolve, reject) => {
      const tmpArr = trackArr.filter((el) => el._id !== _id);
      resolve(tmpArr);
    });
  }

  constructor(private http: HttpClient, private cookie: CookieService) {}

  getAllTracks$(): Observable<any> {
    return this.http
      .get(`${this.URL}/tracks`)
      .pipe(map(({ data }: any) => data));
  }

  getAllRandom$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`).pipe(
      mergeMap(({ data }: any) => this.skipTrackById(data, 1)),
      catchError((err) => {
        return of([]);
      })
    );
  }
}
