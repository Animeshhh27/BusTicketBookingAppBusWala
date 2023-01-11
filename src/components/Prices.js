import React from 'react'
import { useLocation, useParams } from 'react-router'

export default function Prices(props) {
    const location = useLocation()
    return (
        <div>
            <h2>Enter number of tickets</h2>
            {/* {location.state.prices} */}
            {location.state.price}<br></br>
            {location.state.busname}<br></br>
            {location.state.bustype}<br></br>
        </div>
    )
}
