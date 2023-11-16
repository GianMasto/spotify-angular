import { EventEmitter, Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MultimediaService {
  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined);
  public audio!: HTMLAudioElement;
  public timeElapsed$: BehaviorSubject<string> = new BehaviorSubject('00:00');
  public timeRemaining$: BehaviorSubject<string> = new BehaviorSubject(
    '-00:00'
  );
  public playerStatus$: BehaviorSubject<string> = new BehaviorSubject('paused');
  public playerPercentage$: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() {
    this.audio = new Audio();
    this.trackInfo$.subscribe({
      next: (e) => this.setAudio(e),
    });
    this.listenAllEvents();
  }

  private listenAllEvents(): void {
    this.audio.addEventListener('timeupdate', this.calculateTime, false);
    this.audio.addEventListener('playing', this.setPlayerStatus, false);
    this.audio.addEventListener('play', this.setPlayerStatus, false);
    this.audio.addEventListener('pause', this.setPlayerStatus, false);
    this.audio.addEventListener('ended', this.setPlayerStatus, false);
  }

  private setPlayerStatus = (state: any) => {
    // this.playerStatus$.next(state);
    switch (state.type) {
      case 'play':
        this.playerStatus$.next('play');
        break;
      case 'playing':
        this.playerStatus$.next('playing');
        break;
      case 'ended':
        this.playerStatus$.next('ended');
        break;
      default:
        this.playerStatus$.next('paused');
        break;
    }
  };

  private calculateTime = (): void => {
    const { duration, currentTime } = this.audio;
    this.timeElapsed$.next(this.secondsToTimeString(currentTime));
    this.timeRemaining$.next(
      this.secondsToTimeString(duration - currentTime, true)
    );
    this.setPercentage(duration, currentTime);
  };

  private setPercentage(duration: number, currentTime: number): void {
    const percentage = (currentTime / duration) * 100;
    this.playerPercentage$.next(percentage);
  }

  private secondsToTimeString(
    secondsNum: number,
    minusSign: boolean = false
  ): string {
    const sign = minusSign ? '-' : '';
    const seconds = Math.floor(secondsNum % 60);
    const minutes = Math.floor(secondsNum / 60) % 60;

    const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
    const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${sign}${displayMinutes}:${displaySeconds}`;
  }

  public setAudio(track: TrackModel): void {
    if (track) {
      this.audio.src = track.url;
      this.audio.play();
    }
  }

  public togglePlayer(): void {
    this.audio.paused ? this.audio.play() : this.audio.pause();
  }

  public seekAudio(percetage: number): void {
    const { duration } = this.audio;
    const percentageToSeconds = (percetage / 100) * duration;
    this.audio.currentTime = percentageToSeconds;
  }
}
