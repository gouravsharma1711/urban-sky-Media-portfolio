import React from 'react'

import { TextScroll } from "@/components/ui/text-scroll"

function Scoller() {
    return (
        <div className='h-40 w-full border border-red-600 '>
            <TextScroll
                className="font-display text-center text-4xl font-semibold tracking-tighter  text-black md:text-7xl md:leading-[5rem]"

                text="SAMSUNG BOAT MIVI ONEPLUS STARBUGS KFC"

                default_velocity={2}
            />
        </div>
    )
}

export default Scoller;
