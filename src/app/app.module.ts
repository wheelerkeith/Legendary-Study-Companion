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
<<<<<<< HEAD
import { ModcontentComponent } from './components/modcontent/modcontent.component';
=======
import { LoginComponent } from './components/login/login.component';
>>>>>>> 2168e0cb8a62357df0ebdee7bad10dc389ddad45

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MenuComponent,
    ResourceComponent,
    FiltersComponent,
    ProfileComponent,
<<<<<<< HEAD
    MycontentComponent,
    ModcontentComponent
=======
    MystudysetsComponent,
    MycontentComponent,
    LoginComponent
>>>>>>> 2168e0cb8a62357df0ebdee7bad10dc389ddad45
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
