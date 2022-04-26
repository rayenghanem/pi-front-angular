import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForumRoutingModule } from './forum-routing.module';
import { PostListComponent } from './post-list/post-list.component';
import { AppModule } from 'src/app/app.module';
import { HeaderStyleComponent } from '../../common/header-style/header-style.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticlePreviewComponent } from './post/article-preview/article-preview.component';
import { VoteButtonComponent } from './post/vote-button/vote-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditorModule } from '@tinymce/tinymce-angular';
import { CreatePostComponent } from './create-post/create-post.component';

@NgModule({
  declarations: [
    PostListComponent,
    HeaderStyleComponent,
    ArticlePreviewComponent,
    VoteButtonComponent,
    CreatePostComponent
  ],
  imports: [
    CommonModule,
    ForumRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    EditorModule,
  ],
  exports:[HeaderStyleComponent],
})
export class ForumModule { }
