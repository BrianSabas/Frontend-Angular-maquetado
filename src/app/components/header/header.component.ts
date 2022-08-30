import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private portfolioDatos:PortfolioService ) { }
  myPortfolio:any;
  ngOnInit(): void {
    this.portfolioDatos.getData().subscribe(data => {
      console.log(data);
      this.myPortfolio=data;
    });
  }

 urlImg = '../assets/logo.svg';
}