import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'border-radius',
  standalone: true,
  templateUrl: './border-radius.component.html',
  styleUrls: ['./border-radius.component.scss'],
  imports: [FormsModule, NgStyle, MatSliderModule],
})
export class BorderRadiusComponent {
  public left = 0;
  public right = 0;
  public bottom = 0;
  public top = 0;
  public borderRadius = '0px 0px 0px 0px';

  public onChange(event: any) {
    this.left = event;
    this.borderRadius = `${this.left}px ${this.right}px ${this.bottom}px ${this.top}px`;
  }
  public onChange2(event: any) {
    this.right = event;
    this.borderRadius = `${this.left}px ${this.right}px ${this.bottom}px ${this.top}px`;
  }
  public onChange3(event: any) {
    this.bottom = event;
    this.borderRadius = `${this.left}px ${this.right}px ${this.bottom}px ${this.top}px`;
  }
  public onChange4(event: any) {
    this.top = event;
    this.borderRadius = `${this.left}px ${this.right}px ${this.bottom}px ${this.top}px`;
  }
}
