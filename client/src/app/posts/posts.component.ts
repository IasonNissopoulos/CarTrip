import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, ParamMap } from '@angular/router';


import 'rxjs/add/operator/switchMap';

import 'rxjs/add/operator/do';


import { Post } from '../post';

import { PostService } from '../post.service';


import { AuthService } from '../auth.service';


@Component({

  selector: 'app-posts',

  templateUrl: './posts.component.html',

  styleUrls: ['./posts.component.css'],

})

export class PostsComponent implements OnInit {


  posts: Post[];


  post: Post;


  constructor(

    private route: ActivatedRoute,

    private postService: PostService,

    private auth: AuthService

  ) { }


  ngOnInit() {

    this.route.paramMap

      .switchMap((params: ParamMap) => {

        return this.postService.getPosts(+params.get('id'))

      }).subscribe(posts => this.posts = posts);

  }


  newPost() : Post {

    var post = new Post();

    post.text = '';

    return post;

  }


  onSubmit() : void {

    this.postService.addPost(this.post)

      .subscribe(post => {

        this.posts.unshift(post);

        this.post = this.newPost();

      });

  }


}
