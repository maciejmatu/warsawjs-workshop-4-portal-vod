import { Component, OnInit } from '@angular/core';
import { MediaService } from '../services/index';
import { CATEGORY, VIDEO } from '../models/index';

@Component({
  selector: 'app-video-add',
  templateUrl: './video-add.component.html',
  styleUrls: ['./video-add.component.css']
})
export class VideoAddComponent implements OnInit {

  private categories: CATEGORY[];
  private video: VIDEO[];

  constructor(private mediaService: MediaService) { }

  ngOnInit() {
    this.getCategories();
  }

  message = '';

  private addFilm(e){
    let newVideo = new VIDEO(
      e['name'].value,
      e['description'].value,
      parseInt(e['category'].value),
      (e['isFree'].value === 'true'),
      0,
      e['youtubeId'].value,
      e['image'].value);

    this.mediaService.setVideos(newVideo);
    e.reset();
    this.message = "Wideo zostało dodane.";

    return false;
  }

  private getCategories(){
    this.categories = this.mediaService.Categories();
  }

}
