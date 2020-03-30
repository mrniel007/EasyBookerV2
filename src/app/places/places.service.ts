import { Injectable } from '@angular/core';

import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [

    new Place(
      'p1',
      'Presidential Suites Punta Cana',
      'Área turística de República Dominicana con playas de Punta Cana, arrecife de coral y campos de golf.',
      'https://images.trvl-media.com/hotels/6000000/5270000/5266200/5266152/a0fd97cd_z.jpg',
      299.99,
      new Date('2020-01-01'),
      new Date('2020-12-31')
    ),
    new Place(
      'p2',
      'Hard Rock Hotel & Casino Punta Cana',
      'Este complejo turístico y casino todo incluido con temática musical, ubicado junto a la playa al norte de Punta Cana',
      'https://lh5.googleusercontent.com/p/AF1QipO-JVoZIF2DwWQEMbQIjQDhCL7Eh2563rollGu1=s435-k-no',
      399.99,
      new Date('2020-01-01'),
      new Date('2020-12-31')
    ),
    new Place(
      'p3',
      'Occidental Punta Cana',
      'Complejo turístico que se encuentra en playa El Cortecito, a 10 km del naufragio Astron y a 24 km del aeropuerto de Punta Cana.',
      'https://q-cf.bstatic.com/images/hotel/max1024x768/199/199954767.jpg',
      199.99,
      new Date('2020-01-01'),
      new Date('2020-12-31')
    ),

  ];

  get places() {
    return [...this._places];
  }

  constructor() {}

  getPlace(id: string) {
    return {...this._places.find(p => p.id === id)};
  }
}
