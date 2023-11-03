import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent implements OnInit {
  @Input() tracks: Array<TrackModel> = [] 

  optionSort: {
    property: string | null,
    order: -1 | 1
  } = {
    property: null, 
    order: 1
  }

  changeSort(property: string): void {
    this.optionSort.property = property
    this.optionSort.order = -1 * this.optionSort.order as 1 | -1
  }

  ngOnInit(): void {
    console.log(this.tracks)
  }
} 
