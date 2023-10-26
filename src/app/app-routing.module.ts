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
import { ProductOffertsComponent } from './components/product-offerts/product-offerts.component';
import { UserHistoryComponent } from './components/user-history/user-history.component';
import { HelpComponent } from './components/help/help.component';
import { UserPurchasesComponent } from './components/user-purchases/user-purchases.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserAddressComponent } from './components/user-address/user-address.component';
import { UserAddressCreateComponent } from './components/user-address-create/user-address-create.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "products/:category", component: ProductCardsByCategoryComponent},
  {path: "products/category-family/:category-family", component: ProductCardsByCategoryFamilyComponent},
  {path: "product/:name", component: ProductDetailComponent},
  {path: "offers", component: ProductOffertsComponent},
  {path: "seller/:idProduct", component: SellerInformationComponent},
  {path: "protected-purchase", component: ProtectedPurchaseComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "register/email", component: RegisterEmailComponent},
  {path: "register/name", component: RegisterNameComponent},
  {path: "register/password", component: RegisterPasswordComponent},
  {path: "profile", component: UserProfileComponent},
  {path: "history", component: UserHistoryComponent},
  {path: "purchases", component: UserPurchasesComponent},
  {path: "address", component: UserAddressComponent},
  {path: "address/create", component: UserAddressCreateComponent},
  {path: "address/create/:id", component: UserAddressCreateComponent},
  {path: "help", component: HelpComponent},
  {path: "cart", component: ShoppingCartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
