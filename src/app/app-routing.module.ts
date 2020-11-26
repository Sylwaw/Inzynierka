import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPersonComponent } from './Pages/add-person/add-person.component';
import { MainComponent } from './Pages/Main/Main.component';
import { DatabaseComponent } from './Pages/Missing-people-base/database/database.component';
import { MissingPeopleBaseComponent } from './Pages/Missing-people-base/Missing-people-base.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';

export const routes: Routes = [

    {path: '', redirectTo: '/main', pathMatch: 'full'},
    {path: 'main', component: MainComponent},
    {path: 'search', component: MissingPeopleBaseComponent},
    {path: 'add', component: AddPersonComponent},
    {path: 'database', component: DatabaseComponent},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}



