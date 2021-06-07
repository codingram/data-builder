import { Component } from '@angular/core';
declare const bootstrap: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'data-builder';

  triggerModal() {
    let myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
    myModal.show();
  }
}
