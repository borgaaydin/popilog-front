import { Component, OnInit } from '@angular/core';
import { Post } from '../../classes/post';
import { PostService } from '../../services/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getCategoryById(2);
  }

  private getCategoryById(cat_id: number) {
    this.postService.getCategory(cat_id).subscribe(posts => { this.posts = posts; });
    console.log(this.posts);
  }

}
