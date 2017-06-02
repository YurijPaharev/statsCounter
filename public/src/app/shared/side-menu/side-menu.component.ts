import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  private menuContent: any;

  constructor(private router: Router) {
    this.menuContent = [
      {
        title: 'Chapter1',
        content: 'qwerqwerqwerqwerqwer'
      },
      {
        title: 'Chapter2',
        content: 'asdfasdfasdfasdf'
      },
      {
        title: 'Chapter3',
        content: 'zxcvzxcvzxcvzxcvxzcv'
      }
    ];
  }

  onSelect(c: any): void {
    this.router.navigate(['/content']);
  }

}
