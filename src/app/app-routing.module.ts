import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDataComponent } from './Pages/add-person/add-data/add-data.component';
import { AddDetailsComponent } from './Pages/add-person/add-details/add-details.component';
import { AddPersonComponent } from './Pages/add-person/add-person.component';
import { AddPhotoComponent } from './Pages/add-person/add-photo/add-photo.component';
import { MainComponent } from './Pages/Main/Main.component';
import { DatabaseComponent } from './Pages/Missing-people-base/database/database.component';
import { MissingPeopleBaseComponent } from './Pages/Missing-people-base/Missing-people-base.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';

export const routes: Routes = [

    {path: '', redirectTo: '/main', pathMatch: 'full'},
    {path: 'main', component: MainComponent},
    {path: 'search', component: MissingPeopleBaseComponent},
    {path: 'add', component: AddPersonComponent, children: [
        { path: 'data', component: AddDataComponent },
        { path: 'photo', component: AddPhotoComponent },
        { path: 'details', component: AddDetailsComponent },
    ]},
    {path: 'database', component: DatabaseComponent},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}



