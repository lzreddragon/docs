import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Red Dragon documentation sidebar - simplified structure
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        { type: 'doc', id: 'guides/quickstart', label: 'Quick Start' },
        { type: 'doc', id: 'integrations/sonic-frontend-integration', label: 'Frontend Config — Sonic' },
      ],
    },
    { type: 'doc', id: 'omnidragon-project-status', label: 'Current Status' },
    { type: 'doc', id: 'contracts/overview', label: 'Contracts' },
  ],
};

export default sidebars;
