import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class StrapiService {
  private url = environment.strapiUrl;
  private token = environment.strapiToken;

  // Configured if URL is set and not a placeholder
  readonly configured = !!this.url && !this.url.includes('YOUR');

  constructor(private http: HttpClient) {}

  private get headers(): HttpHeaders {
    // Only send auth header if a real token is provided
    if (this.token && !this.token.includes('YOUR')) {
      return new HttpHeaders({ Authorization: `Bearer ${this.token}` });
    }
    return new HttpHeaders();
  }

  getGalleryItems(): Observable<any> {
    return this.http.get(`${this.url}/api/sbj-galleries?populate=*`, { headers: this.headers });
  }

  getActivities(): Observable<any> {
    return this.http.get(`${this.url}/api/sbj-activities?populate=*`, { headers: this.headers });
  }

  getMembers(): Observable<any> {
    return this.http.get(`${this.url}/api/sbj-members?populate=*&pagination[pageSize]=50`, { headers: this.headers });
  }

  getStories(): Observable<any> {
    return this.http.get(`${this.url}/api/sbj-stories?populate=*`, { headers: this.headers });
  }

  submitHelpRequest(payload: {
    name: string;
    phone: string;
    email: string;
    typeOfHelp: string;
    describeYourSituation: string;
  }): Observable<any> {
    return this.http.post(
      `${this.url}/api/sbj-request-helps`,
      { data: payload },
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    );
  }

  // Resolves Strapi image object → full URL
  imgUrl(imageObj: any): string {
    if (!imageObj) return '';
    const url = imageObj.url || '';
    return url.startsWith('http') ? url : this.url + url;
  }

  // Formats ISO date string (e.g. "2026-06-25") → "June 2026"
  formatDate(dateStr: string): string {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-IN', { month: 'long', year: 'numeric' });
  }
}
