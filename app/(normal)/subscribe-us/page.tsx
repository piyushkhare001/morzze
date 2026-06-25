import { SubscribeForm } from '@/components/SubscribeForm'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className=" bg-primary gap-12 pb-12">
            <Image
                src={"https://ik.imagekit.io/zwos7q4gyo/subs-us-bg.png"}
                height={800}
                width={800}
                className=' w-full h-full'
                alt='subs-image'
            />
            <div className="h-12"></div>
            <div className=" flex items-center pb-12 flex-col gap-4">
                <p className=" text-white text-3xl font-semibold">Stay Updated</p>
                <p className=" text-white">Join for the latest news and product updates.
                </p>
            </div>
            <SubscribeForm />
        </div>
    )
}

export default page