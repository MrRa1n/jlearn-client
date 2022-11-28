import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ChallengesComponent } from './challenges.component';
import { ChallengesListComponent } from './components/challenges-list/challenges-list.component';
import { NbCardModule, NbListModule } from '@nebular/theme';
import { ChallengesListItemComponent } from './components/challenges-list-item/challenges-list-item.component';



@NgModule({
  declarations: [ ChallengesComponent, ChallengesListComponent, ChallengesListItemComponent ],
  imports: [
    CommonModule,
    HttpClientModule,
    NbListModule,
    NbCardModule
  ],
  exports: [ ChallengesComponent ]
})
export class ChallengesModule { }
