import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DogsComponent } from './dogs/dogs.component';
import { DogComponent } from './dog/dog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DogComponent, DogsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dogs';
}
