import { ProductHttpService } from "./services/product-http-service";

(async () => {
    const productService = new ProductHttpService();
    console.log('---'.repeat(10));
    console.log('getAll');
    const products = await productService.getAll();
    console.log(products.length);
    console.log(products.map(item => item.price));

    console.log('---'.repeat(10));
    console.log('update');
    const productId = products[0].id;
    await productService.updateProduct(productId, {
        price: 3000,
        title: 'new title 1111',
        description: 'new description........'
    });

    console.log('---'.repeat(10));
    console.log('findOne');
    const new_product = await productService.findOne(productId);
    console.log(new_product);
})();
