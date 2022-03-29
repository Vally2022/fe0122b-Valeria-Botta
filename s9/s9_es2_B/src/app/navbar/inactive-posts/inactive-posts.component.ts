import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { recupera } from '../posts.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss']
})
export class InactivePostsComponent implements OnInit {
  posts! : Post[];

  constructor() { 
    recupera().then((posts) => {
      this.posts = posts;
    })
  }

  ngOnInit(): void {
  }

}
