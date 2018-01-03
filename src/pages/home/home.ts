import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pet: string = "Populares";
  isAndroid: boolean = false;
  constructor(public navCtrl: NavController,platform: Platform) {
    this.isAndroid = platform.is('android');
  }
  slides = [
    {
      title: "Bienvenido a ...!",
      description: "paja paja.",
      image: "assets/imgs/camino.jpg",
    },
    {
      title: "Que significa esto?",
      description: "<b>paja paja</b> La paja es lo mejor.",
      image: "assets/imgs/parque.jpg",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/img/ica-slidebox-img-3.png",
    }
  ];
}
