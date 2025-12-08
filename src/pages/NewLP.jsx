import React, { lazy, Suspense, useState } from 'react';
import NewLPNavbar from '../components/layout/NewLPNavbar';
import NewHero from '../components/sections/new-lp/NewHero';

const NewReality = lazy(() => import('../components/sections/new-lp/NewReality'));
const NewAdvantage = lazy(() => import('../components/sections/new-lp/NewAdvantage'));
const NewFramework = lazy(() => import('../components/sections/new-lp/NewFramework'));
const NewTimeline = lazy(() => import('../components/sections/new-lp/NewTimeline'));
const NewProof = lazy(() => import('../components/sections/new-lp/NewProof'));
const NewICP = lazy(() => import('../components/sections/new-lp/NewICP'));
const NewStrategySession = lazy(() => import('../components/sections/new-lp/NewStrategySession'));
const ContactModal = lazy(() => import('../components/ui/ContactModal'));
const Footer = lazy(() => import('../components/layout/Footer'));
const FloatingElements = lazy(() => import('../components/layout/FloatingElements'));

const SectionFallback = ({ minHeight = '60vh' }) => (
    <div
        className="flex items-center justify-center w-full"
        style={{ minHeight }}
        aria-busy="true"
        role="status"
    >
        <div className="h-10 w-10 rounded-full border-2 border-white/20 border-t-transparent animate-spin" />
    </div>
);

const ModalFallback = () => (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 text-white/70">
        <div className="flex flex-col items-center gap-3">
            <div className="h-8 w-8 rounded-full border-2 border-white/30 border-t-transparent animate-spin" />
            <span className="text-sm uppercase tracking-[0.3em]">Carregando</span>
        </div>
    </div>
);

function NewLP() {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const openContactModal = () => setIsContactOpen(true);
    const closeContactModal = () => setIsContactOpen(false);

    return (
        <div className="min-h-screen bg-linear-main font-sans text-white selection:bg-accent selection:text-black">
            <NewLPNavbar />
            <main>
                <NewHero onContactRequest={openContactModal} />
                <Suspense fallback={<SectionFallback minHeight="100vh" />}>
                    <NewReality />
                </Suspense>
                <Suspense fallback={<SectionFallback />}>
                    <NewAdvantage />
                </Suspense>
                <Suspense fallback={<SectionFallback minHeight="120vh" />}>
                    <NewFramework />
                </Suspense>
                <Suspense fallback={<SectionFallback />}>
                    <NewTimeline />
                </Suspense>
                <Suspense fallback={<SectionFallback />}>
                    <NewProof />
                </Suspense>
                <Suspense fallback={<SectionFallback />}>
                    <NewICP />
                </Suspense>
                <Suspense fallback={<SectionFallback />}>
                    <NewStrategySession onContactRequest={openContactModal} />
                </Suspense>
            </main>
            <Suspense fallback={null}>
                <Footer />
            </Suspense>
            <Suspense fallback={null}>
                <FloatingElements />
            </Suspense>
            <Suspense fallback={isContactOpen ? <ModalFallback /> : null}>
                {isContactOpen && <ContactModal isOpen={isContactOpen} onClose={closeContactModal} />}
            </Suspense>
        </div>
    );
}

export default NewLP;
