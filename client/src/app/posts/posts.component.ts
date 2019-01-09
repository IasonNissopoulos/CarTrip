import { Component, OnInit } from '@angular/core';

import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts : Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts()
      .subscribe(posts => this.posts = posts);
  }

  add(title: string, text: string): void {
    title = title.trim();
    text = text.trim();
    if (!title || !text) { return; }
    this.postService.addPost({ title, text } as Post)
      .subscribe(post => {
        // If the operation has failed, PostService's handleError()
        // will have given an empty result; so we add to the
        // posts array only if a non-empty result has been produced.
        if (post) {
          this.posts.push(post);
        }
      });
  }

  delete(post: Post): void {
    this.posts = this.posts.filter(h => h !== post);
    this.postService.deletePost(post).subscribe();
  }

}
