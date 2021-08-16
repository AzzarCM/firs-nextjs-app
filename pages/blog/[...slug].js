import React from 'react'
import { useRouter } from 'next/router'
const SlugPage = () => {
    
    const router = useRouter()
    console.log(router.query);

    return (
        <div>
            <h1>Slug Page</h1>
        </div>
    )
}

export default SlugPage
