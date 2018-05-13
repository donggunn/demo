import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  data = [
    {
      name: "BTCUSD",
      price: "111,3",
      high: "111",
      low: "131",
      bid: "111",
      ask: "11",
      volume: "111"
    },
    {
      name: "ETHUSD",
      price: "213,3",
      high: "23",
      low: "323",
      bid: "665",
      ask: "11",
      volume: "111"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
