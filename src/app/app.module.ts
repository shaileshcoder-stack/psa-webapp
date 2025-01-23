import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverDirective } from './over.directive';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ChildCompComponent } from './app/child-comp/child-comp.component';
import { MyInterceptor } from './services/http_Interceptor';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OverDirective,
    ChildCompComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule  ,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass:MyInterceptor,
      multi: true, // Allow multiple interceptors to be chained
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
