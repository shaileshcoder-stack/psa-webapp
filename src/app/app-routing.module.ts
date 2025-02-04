import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGaurdService } from './auth-gaurd.service';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent,  },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductsComponent }, // route to the products component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] // Make sure to export RouterModule here
})
export class AppRoutingModule { }
