import { Component, ElementRef, HostListener } from '@angular/core';
// import { Component} from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

// layerImgContainer:string = "./assets/images/poert1.png";

portfolioImgs:any[] = [
{src: "./assets/images/poert1.png", alt: "House-pic"},
{src: "./assets/images/port2.png", alt: "Cheesecake"},
{src: "./assets/images/port3.png", alt: "circus"},
{src: "./assets/images/poert1.png", alt: "House-pic"},
{src: "./assets/images/port2.png", alt: "Cheesecake"},
{src: "./assets/images/port3.png", alt: "circus"}
]
constructor(private elementRef: ElementRef){}
selectedImage: string | null = null;





toggleLayer(image: string):void{
  this.selectedImage = image;
  console.log(this.selectedImage);
  
  
}
closeLayer(event: MouseEvent):void{
  const target = event.target as HTMLElement;
  if(!target.closest('.layer-img')){
    this.selectedImage = null
  }
}
}
