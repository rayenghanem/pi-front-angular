import { Component, Input, OnInit } from '@angular/core';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Post } from '../../models/post.model';
import { User } from '../../models/user.model';
import { Vote } from '../../models/vote.model';
import { VoteType } from '../../models/voteType.enum';
import { AuthService } from '../../services/auth.service';
import { PostService } from '../../services/post.service';
import { VoteService } from '../../services/vote.service';

@Component({
  selector: 'app-vote-button',
  templateUrl: './vote-button.component.html',
  styleUrls: ['./vote-button.component.scss']
})
export class VoteButtonComponent implements OnInit {

  @Input() post: Post;
  votePayload: Vote;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  upvoteColor: string;
  downvoteColor: string;
  isLoggedIn: boolean;
  user = new User();

  constructor(private voteService: VoteService,
    private authService: AuthService,
    private postService: PostService) {
      this.user.id = 1;
      this.user.username = 'kilyan';
      
    this.votePayload = {
      voteId: undefined,
	    user: this.user,
      voteType: undefined,
      postId: undefined
    }
    //this.authService.loggedIn.subscribe((data: boolean) => this.isLoggedIn = data);
  }

  ngOnInit(): void {
    this.updateVoteDetails();
  }

  upvotePost() {
    this.votePayload.voteType = VoteType.UPVOTE;
    this.vote();
    this.downvoteColor = '';
  }

  downvotePost() {
    this.votePayload.voteType = VoteType.DOWNVOTE;
    this.vote();
    this.upvoteColor = '';
  }

  private vote() {
    this.votePayload.postId = this.post.postId;
    this.voteService.vote(this.votePayload,1,this.post.postId).subscribe(() => {
      this.updateVoteDetails();
    }, error => {
      /* this.toastr.error(error.error.message);
      throwError(error); */
    });
  }

  private updateVoteDetails() {
    this.postService.getPostById(this.post.postId).subscribe(post => {
      this.post = post;
    });
  }
}
