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
  { path: 'detail/:id', component: MissingPeopleDetailsComponent }, // tu se routing nazwij jak chcesz:D
  {
    path: 'add',
    component: AddPersonComponent,
    children: [
      { path: '', redirectTo: '/add/data', pathMatch: 'full' },
      { path: 'data', component: AddDataComponent },
      { path: 'photo', component: AddPhotoComponent },
      { path: 'details', component: AddDetailsComponent },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
