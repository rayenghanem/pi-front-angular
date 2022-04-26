import { Comment } from "./comment.model";
import { User } from "./user.model";

export class Post {
    postId?: number;
    title : string;
    description? : string;
    createDate : Date;
    attachement? : string;
    user : User;
    comments : Comment[];
    voteCount? : Number;
    subject? : string;
    upVote? : boolean;
    downVote? : boolean
}