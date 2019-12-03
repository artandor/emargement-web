import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavbarComponent} from './component/navbar/navbar.component';
import {FooterComponent} from './component/footer/footer.component';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './page/homepage/homepage.component';
import {LoginComponent} from './component/login/login.component';
import {AuthComponent} from './page/auth/auth.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TaskComponent} from './page/task/task.component';

const appRoutes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'tasks', component: TaskComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    LoginComponent,
    AuthComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
