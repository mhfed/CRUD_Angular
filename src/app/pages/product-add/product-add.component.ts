import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss'],
})
export class ProductAddComponent implements OnInit {
  myForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    image: ['', Validators.required],
    price: ['', Validators.required],
    desc: ['', Validators.required],
  });
  validation_messages = {
    name: [
      { type: 'required', message: 'Field is required' },
      { type: 'minlength', message: 'Minlength is 5 characters' },
    ],
    image: [{ type: 'required', message: 'Field is required' }],
    description: [{ type: 'required', message: 'Field is required' }],
  };

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}
  onSubmit() {
    this.productService.addProduct({ ...this.myForm.value }).subscribe(() => {
      this.toastr.success('Add Product successfully');
      this.router.navigateByUrl('/product');
    });
  }
}
