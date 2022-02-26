import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Song } from 'src/app/shared/interfaces/song';
import { MusicService } from 'src/app/shared/services/music.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

  songList!: Song[];

  constructor(private router: Router, private service: MusicService) { }

  ngOnInit(): void {
    this.getAllSongs();
  }

  getAllSongs() {
    this.service.getAllSongs().subscribe(res => {
      this.songList = res;
    })
  }

}
