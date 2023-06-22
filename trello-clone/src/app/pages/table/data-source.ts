import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable } from "rxjs";
import { Product } from "src/app/models/product.model";

export class DataSourceProduct extends DataSource<Product>{

  data = new BehaviorSubject<Product[]>([]);
  originalData : Product[] = [];

  connect(): Observable<Product[]>{
    // retornamos un Observable
    return this.data;
  }

  init(products: Product[]): void{
    this.originalData = products;
    this.data.next(products);
  }

  update(id: Product['id'], changes: Partial<Product>){
    const products = this.data.getValue();
    const productIndex = products.findIndex(prod => prod.id === id);
    // findIndex retorna -1 cuando no consigue un elemento
    if (productIndex !== -1){
      products[productIndex] = {
        ...products[productIndex],
        ...changes,
      }
      this.data.next(products);
    }
  }

  find(query: string){
    // hacemos la busqueda en un array auxiliar que hemos creado con la información original,
    // buscamos por todos los campos
    const newProducts = this.originalData.filter(item => {
      return item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.id.toString() === query ||
      item.price.toString() === query
    });
    this.data.next(newProducts);
  }

  disconnect() {

  }

}
