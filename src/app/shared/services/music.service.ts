import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import myMediaApp_url from '../constants/url/url';
import { Song } from '../interfaces/song';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private http: HttpClient) { }


    addSong(song: Song) {
      this.http.post(myMediaApp_url.music, song);
    }

    getAllSongs() {
      return this.http.get<Song[]>(myMediaApp_url.music);
    }
}
