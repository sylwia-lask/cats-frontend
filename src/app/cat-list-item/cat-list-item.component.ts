import { Component, OnInit, Input } from '@angular/core';
import { Cat } from '../types';

@Component({
  selector: 'cat-list-item',
  templateUrl: './cat-list-item.component.html',
  styleUrls: ['./cat-list-item.component.scss']
})
export class CatListItemComponent implements OnInit {
  @Input() cat: Cat;

  constructor() { }

  ngOnInit() {
  }

  addLike() {

  }
}
