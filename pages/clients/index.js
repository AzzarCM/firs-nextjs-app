import React from 'react'
import Link from 'next/link'
const ClientPage = () => {
    return (
        <div>
            <h1>Client Page</h1>
            <ul>
                <li>
                    <Link href="/clients/max">Maximiliano</Link>
                </li>
                <li>
                    <Link href="/clients/manu">Manuel</Link>
                </li>
            </ul>
        </div>
    )
}

export default ClientPage
