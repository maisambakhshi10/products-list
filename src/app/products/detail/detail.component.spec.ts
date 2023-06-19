import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailComponent } from './detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductService } from '../../services/product.service';
import { of } from 'rxjs';
import { Product } from '../../services/product.model';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;
  let productService: ProductService;
  let router: Router;

  const mockProduct: Product = {
    id: 1,
    name: 'Test Product',
    description: 'This is a test product',
    price: 10
  };

  beforeEach(async () => {
    const productServiceMock = jasmine.createSpyObj('ProductService', ['getProductById']);

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [DetailComponent],
      providers: [
        { provide: ActivatedRoute, useValue: { paramMap: of({ get: () => '1' }) } },
        { provide: Router, useValue: jasmine.createSpyObj('Router', ['navigate']) },
        ProductService
      ]
    }).compileComponents();

    productService = TestBed.inject(ProductService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
  });


  it('should navigate back to the product list when "goBack" method is called', () => {
    component.goBack();

    expect(router.navigate).toHaveBeenCalledWith(['/']);
  });
});
