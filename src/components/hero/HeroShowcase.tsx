import { motion, AnimatePresence } from 'motion/react';
import { BlueprintFrame } from '../common/BlueprintFrame';
import webViewDemo from '../../assets/images/web-view-demo.png';
import designImage from '../../assets/images/design-image.png';

interface HeroShowcaseProps {
  activeTab?: number;
}

export function HeroShowcase({ activeTab = 0 }: HeroShowcaseProps) {
  const isDesign = activeTab === 1 || activeTab === 3;

  return (
    <BlueprintFrame
      showNodes={true}
      showHorizontalGuides={true}
      borderStyle="all"
      className="mt-4 sm:mt-5 bg-bg-card shadow-2xl"
    >
      <AnimatePresence mode="wait">
        {isDesign ? (
          <motion.div
            key="design"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="relative w-full overflow-hidden flex items-center justify-center bg-[#1E1E1E] h-72 sm:h-80 md:h-84 lg:h-88"
          >
            <img
              src={designImage}
              alt="Website Design Demo"
              className="h-full w-full object-cover object-top select-none pointer-events-none"
            />
          </motion.div>
        ) : (
          <motion.div
            key="development"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="overflow-hidden grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-dashed divide-border-dashed"
          >
            {/* Left Column: Code Editor */}
            <div className="relative bg-primary-950 p-4 sm:p-6 lg:p-7 font-mono text-[11px] sm:text-xs leading-relaxed text-primary-200 select-none overflow-x-auto h-72 sm:h-80 md:h-84 lg:h-88 flex flex-col justify-center">
              <div className="space-y-0.5 sm:space-y-1">
                <p className="text-gray-500">
                  <span className="text-pink-400">&lt;meta</span> <span className="text-yellow-400">charset</span>=<span className="text-emerald-400">&quot;UTF-8&quot;</span> <span className="text-pink-400">/&gt;</span>
                </p>
                <p className="text-gray-500">
                  <span className="text-pink-400">&lt;title&gt;</span><span className="text-gray-300">Interactive Page</span><span className="text-pink-400">&lt;/title&gt;</span>
                </p>
                <p className="text-pink-400">&lt;style&gt;</p>
                <p className="pl-3 sm:pl-4 text-emerald-400">
                  body &#123; <span className="text-gray-400">background-color:</span> <span className="text-amber-300">#222</span>; <span className="text-gray-400">color:</span> <span className="text-amber-300">#fff</span>; &#125;
                </p>
                <p className="pl-3 sm:pl-4 text-emerald-400">#box &#123;</p>
                <p className="pl-6 sm:pl-8 text-gray-400">
                  width: <span className="text-amber-300">100px</span>; height: <span className="text-amber-300">100px</span>;
                </p>
                <p className="pl-6 sm:pl-8 text-gray-400">
                  background: <span className="text-cyan-300">red</span>; margin: <span className="text-amber-300">20px auto</span>;
                </p>
                <p className="pl-3 sm:pl-4 text-emerald-400">&#125;</p>
                <p className="text-pink-400">&lt;/style&gt;</p>
                <p className="text-pink-400">&lt;body&gt;</p>
                <p className="pl-3 sm:pl-4 text-gray-300">
                  <span className="text-pink-400">&lt;h1&gt;</span>Click the Box<span className="text-pink-400">&lt;/h1&gt;</span>
                </p>
                <p className="pl-3 sm:pl-4 text-gray-300">
                  <span className="text-pink-400">&lt;div</span> <span className="text-yellow-400">id</span>=<span className="text-emerald-400">&quot;box&quot;</span><span className="text-pink-400">&gt;&lt;/div&gt;</span>
                </p>
                <p className="pl-3 sm:pl-4 text-pink-400">&lt;script&gt;</p>
                <p className="pl-6 sm:pl-8 text-gray-300">
                  document.<span className="text-cyan-400">getElementById</span>(<span className="text-emerald-400">&quot;box&quot;</span>).<span className="text-yellow-400">onclick</span> = <span className="text-pink-400">function</span> () &#123;
                </p>
                <p className="pl-9 sm:pl-12 text-gray-300">
                  <span className="text-cyan-400">this</span>.style.background = <span className="text-cyan-400">this</span>.style.background === <span className="text-emerald-400">&quot;red&quot;</span> ? <span className="text-emerald-400">&quot;blue&quot;</span> : <span className="text-emerald-400">&quot;red&quot;</span>;
                </p>
                <p className="pl-6 sm:pl-8 text-gray-300">&#125;;</p>
                <p className="text-pink-400">&lt;/script&gt;</p>
              </div>
            </div>

            {/* Right Column: Web View Demo Image Asset */}
            <div className="relative bg-white flex items-center justify-center overflow-hidden h-72 sm:h-80 md:h-84 lg:h-88">
              <img
                src={webViewDemo}
                alt="Web View Demo"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </BlueprintFrame>
  );
}
