import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-edu-cards',
  templateUrl: './edu-cards.component.html',
  styleUrls: ['./edu-cards.component.css']
})
export class EduCardsComponent implements OnInit {
  
  educardList:any;
  
  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.educardList=data.educacion;
    });
  }

}
