import React from 'react'
import nextIcon from '../public/assets/next.svg';
import Image from 'next/image'
import { useRouter } from 'next/router';
export default function Stepper() {
    const router = useRouter();
    return (
        <div className='stepper-wrapper container'>
            <buton className='next_btn' onClick={() => router.push('/cart')}>
                NEXT
                {/* <span className='me-1'>Next</span> */}
                {/* <Image src={nextIcon} height='20' width='30'></Image> */}
            </buton>
        </div>
    )
}
