import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { environment } from '@env/environment';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TracksService {
  private readonly URL = environment.api;
  trackListUpdate$ = new Subject<TrackModel[]>();
  selectedTrackForEdit$ = new Subject<TrackModel>();

  constructor(private http: HttpClient) {}

  selectTrackForEdit(track: TrackModel): void {
    this.selectedTrackForEdit$.next(track);
  }

  updateList(): void {
    this.getTracks$().subscribe({
      next: (tracks) => {
        this.trackListUpdate$.next(tracks);
      },
    });
  }

  addTrack$(body: TrackModel): Observable<any> {
    const { name, album, cover, artist } = body;
    return this.http
      .post(`${this.URL}/tracks/add`, {
        name,
        album,
        cover,
        artist,
      })
      .pipe(
        tap((r) => {
          this.updateList();
        })
      );
  }

  getTracks$(): Observable<TrackModel[]> {
    try {
      return this.http
        .get(`${this.URL}/tracks`)
        .pipe(map(({ data }: any) => data));
    } catch (error) {
      console.error(error);
      return of([]);
    }
  }

  editTrack$(trackId: string, body = {}) {
    return this.http.put(`${this.URL}/tracks/edit/${trackId}`, body).pipe(
      tap(() => {
        this.updateList();
      })
    );
  }

  deleteTrack$(body: TrackModel): Observable<any> {
    return this.http.delete(`${this.URL}/tracks/delete/${body.uid}`).pipe(
      tap(() => {
        this.updateList();
      })
    );
  }
}
