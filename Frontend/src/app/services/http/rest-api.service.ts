import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Article } from 'src/app/shared/interfaces/article';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RestApiService {
  private readonly BACKEND_DEV_URL = environment.BACKEND_DEV_URL;
  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  public getArticles(): Observable<Article[]> {
    return this.http
      .get<Article[]>(this.BACKEND_DEV_URL + 'news')
      .pipe(retry(1), catchError(this.handleError));
  }

  public searchArticles(term: string): Observable<Article[]> {
    return this.http
      .get<Article[]>(this.BACKEND_DEV_URL + 'news/search/' + term)
      .pipe(retry(1), catchError(this.handleError));
  }

  private handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    return throwError(() => {
      return errorMessage;
    });
  }
}
