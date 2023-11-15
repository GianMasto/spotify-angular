import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { SharedModule } from '@shared/shared.module';
import { TrackFormComponent } from './components/track-form/track-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TrackListComponent } from './components/track-list/track-list.component';

@NgModule({
  declarations: [AdminPageComponent, TrackFormComponent, TrackListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class AdminModule {}
