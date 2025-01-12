import { UpdateProductDto } from "../dtos/product.dto";
import { Category } from "../models/category.model";
import { Product } from "../models/product.model";

import axios from "axios";

export class BaseHttpService<TypeClass> {
    //data: TypeClass[] = [];

    constructor(
        protected url: string
    ){}

    async getAll() {
        const { data }  = await axios.get<TypeClass[]>(this.url);
        return data;
    }

    async updateProduct<ID, DTO>(id: ID, changes: DTO) {
        const { data } = await axios.put(`${this.url}/${id}`, changes);
        return data;
    }
}

(async () => {
    const url1 = 'https://api.escuelajs.co/api/v1/products';
    const productsService = new BaseHttpService<Product>(url1);
    const rta = await productsService.getAll();
    console.log('products:',rta.length);
    productsService.updateProduct<Product['id'], UpdateProductDto>(1, {
        title: 'generic in methods , product example'
    });

    const url2 = 'https://api.escuelajs.co/api/v1/categories';
    const categoryService = new BaseHttpService<Category>(url2);
    const rta2 = await categoryService.getAll();
    console.log('categories:',rta2.length);
})();