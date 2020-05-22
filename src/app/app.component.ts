import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custom-search-filter-example';
  searchedKeyword: string;

  filterResultDataSet = [
    {
      firstName: 'Cristiano',
      lastName: 'Ronaldo',
      country: 'Pourtgal',
      club:'Juventus'
    },
    {
      firstName: 'Leo',
      lastName: 'Messi',
      country: 'Argentina',
      club:'Barcelona'
    },
    {
      firstName: 'Neymar',
      lastName: 'Junior',
      country: 'BRAZIL',
      club:'PSG'
    },
    {
      firstName: 'Sergio',
      lastName: 'Ramos',
      country: 'SPAIN',
      club:'Real Madrid'
    },
    {
      firstName: 'Karim',
      lastName: 'Benzema',
      country: 'France',
      club:'Real Madrid'
    },
    {
      firstName: 'Sergio',
      lastName: 'Buiscut',
      country: 'SPAIN',
      club:'Barcelona'
    },
    {
      firstName: 'Gerard',
      lastName: 'Pique',
      country: 'SPAIN',
      club:'Barcelona'
    }
  ]
}
