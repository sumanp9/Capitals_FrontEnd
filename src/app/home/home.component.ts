import {Component, EventEmitter, OnInit} from '@angular/core';
import {DataService} from '../service/data.service';
import {MatSlideToggleChange} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listOfCountries: Array<string> = [] ;
  isActive = false;

  constructor(private service: DataService) { }

  ngOnInit(): void {
  }

  showAllCountries(): void{
    this.isActive = !this.isActive;
    this.service.getAllCountries().subscribe((result) => {
      this.listOfCountries = result;
    });
  }
}
