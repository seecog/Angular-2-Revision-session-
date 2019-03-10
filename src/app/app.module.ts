import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterModule,Route} from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { MusicModule } from './music/music.module';
import { MyIf } from './music/directives/myif.directive';
import { MyLoopDirective } from './music/directives/myloop.directive';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { FilmsComponent } from './films/films.component';
import { FilmComponent } from './film/film.component';
import {HttpClientModule} from '@angular/common/http';
import { AuthGuardService } from './services/guards/auth.service';
import { ChildGuard } from './services/guards/child.service';
import { CommentsComponent } from './comments/comments.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent,
    MyIf,
    MyLoopDirective,
    ContactComponent,
    AboutComponent,
    UsersComponent,
    FilmsComponent,
    FilmComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MusicModule,
  RouterModule.forRoot([
    {path : "",component : HomeComponent},
    {path : "contact",component : ContactComponent},
    {path : "about",component : AboutComponent,canActivate : [AuthGuardService]},
    {path : "users/:id",component : UsersComponent},
    {
      path : 'films',component : FilmsComponent,
      // canActivate : [AuthGuardService],
      // canActivateChild : [ChildGuard],
      children : [
        {path : ':id',component : FilmComponent},
        {path : ':id/comments',component : CommentsComponent,canActivate : [AuthGuardService]}
      ]
    }
  ])
  ],
  providers: [AuthGuardService,ChildGuard],
  bootstrap: [AppComponent]
})
export class AppModule { 

}

