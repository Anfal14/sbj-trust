import { Component } from '@angular/core';

export interface Story {
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

@Component({
  selector: 'app-success-stories',
  templateUrl: './success-stories.component.html',
  styleUrls: ['./success-stories.component.css']
})
export class SuccessStoriesComponent {
  avatar = 'assets/images/WhatsApp Image 2026-06-19 at 4.19.08 PM.jpeg';

  page1: Story[] = [
    { name: 'Ahmed Shaikh', role: 'Software Engineer, Pune', quote: 'SBJ\'s scholarship changed my life. I am now a software engineer and give back to my community.', avatar: this.avatar },
    { name: 'Fatima Patel', role: 'Teacher, Solapur', quote: 'When my father was hospitalised, the trust stood by us. Their medical aid was a true blessing.', avatar: this.avatar },
    { name: 'Rauf Bagban', role: 'Entrepreneur, Solapur', quote: 'SBJ helped me start my small business after years of struggle. I am forever grateful.', avatar: this.avatar }
  ];

  page2: Story[] = [
    { name: 'Zainab Momin', role: 'Homemaker, Solapur', quote: 'The ration support during COVID kept our family going. We are deeply grateful to SBJ.', avatar: this.avatar },
    { name: 'Ismail Khan', role: 'Farmer, Solapur', quote: 'My daughter completed her engineering with SBJ\'s scholarship. She now works in Hyderabad.', avatar: this.avatar },
    { name: 'Bilal Ansari', role: 'Volunteer, SBJ', quote: 'SBJ organised free eye camps in our area. Many elderly got treated at absolutely no cost.', avatar: this.avatar }
  ];
}
