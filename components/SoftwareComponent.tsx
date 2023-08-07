import React from 'react'
import { softwareCardComponent } from '@/type'
import SoftwareCard from './softwareCard'
import { softwareList } from '@/constants'
import { DesignLinks } from '@/constants'

const SoftwareComponent = () => {
    return (
        <>
            <section className='flex flex-col w-full pt-20 pb-10 px-10 items-start gap-10 flex-wrap'>
                <p className='text-[30px] font-bold'>Tailor-Made Software for Your New Laptop</p>

                <div className='flex w-full gap-6 flex-nowrap overflow-x-scroll md:overflow-none md:flex-wrap'>
                    {
                        softwareList.map((software) => {
                            return [
                                <SoftwareCard key={software.title} title={software.title} link={software.link} />
                            ]
                        })
                    }
                </div>
            </section>

            <section className="flex flex-col py-10 px-10 items-start">
                <h2 className='text-[30px] font-bold mb-[30px]'>Design Links</h2>
                <div className=' w-full flex flex-col md:flex-row gap-6 flex-wrap'>
                    {
                        DesignLinks.map((link) => {
                            return (
                                <SoftwareCard key={link.title} title={link.title} link={link.link} />
                            )
                        })
                    }
                </div>
            </section>
        </>

    )
}

export default SoftwareComponent 