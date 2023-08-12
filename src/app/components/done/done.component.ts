import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss'],
})
export class DoneComponent implements OnInit {

  //public imageSrc: string = "./../assets/fireworks.png";

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  public dismiss() {
    this.modalController.dismiss();
  }

}
