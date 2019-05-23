// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

// Components
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { CharacterSheetComponent } from './charactersheet/charactersheet.component';
import { StatsComponent } from './charactersheet/stats/stats.component';
import { TalentsComponent } from './charactersheet/talents/talents.component';
import { SpellsComponent } from './charactersheet/spells/spells.component';
import { AsideLeftComponent } from './aside-left/asideleft.component';
import { PrintSheetComponent } from './printsheet/printsheet.component';

// Services
import { CharacterService } from './services/character.service';
import { EditModeService } from './services/editmode.service';

const routes: Routes = [];
//   { path: 'charactersheet', component: CharacterSheetComponent },
//   { path: 'printsheet', component: PrintSheetComponent },
//   { path: 'welcome', component: WelcomeComponent },
//   { path: '', redirectTo: 'welcome', pathMatch: 'full' },
// ];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    CharacterSheetComponent,
    StatsComponent,
    TalentsComponent,
    SpellsComponent,
    AsideLeftComponent,
    PrintSheetComponent
  ],
  providers: [
    CharacterService,
    EditModeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
