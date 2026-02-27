"use client";

import CountUp from "react-countup";
import { useTranslations } from 'next-intl';

const Stats = () => {
  const t = useTranslations('stats');
  
  const stats = [
    {
      num: 4,
      text: t('yearsExperience'),
    },
    {
      num: 20,
      text: t('projectsCompleted'),
    },
    {
      num: 8,
      text: t('technologiesMastered'),
    },
    {
      num: 50,
      text: t('codeCommits'),
    },
  ];

  return (
    <section className="pt-0 pb-4 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]:" : "max-w-[150px]:"
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
