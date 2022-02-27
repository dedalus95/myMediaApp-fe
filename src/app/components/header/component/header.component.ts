import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mma-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  headerText: string = 'MY MEDIA APP';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.headerText = window.innerWidth < 600 ? 'MMA' : 'MY MEDIA APP';
  }

  navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }
}
