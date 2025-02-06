import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

export type NavLink = {
  label: string;
  icon?: string;
} & (
  | {
      url: string;
      items?: never;
    }
  | {
      url?: never;
      items: Array<Omit<NavLink, 'items'> & { url: string }>;
    }
);

@Component({
  selector: 'common-ui-header',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public title = input.required<string>();
  public navLinks = input.required<NavLink[]>();
}
