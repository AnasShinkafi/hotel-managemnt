"use client"
import Image from 'next/image'
import React, { FC } from 'react'
import CountUpNumber from '../CountUpNumber/CountUpNumber';

type Props = {
    heading1: React.ReactNode;
    section2: React.ReactNode;
};

const ClientComponent: FC<Props> = props => {
    const { heading1, section2 } = props;

  return (
    <section className="flex px-4 items-center gap-12 container mx-auto">
            {/* Heading */}
            <div className="py-10 h-full">
                {heading1}
                {/* Room Description */}
                <div className="flex justify-between mt-12">
                    <div className="flex gap-3 flex-col items-center justify-center">
                        <p className="text-xs lg:text-xl text-center">Basic Room</p>
                        <CountUpNumber endValue={3000} duration={50} />
                    </div>
                    <div className="flex gap-3 flex-col items-center justify-center">
                        <p className="text-xs lg:text-xl text-center">Luxury Room</p>
                        <CountUpNumber endValue={3000} duration={120} />
                    </div>
                    <div className="flex gap-3 flex-col items-center justify-center">
                        <p className="text-xs lg:text-xl text-center">Suite</p>
                        <CountUpNumber endValue={3000} duration={60} />
                    </div>
                </div>
            </div>
            {/* Images */}
            {section2}
        </section>
  )
}

export default ClientComponent