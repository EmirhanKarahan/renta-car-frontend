import { Component, OnInit } from '@angular/core';

import { RentalDetailDto } from 'src/app/models/rentalDetailDto';
import { RentalDetailDtoService } from 'src/app/services/rental-detail-dto.service';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css']
})
export class RentalListComponent implements OnInit {
  rentals: RentalDetailDto[] = [];
  dataLoaded: boolean = false;

  constructor(private rentalDetailDtoService:RentalDetailDtoService) { }

  ngOnInit(): void {
    this.getRentalDetails();
  }

  getRentalDetails(){
    this.rentalDetailDtoService.getRentalDetails().subscribe(response=>{
      this.rentals = response.data;
      this.dataLoaded = true;
    });
  }


}
