import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePageComponent } from './favorite-page.component';
import { PlayListHeaderComponent } from '@shared/components/play-list-header/play-list-header.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('FavoritePageComponent', () => {
  let component: FavoritePageComponent;
  let fixture: ComponentFixture<FavoritePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [FavoritePageComponent, PlayListHeaderComponent],
    schemas: [NO_ERRORS_SCHEMA],
});
    fixture = TestBed.createComponent(FavoritePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
