import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ProductsService } from '../products.mysql.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-mysql-add.component.html',
  styleUrls: ['./product-mysql-add.component.scss']
})
export class ProductMysqlAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ps: ProductsService) { 
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      ProductName: ['', Validators.required ],
      ProductDescription: ['', Validators.required ],
      ProductPrice: ['', Validators.compose([ Validators.required, Validators.pattern("^[0-9]*$")]) ]
    });
  }

  addProduct(ProductName, ProductDescription, ProductPrice) {
    this.ps.addProduct(ProductName, ProductDescription, ProductPrice);
  }

  ngOnInit() {
  }

}
