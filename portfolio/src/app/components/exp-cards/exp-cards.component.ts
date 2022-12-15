import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';


@Component({
  selector: 'app-exp-cards',
  templateUrl: './exp-cards.component.html',
  styleUrls: ['./exp-cards.component.css']
})
export class ExpCardsComponent implements OnInit {

  miPortfolio:any;

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.miPortfolio=data;
    });
  }

}