import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brand } from 'src/app/models/brand';
import { BrandResponseModel } from 'src/app/models/brandResponseModel';
@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  apiUrl = 'https://localhost:44372/api/brands/getall';
  brandResponseModel: BrandResponseModel = {
    data: this.brands,
    message: '',
    success: true,
  };

  constructor(private HttpClient: HttpClient) {}

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.HttpClient.get<BrandResponseModel>(this.apiUrl).subscribe(
      (response) => {
        this.brands = response.data
      });
  }
}
