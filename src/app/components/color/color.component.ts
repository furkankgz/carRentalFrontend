import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Color } from 'src/app/models/color';
import { ColorResponseModel } from 'src/app/models/colorResponseModel';
@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  colors: Color[] = [];
  apiUrl = 'https://localhost:44372/api/colors/getall';
  colorResponseModel: ColorResponseModel = {
    data: this.colors,
    message: '',
    success: true,
  };

  constructor(private HttpClient: HttpClient) { }

  ngOnInit(): void {
    this.getColors();
  }

  getColors() {
    this.HttpClient.get<ColorResponseModel>(this.apiUrl).subscribe(
      (response) => {
        this.colors = response.data
      });
  }
}
