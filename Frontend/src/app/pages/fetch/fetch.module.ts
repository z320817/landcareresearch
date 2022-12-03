import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FetchComponent } from './fetch.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { ArticleComponent } from 'src/app/components/article/article.component';

@NgModule({
  declarations: [FetchComponent],
  imports: [CommonModule, MaterialModule, SharedModule],
  exports: [ArticleComponent],
})
export class FetchModule {}
