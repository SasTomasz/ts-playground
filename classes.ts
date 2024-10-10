class Product {
    constructor(public name: string, public unitPrice: number) {
        this.name = name;
        this.unitPrice = unitPrice;
    }
    getDiscountedPrice(discount: number): number {
        return this.unitPrice - discount;
    }
}

const table = new Product("Stół", 20);
console.log(`Kupiono stół za ${table.getDiscountedPrice(5)} zł`);
