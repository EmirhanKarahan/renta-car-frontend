import { Component, OnInit, TestabilityRegistry } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css'],
})
export class ColorListComponent implements OnInit {
  colors: Color[] = [];
  dataLoaded: boolean = false;
  currentColor:Color;

  constructor(private colorService: ColorService) {}

  ngOnInit(): void {
    this.getColors();
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
      this.dataLoaded = true;
    });
  }

  setSelectedColor(color:Color){
    this.currentColor = color;
  }

  getCurrentColorClass(color:Color){
    if (color == this.currentColor) {
      return "table-dark"
    }
    return
  }

}
