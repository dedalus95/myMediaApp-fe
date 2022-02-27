import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mma-home-button',
  templateUrl: './home-button.component.html',
  styleUrls: ['./home-button.component.scss'],
})
export class HomeButtonComponent implements OnInit {
  @Input() id!: string;
  @Input() class!: string;
  @Input() class1!: string;

  constructor() {}

  ngOnInit(): void {}
}
