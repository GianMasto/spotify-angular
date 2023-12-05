import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TracksService } from '@modules/admin/services/tracks.service';
import Swal from 'sweetalert2';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-track-list',
    templateUrl: './track-list.component.html',
    styleUrls: ['./track-list.component.css'],
    standalone: true,
    imports: [NgFor],
})
export class TrackListComponent implements OnInit {
  @Input() isLoading!: boolean;
  @Output() isLoadingChange = new EventEmitter<boolean>();

  tracks: TrackModel[] = [];
  constructor(private tracksService: TracksService) {}

  ngOnInit(): void {
    this.tracksService.trackListUpdate$.subscribe({
      next: (data) => {
        this.tracks = data;
        this.isLoadingChange.emit(false);
      },
    });

    this.tracksService.updateList();
  }

  editTrack(track: TrackModel): void {
    this.tracksService.selectTrackForEdit(track);
    window.scrollTo(0, 0);
  }

  async deleteTrack(body: TrackModel): Promise<any> {
    const popup = await Swal.fire({
      text: `Seguro que quieres borrar la cancion "${body.name}"?`,
      icon: 'warning',
      confirmButtonText: 'Si',
    });

    if (popup.isConfirmed) {
      window.scrollTo(0, 0);
      this.isLoadingChange.emit(true);
      this.tracksService.deleteTrack$(body).subscribe({
        next: () => {
          this.tracksService.getTracks$().subscribe({
            next: (e) => {
              this.tracks = e;
            },
          });
        },
      });
    }
  }
}
