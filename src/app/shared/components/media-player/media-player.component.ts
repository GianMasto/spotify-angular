import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css'],
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  mockCover: TrackModel = {
    _id: 2,
    name: 'Snow Tha Product || BZRP Music Sessions #39',
    album: 'BZRP Music Sessions',
    cover:
      'https://is5-ssl.mzstatic.com/image/thumb/Features125/v4/9c/b9/d0/9cb9d017-fcf6-28c6-81d0-e9ac5b0f359e/pr_source.png/800x800cc.jpg',
    artist: {
      name: 'Snow',
      nickname: 'Snow',
      nationality: 'US',
    },
    url: 'http://localhost:3000/track-1.mp3',
  };

  observersList: Subscription[] = [];

  constructor(private _multimediaService: MultimediaService) {}

  ngOnInit(): void {
    const observer1$: Subscription = this._multimediaService.callback.subscribe(
      (response: TrackModel) => {}
    );

    this.observersList.push(observer1$);
  }

  ngOnDestroy(): void {
    this.observersList.forEach((sub) => sub.unsubscribe());
  }
}
