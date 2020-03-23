import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AppViewComponent } from './components/app-view/app-view.component';
import { SearchViewComponent } from './components/search-view/search-view.component';
import { ProfileViewComponent } from './components/profile-view/profile-view.component';
import { ModcontentComponent } from './components/modcontent/modcontent.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';


const routes: Routes = [ {

  path: '',
  component: LandingpageComponent
}, {

  path: 'app',
  component: AppViewComponent,
  children: [{
    path: 'search',
    component: SearchViewComponent
  },{
    path: 'profile',
    component: ProfileViewComponent
  },{
    path: 'moderate',
    component: ModcontentComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
