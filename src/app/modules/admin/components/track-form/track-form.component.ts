import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TrackModel } from '@core/models/tracks.model';
import { TracksService } from '@modules/admin/services/tracks.service';

@Component({
  selector: 'app-track-form',
  templateUrl: './track-form.component.html',
  styleUrls: ['./track-form.component.css'],
})
export class TrackFormComponent implements OnInit {
  @Input() isLoading!: boolean;
  @Output() isLoadingChange = new EventEmitter<boolean>();

  trackForm: FormGroup = new FormGroup({});
  formError = false;
  mode: 'EDIT' | 'ADD' = 'ADD';
  selectedTrack!: TrackModel;

  constructor(private tracksService: TracksService) {}

  ngOnInit(): void {
    this.trackForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      album: new FormControl('', [Validators.required]),
      cover: new FormControl('', [Validators.required]),
      artist: new FormControl('', [Validators.required]),
    });

    this.tracksService.selectedTrackForEdit$.subscribe({
      next: (track) => {
        this.mode = 'EDIT';
        this.selectedTrack = track;
        this.trackForm.patchValue(track);
      },
    });
  }

  onFormSubmit(e: any): void {
    const body = this.trackForm.value;
    this.trackForm.reset();
    this.isLoadingChange.emit(true);

    if (this.mode === 'ADD') {
      this.tracksService.addTrack$(body).subscribe();
    }

    if (this.mode === 'EDIT') {
      delete body.uid;
      const newBody = { ...this.selectedTrack, ...body };
      this.tracksService.editTrack$(newBody.uid, newBody).subscribe();
    }

    this.mode = 'ADD';
  }

  onFormReset(e: any) {
    e.preventDefault();
    this.trackForm.reset();
    this.mode = 'ADD';
  }
}
