import { Component,ViewChild } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  
  pet: string = "Populares";
  isAndroid: boolean = false;
  constructor(public navCtrl: NavController,platform: Platform) {
    this.isAndroid = platform.is('android');
  }
  slides1 = [
    {
      title: "Parque Sinaloa",
      description: "Jardin Botanico Benjamin Francis Jhonston",
      visitas: 2500,
      image: "assets/imgs/parque_sinaloa.jpg",
    },
    {
      title: "El cerro de la memoria",
      description: "Un icono de la ciudad de Los Mochis",
      visitas: 3050,      
      image: "assets/imgs/cerro.jpg",
    },
    {
      title: "Malecon - Topolobampo",
      description: "Una espléndida bahía, formada por ensenadas y islas",
      visitas: 2018,      
      image: "assets/imgs/malecon.jpg",
    }
  ];

  slides2 = [
    {
      title: "Plazuela 27 de Septiembre",
      description: "Destaca por su particular historia y sus tiempos remotos",
      visitas: 1200,
      image: "assets/imgs/plazuela.jpg",
    },
    {
      title: "El Maviri",
      description: "Una extensa franja de tierra entre la Bahía de Topolobampo y el Mar de Cortés",
      visitas: 1800,      
      image: "assets/imgs/maviri.jpg",
    },
    {
      title: "Teatro Ingenio",
      description: "Una magna obra para obras y actividades culturales",
      visitas: 2500,      
      image: "assets/imgs/teatro.jpg",
    }
  ];
  slides3 = [
    {
      title: "",
      description: "",
      visitas: 1200,
      image: "assets/imgs/evento11.jpg",
    },
    {
      title: "",
      description: "",
      visitas: 1800,      
      image: "assets/imgs/evento2.png",
    },
    {
      title: "Teatro Ingenio",
      description: "Una magna obra para obras y actividades culturales",
      visitas: 2500,      
      image: "assets/imgs/teatro.jpg",
    }
  ];
}
