import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-countries-all-page',
  templateUrl: './countries-all-page.component.html',
  styles: `
    img{
      width: 25px;
    }
  `
})
export class CountriesAllPageComponent implements OnInit {

  public countries: Country[] = [];
  public isLoading: boolean = false;


  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.searchAll();
  }

  searchAll(): void {
    this.isLoading = true;
    this.countriesService.searchAll().subscribe(data => {
      this.countries = data;
      this.isLoading = false;
    })
  }
}
