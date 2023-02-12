import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('container') container!: ElementRef;

  title = 'Reminder';

  constructor() {}

  onToolbarSet(toolbar: ElementRef) {
    const offsetHeight = toolbar.nativeElement.offsetHeight;
    this.container.nativeElement.style.height = `calc(100vh - ${
      offsetHeight - 1
    }px)`;
  }
}
