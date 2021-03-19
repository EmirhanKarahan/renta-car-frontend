import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from '../../models/carDetailDto';
import { CarImage } from '../../models/carImage';
import { CarImageService } from '../../services/car-image.service';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css'],
})
export class CarDetailsComponent implements OnInit {
  carDetails: CarDetailDto;
  dataLoaded: boolean = false;
  carImages: CarImage[];
  path= "https://localhost:44394/img/uploads/";

  constructor(
    private carService: CarService,
    private carImageService: CarImageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetails(params['carId']);
        this.getCarImages(params['carId']);
      }
    });
  }

  getCarDetails(carId: number) {
    this.carService.getCarDetailsById(carId).subscribe((result) => {
      this.carDetails = result.data;
      this.dataLoaded = true;
    });
  }

  getCarImages(carId: number) {
    this.carImageService.getCarImagesById(carId).subscribe((result) => {
      this.carImages = result.data;
      console.log(result.data[0]);
    });
  }

  getCurrentSlideClass(carImage:CarImage){
    if (carImage == this.carImages[0]) {
      return "carousel-item active"
    }
    return "carousel-item"
  }

}
