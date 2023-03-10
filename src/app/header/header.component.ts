import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public open = false;

  public onClickedOutside(): void {
    if (this.open) {
      this.open = false;
    }
  }
}
