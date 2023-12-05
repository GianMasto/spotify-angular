import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { RemoveRepeatedFromListPipe } from '../../pipes/remove-repeated-from-list.pipe';
import { OrderListPipe } from '../../pipes/order-list.pipe';
import { ImgBrokenDirective } from '../../directives/img-broken.directive';
import { NgFor, NgTemplateOutlet } from '@angular/common';

@Component({
    selector: 'app-play-list-body',
    templateUrl: './play-list-body.component.html',
    styleUrls: ['./play-list-body.component.css'],
    standalone: true,
    imports: [
        NgFor,
        NgTemplateOutlet,
        ImgBrokenDirective,
        OrderListPipe,
        RemoveRepeatedFromListPipe,
    ],
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
