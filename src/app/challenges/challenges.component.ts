import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Challenge } from './models/challenge';
import { ChallengeService } from './services/challenge.service';

@Component({
  selector: 'jl-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss']
})
export class ChallengesComponent implements OnInit {

  challenges$: Observable<Challenge[]>;

  constructor(private challengeService: ChallengeService) { }

  ngOnInit(): void {
    this.getChallenges();
  }

  getChallenges() {
    this.challenges$ = this.challengeService.getChallenges();
  }

}
