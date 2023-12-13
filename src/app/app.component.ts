import { Component, OnChanges, OnInit, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';       
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, HomeComponent],
  template: `<main>
              <header class="brand-name">
               <img class="brand-logo" [src]="itemImageUrl" alt="logo" [attr.aria-hidden]="false">
              </header> 
              <section class="content"> 
                  
              <input type='text' placeholder='enter text here..' #val>

              </section>
            </main>`,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnChanges, DoCheck, 
                                    AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  
  itemImageUrl = "/assets/logo.svg";

  value: string = "";
  counter: number = 0;

  constructor() {
    this.counter++;
    console.log(`step ${this.counter}:  Initialize Constructor`);
  }
  
  
  ngAfterViewInit(): void {
    this.counter++;
    console.log(`step ${this.counter}:  Initialize ngAfterViewInit`);
  }
  
 
  ngOnChanges(changes: SimpleChanges): void {
    this.counter++;
    console.log(`step ${this.counter}:  Initialize ngOnChanges`);
  }
  
  ngOnInit(): void {
    this.counter++;
    console.log(`step ${this.counter}:  Call ngOnInit`);
  }
  ngDoCheck(): void {
    this.counter++;
    console.log(`step ${this.counter}:  Initialize ngDoCheck`);
  }

  ngAfterContentInit(): void {
    this.counter++;
    console.log(`step ${this.counter}:  Initialize AfterContentInit`);
  }

  ngAfterContentChecked(): void {
    this.counter++;
    console.log(`step ${this.counter}:  Initialize AfterContentChecked`);
  }

  ngAfterViewChecked(): void {
    this.counter++;
    console.log(`step ${this.counter}:  Initialize ngAfterViewChecked`);
  }

  ngOnDestroy(): void {
    this.counter++;
    console.log(`step ${this.counter}:  Initialize ngOnDestroy`);
  }
  
}
