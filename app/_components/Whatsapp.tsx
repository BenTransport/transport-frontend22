"use client"

import Image from 'next/image'
import React from 'react'

function Whatsapp() {
    const onWhatsAppCLick = () => {
        const whatsappMessage = `Hello, I'm interested in purchasing some items from your site.`;
        const whatsappURL = `https://api.whatsapp.com/send?phone=+903&text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappURL, '_blank');
    }
    return (
        <div className='fixed bottom-5 right-5 z-50'>

            <Image
                onClick={onWhatsAppCLick}
                src='/Animation - 1722963379264.gif'
                height={100}
                className='h-20 w-20 md:h-28 md:w-28 cursor-pointer'
                width={100}
                alt='whatsapp'
            />
        </div>
    )
}

export default Whatsapp