import { Friend } from './../../interfaces/friend.interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() friend!: Friend;
  @Output() deleteFriend = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onDelete(id: string) {
    this.deleteFriend.emit(id);
  }
}
