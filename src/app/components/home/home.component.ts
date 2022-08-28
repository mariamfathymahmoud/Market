import { Component, OnInit } from '@angular/core';
import { Goods } from '../interfaces/goodsinterface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  goods: Goods[] = [
   {name:"Microphone",price:400,photourl:"assets/microfone.jpg"},
   {name:"Headphone",price:200,photourl:"assets/headfone.jpg"},
   {name:"PVP-Game",price:150,photourl:"assets/pvp game.jpg"},
   {name:"Keyboard",price:1000,photourl:"assets/5.jpg"},
   {name:"Microphone",price:400,photourl:"assets/microfone.jpg"},
   {name:"Headphone",price:200,photourl:"assets/headfone.jpg"},
   {name:"PVP-Game",price:150,photourl:"assets/pvp game.jpg"},
   {name:"Keyboard",price:1000,photourl:"assets/mouse.jpg"},
   {name:"Microphone",price:400,photourl:"assets/microfone.jpg"},
   {name:"Headphone",price:200,photourl:"assets/headfone.jpg"},
   {name:"PVP-Game",price:150,photourl:"assets/pvp game.jpg"},
   {name:"Keyboard",price:1000,photourl:"assets/keyboard.jpg"},
  ];
 
  constructor() { }
  ngOnInit(): void {
  }
}
