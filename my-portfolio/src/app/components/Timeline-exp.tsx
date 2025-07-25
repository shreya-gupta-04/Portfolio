import React from "react";
import { Timeline } from "../components/ui/Timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Feb 2025 - May 2025",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-white md:text-xl dark:text-neutral-200">
            Worked as Frontend and UI intern 
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/assets/ventoro.jpeg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/assets/figma.png"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "May 2025",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-white md:text-xl dark:text-neutral-200">
          Organized Sprinthacks 3.0
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/assets/banner.jpeg"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="/assets/sprint.jpeg"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Nov 2024",
      content: (
        <div>
  <p className="mb-8 text-xs font-normal text-white md:text-xl dark:text-neutral-200">
    Freelanced Catalogues for a Startup
  </p>

  <div className="grid grid-cols-2 grid-rows-2 gap-4">
    {/* Image 1 */}
    <img
      src="/assets/Jewellery.png"
      alt="hero template"
      className="h-20 w-full rounded-lg object-cover shadow md:h-44 lg:h-70"
    />

    {/* Tall Image - Span 2 rows */}
    <img
      src="/assets/Skin.png"
      alt="feature template"
      className="row-span-2 h-full w-full rounded-lg object-cover shadow md:h-full lg:h-full"
    />

    {/* Image 3 */}
    <img
      src="/assets/bags.png"
      alt="feature template"
      className="h-20 w-full rounded-lg object-cover shadow md:h-44 lg:h-70"
    />
  </div>
</div>

      ),
    },
     {
      title: " Aug 2024 - Present",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-white md:text-xl dark:text-neutral-200">
            Event Coordinator GDG KIET
          </p>
          <div className="grid grid-cols-2 gap-4">
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
