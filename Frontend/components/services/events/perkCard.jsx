import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

const PerkCard = ({image, heading, text}) => {
  return (
    <Card className="w-full min-w-[300px] sm:max-w-[450px] bg-background rounded-xl shadow-sm shadow-secondary p-0">
        <CardHeader className="w-full">
        <Image
            src={image?.src}
            alt={image?.alt}
            width={1920}
            height={1080}
            className="object-cover w-full h-full rounded-[20px] md:rounded-[40px]"
        />
        </CardHeader>
        <CardContent className="text-start text-primary">
            <h3 className="text-2xl font-semibold mb-4">{heading}</h3>
            <p>{text}</p>
        </CardContent>
    </Card>
  )
}

export default PerkCard