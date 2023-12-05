import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPageComponent } from './admin-page.component';
import { TrackFormComponent } from '@modules/admin/components/track-form/track-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TrackListComponent } from '@modules/admin/components/track-list/track-list.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AdminPageComponent', () => {
  let component: AdminPageComponent;
  let fixture: ComponentFixture<AdminPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, AdminPageComponent,
        TrackFormComponent,
        TrackListComponent],
    schemas: [NO_ERRORS_SCHEMA],
});
    fixture = TestBed.createComponent(AdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
