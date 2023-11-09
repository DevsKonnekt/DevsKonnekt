import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const BenefitCard = ({icon, text}) => {
    const IconComponent = icon;
  return (
    <Card className="bg-secondary/50 rounded-lg shadow-md shadow-primary w-full sm:w-[275px] h-auto sm:h-[375px] flex flex-col justify-between items-center">
        <CardHeader className="w-full flex items-center justify-center">
            <span className="p-4 bg-background rounded-xl text-4xl text-primary"><IconComponent/></span>
        </CardHeader>
        <CardContent className="text-center text-background">
            {text}
        </CardContent>
        <CardFooter>
            <Link href="/#" className='text-primary hover:text-secondary flex gap-2 items-center transition-all duration-500'>
                Find Out More
                <FaArrowRight className='text-xl'/>
            </Link>
        </CardFooter>
    </Card>
  )
}

export default BenefitCard