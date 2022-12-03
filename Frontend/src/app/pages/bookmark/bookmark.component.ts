import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BookmarkService } from 'src/app/services/localStorage/bookmark.service';
import { SavedArticle } from 'src/app/shared/interfaces/article';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss'],
})
export class BookmarkComponent implements OnInit {
  public bookmarks: SavedArticle[] | null = null;

  constructor(
    public bookmarkService: BookmarkService,
    private chnageDetector: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.fetchBookmarks();
  }

  private fetchBookmarks() {
    this.bookmarks = this.bookmarkService.getBookmarks();
  }

  public onBookmarkDeleted() {
    this.fetchBookmarks();
    this.chnageDetector.detectChanges();
  }
}
