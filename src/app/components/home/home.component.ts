import { Component, OnInit } from '@angular/core';
import { Post } from '../../classes/post';
import { PostService } from '../../services/index';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];
  current_category = 1;
  click = [];

  constructor(private postService: PostService,
              private route: ActivatedRoute,
              private router: Router) { }

  private static categoryTranslator(cat_name: string) {
    switch (cat_name) {
      case 'art':
        return 1;
      case 'business':
        return 2;
      case 'education':
        return 3;
      case 'lifestyle':
        return 4;
      case 'politics':
        return 5;
      case 'science':
        return 6;
      case 'sports':
        return 7;
      case 'tech':
        return 8;
      default:
        return null;
    }
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.chooseCategory(params['cat_name']);
    });
  }

  private chooseCategory(cat_name: string) {
    if (!cat_name) {
      this.current_category = 1;
      this.router.navigateByUrl('/art');
    } else {
      this.current_category = HomeComponent.categoryTranslator(cat_name);
    }
    this.getCategoryById(this.current_category);
  }

  private getCategoryById(cat_id: number) {
    this.postService.getCategory(cat_id).subscribe(posts => { this.posts = posts; });
  }

  private sendClickCount(item_id: number) {
    console.log(item_id);
    this.postService.getClick(item_id).subscribe(click => { this.click = click; });
  }

}
