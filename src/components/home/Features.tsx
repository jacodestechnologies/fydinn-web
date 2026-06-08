import { features, featureStyles } from "./data";
import { FeatureVisual, SectionLabel } from "./ui";

export function Features() {
  return (
    <section id="features" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <SectionLabel>How MeantGo Works</SectionLabel>
          <h2 className="reveal-heading text-4xl font-bold leading-tight tracking-tight text-[#1F8A4C] md:text-5xl">
            Built around the things that actually matter.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/55">
            MeantGo was built on a different belief: the best connections start with intent. People
            who know what they want and are not afraid to say it.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {features.map((feature, index) => {
            const s = featureStyles[index % featureStyles.length];
            return (
              <article
                key={feature.title}
                className={`feature-article flex flex-col rounded-[2rem] p-7 lg:p-9 ${s.card}`}
              >
                <h3
                  className={`text-2xl font-bold leading-tight tracking-tight md:text-3xl ${s.title}`}
                >
                  {feature.title}
                </h3>
                <p className={`mt-4 text-base leading-relaxed ${s.body}`}>{feature.body}</p>
                <div className="mt-8 flex-1">
                  <FeatureVisual type={feature.visual} />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
