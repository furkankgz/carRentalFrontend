import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from 'src/app/models/customer';
import { CustomerResponseModel } from 'src/app/models/customerResponseModel';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: Customer[] = [];
  apiUrl = 'https://localhost:44372/api/customers/getall';
  customerResponseModel: CustomerResponseModel = {
    data: this.customers,
    success: true,
    message: ""
  }

  constructor(private HttpClient: HttpClient) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.HttpClient.get<CustomerResponseModel>(this.apiUrl).subscribe(
      (response) => {
        this.customers = response.data
      });
  }
}
