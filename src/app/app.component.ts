import { Component } from '@angular/core';
declare var $Lightning: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  title = 'test-app';

  loutRender() {
    $Lightning.use(
      'c:ltngOutApp', // name of the Lightning app
      function () {
        $Lightning.createComponent(
          'c:CustomRecordEditForm', // top-level component of your app
          {}, // attributes to set on the component when created
          'lightningLocator', // the DOM location to insert the component
          function (cmp) {
            // callback when component is created and active on the page
          }
        );
      }
    );
  }
}
