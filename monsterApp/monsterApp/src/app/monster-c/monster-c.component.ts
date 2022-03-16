import { Component, Input, OnInit } from '@angular/core';
import { Monster, Raza } from '../monster.model';

@Component({
  selector: 'app-monster-c',
  templateUrl: './monster-c.component.html',
  styleUrls: ['./monster-c.component.css']
})
export class MonsterCComponent implements OnInit {

  @Input() monstruoEnviado:Monster;

  constructor() { }

  ngOnInit(): void {
  }

}
