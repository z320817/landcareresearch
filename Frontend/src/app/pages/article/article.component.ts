import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookmarkService } from 'src/app/services/localStorage/bookmark.service';
import { SavedArticle, Source } from 'src/app/shared/interfaces/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  public content = '';
  public description = '';
  public image = '';
  public title = '';
  public source!: Source;
  public url = '';
  public articleId = '';

  constructor(
    private router: Router,
    private bookmarkService: BookmarkService
  ) {}

  ngOnInit(): void {
    const article: SavedArticle = history.state;
    const { content, description, image, title, source, url, id } = article;
    this.content = content;
    this.description = description;
    this.image = image;
    this.title = title;
    this.source = source;
    this.url = url;
    this.articleId = id;

    if (!content) {
      this.router.navigateByUrl('/');
    }
  }

  saveToBookmarks() {
    const isAlreadySaved = this.bookmarkService.checkIfExists(this.articleId);

    if (!isAlreadySaved) {
      this.bookmarkService.setBookmark({
        content: this.content,
        description: this.description,
        image: this.image,
        title: this.title,
        source: this.source,
        url: this.url,
        id: this.articleId,
      });
    }
  }

  navigateBack(): void {
    history.back();
  }
}
