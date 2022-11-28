import { Component, Input, OnInit } from '@angular/core';
import { Challenge } from '../../models/challenge';

@Component({
  selector: 'jl-challenges-list',
  templateUrl: './challenges-list.component.html',
  styleUrls: ['./challenges-list.component.scss']
})
export class ChallengesListComponent implements OnInit {

  @Input() challenges: Challenge[];

  constructor() { }

  ngOnInit(): void {
  }

}
