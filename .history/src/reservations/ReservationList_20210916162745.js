import React, { useState, useEffect } from 'react';
import { listReservations } from '../utils/api';
import Reservation from './Reservation';

export default function ReservationList() {
    const [reservations, setReservations] = useState([]);
    useEffect(()=>{
        const abortController = new AbortController();

    listDecks(abortController.signal).then(setDecks).catch(setError);

    return () => abortController.abort();
    })

    return (
        <div>
            
        </div>
    )
}
