import React from 'react';

/**
 * Base interface for common service data.
 */
interface BaseService {
  title: string;
  description: string;
}

/**
 * Interface for service advantages.
 */
interface ServiceAdvantage extends BaseService {
  icon?: React.ReactNode;
}

/**
 * Interface for service process steps.
 */
interface ServiceProcess extends BaseService {
  step: number;
}

interface ServiceQualityStandard {
  label: string;
  items: string[];
}

/**
 * Interface for a section containing advantages.
 */
interface AdvantagesSection {
  title: string;
  advantages: ServiceAdvantage[];
}

/**
 * Interface for a section containing processes.
 */
interface ProcessSection {
  title: string;
  process: ServiceProcess[];
}

/**
 * Interface for a section containing quality standards.
 */
interface QualityStandardsSection {
  title: string;
  qualityStandards: ServiceQualityStandard[];
}

/**
 * Comprehensive insights for a service.
 */
export interface ServiceInsights {
  advantagesSection: AdvantagesSection;
  processSection: ProcessSection;
  qualityStandardsSection: QualityStandardsSection;
}
