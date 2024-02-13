import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { DogsService } from '../dogs.service';

@Component({
  selector: 'app-dogs',
  standalone: true,
  imports: [NgFor, NgIf],
  template: `<h2>{{ name }}</h2>
    <ul>
      <li *ngFor="let dog of dogs">
      <img [src]="dog.imageUrl" alt="{{ dog.name }}" style="width: 130px; height: 100px;"> {{ dog.name }}
         <button (click)="onSave(dog)">Adopt</button>
      </li>
    </ul> 
    <div *ngIf="adoptedDog">
    <h2>Adopted Dog</h2>
    <img [src]="adoptedDog.imageUrl" alt="{{ adoptedDog.name }}" style="width: 230px; height: 250px;"> {{ adoptedDog.name }}
</div>`,

  styleUrl: './dogs.component.scss',
})
export class DogsComponent {
  name = 'Available Dogs';
  dogs: any[];
  adoptedDog: any;

  constructor(service: DogsService) {
    this.dogs = service.getDogs();
  }

  onSave(dog: any) {
    this.adoptedDog = dog;
    console.log('Adopted Dog: ' + this.adoptedDog);
  }
}
