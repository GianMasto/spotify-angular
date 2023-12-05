import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { SearchService } from '@modules/history/services/search.service';
import { Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { PlayListBodyComponent } from '../../../../shared/components/play-list-body/play-list-body.component';
import { SearchComponent } from '../../components/search/search.component';

@Component({
    selector: 'app-history-page',
    templateUrl: './history-page.component.html',
    styleUrls: ['./history-page.component.css'],
    standalone: true,
    imports: [
        SearchComponent,
        PlayListBodyComponent,
        AsyncPipe,
    ],
})
export class HistoryPageComponent {
  tracks$: Observable<any> = of([]);

  constructor(private _searchService: SearchService) {}

  receiveData(term: string): void {
    this.tracks$ = this._searchService.searchTracks$(term);
  }
}
