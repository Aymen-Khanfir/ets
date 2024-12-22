import { useTranslation } from 'react-i18next';

import { ServiceInsights } from '@/types/service-insights';

export function ServiceInsightsConfig(): ServiceInsights {
  const { t } = useTranslation();

  return {
    advantagesSection: {
      title: t('service_description.advantages.title'),
      advantages: [
        {
          title: t('service_description.advantages.title', {
            context: 'sustainability',
          }),
          description: t('service_description.advantages.description', {
            context: 'sustainability',
          }),
        },
        {
          title: t('service_description.advantages.title', {
            context: 'quality',
          }),
          description: t('service_description.advantages.description', {
            context: 'quality',
          }),
        },
        {
          title: t('service_description.advantages.title', {
            context: 'customization',
          }),
          description: t('service_description.advantages.description', {
            context: 'customization',
          }),
        },
        {
          title: t('service_description.advantages.title', {
            context: 'adhesives',
          }),
          description: t('service_description.advantages.description', {
            context: 'adhesives',
          }),
        },
        {
          title: t('service_description.advantages.title', {
            context: 'Profitability',
          }),
          description: t('service_description.advantages.description', {
            context: 'Profitability',
          }),
        },
        {
          title: t('service_description.advantages.title', {
            context: 'innovation',
          }),
          description: t('service_description.advantages.description', {
            context: 'innovation',
          }),
        },
      ],
    },
    processSection: {
      title: t('service_description.process.title'),
      process: [
        {
          step: 1,
          title: t('service_description.process.step1.title'),
          description: t('service_description.process.step1.description'),
        },
        {
          step: 2,
          title: t('service_description.process.step2.title'),
          description: t('service_description.process.step2.description'),
        },
        {
          step: 3,
          title: t('service_description.process.step3.title'),
          description: t('service_description.process.step3.description'),
        },
        {
          step: 4,
          title: t('service_description.process.step4.title'),
          description: t('service_description.process.step4.description'),
        },
      ],
    },
    qualityStandardsSection: {
      title: t('service_description.quality_standards.title'),
      qualityStandards: [
        {
          label: t('service_description.quality_standards.standard.item'),
          items: [
            t('service_description.quality_standards.standard.item', {
              context: 1,
            }),
            t('service_description.quality_standards.standard.item', {
              context: 2,
            }),
            t('service_description.quality_standards.standard.item', {
              context: 3,
            }),
          ],
        },
        {
          label: t('service_description.quality_standards.engagement.item'),
          items: [
            t('service_description.quality_standards.engagement.item', {
              context: 1,
            }),
            t('service_description.quality_standards.engagement.item', {
              context: 2,
            }),
            t('service_description.quality_standards.engagement.item', {
              context: 3,
            }),
            t('service_description.quality_standards.engagement.item', {
              context: 4,
            }),
          ],
        },
        {
          label: t('service_description.quality_standards.certifications.item'),
          items: [
            t('service_description.quality_standards.certifications.item', {
              context: 1,
            }),
            t('service_description.quality_standards.certifications.item', {
              context: 2,
            }),
            t('service_description.quality_standards.certifications.item', {
              context: 3,
            }),
          ],
        },
      ],
    },
  };
}
