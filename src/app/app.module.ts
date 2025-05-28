import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { AdvantageComponent } from './components/advantage/advantage.component';
import {ProductService} from "./services/product.service";
import { PriceOutputPipe } from './pipes/price-output.pipe';
import { ProductComponent } from './components/product/product.component';
import { BtnBackgroundDirective } from './directives/btn-background.directive';
import { TextRestrictionPipe } from './pipes/text-restriction.pipe';
import { CustomPhonePipe } from './pipes/custom-phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdvantageComponent,
    PriceOutputPipe,
    ProductComponent,
    BtnBackgroundDirective,
    TextRestrictionPipe,
    CustomPhonePipe
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
