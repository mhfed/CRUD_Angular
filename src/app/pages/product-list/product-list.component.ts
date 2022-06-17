import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  data: IProduct[] = [];
  constructor(
    private productService: ProductService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.data = data;
    });
  }
  handleRemove(id: any) {
    if (window.confirm('Are you sure you want to remove')) {
      this.productService.removeProduct(id).subscribe((data) => {
        this.toastr.error('delete product successfully');
        this.data = this.data.filter((item) => item.id !== id);
      });
    }
  }
}
