import { Injectable } from '@angular/core';

import { Howl } from 'howler';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  constructor() { }

  playStart() {
    let player = new Howl({
      src: ['./assets/sound/start.mp3']
    });
    player.play();
  }

  playProgress() {
    let player = new Howl({
      src: ['./assets/sound/progress.mp3']
    });
    player.play();
  }

  playFireworks() {
    let player = new Howl({
      src: ['./assets/sound/fireworks.mp3']
    });
    player.play();
  }
}