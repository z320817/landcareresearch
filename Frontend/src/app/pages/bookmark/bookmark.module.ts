import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarkComponent } from './bookmark.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  declarations: [BookmarkComponent],
  imports: [CommonModule, MaterialModule, SharedModule],
})
export class BookmarkModule {}
