import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plus',
  templateUrl: './plus.component.html',
  styleUrls: ['./plus.component.scss']
})
export class PlusComponent implements OnInit {

  @Input() class! : string;

  constructor(private router: Router) { }

  routerUrl = this.router.url;

  ngOnInit(): void {
  }

}
