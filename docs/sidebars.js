/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Frontend guides',
      link: {
        type: 'generated-index',
        title: 'Frontend guides',
        description: 'Set up authentication for your app in minutes by learning how to integrate Hanko with your preferred frontend framework!',
        slug: '/guides/frontend',
        keywords: ['guides']
      },
      items: ['guides/angular', "guides/js", "guides/next", "guides/react", "guides/svelte", "guides/vue"]
    },
    'guides/backend',
    'guides/mobile_guide',
    {
      type: 'category',
      label: 'Social Login',
      link: {
        type: 'doc',
        id: 'guides/social/index'
      },
      items: ['guides/social/apple', 'guides/social/github', 'guides/social/google']
    },
  ],
};

module.exports = sidebars;
