import { Component, OnInit } from '@angular/core';
import { EduCard } from 'src/app/arrays/educards/edu-cards';


@Component({
  selector: 'app-edu-cards',
  templateUrl: './edu-cards.component.html',
  styleUrls: ['./edu-cards.component.css']
})
export class EduCardsComponent implements OnInit {


Edu: EduCard[]=[
  
  new EduCard(
      'Licenciatura en informatica',
      'Universidad Nacional de Quilmes',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_1pIdOAsaLOy9qTO-ToQLp_0e068uDr7AGPjXhAMPesym_DZK6yZuayVY_ZkPhfkNnA&usqp=CAU'
  ),
  new EduCard(
      '#SeProgramar',
      'Instituto Nacional de Tecnologia - Camara de la Industria Argentina de Software - Ministerio de Economia de la Nacion',
      'https://raw.githubusercontent.com/Ivanway10/argentina-programa-FrontEnd/master/portfolio/src/assets/banner-ok-argentina-programa.jpg'
  ),
  new EduCard(
      '#YoProgramo',
      'Instituto Nacional de Tecnologia - Camara de la Industria Argentina de Software - Ministerio de Economia de la Nacion',
      'https://raw.githubusercontent.com/Ivanway10/argentina-programa-FrontEnd/master/portfolio/src/assets/banner-ok-argentina-programa.jpg'
  ),
  new EduCard(
      'Ingles',
      'Our Lady´s College [Avanzado - Oral y Escrito]',
      'https://www.leonhunter.com/wp-content/uploads/2017/08/lenguas-sin-academia-es-necesaria-una-institucion-que-regule-el-idioma.jpg'
  )];


  constructor() { }
  

  ngOnInit(): void {}

}
