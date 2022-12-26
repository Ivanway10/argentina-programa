import { Component, OnInit } from '@angular/core';
import { ExpCard } from 'src/app/arrays/expcards/expcards';

@Component({
  selector: 'app-exp-cards',
  templateUrl: './exp-cards.component.html',
  styleUrls: ['./exp-cards.component.css']
})
export class ExpCardsComponent implements OnInit {


  ExpC: ExpCard[]= [
    new ExpCard(
      'Desarrollador web Full Stack',
      '2020',
      '2022',
      'Construir una SPA, trabajando en front end y back end'
    )
  ];

  constructor() { }
  

  ngOnInit(): void {}


}