import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageOne } from './pages/page-1';
import { PageTwo } from './pages/page-2';
import { Home } from './pages/home';
import { Subpage } from './pages/subpage';

@NgModule({
  declarations: [
    AppComponent,
    PageOne,
    PageTwo,
    Home,
    Subpage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
