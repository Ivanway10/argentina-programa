import { Component, OnInit } from '@angular/core';
import { Skillscards } from 'src/app/arrays/skills/skillscards';

@Component({
  selector: 'app-skills-cards',
  templateUrl: './skills-cards.component.html',
  styleUrls: ['./skills-cards.component.css']
})
export class SkillsCardsComponent implements OnInit {


Skill: Skillscards[]=[
  new Skillscards(
    'HTML5',
    'Nivel Avanzado',
  ),
  new Skillscards(
    'CSS',
    'Nivel Avanzado'
  ),
  new Skillscards(
    'JavaScript',
    'Nivel Avanzado'
  ), 
  new Skillscards(
    'Spring Boot',
    'Nivel Avanzado'
  ),
  new Skillscards(
    'Angular',
    'Nivel Avanzado'
  ),
  new Skillscards(
    'Java',
    'Nivel Avanzado'
  ),
  new Skillscards(
    'MYSQL',
    'Nivel Avanzado'
  )

]

  constructor() { }

  ngOnInit(): void {
  }

}
