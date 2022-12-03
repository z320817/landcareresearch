import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ArticleComponent } from './pages/article/article.component';
import { BookmarkComponent } from './pages/bookmark/bookmark.component';
import { FetchComponent } from './pages/fetch/fetch.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'article/:id', component: ArticleComponent },
  { path: 'search', component: SearchComponent },
  { path: 'fetch', component: FetchComponent },
  { path: 'bookmarks', component: BookmarkComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
