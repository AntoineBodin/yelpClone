import { Business } from './business';
import { Region } from './region';

export interface CustomResponse {
    total: number;
    businesses : Business[];
    region: Region;
}
