import {Component, OnInit, AfterViewInit, ElementRef} from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {

  constructor(private elRef: ElementRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    const carousel = this.elRef.nativeElement.querySelector('.carousel');
    const leftButton = this.elRef.nativeElement.querySelector('#left');
    const rightButton = this.elRef.nativeElement.querySelector('#right');

    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    leftButton.addEventListener('click', () => {
      carousel.scrollBy(-100, 0);
    });

    rightButton.addEventListener('click', () => {
      carousel.scrollBy(100, 0);
    });

    carousel.addEventListener('mousedown', (e: MouseEvent) => {
      isDown = true;
      carousel.classList.add('active');
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
      isDown = false;
      carousel.classList.remove('active');
    });

    carousel.addEventListener('mouseup', () => {
      isDown = false;
      carousel.classList.remove('active');
    });

    carousel.addEventListener('mousemove', (e: MouseEvent) => {
      if(!isDown) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      carousel.scrollLeft = scrollLeft - walk;
    });
  }
}
