import { Component, OnInit } from '@angular/core';
import { StrapiService } from '../../services/strapi.service';

export interface Activity {
  category: string;
  title: string;
  description: string;
  image: string;
  date: string;
}

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  activities: Activity[] = [
    {
      category: 'Education Support',
      title: 'Helping Bagban youth build a brighter future through education',
      description: 'Scholarships and tuition assistance for students from the Bagban community to help them pursue quality education. We partner with schools and colleges to ensure no deserving student is left behind due to financial constraints.',
      image: 'assets/images/WhatsApp Image 2026-06-20 at 10.14.37.jpeg',
      date: 'March 2025'
    },
    {
      category: 'Healthcare Aid',
      title: '24/7 free ambulance & medical aid for every family in need',
      description: 'Free ambulance and cold storage service, medical assistance, health camps, and support for families facing emergencies. Our healthcare team is available round the clock to assist those in need.',
      image: 'assets/images/WhatsApp Image 2026-06-20 at 10.14.3.jpeg',
      date: 'January 2025'
    },
    {
      category: 'Social Welfare',
      title: 'Standing beside every family in their most difficult moments',
      description: 'Ration distribution, widow support, and assistance for families in crisis through community-driven initiatives. We believe every family deserves dignity and basic necessities regardless of their circumstances.',
      image: 'assets/images/WhatsApp Image 2026-06-20.jpeg',
      date: 'April 2025'
    }
  ];

  constructor(private strapi: StrapiService) {}

  ngOnInit() {
    if (this.strapi.configured) {
      this.strapi.getActivities().subscribe(
        (res: any) => {
          if (res && res.data && res.data.length) {
            this.activities = res.data.map((d: any) => ({
              category: d.type || '',
              title: d.title || '',
              description: d.description || '',
              image: this.strapi.imgUrl(d.image),
              date: this.strapi.formatDate(d.date)
            }));
          }
        },
        () => {}
      );
    }
  }
}
