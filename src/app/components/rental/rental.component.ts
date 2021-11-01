import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental';
import { HttpClient } from '@angular/common/http';
import { RentalResponseModel } from 'src/app/models/rentalResponseModel';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentals: Rental[] = [];
  apiUrl = 'https://localhost:44372/api/rentals/getall';
  customerResponseModel: RentalResponseModel = {
    data: this.rentals,
    success: true,
    message: ""
  }

  constructor(private HttpClient: HttpClient) { }

  ngOnInit(): void {
    this.getRentals();
  }

  getRentals() {
    this.HttpClient.get<RentalResponseModel>(this.apiUrl).subscribe(
      (response) => {
        this.rentals = response.data
      });
  }
}
