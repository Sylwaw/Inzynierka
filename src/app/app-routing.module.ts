import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDataComponent } from './Pages/add-person/add-data/add-data.component';
import { AddDetailsComponent } from './Pages/add-person/add-details/add-details.component';
import { AddPersonComponent } from './Pages/add-person/add-person.component';
import { AddPhotoComponent } from './Pages/add-person/add-photo/add-photo.component';
import { MainComponent } from './Pages/Main/Main.component';
import { MissingPeopleBaseComponent } from './Pages/Missing-people-base/Missing-people-base.component';
import { MissingPeopleDetailsComponent } from './Pages/Missing-people-base/missing-people-details/missing-people-details.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'search', component: MissingPeopleBaseComponent },
  { path: 'detail/:id', component: MissingPeopleDetailsComponent },
  { path: 'add', component: AddPersonComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
