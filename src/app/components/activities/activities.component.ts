import { Component, OnInit } from '@angular/core';
import { StrapiService } from '../../services/strapi.service';

export interface Activity {
  title: string;
  description: string;
  image: string;
  iconClass: string;
  iconColor: string;
  badgeBg: string;
}

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  activities: Activity[] = [
    {
      title: 'Education Support',
      description: 'Scholarships and tuition assistance for students from the Bagban community to help them pursue quality education.',
      image: 'assets/images/WhatsApp Image 2026-06-20 at 10.14.37.jpeg',
      iconClass: 'bi-book-half',
      iconColor: 'var(--green)',
      badgeBg: '#dcfce7'
    },
    {
      title: 'Healthcare Aid',
      description: 'Free ambulance and cold storage service, medical assistance, health camps, and support for families facing emergencies.',
      image: 'assets/images/WhatsApp Image 2026-06-20 at 10.14.3.jpeg',
      iconClass: 'bi-heart-pulse',
      iconColor: '#ef4444',
      badgeBg: '#fee2e2'
    },
    {
      title: 'Social Welfare',
      description: 'Ration distribution, widow support, and assistance for families in crisis through community-driven initiatives.',
      image: 'assets/images/WhatsApp Image 2026-06-20.jpeg',
      iconClass: 'bi-people-fill',
      iconColor: 'var(--orange)',
      badgeBg: '#fff7ed'
    }
  ];

  constructor(private strapi: StrapiService) {}

  ngOnInit() {
    if (this.strapi.configured) {
      this.strapi.getActivities().subscribe(
        (res: any) => {
          if (res && res.data && res.data.length) {
            this.activities = res.data.map((d: any) => ({
              title: d.title || '',
              description: d.description || '',
              image: this.strapi.imgUrl(d.image),
              iconClass: d.icon_class || 'bi-star',
              iconColor: d.icon_color || '#333',
              badgeBg: d.badge_bg || '#f0f0f0'
            }));
          }
        },
        () => {}
      );
    }
  }
}
