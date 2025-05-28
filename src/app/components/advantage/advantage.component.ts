import {Component, Input} from '@angular/core';

@Component({
  selector: 'advantages-component',
  templateUrl: './advantage.component.html',
  styleUrls: ['./advantage.component.scss']
})
export class AdvantageComponent {

  @Input() title: string = '';
  @Input() description: string = '';
  @Input() number: number = 0;

}
