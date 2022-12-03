export interface Article {
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  source: Source;
  id?: string;
}

export interface Source {
  name: string;
  url: string;
}

export interface SavedArticle extends Article {
  id: string;
}
