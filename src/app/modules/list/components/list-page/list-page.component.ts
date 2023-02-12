import { Friend } from './../../interfaces/friend.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FriendsService } from 'src/app/services/friends.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
  providers: [DatePipe],
})
export class ListPageComponent implements OnInit {
  friends: Friend[] = [];
  searchText = '';
  sortCols = [
    { label: 'Name', value: 'name' },
    { label: 'Surname', value: 'surname' },
    { label: 'Birthday', value: 'birthday' },
  ];

  selectedSortCol = {
    label: 'Name',
    value: 'name',
  };

  compareFn = (o1: any, o2: any): boolean =>
    o1 && o2 ? o1.value === o2.value : o1 === o2;

  visible = false;

  sortChange(selected: any): void {
    this.selectedSortCol = selected;
    this.friendsService.applySort(selected.value);
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  CardForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z]+$'),
    ]),
    surname: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z]+$'),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.minLength(9),
      Validators.maxLength(10),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    city: new FormControl('', [Validators.required]),
    birthday: new FormControl('', [Validators.required]),
  });

  getErrorMessageName() {
    if (this.name.hasError('required')) {
      return 'You must enter a value';
    }
    return 'Only letters';
  }

  getErrorMessageSurname() {
    if (this.surname.hasError('required')) {
      return 'You must enter a value';
    }
    return 'Only letters';
  }

  getErrorMessagePhone() {
    if (this.phone.hasError('required')) {
      return 'You must enter a value';
    }
    return 'number must be 9 digits';
  }

  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessageCity() {
    return 'You must enter a value';
  }

  getErrorMessageBirthday() {
    return 'You must enter a value';
  }

  submited() {
    if (!this.CardForm.valid) return;

    const friend: Friend = {
      id: Math.floor(Math.random() * 100000).toString(),
      name: this.name.value,
      surname: this.surname.value,
      phone: this.phone.value,
      email: this.email.value,
      city: this.city.value,
      birthday: this.datePipe.transform(this.birthday.value, 'dd.MM.yyyy')!,
    };

    this.friendsService.addFriend(friend);
    this.visible = false;
  }

  deleteFriend(id: string) {
    this.friendsService.deleteFriend(id);
  }

  constructor(
    private friendsService: FriendsService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.friendsService.friendsUpdated$.subscribe((friends) => {
      this.friends = friends;
    });
  }

  applyFilter() {
    this.friendsService.applyFilter(this.searchText);
  }

  get name(): FormControl {
    return this.CardForm.get('name') as FormControl;
  }
  get surname(): FormControl {
    return this.CardForm.get('surname') as FormControl;
  }
  get phone(): FormControl {
    return this.CardForm.get('phone') as FormControl;
  }
  get email(): FormControl {
    return this.CardForm.get('email') as FormControl;
  }
  get city(): FormControl {
    return this.CardForm.get('city') as FormControl;
  }
  get birthday(): FormControl {
    return this.CardForm.get('birthday') as FormControl;
  }
}
