import { Category } from './category';
import { Point } from './point';

export interface Business {
    rating: number;
    price: string;
    phone: string;
    id: string;
    alias: string;
    is_closed: boolean;
    categories: Category[];
    review_count: number;
    name: string;
    url: string;
    coordinates: Point;
    image_url: string;
    location: Location;
    distance: number;
    transactions: string[];
}
