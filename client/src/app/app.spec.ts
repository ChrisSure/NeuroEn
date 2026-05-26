import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  let component: App;
  let fixture: ComponentFixture<App>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates the root component', () => {
    expect(component).toBeTruthy();
  });

  it('renders the welcome heading and shared button', () => {
    const host: HTMLElement = fixture.nativeElement;

    expect(host.querySelector('h1')?.textContent).toContain(
      'Welcome to client!',
    );
    expect(host.querySelector('lib-button')).toBeTruthy();
  });
});
