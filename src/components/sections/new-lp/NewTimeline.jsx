import React from "react";
import { Timeline } from "../../ui/timeline";
import OptimizedImage from '../../ui/OptimizedImage';
import { buildImageSources } from '../../../lib/image-sources';

import explorationVisual from "../../../assets/exploration_phase_visual_1764091514544.png";
import explorationVisualWebp from "../../../assets/exploration_phase_visual_1764091514544.webp";
import explorationVisualAvif from "../../../assets/exploration_phase_visual_1764091514544.avif";
import lapidationVisual from "../../../assets/lapidation_phase_visual.png";
import lapidationVisualWebp from "../../../assets/lapidation_phase_visual.webp";
import lapidationVisualAvif from "../../../assets/lapidation_phase_visual.avif";
import escalationVisual from "../../../assets/escalation_phase_visual_1764091702926.png";
import escalationVisualWebp from "../../../assets/escalation_phase_visual_1764091702926.webp";
import escalationVisualAvif from "../../../assets/escalation_phase_visual_1764091702926.avif";
import extractionVisual from "../../../assets/extraction_phase_visual_1764091726420.png";
import extractionVisualWebp from "../../../assets/extraction_phase_visual_1764091726420.webp";
import extractionVisualAvif from "../../../assets/extraction_phase_visual_1764091726420.avif";

const explorationVisualSources = buildImageSources({
  avif: explorationVisualAvif,
  webp: explorationVisualWebp,
});

const lapidationVisualSources = buildImageSources({
  avif: lapidationVisualAvif,
  webp: lapidationVisualWebp,
});

const escalationVisualSources = buildImageSources({
  avif: escalationVisualAvif,
  webp: escalationVisualWebp,
});

const extractionVisualSources = buildImageSources({
  avif: extractionVisualAvif,
  webp: extractionVisualWebp,
});

const NewTimeline = () => {
  const data = [
    {
      title: "MONTH 1: Rapid Impact",
      content: (
        <div>
          <p className="text-neutral-200 font-bold text-lg mb-2">
            Exploration + First Winners
          </p>
          <p className="text-neutral-300 text-base font-normal mb-4">
            In the first week, we launch multiple ad variations using AI. Within
            10-14 days, we identify the first "winners" — the angles and messages
            that resonate with your audience.
          </p>
          <div className="mb-6">
            <span className="text-white font-bold">What you see: </span>
            <span className="text-neutral-300">
              Results start appearing. Waste gets cut. You know exactly what's
              working and why.
            </span>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <OptimizedImage
              src={explorationVisual}
              sources={explorationVisualSources}
              alt="Exploration Phase"
              className="rounded-lg object-cover h-48 md:h-64 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "MONTH 2: Optimisation + Protection",
      content: (
        <div>
          <p className="text-neutral-200 font-bold text-lg mb-2">
            Lapidation + New Wave of Tests
          </p>
          <p className="text-neutral-300 text-base font-normal mb-4">
            While we refine Month 1's winners for maximum performance, we launch
            the second wave of exploration. This ensures you always have fresh
            creatives ready before current ones lose momentum.
          </p>
          <div className="mb-6">
            <span className="text-white font-bold">What you see: </span>
            <span className="text-neutral-300">
              Cost-per-result dropping. Stable results. No unpleasant surprises.
            </span>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <OptimizedImage
              src={lapidationVisual}
              sources={lapidationVisualSources}
              alt="Lapidation Phase"
              className="rounded-lg object-cover h-48 md:h-64 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "MONTH 3+: Compounding Growth",
      content: (
        <div>
          <p className="text-neutral-200 font-bold text-lg mb-2">
            Escalation + Extraction
          </p>
          <p className="text-neutral-300 text-base font-normal mb-4">
            With a proven system running, we scale investment with confidence.
            Simultaneously, we activate remarketing and retention to maximise
            each customer's value.
          </p>
          <div className="mb-6">
            <span className="text-white font-bold">What you see: </span>
            <span className="text-neutral-300">
              Month-on-month growth. A system that adapts and continuously
              improves. Real predictability.
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <OptimizedImage
              src={escalationVisual}
              sources={escalationVisualSources}
              alt="Escalation Phase"
              className="rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <OptimizedImage
              src={extractionVisual}
              sources={extractionVisualSources}
              alt="Extraction Phase"
              className="rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline
        data={data}
        title={
          <span>
            What to Expect: <br />
            <span className="text-neutral-500">
              From Chaos to Clarity in 90 Days.
            </span>
          </span>
        }
        description={
          <span className="text-gray-400">
            Here's what happens when you stop experimenting and start engineering
            growth:
          </span>
        }
      />
    </div>
  );
};

export default NewTimeline;
