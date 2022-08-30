import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor( private portfolioDatos:PortfolioService ) {}
  myPortfolio:any;
  ngOnInit(): void {
    this.portfolioDatos.getData().subscribe(data => {
      console.log(data);
      this.myPortfolio=data;
    });
  }

  // urlHero = '../assets/laptop.jpeg'
}
