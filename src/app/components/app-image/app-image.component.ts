import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './app-image.component.html',
  styleUrls: ['./app-image.component.scss'],
})
export class AppImageComponent implements OnInit {
  @Input() uri: string = '';

  constructor() {}

  ngOnInit(): void {}
}
