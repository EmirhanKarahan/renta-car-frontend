import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
})
export class CarListComponent implements OnInit {
  brands: Brand[];
  colors: Color[];
  brandFilter: string;
  colorFilter: string;
  carsDetails: CarDetailDto[] = [];
  dataLoaded: boolean = false;

  constructor(
    private carService: CarService,
    private brandService: BrandService,
    private colorService: ColorService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getBrands();
    this.getColors();

    this.activatedRoute.params.subscribe((params) => {
      if (params['brandName'] && params['colorName']) {
        this.getCarsDetailsByBrandNameAndColorName(
          params['brandName'],
          params['colorName']
        );
      } else if (params['brandName']) {
        this.getCarsDetailsByBrandName(params['brandName']);
      } else if (params['colorName']) {
        this.getCarsDetailsByColorName(params['colorName']);
      } else {
        this.getCarsDetails();
      }
    });
    this.getCarsDetails();
  }

  getCarsDetailsByBrandNameAndColorName(brandName:string, colorName:string) {
    this.carService.getCarsDetailsByBrandNameAndColorName(brandName,colorName).subscribe((response) => {
      this.dataLoaded = false;
      this.carsDetails = response.data;
      this.dataLoaded = true;
    })
  }

  getCarsDetails() {
    this.carService.getCarsDetails().subscribe((response) => {
      this.carsDetails = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsDetailsByBrandName(brandName: string) {
    this.carService
      .getCarsDetailsByBrandName(brandName)
      .subscribe((response) => {
        this.carsDetails = response.data;
        this.dataLoaded = true;
      });
  }

  getCarsDetailsByColorName(colorName: string) {
    this.carService
      .getCarsDetailsByColorName(colorName)
      .subscribe((response) => {
        this.carsDetails = response.data;
        this.dataLoaded = true;
      });
  }

  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }
}
