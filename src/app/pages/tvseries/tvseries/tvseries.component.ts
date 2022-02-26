import { Component, OnInit } from '@angular/core';
import { TvSeries } from 'src/app/shared/interfaces/tv-series';
import { TvseriesService } from 'src/app/shared/services/tvseries.service';

@Component({
  selector: 'app-tvseries',
  templateUrl: './tvseries.component.html',
  styleUrls: ['./tvseries.component.scss']
})
export class TvseriesComponent implements OnInit {

  tvseriesList!: TvSeries[];
  constructor(private service: TvseriesService) { }

  ngOnInit(): void {
    this.getAllTvseries();
  }

  getAllTvseries() {
    this.service.getAllTvSeries().subscribe(res => {
      this.tvseriesList = res;
    })
  }

}
