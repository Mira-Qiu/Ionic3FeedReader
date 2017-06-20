import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoriesPage } from './stories';

@NgModule({
  declarations: [
    StoriesPage,
  ],
  imports: [
    IonicPageModule.forChild(StoriesPage),
  ],
  exports: [
    StoriesPage
  ]
})
export class StoriesPageModule {}
