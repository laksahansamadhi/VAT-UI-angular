import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'app-tab-view',
  templateUrl: './tab-view.component.html',
  styleUrls: ['./tab-view.component.scss'],
})
export class TabViewComponent {

  constructor() { }

  @Input() header:string = '';
  @Input() display:boolean = false;

  @Output() nestedComponentChange: EventEmitter<string> = new EventEmitter<string>();

  public clickTab():void{
     this.nestedComponentChange.emit(this.header);
  }

}
