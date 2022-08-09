import i1 from "../img/i1.png";
import f1 from "../img/f1.png";
import c3 from "../img/c3.png";
import fi1 from "../img/fi1.png";

export const heroData = [
    { id: 1, name: 'Icecream', desp: 'Chocolate & Vanila', price: '6.99', imageSrc: i1 },
    { id: 2, name: 'Strawberriees', desp: 'Fresh Strawberries', price: '15.99', imageSrc: f1 },
    { id: 3, name: 'Chicken Kabab', desp: 'Mixed Kabab Plate', price: '10.99', imageSrc: c3 },
    { id: 4, name: 'Fish Kabab', desp: 'Mixed Fieh Kabab', price: '8.99', imageSrc: fi1 },

]


export const categories = [
    {id:1, name: "Chicken", urlParamName: "chicken",},
    {id:2, name: "Cuury", urlParamName: "curry",},
    {id:3, name: "Rice", urlParamName: "rice",},
    {id:4, name: "Fish", urlParamName: "fish",},
    {id:5, name: "Fruits", urlParamName: "fruits",},
    {id:6, name: "Icecream", urlParamName: "icecream",},
    {id:7, name: "Soft Drinks", urlParamName: "drinks",},

]
export default categories;


