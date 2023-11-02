import { Component, Input } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrls: ['./section-generic.component.css']
})
export class SectionGenericComponent {
  @Input({ required: true }) title: string = ''
  @Input({ required: true }) mode: 'small' | 'big' = 'small'
  @Input({ required: true }) dataTrack: Array<TrackModel> = []
}
