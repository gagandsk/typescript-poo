import axios from 'axios';
import { Product } from './models/product.model';

let anyVar: any = 12;
let boolVar: boolean = anyVar;

(async () =>{

    async function getProductsAsync() {
        //hago un 'cast' para que 'rta.data' sea de tipo 'Product[]
        //const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
        //const data = rta.data as Product[]; 

        const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
        return data;
    }
   
    const products = await getProductsAsync();
    console.log(products.map(item => `${item.id} - ${item.title}`));
})();