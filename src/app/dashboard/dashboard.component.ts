import { CoinsService } from "../core/services";
import { Component, OnInit } from "@angular/core";
import { Coin } from "../core/models";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  coins: Coin[] = [];
  constructor(private coinsService: CoinsService) {}

  ngOnInit() {
      this.coinsService.get("").subscribe(data => {
          this.coins = data;
      });
  }
}
