// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Components
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { CharacterComponent } from './character/character.component';
import { CharacterSheetComponent } from './charactersheet/charactersheet.component';
import { StatsComponent } from './charactersheet/stats/stats.component';
import { TalentsComponent } from './charactersheet/talents/talents.component';
import { AsideLeftComponent } from './aside-left/asideleft.component';
import { PrintSheetComponent } from './printsheet/printsheet.component';
import { FormsModule } from '@angular/forms';

// Services
import { CharacterService } from './services/character.service';
import { EditModeService } from './services/editmode.service';

const routes: Routes = [
  { path: 'charactersheet', component: CharacterSheetComponent },
  { path: 'printsheet', component: PrintSheetComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'character/:id', component: CharacterComponent }
  // { path: '**', component: PageNoteFoundComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    FormsModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    CharacterComponent,
    CharacterSheetComponent,
    AsideLeftComponent,
    PrintSheetComponent,
    StatsComponent,
    TalentsComponent
  ],
  providers: [
    CharacterService,
    EditModeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
