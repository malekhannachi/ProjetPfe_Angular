import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewsComponent } from './add-news/add-news.component';
import { ListNewsComponent } from './list-news/list-news.component';
import { UpdateNewsComponent } from './update-news/update-news.component';

const routes: Routes = [
  { path: 'list-news', component: ListNewsComponent },
  { path: '', component: ListNewsComponent },
  { path: 'add-news', component: AddNewsComponent },
  { path: 'update-news', component: UpdateNewsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutingModule {}
