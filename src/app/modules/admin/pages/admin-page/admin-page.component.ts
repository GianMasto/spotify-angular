import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TracksService } from '@modules/admin/services/tracks.service';
import { TrackListComponent } from '../../components/track-list/track-list.component';
import { TrackFormComponent } from '../../components/track-form/track-form.component';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-admin-page',
    templateUrl: './admin-page.component.html',
    styleUrls: ['./admin-page.component.css'],
    standalone: true,
    imports: [
        NgClass,
        TrackFormComponent,
        TrackListComponent,
    ],
})
export class AdminPageComponent {
  isLoading = true;
  constructor() {}
}
