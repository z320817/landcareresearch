import { Injectable } from '@angular/core';
import { SavedArticle } from 'src/app/shared/interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  constructor() {}

  public getBookmarks(): SavedArticle[] | null {
    let bookmarks;
    try {
      const localData = localStorage.getItem('bookmarks');

      if (localData) {
        bookmarks = JSON.parse(localData) as SavedArticle[];
      } else {
        bookmarks = null;
      }
    } catch {
      console.log('Local storage parsing error');
      bookmarks = null;
    }

    return bookmarks;
  }

  public checkIfExists(articleId: string): boolean {
    let bookmarks = this.getBookmarks();

    if (bookmarks?.length) {
      return !!bookmarks.find((bookmark) => articleId == bookmark.id);
    } else {
      return false;
    }
  }

  public setBookmark(article: SavedArticle) {
    let bookmarks = this.getBookmarks() || [];
    bookmarks.push(article);

    try {
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } catch {
      console.log('Local storage save error');
    }
  }

  public deleteBookmark(id: string) {
    let bookmarks = this.getBookmarks() || [];
    const filteredBookmarks = bookmarks.filter((article) => article.id !== id);

    try {
      localStorage.setItem('bookmarks', JSON.stringify(filteredBookmarks));
    } catch {
      console.log('Local storage save error');
    }
  }
}
