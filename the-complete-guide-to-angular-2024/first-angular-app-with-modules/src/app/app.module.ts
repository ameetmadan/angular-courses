import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";
import { BrowserModule } from "@angular/platform-browser";
import { CardComponent } from "./shared/card/card.component";
import { AddTaskComponent } from "./tasks/add-task/add-task.component";
import { TaskComponent } from "./tasks/task/task.component";
import { FormsModule } from "@angular/forms";
import { DatePipe } from "@angular/common";

@NgModule({ 
  declarations: [
    AppComponent,
    HeaderComponent, 
    UserComponent,
    CardComponent,
    TasksComponent,
    TaskComponent,
    AddTaskComponent
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule, DatePipe]
})

export class AppModule {}