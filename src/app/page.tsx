

import Hero from './hero'
import Slider from '@/slider'
import Varieties from './varieties'
import Masterpiece from './masterpiece'
import Samples from './samples'
import Testimonial from './testimonial'
import Orderplace from './orderplace'
import Newsletter from './newsletter'
export default function Home() {
  return (
    <div>

      {/* universal margin-x for the whole wesite is 10 */}
    <Hero/><Slider/><Varieties/><Masterpiece/><Samples/><Testimonial/><Orderplace/><Newsletter/>
    </div>
  )
}
