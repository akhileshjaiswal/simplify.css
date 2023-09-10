import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'box-shadow',
  standalone: true,
  templateUrl: './box-shadow.component.html',
  styleUrls: ['./box-shadow.component.scss'],
  imports: [FormsModule, NgStyle, MatSliderModule],
})
export class BoxShadowComponent {
  public leftS = 0;
  public rightS = 0;
  public spread = 1;
  public thickness = 1;
  public shadowColor = '#ddd';
  public boxShadow = '0px 0px 1px 1px #ddd';

  public onChange(event: any) {
    this.leftS = event;
    this.boxShadow = `${this.leftS}px ${this.rightS}px ${this.spread}px ${this.thickness}px ${this.shadowColor}`;
  }
  public onChange2(event: any) {
    this.rightS = event;
    this.boxShadow = `${this.leftS}px ${this.rightS}px ${this.spread}px ${this.thickness}px ${this.shadowColor}`;
  }
  public onChange3(event: any) {
    this.spread = event;
    this.boxShadow = `${this.leftS}px ${this.rightS}px ${this.spread}px ${this.thickness}px ${this.shadowColor}`;
  }
  public onChange4(event: any) {
    this.thickness = event;
    this.boxShadow = `${this.leftS}px ${this.rightS}px ${this.spread}px ${this.thickness}px ${this.shadowColor}`;
  }
  public onChange5(event: any) {
    this.shadowColor = event;
    this.boxShadow = `${this.leftS}px ${this.rightS}px ${this.spread}px ${this.thickness}px ${this.shadowColor}`;
  }
}
