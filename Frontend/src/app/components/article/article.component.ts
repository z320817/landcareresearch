import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookmarkService } from 'src/app/services/localStorage/bookmark.service';
import { Article } from 'src/app/shared/interfaces/article';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input() article!: Article;
  @Input() type?: string;
  @Output() bookmarkDeleted = new EventEmitter();

  public content = '';
  public description = '';
  public image = '';
  public title = '';
  public articleId = '';

  constructor(private bookmarkService: BookmarkService) {}

  ngOnInit(): void {
    const { content, description, image, title } = this.article;
    this.content = content;
    this.description = description;
    this.image = image;
    this.title = title;

    if (this.article.id) {
      this.articleId = this.article.id;
    } else {
      this.articleId = uuidv4();
    }
  }

  saveToBookmarks() {
    const isAlreadySaved = this.bookmarkService.checkIfExists(this.articleId);

    if (!isAlreadySaved) {
      this.bookmarkService.setBookmark({ ...this.article, id: this.articleId });
    }
  }

  deleteFromBookmarks(id: string) {
    const isExist = this.bookmarkService.checkIfExists(id);

    if (isExist) {
      this.bookmarkService.deleteBookmark(id);
      this.bookmarkDeleted.emit();
    }
  }
}
