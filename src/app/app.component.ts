import { Component } from '@angular/core';

@Component({
  selector: 'ks-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Kitchen Story';

  activeTab = 'search';

  search(activeTab: string){
    this.activeTab = activeTab;
  }

  result(activeTab: string){
    this.activeTab = activeTab;
  }
}
