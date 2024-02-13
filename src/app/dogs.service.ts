import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DogsService {
  constructor() {}

  getDogs() {
    return [
      {
        name: 'Carmen',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Cute_dog.jpg/1600px-Cute_dog.jpg',
      },
      {
        name: 'Arya',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Labrador_Retriever_portrait.jpg/1200px-Labrador_Retriever_portrait.jpg',
      },
      {
        name: 'Sansa',
        imageUrl:
          'https://www.thesprucepets.com/thmb/hxWjs7evF2hP1Fb1c1HAvRi_Rw0=/2765x0/filters:no_upscale():strip_icc()/chinese-dog-breeds-4797219-hero-2a1e9c5ed2c54d00aef75b05c5db399c.jpg',
      },
      {
        name: 'Barney',
        imageUrl:
          'https://www.bluecross.org.uk/sites/default/files/d8/2021-03/Stressed%20dog.jpg',
      },
    ];
  }
}
