// Aggregate classes with direct dependency

export class Product {
  constructor(public name: string, public price: number) {}
}

export class ShoppingCart {
  private readonly products: Product[] = [];

  public addProducts(...products: Product[]): void {
    for (const product of products) {
      this.products.push(product);
    }
  }

  public get amount(): number {
    return this.products.length;
  }

  public get totalPrice(): number {
    return Number(
      this.products
        .reduce((prevPrice, product) => (prevPrice += product.price), 0)
        .toFixed(2)
    );
  }
}

const product1 = new Product('T-shirt', 49.9);
const product2 = new Product('Cup', 30.5);
const product3 = new Product('Pants', 102.8);

const shoppingCart = new ShoppingCart();
shoppingCart.addProducts(product1, product2, product3);

console.log(shoppingCart);
console.log(shoppingCart.amount);
console.log(shoppingCart.totalPrice);
