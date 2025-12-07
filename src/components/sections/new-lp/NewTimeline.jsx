import React from "react";
import { Timeline } from "../../ui/timeline";
import OptimizedImage from '../../ui/OptimizedImage';
import { buildImageSources } from '../../../lib/image-sources';

import escalationVisual from "../../../assets/escalation_phase_visual_1764091702926.png";
import escalationVisualWebp from "../../../assets/escalation_phase_visual_1764091702926.webp";
import escalationVisualAvif from "../../../assets/escalation_phase_visual_1764091702926.avif";
import extractionVisual from "../../../assets/extraction_phase_visual_1764091726420.png";
import extractionVisualWebp from "../../../assets/extraction_phase_visual_1764091726420.webp";
import extractionVisualAvif from "../../../assets/extraction_phase_visual_1764091726420.avif";
import timelineLightBeams from "../../../assets/timeline-light-beams.png";
import timelineLightBeamsWebp from "../../../assets/timeline-light-beams.webp";
import timelineLightBeamsAvif from "../../../assets/timeline-light-beams.avif";
import timelineIceField from "../../../assets/timeline-ice-field.png";
import timelineIceFieldWebp from "../../../assets/timeline-ice-field.webp";
import timelineIceFieldAvif from "../../../assets/timeline-ice-field.avif";
import timelinePrism from "../../../assets/timeline-prism.png";
import timelinePrismWebp from "../../../assets/timeline-prism.webp";
import timelinePrismAvif from "../../../assets/timeline-prism.avif";
import timelineBeamFocus from "../../../assets/timeline-beam-focus.png";
import timelineBeamFocusWebp from "../../../assets/timeline-beam-focus.webp";
import timelineBeamFocusAvif from "../../../assets/timeline-beam-focus.avif";
import timelineDiamondVelvet from "../../../assets/timeline-diamond-velvet.png";
import timelineDiamondVelvetWebp from "../../../assets/timeline-diamond-velvet.webp";
import timelineDiamondVelvetAvif from "../../../assets/timeline-diamond-velvet.avif";
import timelineDiamondCloseup from "../../../assets/timeline-diamond-closeup.png";
import timelineDiamondCloseupWebp from "../../../assets/timeline-diamond-closeup.webp";
import timelineDiamondCloseupAvif from "../../../assets/timeline-diamond-closeup.avif";

const escalationVisualSources = buildImageSources({
  avif: escalationVisualAvif,
  webp: escalationVisualWebp,
});

const extractionVisualSources = buildImageSources({
  avif: extractionVisualAvif,
  webp: extractionVisualWebp,
});

const timelineLightBeamsSources = buildImageSources({
  avif: timelineLightBeamsAvif,
  webp: timelineLightBeamsWebp,
});

const timelineIceFieldSources = buildImageSources({
  avif: timelineIceFieldAvif,
  webp: timelineIceFieldWebp,
});

const timelinePrismSources = buildImageSources({
  avif: timelinePrismAvif,
  webp: timelinePrismWebp,
});

const timelineBeamFocusSources = buildImageSources({
  avif: timelineBeamFocusAvif,
  webp: timelineBeamFocusWebp,
});

const timelineDiamondVelvetSources = buildImageSources({
  avif: timelineDiamondVelvetAvif,
  webp: timelineDiamondVelvetWebp,
});

const timelineDiamondCloseupSources = buildImageSources({
  avif: timelineDiamondCloseupAvif,
  webp: timelineDiamondCloseupWebp,
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <OptimizedImage
              src={timelineLightBeams}
              sources={timelineLightBeamsSources}
              alt="Feixes de luz prismáticos refletidos em cristais"
              className="rounded-lg object-cover h-48 md:h-64 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <OptimizedImage
              src={timelineIceField}
              sources={timelineIceFieldSources}
              alt="Cristais iridescentes sobre terreno escuro"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <OptimizedImage
              src={timelinePrism}
              sources={timelinePrismSources}
              alt="Prisma único emitindo feixes de luz"
              className="rounded-lg object-cover h-48 md:h-64 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <OptimizedImage
              src={timelineBeamFocus}
              sources={timelineBeamFocusSources}
              alt="Feixe de luz concentrado atravessando diamante"
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
              src={timelineDiamondVelvet}
              sources={timelineDiamondVelvetSources}
              alt="Diamante pairando sobre veludo preto"
              className="rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <OptimizedImage
              src={timelineDiamondCloseup}
              sources={timelineDiamondCloseupSources}
              alt="Close-up de diamante com faíscas e reflexos"
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
          <span className="flex flex-col gap-1">
            <span className="text-4xl md:text-6xl font-heading font-bold leading-tight tracking-tight text-white">
              What to Expect:
            </span>
            <span className="text-3xl md:text-4xl font-serif italic text-neutral-300 leading-tight">
              From chaos to clarity in 90 days.
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
