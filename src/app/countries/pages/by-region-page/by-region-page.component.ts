import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: `
  button{
  background-color: var(--color3);
  }
  button:hover, .custom{
  background-color: var(--color4);
  }`
})
export class ByRegionPageComponent implements OnInit{

  public countries: Country[] = [];
  public regions: Region[] = ['africa', 'americas','asia', 'europe','oceania'];
  public selectedRegion?: Region;
  public isLoading: boolean = false;

  constructor( private countriesService: CountriesService ){}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }

  searchByRegion( term: Region ):void{
    this.isLoading = true;

    this.selectedRegion = term;

    this.countriesService.searchRegion(term)
    .subscribe( countries =>{
      this.countries = countries;
      this.isLoading = false;
    });
  }

}
