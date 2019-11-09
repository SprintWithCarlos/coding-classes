import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./components/nav/nav.component";
import { PostsListComponent } from "./views/posts-list/posts-list.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AboutComponent } from "./views/about/about.component";
import { PostComponent } from './components/post/post.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PostsListComponent,
    FooterComponent,
    AboutComponent,
    PostComponent,
    UsersListComponent,
    UserComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
