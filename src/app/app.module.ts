import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { PostService } from './services/post.service';
import { AlertComponent } from './components/alert/alert.component';
import { AlertService } from './services/alert.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    PostService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
