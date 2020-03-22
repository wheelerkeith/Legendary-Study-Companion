import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { MenuComponent } from './components/menu/menu.component';
import { ResourceComponent } from './components/resource/resource.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FiltersComponent } from './components/filters/filters.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MycontentComponent } from './components/mycontent/mycontent.component';
import { LoginComponent } from './components/login/login.component';
import { ModcontentComponent } from './components/modcontent/modcontent.component';
import { ProfileViewComponent } from './components/profile-view/profile-view.component';
import { SearchViewComponent } from './components/search-view/search-view.component';
import { AppViewComponent } from './components/app-view/app-view.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MenuComponent,
    ResourceComponent,
    FiltersComponent,
    ProfileComponent,
    LoginComponent,
    MycontentComponent,
    ModcontentComponent,
    ProfileViewComponent,
    SearchViewComponent,
    AppViewComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
