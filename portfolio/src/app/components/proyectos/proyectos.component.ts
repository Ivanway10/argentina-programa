import { Component, OnInit } from '@angular/core';
import { Proyects } from 'src/app/arrays/proyetcs/proyects-cards'
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

 Proy: Proyects[]= [
    new Proyects(
      'Generador de contraseñas',
      'https://raw.githubusercontent.com/Ivanway10/argentina-programa-FrontEnd/master/portfolio/src/assets/banner-ok-argentina-programa.jpg',
      'Generador y validador de contraseñas es una aplicacion construida con HTML5, CSS, JavaScript y Bootstrap',
      ' • Diciembre - 2022 •',
      'https://raw.githubusercontent.com/Ivanway10/argentina-programa-FrontEnd/main/portfolio/src/assets/photo-1555066931-4365d14bab8c.avif'
    ),
    new Proyects(
      'Ecommerce',
      'https://raw.githubusercontent.com/Ivanway10/argentina-programa-FrontEnd/master/portfolio/src/assets/banner-ok-argentina-programa.jpg',
      'Ecommerce de comida',
      '• Diciembre - 2022 •',
      'https://raw.githubusercontent.com/Ivanway10/argentina-programa-FrontEnd/main/portfolio/src/assets/photo-1555066931-4365d14bab8c.avif'
    )
 ];

 miPortfolio:any;

 constructor(private datosPortfolio:PortfolioService) { }

 ngOnInit(): void {
   this.datosPortfolio.obtenerDatos().subscribe(data => {
     console.log(data);
     this.miPortfolio=data;
   });
 }
}
