import { Component, OnInit } from '@angular/core';
import { Goods } from '../interfaces/goodsinterface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  goods: Goods[] = [
    {name:"Cypal",price:100,photourl:"assets/makeup1.jpg"},
    {name:"Intenso",price:50,photourl:"assets/intenso.jpg"},
    {name:"Poroja",price:150,photourl:"assets/pynak.jpg"},
    {name:"Pritny",price:100,photourl:"assets/prity.jpg"},
    {name:"Cypal",price:100,photourl:"assets/makeup1.jpg"},
    {name:"Intenso",price:50,photourl:"assets/intenso.jpg"},
    {name:"Poroja",price:150,photourl:"assets/pynak.jpg"},
    {name:"Pritny",price:100,photourl:"assets/prity.jpg"},
    {name:"Cypal",price:100,photourl:"assets/makeup1.jpg"},
    {name:"Intenso",price:50,photourl:"assets/intenso.jpg"},
    {name:"Poroja",price:150,photourl:"assets/pynak.jpg"},
    {name:"Pritny",price:100,photourl:"assets/prity.jpg"},
   ];
  constructor() { }

  ngOnInit(): void {
  }

}
