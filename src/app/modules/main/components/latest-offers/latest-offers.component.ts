import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-offers',
  templateUrl: './latest-offers.component.html',
  styleUrls: ['./latest-offers.component.sass'],
})
export class LatestOffersComponent implements OnInit {
  public images: object[] | [] = [
    {
      path: 'https://cdn.audi.bg/media/Theme_Menu_Model_Dropdown_Item_Image_Component/root-bg-model-modelMenu-editableItems-20246-dropdown-413731-image/dh-487-a0e9a6/14357725/1627885145/audi-galerie-5-oe.jpg',
    },

    {
      path: 'https://cdn.audi.at/media/Theme_Menu_Model_Dropdown_Item_Image_Component/root-at-model-modelMenu-editableItems-25-dropdown-332540-image/dh-487-a0e9a6/32874597/1627376329/audi-a5-coupe-2020.jpg',
    },

    { path: 'https://www.motoreport.de/wp-content/uploads/2019/05/audi-e-tron-GT-810x456.jpg' },
    {
      path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5LFTIvCxBgqgUzkuBgACRrgMH_Ub5-ncbOhOBTirZH2v_Yr6Ict5u8nNdTAYJd1yjPII&usqp=CAU',
    },

    {
      path: 'https://i.auto-bild.de/ir_img/2/6/6/1/3/7/9/Audi-Functions-on-Demand-Fahrzeugfunktionen-zum-nachbuchen-474x316-864346a3a01476b0.jpg',
    },

    {
      path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlGxax6slujYgOYRHleJZMXxGriNe-14A1KFMTYCmDB72oMhFTZOV8CaqKj9wk_trSWio&usqp=CAU',
    },

    { path: 'https://www.motoreport.de/wp-content/uploads/2019/05/audi-e-tron-GT-810x456.jpg' },
  ];

  public loop: boolean = true;
  public autoplay: boolean = true;
  public pauseOnHover: boolean = true;
  public cellsToShow: number = 3;
  public borderRadius: number = 10;
  public autoplayInterval: number = 4000;
  public transitionDuration: number = 500;
  public width: number = (screen.width | 0) - 550;
  public height: number = window.innerHeight * 0.25;
  public arrowsTheme: any = 'dark';
  public arrowsOutside: boolean = true;
  public transitionTimingFunction: any = 'linear';

  constructor() {}

  ngOnInit(): void {}
}
