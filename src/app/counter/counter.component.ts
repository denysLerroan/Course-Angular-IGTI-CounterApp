import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  title: string = 'Contador';
  value: number = 0;

  increment() {
    this.value++;
  }

  decrement() {
    this.value--;
  }

  zero() {
    this.value = 0;
  }
}
