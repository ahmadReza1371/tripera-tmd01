import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Itour } from '../Interfaces/itour'
import { TourDetailService } from './tour-detail.service'
@Component({
  selector: 'app-tour-detail',
  templateUrl: './tour-detail.component.html',
  styleUrls: ['./tour-detail.component.css'],
  providers: [TourDetailService],
})
export class TourDetailComponent implements OnInit {
  tour: Itour;
  constructor(private route: ActivatedRoute, private service: TourDetailService) { }

  ngOnInit() {
    this.getTourDetail();
  }
  getTourDetail() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getTourDetail(id).subscribe(p => {
    
     this.tour = p;
      console.log(this.tour);
    });
    // this.route.params.subscribe(params => {
    //   console.log(params);
    // })

    // const title = +this.route.snapshot.paramMap.get('title');
    ///./   alert(id);

  }
}
