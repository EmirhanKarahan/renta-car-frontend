import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
})
export class CarListComponent implements OnInit {
  carsDetails: CarDetailDto[] = [];
  dataLoaded: boolean = false;

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandName']) {
        this.getCarsDetailsByBrandName(params['brandName']);
      } else if (params['colorName']) {
        this.getCarsDetailsByColorName(params['colorName']);
      } else {
        this.getCarsDetails();
      }
    });
    this.getCarsDetails();
  }

  getCarsDetails() {
    this.carService.getCarsDetails().subscribe((response) => {
      this.carsDetails = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsDetailsByBrandName(brandName: string) {
    this.carService.getCarsDetailsByBrandName(brandName).subscribe((response) => {
      this.carsDetails = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsDetailsByColorName(colorName: string) {
    this.carService.getCarsDetailsByColorName(colorName).subscribe((response) => {
      this.carsDetails = response.data;
      this.dataLoaded = true;
    });
  }
}
