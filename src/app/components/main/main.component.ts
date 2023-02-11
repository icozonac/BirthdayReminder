import { Component } from '@angular/core';

import {
  rubberBandAnimation,
  bounceInUpOnEnterAnimation,
  hueRotateAnimation,
} from '../../../../lib';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    bounceInUpOnEnterAnimation({ anchor: 'enter1' }),
    bounceInUpOnEnterAnimation({ anchor: 'enter2', delay: 100 }),
    bounceInUpOnEnterAnimation({ anchor: 'enter3', delay: 200 }),
    rubberBandAnimation(),

    hueRotateAnimation({ anchor: 'hueButton', duration: 20000 }),
  ],
})
export class MainComponent {
  animation = 'rubberBand';
  animationState = false;
  hueBtnState = false;
}
