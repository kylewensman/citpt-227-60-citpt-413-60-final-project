import { Component } from '@angular/core';
import { ActOfKindnessService } from '../act-of-kindness.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public Acts : ActOfKindnessService){}

  generateNum(){
    this.Acts.generateNum();
  }
}
