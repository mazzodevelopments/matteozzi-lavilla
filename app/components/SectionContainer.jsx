import React, { ReactNode } from 'react';

export default function SectionContainer({ id, children, className = '' }) {
  return (
    <section
      id={id}
      className={`bg-white text-black lg:p-4 relative overflow-hidden ${className}`}
      data-scroll-section
    >
      <div className="lg:w-[80%] w-[90%] mx-auto relative z-10 py-6 sm:pt-32 pb-8">
        {children}
      </div>
    </section>
  );
}
