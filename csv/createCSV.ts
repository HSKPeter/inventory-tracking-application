// [ { ID: 2, name: 'yyy', stock: 129, price: '10' } ]
import IInventoryItem from "../inventory/IInventoryItem";

export default function createCSV(inventoryItems: IInventoryItem[]): string{
    let resultString = "name,stock,price";
    for (const item of inventoryItems){
        resultString += "\n";
        resultString += `${item.name},${item.stock},${item.price}`;
    }
    return resultString;
}