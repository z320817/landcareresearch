import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  declarations: [ArticleComponent],
  imports: [CommonModule, MaterialModule, SharedModule],
})
export class ArticleModule {}
