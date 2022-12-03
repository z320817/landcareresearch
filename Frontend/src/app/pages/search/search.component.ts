import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { RestApiService } from 'src/app/services/http/rest-api.service';
import { Article } from 'src/app/shared/interfaces/article';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnDestroy {
  public articles: Article[] = [];
  public loading: boolean = false;
  public searchTerm: string = '';
  public pagination = undefined;
  private subscription: Subscription = new Subscription();

  constructor(public restApiServise: RestApiService) {}

  searchArticles(term: string) {
    this.loading = true;
    this.subscription = this.restApiServise.searchArticles(term).subscribe({
      next: (response: Article[]) => {
        this.articles = response;
        this.loading = false;
      },
      error: (error) => {
        console.log(error);
        this.articles = [];
        this.loading = false;
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
