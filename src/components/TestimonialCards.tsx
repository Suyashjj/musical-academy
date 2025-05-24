'use client';

import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { GridBackground } from './ui/GridBackground';  

const musicSchoolTestimonials = [
  {
    quote:
      'Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!',
    name: 'Alex Johnson',
    title: 'Guitar Student',
  },
  {
    quote:
      "The community and support at this school are unmatched. I've grown not just as a pianist, but also as a performer, thanks to their comprehensive approach.",
    name: 'Samantha Lee',
    title: 'Piano Student',
  },
  {
    quote:
      "This school offered me the tools and confidence to take my singing to the next level. I'm endlessly grateful for the personalized coaching.",
    name: 'Michael Chen',
    title: 'Vocal Student',
  },
  {
    quote:
      'As a violinist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.',
    name: 'Emily Taylor',
    title: 'Violin Student',
  },
  {
    quote:
      'The production courses here opened my eyes to the intricacies of music production. Highly recommend for any aspiring producers!',
    name: 'Chris Morales',
    title: 'Music Production Student',
  },
];

function MusicSchoolTestimonials() {
  return (
    <div className="relative flex h-[50rem] w-full items-center justify-center overflow-hidden bg-white dark:bg-black">
      <GridBackground /> {/* Add the GridBackground component */}
      <div className="flex flex-col items-center w-full px-4 sm:px-6 lg:px-8 z-10">
        <h2 className="text-3xl font-bold text-center mb-8">
          Hear our Harmony: Voices of success
        </h2>
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={musicSchoolTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default MusicSchoolTestimonials;