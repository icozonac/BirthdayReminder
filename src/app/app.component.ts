import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('container') container!: ElementRef;

  title = 'Reminder';

  constructor(private router: Router) {}

  onToolbarSet(toolbar: ElementRef) {
    const offsetHeight = toolbar.nativeElement.offsetHeight;
    this.container.nativeElement.style.height = `calc(100vh - ${
      offsetHeight - 1
    }px)`;
  }

  onRouteChange() {
    if (this.router.url === '/list') return true;
    else return false;
  }
}
