import React from 'react'
import { useRouter } from 'next/router'
const ClientProyectId = () => {
    const router = useRouter()
    console.log(router.query);
    return (
        <div>
            <h1>Client Proyect ID</h1>
        </div>
    )
}

export default ClientProyectId
