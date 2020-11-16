import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Product, FoundProduct } from './model/foundProduct';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  foundProductResponse: FoundProduct = { foundProducts: [], palindromo: false };
  searchName = '';

  checkoutForm;
  constructor(private httpClient: HttpClient,
      private formBuilder: FormBuilder){
      this.checkoutForm = this.formBuilder.group({
            name: ''
          });
      }

  onSubmit(customerData) {

      console.log(customerData);
      console.log(customerData.name);
      this.searchName = customerData.name;
      if(customerData.name != null && customerData.name != ''){
        this.httpClient.get('http://wm-product-service.herokuapp.com:80/v1/product/search/'+ customerData.name).subscribe((res: FoundProduct)=>{
                  console.log(res);
                  this.foundProductResponse = res;
              });
        console.info('Your order has been submitted' + customerData);
      }
    }
}
