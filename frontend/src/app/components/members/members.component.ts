import { Component } from '@angular/core';

export interface Member {
  name: string;
  role: string;
  image: string;
}

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent {
  members: Member[] = [
    { name: 'Mohammad Rafiq', role: 'President', image: 'assets/images/WhatsApp Image 2026-06-19 at 4.19.08 PM.jpeg' },
    { name: 'Abdul Karim', role: 'Secretary', image: 'assets/images/WhatsApp Image 2026-06-19 at 4.19.08 PM.jpeg' },
    { name: 'Yusuf Ansari', role: 'Treasurer', image: 'assets/images/WhatsApp Image 2026-06-19 at 4.19.08 PM.jpeg' },
    { name: 'Salim Shaikh', role: 'Vice President', image: 'assets/images/WhatsApp Image 2026-06-19 at 4.19.08 PM.jpeg' }
  ];
}
