import React from 'react'
import Link from 'next/link'
import ServiceCard from './serviceCard'
import { landingServices as services } from '@/constants'

const Services = () => {
  return (
    <section>
      <div>
      <div>
      <h2>Developer Community Services</h2>
      <p>Unleashing the Power of Developers</p>
      </div>
      <Link href="/services">View All Services</Link>
      </div>
      <div>
        { services.map((service) => (
          <ServiceCard
            key={service.description}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  )
}

export default Services