import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardPersons } from './card-persons';

describe('CardPersons', () => {
  let component: CardPersons;
  let fixture: ComponentFixture<CardPersons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPersons],
    }).compileComponents();

    fixture = TestBed.createComponent(CardPersons);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
