import { Component, OnInit } from '@angular/core';
import { StrapiService } from '../../services/strapi.service';

export interface Member {
  name: string;
  role: string;
  image: string;
  sortid?: number;
}

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  members: Member[] = [
    { name: 'Zubair Bagban (NND)', role: 'President', image: 'assets/images/IMG_3480.PNG' },
    { name: 'Raju Bagban (MSP)', role: 'Vice President', image: 'assets/images/IMG_3480.PNG' },
    { name: 'Anwar Bagban (BFT)', role: 'Vice President', image: 'assets/images/IMG_3480.PNG' },
    { name: 'Iliyas Adil (AMA)', role: 'Secretory', image: 'assets/images/IMG_3480.PNG' }
  ];

  constructor(private strapi: StrapiService) {}

  get higherRoleMembers(): Member[] {
    return this.members.filter(member => !this.isRegularMember(member));
  }

  get regularMembers(): Member[] {
    return this.members.filter(member => this.isRegularMember(member));
  }

  private isRegularMember(member: Member): boolean {
    return member.role.trim().toLowerCase() === 'member';
  }

  ngOnInit() {
    if (this.strapi.configured) {
      this.strapi.getMembers().subscribe(
        (res: any) => {
          if (res && res.data && res.data.length) {
            this.members = res.data
              .map((d: any, index: number) => ({
                name: d.name || '',
                role: d.designation || '',
                image: this.strapi.imgUrl(d.image),
                sortid: Number(d.sortid),
                index
              }))
              .sort((a: any, b: any) => {
                const aSort = Number.isFinite(a.sortid) ? a.sortid : Number.MAX_SAFE_INTEGER;
                const bSort = Number.isFinite(b.sortid) ? b.sortid : Number.MAX_SAFE_INTEGER;

                return aSort === bSort ? a.index - b.index : aSort - bSort;
              })
              .map(({ index, ...member }: any) => member);
          }
        },
        () => {}
      );
    }
  }
}
