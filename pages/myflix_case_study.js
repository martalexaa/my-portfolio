import React from 'react';
import Link from 'next/link'

const MyflixCase = () => {
    return (
        <>
            <div className="text-2xl text-center pt-40">
                <h3 className="text-red-500">Coming soon</h3>
                <br></br>
                <Link href="/" className="text-center cursor-pointer border-2 border-solid border-black p-1"><button>GO BACK</button></Link>
            </div>
        </>
    )
}

export default MyflixCase;