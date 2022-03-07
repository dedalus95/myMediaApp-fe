import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mma-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.scss'],
})
export class DialogueComponent implements OnInit {
  @Input() name!: string;
  @Input() description!: string;
  @Input() year!: number;
  @Input() author!: string;

  constructor() {}

  ngOnInit(): void {}
}
