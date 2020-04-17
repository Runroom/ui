import toggleImage from '../assets/img/toggle.png';
import switchImage from '../assets/img/switch.png';

const structure = [
  {
    name: 'elements',
    components: [
      {
        name: 'Button',
        slug: '/components/button'
      },
      {
        name: 'Picture',
        slug: '/components/picture'
      },
      {
        name: 'Scroll top',
        slug: '/components/scroll-top'
      },
      {
        name: 'Link',
        slug: '/components/link'
      },
      {
        name: 'Skip links',
        slug: '/components/skip-links'
      }
    ]
  },
  {
    name: 'structures',
    components: [
      {
        name: 'List',
        slug: '/components/list'
      },
      {
        name: 'Responsive table',
        slug: '/components/responsive-table'
      }
    ]
  },
  {
    name: 'navigation',
    components: [
      {
        name: 'Breadcrumbs',
        slug: '/components/breadcrumbs'
      }
    ]
  },
  {
    name: 'form',
    components: [
      {
        name: 'Checkbox',
        slug: '/components/checkbox'
      },
      {
        name: 'Radio',
        slug: '/components/radio'
      },
      {
        name: 'Incremental input',
        slug: '/components/incremental-input'
      },
      {
        name: 'Select',
        slug: '/components/select'
      },
      {
        name: 'Switch',
        slug: '/components/switch',
        img: switchImage
      }
    ]
  },
  {
    name: 'Helpers',
    components: [
      {
        name: 'Toggle',
        slug: '/components/toggle',
        img: toggleImage
      }
    ]
  }
];

export default structure;
