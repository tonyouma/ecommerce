import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './components/address/address.component';
import { AddressListComponent } from './components/address-list/address-list.component';
import { CountrySelectComponent } from './components/country-select/country-select.component';
import { BillingAddressComponent } from './pages/billing-address/billing-address.component';
import { CancelPaymentComponent } from './pages/cancel-payment/cancel-payment.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { PlaceOrderComponent } from './pages/place-order/place-order.component';
import { ShippingAddressComponent } from './pages/shipping-address/shipping-address.component';
import { ShippingMethodsComponent } from './pages/shipping-methods/shipping-methods.component';



@NgModule({
  declarations: [
    AddressComponent,
    AddressListComponent,
    CountrySelectComponent,
    BillingAddressComponent,
    CancelPaymentComponent,
    CustomerComponent,
    PaymentComponent,
    PlaceOrderComponent,
    ShippingAddressComponent,
    ShippingMethodsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CheckoutModule { }
