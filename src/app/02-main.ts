import { ProductMemoryService } from "./services/product-memory.service";

const productService = new ProductMemoryService();

productService.create({
    title: 'p1',
    price: 100,
    description: 'description',
    categoryId: 12,
    images: ['a', 'b']
});

const products = productService.getAll();
const productId = products[0].id;

productService.updateProduct(productId, {
    title: 'new name'
});

const rta = productService.findOne(productId);
console.log('updated product: ', rta);