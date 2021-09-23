import React, { useState, useEffect } from 'react';
import { listReservations } from '../utils/api';
import Reservation from './Reservation';

export default function ReservationList() {
    const [reservations, setReservations] = useState([]);
    const [error, setError] = useState(undefined);
    useEffect(()=>{
        const abortController = new AbortController();

    listReservations(abortController.signal).then(setReservations).catch(setError);

    return () => abortController.abort();
    },[setReservations]);
    if (error) {
        return <div>NO RESERVATIONS HERE</div>
    }

    const listForReservations = reservations.map()
    return (
        <div>
            
        </div>
    )
}
