import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { ActivatedRoute } from '@angular/router';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              url: [
                {
                  path: 'contact',
                },
              ],
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('title', 'My App');
    fixture.componentRef.setInput('navLinks', [
      { label: 'Home', path: '/' },
      { label: 'About', path: '/about' },
      {
        label: 'Contact',
        path: '/contact',
        items: [
          {
            label: 'Contact Us',
            path: '/contact',
          },
          {
            label: 'Support',
            path: '/support',
          },
        ],
      },
    ]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
