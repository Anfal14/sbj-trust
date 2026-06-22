import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class StrapiService {
  private url = environment.strapiUrl;
  private token = environment.strapiToken;
  readonly configured = !this.url.includes('YOUR-PROJECT');

  constructor(private http: HttpClient) {}

  private get headers() {
    return new HttpHeaders({ Authorization: `Bearer ${this.token}` });
  }

  getGalleryItems(): Observable<any> {
    return this.http.get(
      `${this.url}/api/gallery-items?populate=image&sort[0]=order:asc`,
      { headers: this.headers }
    );
  }

  getActivities(): Observable<any> {
    return this.http.get(
      `${this.url}/api/activities?populate=image&sort[0]=order:asc`,
      { headers: this.headers }
    );
  }

  imgUrl(imageObj: any): string {
    if (!imageObj) return '';
    const url = imageObj.url || '';
    return url.startsWith('http') ? url : this.url + url;
  }
}
