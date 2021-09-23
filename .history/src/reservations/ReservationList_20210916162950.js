import React, { useState, useEffect } from 'react';
import { listReservations } from '../utils/api';
import Reservation from './Reservation';

export default function ReservationList() {
    const [reservations, setReservations] = useState([]);
    uses
    useEffect(()=>{
        const abortController = new AbortController();

    listReservations(abortController.signal).then(setReservations).catch(setError);

    return () => abortController.abort();
    })

    return (
        <div>
            
        </div>
    )
}
