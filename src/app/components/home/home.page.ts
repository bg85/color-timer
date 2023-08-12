import { Component } from '@angular/core';
import { ModalController, PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';

import { Interval, TimerService } from 'src/app/services/timer/timer.service';
import { DoneComponent } from '../done/done.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private shouldStart: boolean = false;
  

  constructor(private pickerController: PickerController, private modalController: ModalController, public timerService: TimerService) {
    this.timerService.done = async () => {
      await this.done();
    }
  }

  public async openPicker() {
    let pickerOptions = {
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Start',
          handler: (_) => {
            this.shouldStart = true;
          }
        }
      ],
      columns: [
        {
          name: 'Interval',
          options: [ { text: "Seconds", value: Interval.Seconds }, { text: "Minutes", value: Interval.Minutes }, { text: "Hours", value: Interval.Hours }]
        },
        {
          name: 'Amount',
          options: [
            { text: "5", value: 5 }, { text: "10", value: 10 }, { text: "15", value: 15 }, { text: "20", value: 20 }, 
            { text: "25", value: 25 }, { text: "30", value: 30 }, { text: "35", value: 35 }, { text: "40", value: 40 }, 
            { text: "45", value: 45 }, { text: "50", value: 50 }, { text: "55", value: 55 }, { text: "60", value: 60 }, 
            { text: "65", value: 65 }, { text: "70", value: 70 }, { text: "75", value: 75 }, { text: "80", value: 80 }, 
            { text: "85", value: 85 }, { text: "90", value: 90 }, { text: "95", value: 95 }, { text: "100", value: 100 },
            { text: "105", value: 105 }, { text: "110", value: 110 }, { text: "115", value: 115 }, { text: "120", value: 120 }
          ]
        }
      ]
    };
    const picker = await this.pickerController.create(pickerOptions);

    await picker.present();

    picker.onDidDismiss().then(async _ => {
      let intervalCol = await picker.getColumn('Interval');
      let amountCol = await picker.getColumn('Amount');
      this.timerService.initialize(intervalCol.options[intervalCol.selectedIndex].value, amountCol.options[amountCol.selectedIndex].value);

      if (this.shouldStart) {
        this.start();
      }
    });
  }

  public start() {
    this.timerService.start();
    this.shouldStart = false;
  }

  public stop() {
    this.timerService.stop();
  }

  public started() : boolean {
    return this.timerService.isStarted();
  }

  async done() {
    const modal = await this.modalController.create({
      component: DoneComponent,
      cssClass: 'modal-fullscreen',
    });

    //setTimeout(_ => { modal.dismiss(); }, 2000);

    return await modal.present();
  }
}