import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogComponent } from './blog/blog.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ArchiveListComponent } from './archive-list/archive-list.component';
import { HttpModule } from '@angular/http';
import { BlogsService } from './blogs.service';

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    BlogComponent,
    GalleryComponent,
    ArchiveListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [BlogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
