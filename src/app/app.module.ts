import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductCardsByCategoryComponent } from './components/product-cards-by-category/product-cards-by-category.component';
import { ProductCardByCategoryComponent } from './components/product-card-by-category/product-card-by-category.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductCardByCategorySidebarComponent } from './components/product-card-by-category-sidebar/product-card-by-category-sidebar.component';
import { CategoriesCardsComponent } from './components/categories-cards/categories-cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductDetailSidebarComponent } from './components/product-detail-sidebar/product-detail-sidebar.component';
import { ProductDetailGalleryComponent } from './components/product-detail-gallery/product-detail-gallery.component';
import { ProductDetailContentComponent } from './components/product-detail-content/product-detail-content.component';
import { SellerInformationComponent } from './components/seller-information/seller-information.component';
import { ProductCardByCategoryFamilyComponent } from './components/product-card-by-category-family/product-card-by-category-family.component';
import { ProductCardsByCategoryFamilyComponent } from './components/product-cards-by-category-family/product-cards-by-category-family.component';
import { ProductCardByCategoryFamilySidebarComponent } from './components/product-card-by-category-family-sidebar/product-card-by-category-family-sidebar.component';
import { ProtectedPurchaseComponent } from './components/protected-purchase/protected-purchase.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterEmailComponent } from './components/register-email/register-email.component';
import { RegisterNameComponent } from './components/register-name/register-name.component';
import { RegisterPasswordComponent } from './components/register-password/register-password.component';
import { ProductOffertsComponent } from './components/product-offerts/product-offerts.component';
import { ProductOffertsSidebarComponent } from './components/product-offerts-sidebar/product-offerts-sidebar.component';
import { UserHistoryComponent } from './components/user-history/user-history.component';
import { HelpComponent } from './components/help/help.component';
import { UserPurchasesComponent } from './components/user-purchases/user-purchases.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserProfileSidebarComponent } from './components/user-profile-sidebar/user-profile-sidebar.component';
import { UserProfileContentComponent } from './components/user-profile-content/user-profile-content.component';
import { UserPurchasesContentComponent } from './components/user-purchases-content/user-purchases-content.component';
import { UserPurchasesCardComponent } from './components/user-purchases-card/user-purchases-card.component';
import { NavbarAddressCardComponent } from './components/navbar-address-card/navbar-address-card.component';
import { UserAddressComponent } from './components/user-address/user-address.component';
import { UserAddressCardComponent } from './components/user-address-card/user-address-card.component';
import { UserAddressCreateComponent } from './components/user-address-create/user-address-create.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShoppingCartContentComponent } from './components/shopping-cart-content/shopping-cart-content.component';
import { ShoppingCartSidebarComponent } from './components/shopping-cart-sidebar/shopping-cart-sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorPageComponent } from './components/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CarouselComponent,
    ProductCardComponent,
    ProductCardsByCategoryComponent,
    ProductCardByCategoryComponent,
    ProductDetailComponent,
    ProductCardByCategorySidebarComponent,
    CategoriesCardsComponent,
    FooterComponent,
    ProductDetailSidebarComponent,
    ProductDetailGalleryComponent,
    ProductDetailContentComponent,
    SellerInformationComponent,
    ProductCardByCategoryFamilyComponent,
    ProductCardsByCategoryFamilyComponent,
    ProductCardByCategoryFamilySidebarComponent,
    ProtectedPurchaseComponent,
    RegisterComponent,
    LoginComponent,
    RegisterEmailComponent,
    RegisterNameComponent,
    RegisterPasswordComponent,
    ProductOffertsComponent,
    ProductOffertsSidebarComponent,
    UserHistoryComponent,
    HelpComponent,
    UserPurchasesComponent,
    UserProfileComponent,
    UserProfileSidebarComponent,
    UserProfileContentComponent,
    UserPurchasesContentComponent,
    UserPurchasesCardComponent,
    NavbarAddressCardComponent,
    UserAddressComponent,
    UserAddressCardComponent,
    UserAddressCreateComponent,
    ShoppingCartComponent,
    ShoppingCartContentComponent,
    ShoppingCartSidebarComponent,
    ErrorPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
