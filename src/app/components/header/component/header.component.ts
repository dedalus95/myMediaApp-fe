import { Component, HostListener, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BookService } from 'src/app/shared/services/book.service';
import { MoviesService } from 'src/app/shared/services/movies.service';
import { MusicService } from 'src/app/shared/services/music.service';
import { TvseriesService } from 'src/app/shared/services/tvseries.service';

@Component({
  selector: 'mma-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  headerText: string = 'MY MEDIA APP';
  currentUrl!: string;
  constructor(
    private router: Router,
    private bookService: BookService,
    private tvSeriesService: TvseriesService,
    private moviesService: MoviesService,
    private musicService: MusicService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;
        this.currentUrl = url;
      }
    });
  }

  ngOnInit(): void {}

  navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }

  createItem(url: string): void {
    switch (url) {
      case '/movies':
        this.moviesService.openMovieForm();
        break;
      case '/music':
        this.musicService.openMusicForm();
        break;
      case '/books':
        this.bookService.openBookForm();
        break;
      case '/tv-series':
        this.tvSeriesService.openTvSeriesForm();
        break;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.headerText = window.innerWidth < 700 ? 'MMA' : 'MY MEDIA APP';
  }
}
