import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackFormComponent } from './track-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TrackFormComponent', () => {
  let component: TrackFormComponent;
  let fixture: ComponentFixture<TrackFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, TrackFormComponent],
    schemas: [NO_ERRORS_SCHEMA],
});
    fixture = TestBed.createComponent(TrackFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
