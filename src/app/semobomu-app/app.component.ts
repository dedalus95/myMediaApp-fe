import { Component } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'semobomu';

  constructor(private router: Router) {
  }


  ngOnInit(): void {
    this.router.navigateByUrl('home');

  }
}


