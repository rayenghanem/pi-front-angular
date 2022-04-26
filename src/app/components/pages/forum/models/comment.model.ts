import { Post } from "./post.model";
import { User } from "./user.model";


export class Comment {
    comId?: number;
    //@ts-ignore
    text : string;
    comDate : Date;
    //@ts-ignore
    user : User;
    //@ts-ignore
    post : Post;
    likes? : Number;
    dateSinceCommented? : string
}