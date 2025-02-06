import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { HeaderComponent } from './header.component';
import { ActivatedRoute } from '@angular/router';

const meta: Meta<HeaderComponent> = {
  component: HeaderComponent,
  title: 'HeaderComponent',
  decorators: [
    moduleMetadata({
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              url: [{ path: '/contact' }],
              data: {},
            },
          },
        },
      ],
    }),
  ],
};
export default meta;
type Story = StoryObj<HeaderComponent>;

export const Primary: Story = {
  args: {
    navLinks: [
      { label: 'Home', url: '/', icon: 'home' },
      { label: 'All Posts', url: '/posts', icon: 'article' },
      {
        label: 'About',
        icon: 'info',
        items: [
          { label: 'Company', url: '/company', icon: 'business' },
          { label: 'Team', url: '/team', icon: 'people' },
        ],
      },
      { label: 'Contact', url: '/contact', icon: 'email' },
    ],
  },
};
