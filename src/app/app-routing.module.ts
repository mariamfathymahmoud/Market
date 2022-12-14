
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { GoodsComponent } from './components/goods/goods.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SignupComponent } from './components/signup/signup.component';

const routes:Routes =[
    {path:'', component:HomeComponent},
    {path:'login', component:LoginComponent},
    {path:'signup', component:SignupComponent},
    {path:'cart', component:CartComponent},
    {path:'admin', component:GoodsComponent},
    {path:'**', component:NotfoundComponent},


]
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),
      ],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
