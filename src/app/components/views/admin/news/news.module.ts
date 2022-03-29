import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { ListNewsComponent } from './list-news/list-news.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { UpdateNewsComponent } from './update-news/update-news.component';


@NgModule({
  declarations: [
    ListNewsComponent,
    AddNewsComponent,
    UpdateNewsComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }
