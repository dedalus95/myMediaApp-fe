import { Component, HostListener, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'mma-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  headerText: string = 'MY MEDIA APP';
  currentUrl!: string;
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;
        this.currentUrl = url;
      }
    });
  }

  ngOnInit(): void {}

  navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.headerText = window.innerWidth < 600 ? 'MMA' : 'MY MEDIA APP';
  }
}
