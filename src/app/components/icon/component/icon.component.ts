import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mma-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input() type!: string;
  @Input() mediaClass!: string;

  constructor() {}

  ngOnInit(): void {}
}