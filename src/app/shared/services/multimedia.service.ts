import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MultimediaService {
  callback: EventEmitter<any> = new EventEmitter<any>();

  myObservable1$: BehaviorSubject<any> = new BehaviorSubject('init');
  constructor() {
    setTimeout(() => {
      this.myObservable1$.next('subject.next()');
    }, 1000);
  }
}
