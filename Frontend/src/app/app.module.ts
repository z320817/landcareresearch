import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { SearchModule } from './pages/search/search.module';
import { FetchModule } from './pages/fetch/fetch.module';
import { HttpClientModule } from '@angular/common/http';
import { ArticleModule } from './pages/article/article.module';
import { BookmarkModule } from './pages/bookmark/bookmark.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SearchModule,
    FetchModule,
    BookmarkModule,
    ArticleModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
