import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Slick } from 'ngx-slickjs';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  arrayLength = 10;

  config: Slick.Config = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  getArray(count: number) {
    return new Array(count);
  }
  constructor() {}

  ngOnInit(): void {}
}
