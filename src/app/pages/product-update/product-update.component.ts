import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss'],
})
export class ProductUpdateComponent implements OnInit {
  myForm = this.formBuilder.group({
    id: null,
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
    private ActivatedRoute: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    const id = this.ActivatedRoute.snapshot.paramMap.get('id');
    this.productService.getProduct(id).subscribe((data: any) => {
      this.myForm.patchValue(data);
      console.log(data);
    });
  }
  onSubmit(): void {
    this.productService.updateProduct(this.myForm.value).subscribe(() => {
      this.toastr.success('Updated Successfully');
      this.router.navigateByUrl('/product');
    });
  }
}
