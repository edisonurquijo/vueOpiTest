import type { Product } from '../types/product';
export const ProductList = (): Product[] => {
    return [
            {
                id: 1000,
                name: 'Bamboo Watch',
                description: 'Elevate your everyday style with a timepiece that feels as good as it looks. Handcrafted from 100% natural, sustainable bamboo, this watch is more than just an accessory—it’s a statement of values. Because no two pieces of bamboo are identical, the unique grain on your watch face ensures that your timepiece is truly one-of-a-kind.',
                image: 'bamboo-watch.jpg',
                price: 65,
                category: 'Accessories'
            },
            {
                id: 1001,
                name: 'Black Watch',
                description: 'Inspired by the "Government Sett" of the legendary Royal Highland Regiment, the Black Watch Edition blends military history with modern horology. Featuring the deep forest green and midnight navy tones of the original 1725 tartan, this watch is designed for those who value heritage, loyalty, and rugged sophistication.',
                image: 'black-watch.jpg',
                price: 72,
                category: 'Accessories'
            },
            {
                id: 1002,
                name: 'Blue Band',
                description: 'Built to withstand the elements, the Deep Ocean Sport Band is crafted from high-performance fluoroelastomer that is both incredibly durable and surprisingly soft. The rich, navy hue provides a professional look that transitions seamlessly from your morning workout to the office.',
                image: 'blue-band.jpg',
                price: 79,
                category: 'Fitness'
            },
            {
                id: 1003,
                name: 'Blue T-Shirt',
                description: 'Product Description',
                image: 'blue-t-shirt.jpg',
                price: 29,
                category: 'Clothing'
            },
            {
                id: 1004,
                name: 'Bracelet',
                description: 'Product Description',
                image: 'bracelet.jpg',
                price: 15,
                category: 'Accessories'
            },
            {
                id: 1005,
                name: 'Brown Purse',
                description: 'Product Description',
                image: 'brown-purse.jpg',
                price: 120,
                category: 'Accessories'
            }
        ]
}