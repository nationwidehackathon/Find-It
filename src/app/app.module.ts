import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { ResultComponent } from './result/result.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { CardComponent } from './profile/card/card.component';
import { SkillsComponent } from './profile/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    ProfileComponent,
    SearchComponent,
    CardComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
