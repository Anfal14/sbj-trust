import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeSection = 'home';

  @HostListener('window:scroll')
  onScroll() {
    const sections = document.querySelectorAll('section[id]');
    let current = 'home';
    sections.forEach((s: Element) => {
      const el = s as HTMLElement;
      if (window.scrollY >= el.offsetTop - 90) {
        current = el.getAttribute('id') || 'home';
      }
    });
    this.activeSection = current;
  }
}
