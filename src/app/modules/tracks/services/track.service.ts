import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import * as dataRaw from '@data/tracks.json';

@Injectable({
  providedIn: 'root',
})
export class TrackService {
  dataTracksTrending$: Observable<TrackModel[]> = of([]);
  dataTracksRandom$: Observable<TrackModel[]> = of();

  constructor() {
    const { data }: any = (dataRaw as any).default;

    this.dataTracksTrending$ = of(data);
    this.dataTracksRandom$ = new Observable((observer) => {
      const trackExample: TrackModel = {
        _id: 3,
        name: 'Calypso (Original Mix)',
        album: 'Round Table Knights',
        cover:
          'https://cdns-images.dzcdn.net/images/cover/1db3f8f185e68f26feaf0b9d72ff1645/350x350.jpg',
        artist: {
          name: 'Round Table Knights',
          nickname: 'Round Table Knights',
          nationality: 'US',
        },
        url: 'http://localhost:3000/track-2.mp3',
      };
      setTimeout(() => {
        observer.next([trackExample]);
      }, 3000);
    });
  }
}
