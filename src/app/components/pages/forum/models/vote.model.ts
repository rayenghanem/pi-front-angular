import { Post } from "./post.model";
import { User } from "./user.model";

export class Vote {
    voteId: number;
	voteType:any ;
	postId:number;
	user:User;
}