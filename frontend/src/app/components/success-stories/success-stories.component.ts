import { Component, OnInit } from '@angular/core';
import { StrapiService } from '../../services/strapi.service';

export interface Story {
  name: string;
  role: string;
  place: string;
  quote: string;
  avatar: string;
}

@Component({
  selector: 'app-success-stories',
  templateUrl: './success-stories.component.html',
  styleUrls: ['./success-stories.component.css']
})
export class SuccessStoriesComponent implements OnInit {
  stories: Story[] = [
    { name: 'Ahmed Shaikh', role: 'Software Engineer', place: 'Pune', quote: 'SBJ\'s scholarship changed my life. I am now a software engineer and give back to my community.', avatar: 'assets/images/IMG_3480.PNG' },
    { name: 'Fatima Patel', role: 'Teacher', place: 'Solapur', quote: 'When my father was hospitalised, the trust stood by us. Their medical aid was a true blessing.', avatar: 'assets/images/IMG_3480.PNG' },
    { name: 'Rauf Bagban', role: 'Entrepreneur', place: 'Solapur', quote: 'SBJ helped me start my small business after years of struggle. I am forever grateful.', avatar: 'assets/images/IMG_3480.PNG' }
  ];

  constructor(private strapi: StrapiService) {}

  ngOnInit() {
    if (this.strapi.configured) {
      this.strapi.getStories().subscribe(
        (res: any) => {
          if (res && res.data && res.data.length) {
            this.stories = res.data.map((d: any) => ({
              name: d.name || '',
              role: d.profession || '',
              place: d.place || '',
              quote: d.testimonial || '',
              avatar: this.strapi.imgUrl(d.image)
            }));
          }
        },
        () => {}
      );
    }
  }
}
