import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayListBodyComponent } from './play-list-body.component';
import { RemoveRepeatedFromListPipe } from '@shared/pipes/remove-repeated-from-list.pipe';
import { OrderListPipe } from '@shared/pipes/order-list.pipe';

describe('PlayListBodyComponent', () => {
  let component: PlayListBodyComponent;
  let fixture: ComponentFixture<PlayListBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [PlayListBodyComponent, RemoveRepeatedFromListPipe, OrderListPipe],
});
    fixture = TestBed.createComponent(PlayListBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
