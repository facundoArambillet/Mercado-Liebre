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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
