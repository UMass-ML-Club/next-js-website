import Image from 'next/image';
import React from 'react';
import { mainAnimationData } from '~/shared/data';

export default function Main() {
  return (
    <main className="bg-umass-neutral-light p-2 dark:bg-umass-neutral-dark">
      <div className="flex items-center justify-center p-4" id="home-banner">
        <h1 className="flex items-center justify-center font-sans text-4xl">
          Welcome to the University of Massachusetts Amherst Machine Learning Club!
        </h1>
      </div>
      <p className="flex items-center justify-center py-4 font-sans">
        The place to learn all about ML at UMass Amherst. No experience necessary.
      </p>

      {/** add in animated gif grid for information about the club */}
      <div className="m-2 grid grid-rows-3 md:grid-rows-1 md:grid-cols-3">
        {mainAnimationData.map((item, index) => (
          <a className="gif-link" href={item.url}>
            <div className="m-2 flex flex-col items-center" key={index}>
              <Image src={`/images/${item.src}`} alt={`AI Animation: ${index}`} width={250} height={250} />
              <p className="flex items-center justify-center">{item.description}</p>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}

// TODO: add animations from https://iconscout.com/lotties/machine-learning
