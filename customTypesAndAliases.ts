// My own type with optional property unitPrice
let table: { name: string; unitPrice?: number } = {
    name: "Stół"
};

// discount property doesn't exist so this is an error
// table.discount = 10;

// Aliases
type Product = { name: string; unitPrice?: number };

let table2: Product = { name: "Stół" };
let chair: Product = { name: "Krzesło", unitPrice: 40 };

type DiscountedProduct = Product & { discount: number };

let chairOnSale: DiscountedProduct = {
    name: "Krzesło na sprzedaż",
    unitPrice: 30,
    discount: 5
};

// Function Aliases
type Purchase = (quantity: number) => void;
type Product2 = {
    name: string;
    unitPrice?: number;
    purchase: Purchase;
}

let table3: Product2 = {
    name: "Stół",
    purchase: (quantity) => {
        console.log(`Kupiono ${quantity} stoły`)
    }
};

table3.purchase(4);

// let chair2: Product2 = { name: "Krzesło", unitPrice: 40 };
//
// type DiscountedProduct2 = Product2 & { discount: number };
//
// let chairOnSale2: DiscountedProduct2 = {
//     name: "Krzesło na sprzedaż",
//     unitPrice: 30,
//     discount: 5
// };
