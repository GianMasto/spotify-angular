import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

import * as dataRaw from '@data/tracks.json'
import { PlayListBodyComponent } from '../../../../shared/components/play-list-body/play-list-body.component';
import { PlayListHeaderComponent } from '../../../../shared/components/play-list-header/play-list-header.component';

@Component({
    selector: 'app-favorite-page',
    templateUrl: './favorite-page.component.html',
    styleUrls: ['./favorite-page.component.css'],
    standalone: true,
    imports: [PlayListHeaderComponent, PlayListBodyComponent]
})
export class FavoritePageComponent implements OnInit {
  tracks: Array<TrackModel> = []

  ngOnInit(): void {
    const {data}: any = (dataRaw as any).default
    this.tracks = data
  }

}
