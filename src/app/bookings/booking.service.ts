import {Injectable} from '@angular/core';
import { Booking } from './booking.model';


@Injectable({providedIn: 'root'})
export class BookingService {
    private _bookings: Booking[] = [
        {
            id: 'b1',
            placeId: 'p1',
            placeTitle: 'Presidential Suites Punta Cana',
            userId: 'u1',
            guestNumber: 37
        }
    ];

    get bookings() {
        return [...this._bookings];
    }
}
