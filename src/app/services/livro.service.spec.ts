import { TestBed } from '@angular/core/testing';
import { LivroService } from './livro.service';

describe('LivroService', () => {
  let service: LivroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivroService);
  })

  it('should create an instance', () => {
    expect(new LivroService()).toBeTruthy();
  });
});
