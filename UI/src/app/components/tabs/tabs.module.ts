import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab/tab.component';
import { TabViewComponent } from './tab-view/tab-view.component';
import { TabTitleComponent } from './tab-title/tab-title.component';

@NgModule({
  declarations: [
    TabComponent,
    TabViewComponent,
    TabTitleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TabComponent,
    TabViewComponent,
    TabTitleComponent
  ]
})

export class TabsModule { }
