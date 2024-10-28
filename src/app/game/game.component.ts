import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../models/game';
import { empty } from 'rxjs';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  pickCardAnimation: boolean = false;
  currentCard: string | undefined = '';
  game!: Game;

  constructor() {
    this.newGame();
  }

  takeCard() {
    if (!this.pickCardAnimation) {
      this.currentCard = this.game.stack.pop();
      this.pickCardAnimation = true;
      setTimeout(() => {
        if (this.currentCard) this.game.playedCards.push(this.currentCard);
        this.pickCardAnimation = false, 1000
      }, 1000);
    }
  }

  newGame() {
    this.game = new Game;
  }

}
