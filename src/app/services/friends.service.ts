import { Friend } from './../modules/list/interfaces/friend.interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FriendsService {
  private friends: Friend[] = [];

  private friendsUpdated = new BehaviorSubject<Friend[]>(this.friends);
  public friendsUpdated$ = this.friendsUpdated.asObservable();

  constructor() {
    if (localStorage.getItem('friends')) {
      this.friends = JSON.parse(localStorage.getItem('friends') || '');
      this.friendsUpdated.next(this.friends);
    }
  }

  updateEvent() {
    localStorage.setItem('friends', JSON.stringify(this.friends));
    this.friendsUpdated.next(this.friends);
  }

  addFriend(friend: Friend): void {
    this.friends = [...this.friends, friend];
    this.updateEvent();
  }

  deleteFriend(id: string): void {
    this.friends = this.friends.filter((friend) => friend.id !== id);
    this.updateEvent();
  }

  applyFilter(filterText: string): void {
    const filteredItems = this.friends.filter(
      (friend) =>
        friend.name.toLowerCase().includes(filterText.toLowerCase()) ||
        friend.surname.toLowerCase().includes(filterText.toLowerCase())
    );

    this.friendsUpdated.next(filteredItems);
  }

  applySort(sortBy: string): void {
    let sortedItems;
    switch (sortBy) {
      case 'name':
        sortedItems = this.friends.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
        break;

      case 'surname':
        sortedItems = this.friends.sort((a, b) => {
          if (a.surname < b.surname) {
            return -1;
          }
          if (a.surname > b.surname) {
            return 1;
          }
          return 0;
        });
        break;

      case 'birthday':
        sortedItems = this.friends.sort((a, b) => {
          if (a.birthday.split('.')[2] < b.birthday.split('.')[2]) {
            return -1;
          }
          if (a.birthday.split('.')[2] > b.birthday.split('.')[2]) {
            return 1;
          }
          return 0;
        });

        break;

      default:
        sortedItems = this.friends;
        break;
    }

    this.friendsUpdated.next(sortedItems);
  }
}
