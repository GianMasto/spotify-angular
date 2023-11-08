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
    this.loadData();
    this.loadDataRandom();
  }

  loadData(): void {
    this._trackService.getAllTracks$().subscribe((data: TrackModel[]) => {
      this.tracksTrending = data;
    });
  }

  loadDataRandom(): void {
    this._trackService.getAllRandom$().subscribe(
      (data: TrackModel[]) => {
        this.tracksRandom = data;
      },
      (err) => {
        console.log('Error de conexión', err);
      }
    );
  }

  ngOnDestroy(): void {}
}
