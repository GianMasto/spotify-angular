import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { ImgBrokenDirective } from '../../directives/img-broken.directive';
import { NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css'],
  standalone: true,
  imports: [NgIf, ImgBrokenDirective, NgClass],
})
export class CardPlayerComponent implements OnInit {
  @Input({ required: true }) track: TrackModel = {} as TrackModel;
  @Input({ required: true }) mode: 'small' | 'big' = 'small';

  constructor(private _multimediaService: MultimediaService) {}

  ngOnInit(): void {}

  sendPlay(track: TrackModel): void {
    this._multimediaService.trackInfo$.next(track);
  }
}
