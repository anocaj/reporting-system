import { Component } from '@angular/core';

@Component({
  selector: 'reporting-system-root',
  template: `
  <div class="container mx-auto border-t-2 border-x-2 my-4">
    <reporting-system-reports></reporting-system-reports>
  </div>
  `
})
export class AppComponent {}
