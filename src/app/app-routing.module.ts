import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductCardsByCategoryComponent } from './components/product-cards-by-category/product-cards-by-category.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SellerInformationComponent } from './components/seller-information/seller-information.component';
import { ProductCardsByCategoryFamilyComponent } from './components/product-cards-by-category-family/product-cards-by-category-family.component';
import { ProtectedPurchaseComponent } from './components/protected-purchase/protected-purchase.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterEmailComponent } from './components/register-email/register-email.component';
import { RegisterNameComponent } from './components/register-name/register-name.component';
import { RegisterPasswordComponent } from './components/register-password/register-password.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "products/:category", component: ProductCardsByCategoryComponent},
  {path: "products/category-family/:category-family", component: ProductCardsByCategoryFamilyComponent},
  {path: "product/:name", component: ProductDetailComponent},
  {path: "seller/:idProduct", component: SellerInformationComponent},
  {path: "protected-purchase", component: ProtectedPurchaseComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "register/email", component: RegisterEmailComponent},
  {path: "register/name", component: RegisterNameComponent},
  {path: "register/password", component: RegisterPasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
