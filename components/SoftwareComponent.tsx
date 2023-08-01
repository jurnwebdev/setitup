import React from 'react'
import { softwareCardComponent } from '@/type'
import SoftwareCard from './softwareCard'
import { softwareList } from '@/constants'




const SoftwareComponent = () => {
    return (
        <section className='flex flex-col w-full py-20 px-10 items-center gap-10 flex-wrap'>
            <h4 className='text-center md:w-[650px] text-[23px] font-light'>Discover and download all the essential software you need to kickstart your laptop experience! Get started hassle-free with our curated collection. Your perfect software awaits!</h4>

            <div className='flex gap-10 flex-wrap'>
                {
                    softwareList.map((software) => {
                        return [
                            <SoftwareCard key={software.title} title={software.title} link={software.link} />
                        ]
                    })
                }
            </div>


        </section>
    )
}

export default SoftwareComponent