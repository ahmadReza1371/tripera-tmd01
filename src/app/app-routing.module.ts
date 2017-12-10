import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TourDetailComponent } from './tour-detail/tour-detail.component';
import { HomeComponent } from './home/home.component';
import { TourBoxComponent } from './tour-box/tour-box.component';
const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: "tourdetail", component: TourDetailComponent },
    { path: 'home', component: HomeComponent },
    { path: '**', redirectTo: '/home' }
    // {path:'dashboard',canActivate:[AutGuard], component:DashboardComponent},
    // {path:'movie/:id' ,canActivate:[AutGuard], component:DashboardComponent},
    
    // {path:'basket' , canActivate:[AutGuard],component:BasketComponent},
    // {path:'admin' ,canActivate:[AutGuardAdmin],component:AdminComponent},

    // {path:'Not-Found', component:NotFoundComponent},
    // {path:'**', redirectTo:'/Not-Found'}


];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}