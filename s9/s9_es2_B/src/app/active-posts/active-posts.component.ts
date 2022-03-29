import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { recupera } from '../posts.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss']
})
export class ActivePostsComponent implements OnInit {
posts! : Post[];

  constructor() { 
    recupera().then((posts) => {
      this.posts = posts;
    })
  }

  ngOnInit(): void {
  }

}
