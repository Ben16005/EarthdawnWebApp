import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { CharacterSheetComponent } from './charactersheet/charactersheet.component';

const routes = [
  { path: 'charactersheet', component: CharacterSheetComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  // { path: '**', component: PageNoteFoundComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    CharacterSheetComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
