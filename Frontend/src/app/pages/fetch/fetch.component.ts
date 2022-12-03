import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, timeout } from 'rxjs';
import { RestApiService } from 'src/app/services/http/rest-api.service';
import { Article } from 'src/app/shared/interfaces/article';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.scss'],
})
export class FetchComponent implements OnInit, OnDestroy {
  public articles: Article[] = [];
  private subscription: Subscription = new Subscription();

  constructor(public restApiServise: RestApiService) {}

  ngOnInit() {
    this.fetchArticles();
  }

  fetchArticles() {
    this.subscription = this.restApiServise.getArticles().subscribe({
      next: (response: Article[]) => {
        this.articles = response;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
