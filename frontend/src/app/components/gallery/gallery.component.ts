import { Component, OnInit, AfterViewInit } from '@angular/core';
import { StrapiService } from '../../services/strapi.service';

declare const bootstrap: any;

export interface GalleryItem {
  title: string;
  caption: string;
  image: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, AfterViewInit {
  items: GalleryItem[] = [
    { title: 'Community Gathering — Solapur', caption: 'Annual assembly of trust members and community leaders', image: 'assets/images/WhatsApp Image 2026-06-19 at 4.19.08 PM.jpeg' },
    { title: 'Public Awareness Programme', caption: 'Speakers and community leaders addressing the gathering on welfare initiatives', image: 'assets/images/WhatsApp Image 2026-06-20 at 10.14.37 PM.jpeg' },
    { title: 'Recognition & Felicitation', caption: 'Honouring community members for their contribution and dedication', image: 'assets/images/WhatsApp Image 2026-06-20 at 10.14.37.jpeg' },
    { title: 'Welcome Ceremony', caption: 'Trust members welcoming guests and dignitaries at a community event', image: 'assets/images/WhatsApp Image 2026-06-20.jpeg' },
    { title: 'Free Ambulance & Freezer Service', caption: 'SBJ provides free ambulance and cold storage service to the community', image: 'assets/images/WhatsApp Image 2026-06-20 at 10.14.3.jpeg' },
    { title: 'Solapur Bagban Jamiyat — Official Logo', caption: 'Symbolising knowledge, unity, and community empowerment', image: 'assets/images/WhatsApp Image 2026-06-19 at 4.19.08.jpeg' },
    { title: 'SBJ Trust — Brand Identity', caption: 'Our emblem representing the values we stand for', image: 'assets/images/IMG_3480.PNG' }
  ];

  loading = false;

  constructor(private strapi: StrapiService) {}

  ngOnInit() {
    if (this.strapi.configured) {
      this.loading = true;
      this.strapi.getGalleryItems().subscribe(
        (res: any) => {
          if (res && res.data && res.data.length) {
            this.items = res.data.map((d: any) => ({
              title: d.title || '',
              caption: d.description || '',
              image: this.strapi.imgUrl(d.images)
            }));
          }
          this.loading = false;
        },
        () => { this.loading = false; }
      );
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      const el = document.getElementById('galleryCarousel');
      if (el && typeof bootstrap !== 'undefined') {
        bootstrap.Carousel.getOrCreateInstance(el, { interval: 3500, ride: 'carousel' });
      }
    }, 100);
  }
}
