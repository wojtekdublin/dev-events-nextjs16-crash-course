'use client'

import Image from 'next/image'
import posthog from 'posthog-js'

function ExploreBtn() {
  const handleClick = () => {
    posthog.capture('explore_events_clicked', {
      button_location: 'hero_section',
      cta_text: 'Explore Events',
    });
  };

  return (
   <button type="button" id="explore-btn" className="mx-auto mt-7" onClick={handleClick}>
    <a href="#events">
        Explore Events
        <Image src="/icons/arrow-down.svg" alt="arrow-down" width={24} height={24} />
        </a>
   </button>
  )
}

export default ExploreBtn