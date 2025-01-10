import axios from 'axios';
import { Product } from './models/product.model';

let anyVar: any = 12;
let boolVar: boolean = anyVar;

(async () =>{

    //Forma 1:
    // async function getProductsAsync(): Promise<Product[]> {
    //   const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
    //   return data;
    // }


    //Forma 2:
    // async function getProductsAsync() {
    //   const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
    //   const data = rta.data as Product[];
    //   return data;
    // }

    //Forma 3:
    async function getProductsAsync() {
        const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
        return data;
    }
   
    const products = await getProductsAsync();
    console.log(products.map(item => `${item.id} - ${item.title}`));
})();