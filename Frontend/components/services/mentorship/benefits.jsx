import BenefitCard from '@/components/services/mentorship/benefitCard'
import { mentorshipBenefits } from '@/constants'
import React from 'react'

const Benefits = () => {
  return (
    <div className="w-full px-4 md:px-8 2xl:px-auto grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10 content-center mt-8 py-4">
        {mentorshipBenefits.map((benefit, index) => (
            <BenefitCard key={index} icon={benefit.icon} heading={benefit.heading} text={benefit.text} />
        ))}
    </div>
  )
}

export default Benefits