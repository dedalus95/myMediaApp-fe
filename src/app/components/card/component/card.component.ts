import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mma-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() name!: string;
  @Input() description!: string;
  @Input() year!: number;
  @Input() author!: string;
  @Input() class!:
    | 'type-music'
    | 'type-movies'
    | 'type-books'
    | 'type-tvseries';
  @Input() imageUrl!: string;

  constructor() {}

  ngOnInit(): void {}
}
