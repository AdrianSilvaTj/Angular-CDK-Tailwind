import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { DataSourceProduct } from './data-source';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent {
  //products: Product[] = [];
  dataSource = new DataSourceProduct();
  columns: string[] = ['id', 'title', 'price', 'cover', 'actions'];
  total:any = 0;
  input = new FormControl('', {nonNullable: true});

  constructor(
    private http: HttpClient
  ){}

  ngOnInit(): void {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe(data => {
      console.log(data);
      //this.products = data;
      this.dataSource.init(data);
      this.setTotal();
    });

    // hacemos busqueda por el input
    this.input.valueChanges
    .pipe(debounceTime(300))
    .subscribe(data => {
      this.dataSource.find(data);
    });
  }

  /* Obtiene el total de forma reactiva */
  setTotal(){
    this.dataSource.data.subscribe(products => {
      this.total=products
      .map(product => product.price)
      .reduce((price, total) => price + total, 0);
    });
  }

  update(product: Product) {
    this.dataSource.update(product.id, {price:20});
  }

}
