import { Component, Input } from '@angular/core';

@Component({
  selector: 'player-list',
  templateUrl: './Baseball-stats.component.html',
  styles: []
})
export class PlayerListComponent  {
  public playerList = [];

  public statusMsg = ""

  public setStatusMsg(player: string): void {
    const baseMsg: string = "You have selected: ";
    this.statusMsg = baseMsg + player;
  }

  public clearStatusMsg(): void {
    this.statusMsg = '';
  }

  public addPlayer(): void {
    const playerName = "Player#" + (this.playerList.length/3);
    this.playerList.push(playerName);
    const playerPower = "Power: " + (Math.ceil(Math.random()* 10));
    this.playerList.push(playerPower);
    const playerSpeed = "Speed: " + (Math.ceil(Math.random()* 10));
    this.playerList.push(playerSpeed);
  }

  public removePlayer(): void {
    this.playerList.pop();
    this.playerList.pop();
    this.playerList.pop();
  }
}