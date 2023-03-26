import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('container') container!: ElementRef;

  title = 'Reminder';
  showScroll = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.onRouteChange();
    });
  }

  onToolbarSet(toolbar: ElementRef) {
    const offsetHeight = toolbar.nativeElement.offsetHeight;
    this.container.nativeElement.style.height = `calc(100vh - ${
      offsetHeight - 1
    }px)`;
  }

  onRouteChange() {
    this.showScroll = this.router.url === '/list';
  }
}
