import React from 'react';

export interface NavItem {
  title?: string;
  href?: string;
  hash?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: React.ReactNode;
  label?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}
