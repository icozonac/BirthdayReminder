import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { MatNativeDateModule } from '@angular/material/core';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

const modules = [
  MatSidenavModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  MatCardModule,
  MatDividerModule,
  MatProgressBarModule,
  MatDatepickerModule,
  MatNativeDateModule,
  NzCardModule,
  NzAlertModule,
  NzInputModule,
  NzButtonModule,
  NzIconModule,
  NzModalModule,
  NzFormModule,
  NzSelectModule,
  NzDrawerModule,
  NzDatePickerModule,
  NzDropDownModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, modules, ReactiveFormsModule],
  exports: [modules, ReactiveFormsModule],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
})
export class CommonsModule {}
