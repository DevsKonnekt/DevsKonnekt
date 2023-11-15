import Benefits from '@/components/services/connect/benefits'
import CTA from '@/components/services/connect/cta'
import Description from '@/components/services/connect/description'
import Hero from '@/components/services/connect/hero'
import Interlude from '@/components/services/connect/interlude'

const Connect = () => {
  return (
    <div className='max-w-7xl mx-auto'>
        <Hero />
        <Benefits />
        <Interlude />
        <Description />
        <CTA />
    </div>
  )
}

export default Connect