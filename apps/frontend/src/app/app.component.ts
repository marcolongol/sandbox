import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent, NavLink } from '@marcolongo.cloud/common-ui';

@Component({
  imports: [RouterModule, HeaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public navLinks: NavLink[] = [
    {
      label: 'Home',
      url: '/home',
      icon: 'home',
    },
    {
      label: 'About',
      icon: 'article',
      items: [
        {
          label: 'Me',
          url: '/about/me',
          icon: 'person',
        },
        {
          label: 'Company',
          url: '/about/company',
          icon: 'business',
        },
      ],
    },
    {
      label: 'Contact',
      icon: 'email',
      url: '/contact',
    },
  ];
}
