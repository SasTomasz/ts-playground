/// <reference no-default-lib="true"/>

// Interfaces
interface Purchase {(quantity: number): void}

interface Product {
    name: string;
    unitPrice?: number;
    purchase: Purchase;
}

interface DiscountedProduct extends Product { discount: number }

let chairOnSale: DiscountedProduct = {
    name: "Krzesło na sprzedaż",
    unitPrice: 30,
    discount: 5,
    purchase: (quantity: number) => {
        console.log(`Sold ${quantity} chairs with discount.`)
    }
};

chairOnSale.purchase(2);



let table: Product = {
    name: "Stół",
    purchase: (quantity: number) => {
        console.log(`Kupiono ${quantity} stoły`)
    }
};

table.purchase(4);