import { Injectable } from '@angular/core';
import { AudioService } from '../audio/audio.service';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  private started: boolean = false;
    private secondsRemaining: number;
    private stopped: boolean = false;
    private amount: number = 5;
    private interval: Interval = Interval.Seconds;

    public startOne: boolean = true;
    public startTwo: boolean = false;
    public startComplete: boolean = false;
    
    public goOne: boolean = true;
    public goTwo: boolean = false;
    public goComplete: boolean = false;
    
    public endOne: boolean = true;
    public endTwo: boolean = false;
    public endComplete: boolean = false;

    public done: () => void;

    constructor(private audio: AudioService) { }

    public initialize(interval: Interval, amount: number) {
        this.interval = interval;
        this.amount = amount;
    }

    public start(){
        if (this.started) {
            throw new Error("Timer already started.");
        }

        this.initializeSections();
        this.audio.playStart();
        
        this.secondsRemaining = this.totalSeconds();
        this.started = true;
        this.tick();
    }

    public stop() {
        this.initializeSections();
        this.stopped = true;
    }

    public isStarted(): boolean {
        return this.started;
    }

    private initializeSections() {
        this.startOne = true;
        this.startTwo = false;
        this.startComplete = false;
    
        this.goOne = true;
        this.goTwo = false;
        this.goComplete = false;
    
        this.endOne = true;
        this.endTwo = false;
        this.endComplete = false;
    }

    private totalSeconds() : number {
        switch(this.interval) {
            case Interval.Seconds: return this.amount;
            case Interval.Minutes: return this.amount * 60;
            case Interval.Hours: return this.amount * 360;
        };
    }
  
    private tick(){
      setTimeout(_ => 
        {
          this.updateSections();
          
          if (this.secondsRemaining === 0 || this.stopped) {
            this.started = false;
            this.secondsRemaining = 0;
            this.stopped = false;
          }

          if (this.secondsRemaining > 0) {
            this.secondsRemaining--;
            this.tick();
          }

        }, 1000);
    }

    private updateSections() {
        var sectionInterval = Math.ceil(this.totalSeconds() / 3);
        
        if (this.secondsRemaining > sectionInterval * 2) {
            this.startOne = !this.startOne;
            this.startTwo = !this.startTwo;
        }
        if (this.secondsRemaining === sectionInterval * 2) {
            this.startComplete = true;
            this.audio.playProgress();
        }
        
        if (this.secondsRemaining < sectionInterval * 2 && this.secondsRemaining > sectionInterval) {
            this.goOne = !this.goOne;
            this.goTwo = !this.goTwo;
        }
        if (this.secondsRemaining === sectionInterval) {
            this.goComplete = true;
            this.audio.playProgress();
        }

        if (this.secondsRemaining < sectionInterval) {
            this.endOne = !this.endOne;
            this.endTwo = !this.endTwo;
        }
        if (this.secondsRemaining === 0) {
            this.endComplete = true;
            this.audio.playProgress();
            this.audio.playStart();
            this.done();
            this.initializeSections();
        }
    }
}

export enum Interval {
  Seconds = 0,
  Minutes,
  Hours
}
