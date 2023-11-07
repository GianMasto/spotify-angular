import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css'],
})
export class PlayListBodyComponent implements OnInit {
  @Input() tracks: Array<TrackModel> = [];

  optionSort: {
    property: string | null;
    order: 'asc' | 'desc';
  } = {
    property: null,
    order: 'asc',
  };

  changeSort(property: string): void {
    this.optionSort = {
      property,
      order: this.optionSort.order === 'asc' ? 'desc' : 'asc',
    };
  }

  ngOnInit(): void {}
}
