import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css'],
})
export class TracksPageComponent implements OnInit, OnDestroy {
  tracksTrending: Array<TrackModel> = [];
  tracksRandom: Array<TrackModel> = [];

  $oberserversList: Subscription[] = [];

  constructor(private _trackService: TrackService) {}

  ngOnInit(): void {
    const observer1$ = this._trackService.dataTracksTrending$.subscribe(
      (res) => {
        this.tracksTrending = res;
      }
    );

    const observer2$ = this._trackService.dataTracksRandom$.subscribe((res) => {
      this.tracksRandom = res;
    });

    this.$oberserversList.push(observer1$, observer2$);
  }

  ngOnDestroy(): void {
    this.$oberserversList.forEach((obs) => obs.unsubscribe());
  }
}
