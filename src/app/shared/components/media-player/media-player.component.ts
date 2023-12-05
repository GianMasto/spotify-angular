import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  DestroyRef,
} from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';
import { NgTemplateOutlet, NgIf, NgClass, AsyncPipe } from '@angular/common';
import { inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css'],
  standalone: true,
  imports: [NgTemplateOutlet, NgIf, NgClass, AsyncPipe],
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('');
  observersList: Subscription[] = [];

  state = 'paused';

  destroyRef = inject(DestroyRef);

  constructor(public _multimediaService: MultimediaService) {}

  handlePosition(e: MouseEvent): void {
    const elNative: HTMLElement = this.progressBar.nativeElement;
    const { clientX } = e;
    const { x, width } = elNative.getBoundingClientRect();
    const clickX = clientX - x;
    const percentageFromX = (clickX / width) * 100;
    this._multimediaService.seekAudio(percentageFromX);
  }

  ngOnInit(): void {
    const observer1$ = this._multimediaService.playerStatus$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((status) => (this.state = status));

    this.observersList.push(observer1$);
  }

  ngOnDestroy(): void {
    this.observersList.forEach((sub) => sub.unsubscribe());
  }
}
