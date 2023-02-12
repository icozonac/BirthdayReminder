import { AuthService } from 'src/app/services/auth.service';
import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  @ViewChild('toolbar') toolbar!: ElementRef;
  @Output() toolbarRef = new EventEmitter();

  constructor(private authService: AuthService) {}

  ngAfterViewInit() {
    this.toolbarRef.next(this.toolbar);
    this.toolbarRef.complete();
  }

  ngOnInit(): void {
    this.authService.isLogged$.subscribe((res) => {
      this.isLoggedIn = res;
    });
  }

  logout() {
    this.authService.logoutUser();
  }
}
