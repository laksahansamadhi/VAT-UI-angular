import { Component, ContentChildren, QueryList } from '@angular/core';
import { TabViewComponent } from '../tab-view/tab-view.component';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent {

  constructor() { }
  public selectedIndex!:number;

  @ContentChildren(TabViewComponent) templates!: QueryList<TabViewComponent>;

  ngAfterContentInit() {
      this.templates.forEach((template,index) => {
        template.nestedComponentChange.subscribe((header:string) => {
          this.setDisplay(this.selectedIndex, false);
          this.setDisplay(index, true);
        });
      });
      this.setDisplay(0,true);
  }

  public setDisplay(index:number, status:boolean):void{
    const temp = this.templates.get(index);
    temp && (temp.display = status);
    status && (this.selectedIndex = index);
  }

}
