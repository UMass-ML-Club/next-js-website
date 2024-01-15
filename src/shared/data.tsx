import {
  IconArrowDown,
  IconArrowsRightLeft,
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTailwind,
  IconBrandTwitter,
  IconBulb,
  IconCheck,
  IconChevronDown,
  IconClock,
  IconComponents,
  IconDownload,
  IconHeadset,
  IconHelp,
  IconListCheck,
  IconMail,
  IconMapPin,
  IconMessages,
  IconPhoneCall,
  IconRocket,
  IconRss,
  IconMicrophone2,
} from '@tabler/icons-react';
import {
  AnnouncementProps,
  CallToActionProps,
  ComparisonProps,
  ContactProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  FooterProps,
  HeaderProps,
  HeroProps,
  PricingProps,
  SocialProofProps,
  StatsProps,
  StepsProps,
  TeamProps,
  EventProps,
} from './types';

import cameraFrontImg from '~/assets/images/camera-front.jpg';
import cameraBackImg from '~/assets/images/camera-back.jpg';
import heroImg from '~/assets/images/hero.jpg';
import hero2Img from '~/assets/images/hero2.jpg';
import gasImg from '~/assets/images/gas.jpg';
import nextJsLogo from '~/assets/images/nextjs-logo.png';
import reactLogo from '~/assets/images/react-logo.png';
import tailwindCssLogo from '~/assets/images/tailwind-css-logo.png';
import typescriptLogo from '~/assets/images/typescript-logo.png';

const discordLink = 'https://discord.gg/HetVtPe2yZ';

// Announcement data
export const announcementData: AnnouncementProps = {
  title: 'NEW',
  callToAction: {
    text: 'Official Website for the University of Massachusetts Amherst Machine Learning Club',
    href: 'https://nextjs.org/docs/app',
  },
  callToAction2: {
    text: 'Join the UMass ML Discord',
    href: discordLink,
  },
};

// Header data
export const headerData: HeaderProps = {
  links: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Lecture Series',
      icon: IconMicrophone2,
      links: [
        {
          label: 'Beginner Series',
          href: '/beginner-series',
        },
        {
          label: 'Advanced Series',
          href: '/advanced-series',
        },
      ],
    },
    {
      label: 'Pages',
      icon: IconChevronDown,
      links: [
        {
          label: 'About us',
          href: '/about',
        },
        {
          label: 'Pricing',
          href: '/pricing',
        },
        {
          label: 'Contact us',
          href: '/contact',
        },
        {
          label: 'FAQs',
          href: '/faqs',
        },
        {
          label: 'Privacy Policy',
          href: '/privacy',
        },
        {
          label: 'Terms & Conditions',
          href: '/terms',
        },
      ],
    },
    {
      label: 'Blog',
      href: '/blog',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ],
  actions: [
    {
      text: 'Download',
      href: 'https://github.com/onwidget/tailnext',
      targetBlank: true,
      btnType: 'primary',
    },
  ],
  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'right',
};

export const mainAnimationData = [
  // animation data for the main page with a src and description
  {
    src: 'ai-animation.gif',
    description: 'Beginner Lectures',
    url: '/beginner-series'
  },
  { src: 'car.gif', description: 'Projects',url:"/projects"},
  {
    src: 'coding.gif',
    description: 'Advanced Lectures',
    url: "/advanced-series"
  },
];

// Hero data
export const heroData: HeroProps = {
  title: (
    <>
      Free template for <span className="hidden md:inline">starts a website using</span> <span>Next.js</span> +{' '}
      <span className="sm:whitespace-nowrap">Tailwind CSS</span>
    </>
  ),
  subtitle: (
    <>
      <span className="hidden md:inline">
        <span className="font-semibold underline decoration-primary-600 decoration-wavy decoration-1 underline-offset-2">
          TailNext
        </span>{' '}
        is a production ready template to start your new website using <em>Next.js</em> + <em>Tailwind CSS</em>.
      </span>{' '}
      It has been designed following Best Practices, SEO, Accessibility, Dark Mode, great Page Speed, image
      optimization.
    </>
  ),
  callToAction: {
    text: 'Get template',
    href: 'https://github.com/onwidget/tailnext',
    icon: IconDownload,
    targetBlank: true,
    btnType: 'primary',
  },
  callToAction2: {
    text: 'Learn more',
    href: '/',
  },
  image: {
    src: heroImg,
    alt: 'Hero TailNext',
  },
};

// Hero2 data
export const hero2Data: HeroProps = {
  title: 'Great companies are made by great people',
  subtitle:
    'Vivamus venenatis, lectus a pellentesque placerat, felis tellus ultrices eros, et aliquam sapien nibh sed sem. Fusce ut ante eget purus viverra malesuada. Morbi eget mi maximus, ultricies urna eget, tristique lorem. Fusce cursus venenatis quam, a blandit lectus vulputate id. Praesent id interdum orci, vitae condimentum dui. Fusce pulvinar ante eget mattis semper. Suspendisse in diam massa.',
  callToAction: {
    text: 'View jobs',
    href: 'https://www.linkedin.com/',
    targetBlank: true,
    btnType: 'primary',
  },
  callToAction2: {
    text: 'Contact us',
    href: '/contact',
  },
  image: {
    src: hero2Img,
    alt: 'Hero TailNext',
  },
};

// SocialProof data
export const socialProofData: SocialProofProps = {
  images: [
    {
      link: 'https://nextjs.org/',
      src: nextJsLogo,
      alt: 'NextJs Logo',
    },
    {
      link: 'https://react.dev/',
      src: reactLogo,
      alt: 'React Logo',
    },
    {
      link: 'https://tailwindcss.com/',
      src: tailwindCssLogo,
      alt: 'Tailwind CSS Logo',
    },
    {
      link: 'https://www.typescriptlang.org/',
      src: typescriptLogo,
      alt: 'Typescript Logo',
    },
  ],
};

// FAQS data
export const faqsData: FAQsProps = {
  header: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Duis turpis dui, fringilla mattis sem nec, fringilla euismod neque. Morbi tincidunt lacus nec tortor scelerisque pulvinar.',
    highlight: 'FAQS',
  },
  items: [
    {
      title: 'Who we are and what we do?',
      description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
    },
    {
      title: 'What values and principles guide our work?',
      description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
    },
    {
      title: 'What is our experience?',
      description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
    },
    {
      title: 'What is our team like?',
      description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
    },
    {
      title: 'How do we engage with the community?',
      description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
    },
    {
      title: 'What support channels do we offer?',
      description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
    },
  ],
};

// FAQS data 2
export const faqsData2: FAQsProps = {
  header: {
    title: 'Frequently Asked Questions',
    subtitle: 'Check out some general questions asked about machine learning.',
    highlight: 'FAQS',
  },
  items: [
    {
      title: 'What do I need to start?',
      description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
    },
    {
      title: 'How does machine learning differ from general programming?',
      description:
        'In general programming, explicit instructions are written to perform specific tasks. In machine learning, algorithms learn patterns from data and make predictions or take actions without being explicitly programmed for each task.',
    },
    {
      title: 'What is a neural network?',
      description:
        'A neural network is a machine learning model inspired by the human brain. It consists of interconnected artificial neurons organized in layers. It learns by adjusting weights and biases to make predictions or classifications. Neural networks are powerful for tasks like image recognition and natural language processing.',
    },
    {
      title: 'What is overfitting, and how can you avoid it?',
      description: `Overfitting occurs when a model performs well on the training data but fails to generalize to new, unseen data. To avoid overfitting, you can use techniques such as cross-validation, regularization, and collecting more diverse training data.`,
    },
    {
      title: 'What is something that you would really like to try again?',
      description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
    },
    {
      title: 'If you could only ask one question to each person you meet, what would that question be?',
      description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
    },
  ],
};

// FAQS3 data
export const faqs3Data: FAQsProps = {
  header: {
    title: 'Pricing FAQs',
    subtitle: 'Do you have other questions?',
    // highlight: 'FAQS',
    position: 'left',
  },
  items: [
    {
      title: 'Which plan is best for me?',
      description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
    },
    {
      title: 'What are my payment options?',
      description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
    },
    {
      title: 'How do I change my plan to a different one?',
      description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
    },
    {
      title: 'What happen at the end of my free trial?',
      description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
    },
    {
      title: 'Can I import data from other tools?',
      description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
    },
    {
      title: 'Can I cancel my plan at any time?',
      description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
    },
  ],
  callToAction: {
    text: 'Contact us',
    href: '/contact',
    btnText: 'uppercase',
    btnType: 'primary',
  },
};

// FAQS4 data
export const faqs4Data: FAQsProps = {
  header: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Praesent rutrum purus in sem blandit, in consectetur mi pharetra. Ut sagittis sapien sit amet congue cursus. Nulla eu elementum ex, tincidunt semper nisi.',
    highlight: 'FAQS',
    position: 'center',
  },
  tabs: [
    {
      link: {
        label: 'General',
        href: '/tab1',
      },
      items: [
        {
          title: 'What do I need to start?',
          description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
        },
        {
          title: 'How to install the NextJS + Tailwind CSS template?',
          description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
        },
        {
          title: "What's something that you completely don't understand?",
          description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
        },
        {
          title: "What's an example of when you changed your mind?",
          description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
        },
        {
          title: 'What is something that you would really like to try again?',
          description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
        },
        {
          title: 'If you could only ask one question to each person you meet, what would that question be?',
          description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
        },
      ],
    },
    {
      link: {
        label: 'Plans, prices and payments',
        href: '/tab2',
      },
      items: [
        {
          title: 'Which plan is best for me?',
          description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
        },
        {
          title: 'What are my payment options?',
          description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
        },
        {
          title: 'How do I change my plan to a different one?',
          description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
        },
        {
          title: 'What happen at the end of my free trial?',
          description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
        },
        {
          title: 'Can I import data from other tools?',
          description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
        },
        {
          title: 'Can I cancel my plan at any time?',
          description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
        },
      ],
    },
    {
      link: {
        label: 'Others',
        href: '/tab3',
      },
      items: [
        {
          title: 'How do I download the template?',
          description: `In ullamcorper pellentesque ante, nec commodo ex euismod viverra. Phasellus facilisis, justo a bibendum pellentesque, nibh est egestas lectus, volutpat ullamcorper arcu ante ac dolor.`,
        },
        {
          title: 'How do I customize the template?',
          description: `Pellentesque semper euismod malesuada. Curabitur quis lectus tortor. Aliquam efficitur pretium tellus, ut sagittis turpis dignissim eget. Etiam scelerisque nec risus eget iaculis. Nunc maximus metus id felis dapibus, sed ullamcorper sapien faucibus.`,
        },
        {
          title: 'Does the template come with any tutorials or instructions?',
          description: `Sed sagittis arcu suscipit auctor suscipit. Nam dapibus risus vitae tristique fermentum. In egestas turpis elit, id gravida diam dictum eu. Ut dictum libero ut rhoncus egestas. Ut sit amet tortor blandit, faucibus tellus vitae, consequat purus. Nullam id odio enim.`,
        },
        {
          title: 'Are there any additional fees or charges for using the template?',
          description: `Fusce efficitur, augue et vulputate pharetra, augue turpis viverra turpis, id tempor purus eros sed erat. Curabitur blandit eget sem vitae malesuada.`,
        },
      ],
    },
  ],
};

// CallToAction data
export const callToActionData: CallToActionProps = {
  title: 'Sign up now!',
  subtitle:
    'Receive up-to-date information about our meetings, events, and other opportunities to get involved with the club.',
  callToAction: {
    text: 'Get template',
    href: 'https://github.com/onwidget/tailnext',
    icon: IconDownload,
  },
  items: [
    {
      title: 'Learn more',
      description: 'Find out more information about the club by clicking this link.',
      href: '/aboutus',
    },
    {
      title: 'Subscribe',
      description: 'Subscribe to the email list to receive updates about the club.',
      form: {
        icon: IconMail,
        input: {
          type: 'email',
          name: 'email',
          autocomplete: 'email',
          placeholder: 'Enter your email address',
        },
        btn: {
          title: 'Subscribe',
          type: 'submit',
        },
      },
    },
  ],
};

// CallToAction2 data
export const callToActionData2: CallToActionProps = {
  title: 'Still have questions?',
  subtitle:
    'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut in leo odio. Cras finibus ex a ante convallis ullamcorper.',
  callToAction: {
    text: 'Contact us',
    href: '/contact',
    btnType: 'primary',
  },
};

// Feature data
export const featuresData: FeaturesProps = {
  header: {
    title: (
      <>
        What you get with <span className="whitespace-nowrap">TailNext</span>
      </>
    ),
    subtitle:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.',
    highlight: 'Features',
  },
  items: [
    {
      title: 'Next.Js + Tailwind CSS Integration',
      description:
        'A seamless integration between two great frameworks that offer high productivity, performance and versatility.',
      icon: IconBrandTailwind,
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Ready-to-use Components',
      description:
        'Widgets made with Tailwind CSS ready to be used in Marketing Websites, SaaS, Blogs, Personal Profiles, Small Business...',
      icon: IconComponents,
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Best Practices',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.',
      icon: IconListCheck,
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Excellent Page Speed',
      description:
        'Having a good page speed impacts organic search ranking, improves user experience (UI/UX) and increase conversion rates.',
      icon: IconRocket,
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Search Engine Optimization (SEO)',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.',
      icon: IconArrowsRightLeft,
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
    {
      title: 'Open to new ideas and contributions',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.',
      icon: IconBulb,
      link: {
        label: 'Discover now',
        href: '/',
      },
    },
  ],
};

// Feature2 data
export const featuresData2: FeaturesProps = {
  header: {
    title: 'Support Center',
    subtitle: 'Looking for something in particular?',
  },
  items: [
    {
      title: 'Have a question?',
      description: 'See our frequently asked questions',
      icon: IconHelp,
      link: {
        href: '/faqs',
      },
    },
    {
      title: 'Chat with us',
      description: 'Live chat with our support team',
      icon: IconMessages,
      link: {
        href: '/',
      },
    },
    {
      title: 'Get help',
      description: 'Speak to our team today',
      icon: IconHeadset,
      link: {
        href: '/',
      },
    },
  ],
};

// Feature data 3
export const featuresData3: FeaturesProps = {
  header: {
    title: 'Services',
  },
  items: [
    {
      title: 'Next.Js + Tailwind CSS Integration',
      description: 'Nullam non sodales massa. Ut justo neque, elementum et vehicula vel, pellentesque non orci.',
      icon: IconBrandTailwind,
    },
    {
      title: 'Ready-to-use Components',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: IconComponents,
    },
    {
      title: 'Best Practices',
      description: 'Morbi sit amet arcu vitae metus molestie auctor sit amet in risus. Sed vel lacinia purus.',
      icon: IconListCheck,
    },
    {
      title: 'Excellent Page Speed',
      description: 'Phasellus id cursus urna. Nullam feugiat tellus sed euismod venenatis.',
      icon: IconRocket,
    },
    {
      title: 'Search Engine Optimization (SEO)',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.',
      icon: IconArrowsRightLeft,
    },
    {
      title: 'Open to new ideas and contributions',
      description: 'Maecenas urna augue, commodo vitae lectus euismod, tempor aliquam arcu.',
      icon: IconBulb,
    },
  ],
};

// Content data
export const contentData: ContentProps = {
  header: {
    title: 'Aliquip definiebas ad est',
    subtitle: 'Quando cetero his ne, eum admodum sapientem ut',
    highlight: 'Content',
  },
  content:
    'Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam regione ut, persius eripuit quo id. Sit te euismod tacimates.',
  items: [
    {
      title: 'Per ei quaeque sensibus',
      description:
        'Ex usu illum iudico molestie. Pro ne agam facete mediocritatem, ridens labore facete mea ei. Pro id apeirian dignissim.',
    },
    {
      title: 'Cu imperdiet posidonium sed',
      description:
        'Amet utinam aliquando ut mea, malis admodum ocurreret nec et, elit tibique cu nec. Nec ex maluisset inciderint, ex quis.',
    },
    {
      title: 'Nulla omittam sadipscing mel ne',
      description:
        'At sed possim oporteat probatus, justo graece ne nec, minim commodo legimus ut vix. Ut eos iudico quando soleat, nam modus.',
    },
  ],
  image: {
    src: cameraFrontImg,
    alt: 'Colorful Image',
  },
  isReversed: false,
  isAfterContent: false,
};

// Content2 data
export const content2Data: ContentProps = {
  content:
    'Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nib dissentias, mei exerci tamquam euripidis cu.',
  items: [
    {
      title: 'Per ei quaeque sensibus',
    },
    {
      title: 'Cu imperdiet posidonium sed',
    },
    {
      title: 'Nulla omittam sadipscing mel ne',
    },
    {
      title: 'Per ei quaeque sensibus',
    },
    {
      title: 'Cu imperdiet posidonium sed',
    },
    {
      title: 'Nulla omittam sadipscing mel ne',
    },
  ],
  image: {
    src: cameraBackImg,
    alt: 'Colorful Image',
  },
  isReversed: true,
  isAfterContent: true,
};

// Steps data
export const stepsData: StepsProps = {
  title: 'Sed ac magna sit amet risus tristique interdum. hac.',
  items: [
    {
      title: 'Step 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula. Fusce sit amet dui tellus.',
      icon: IconArrowDown,
    },
    {
      title: 'Step 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla.',
      icon: IconArrowDown,
    },
    {
      title: 'Step 3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla.',
      icon: IconArrowDown,
    },
    {
      title: 'Ready!',
      icon: IconCheck,
    },
  ],
  image: {
    src: gasImg,
    alt: 'Steps image',
  },
};

// Team data
export const teamData: TeamProps = {
  header: {
    title: 'Team Members',
    subtitle:
      'Suspendisse in dui nibh. Donec enim leo, sodales et egestas id, malesuada non diam. Sed dapibus velit et mauris condimentum, vel imperdiet erat egestas.',
    // highlight: 'Team',
  },
  teams: [
    {
      name: 'Cindy Belcher',
      occupation: 'SEO Consultant',
      image: {
        src: 'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Cindy Belcher',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Toby Foster',
      occupation: 'Marketing Tech',
      image: {
        src: 'https://images.unsplash.com/photo-1614583224978-f05ce51ef5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2172&q=80',
        alt: 'Toby Foster',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Clark Bourne',
      occupation: 'Content Manager',
      image: {
        src: 'https://images.unsplash.com/photo-1639628735078-ed2f038a193e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        alt: 'Clark Bourne',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Bella Chase',
      occupation: 'UX Designer',
      image: {
        src: 'https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        alt: 'Bella Chase',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
  ],
};

// Testimonial data
export const eventData: EventProps = {
  header: {
    title: 'Upcoming Events',
    subtitle:
      'Click arrow for more',
    // highlight: 'Testimonial',
  },
  testimonials: [
    // TODO: Change type testimonial and add dates, remove comment, image, icon
    // TODO: Link events to more info if necessary?
    {
      name: 'Beginner Lecture: Reinforcement Learning',
      location: 'ILC 420',
      description:
        'Suspendisse mollis ante turpis, ut fermentum nulla finibus ac. Integer ut justo id dolor lobortis pharetra. Integer ultrices leo a nunc ullamcorper commodo. In id nulla et nibh pretium pretium non vel metus. Suspendisse dapibus quis lorem sit amet fermentum. Ut a dapibus justo. In faucibus molestie pretium. Cras eros orci, bibendum fringilla elit at, vehicula maximus eros. Aenean placerat aliquet mi, et pellentesque dolor gravida at.',
      date:new Date("2024-01-21T00:00:00"),
      image: {
        src: 'https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: '',
      }
    },
    {
      name: 'Project Check-In',
      location: 'ILC 69',
      description:
        'Mauris semper enim dolor, ac dictum sapien sollicitudin quis. Quisque id pharetra mi. Phasellus eu posuere lectus, vitae rhoncus velit. Nullam imperdiet purus quis dapibus vestibulum. Integer purus ex, hendrerit at elementum non, varius a nibh. Ut eget convallis mi. Morbi mattis, felis sit amet consectetur scelerisque, odio purus ornare sapien, in feugiat lorem tellus et magna. Pellentesque luctus dolor in ornare mattis.',
      date: new Date("2024-01-22T12:00:00"),
      image: {
        src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: '',
      }
    },
    {
      name: 'Too late to see',
      location: 'ILC 42069',
      description:
        'Sed malesuada rhoncus arcu, sit amet condimentum leo pharetra feugiat. In augue quam, venenatis nec dui in, auctor tempus libero. Aliquam tempus ex id metus viverra blandit. Proin varius venenatis tortor, a pellentesque enim malesuada a. Aliquam lectus magna, interdum eget odio non, consequat imperdiet ipsum.',
      date: new Date("2025-01-01T13:00:00"),
      image: {
        src: 'https://images.unsplash.com/photo-1659057106920-da022cfbc0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: '',
      }
    },
    {
      name: "Data Science Club Speaker",
      location: 'Another Dimension',
      description:"racism bad.",
      date:new Date("2024-01-19T10:00:00")
    }
  ],
};

// Pricing data
export const pricingData: PricingProps = {
  header: {
    title: 'Prices for each plan',
    subtitle:
      'Proin eget vestibulum sem, vel ultrices ligula. Vestibulum in eleifend lectus, non mollis odio. Donec nibh ipsum, suscipit non pulvinar quis, lobortis ac lorem.',
    // highlight: 'Pricing',
  },
  prices: [
    {
      title: 'basic',
      value: 29,
      period: 'per month',
      texts: [
        'Etiam in libero',
        'Aenean ac nunc',
        'Cras scelerisque accumsan libero, et volutpat dolor tristique at',
        'In hac habitasse',
      ],
      callToAction: {
        text: 'Free 7-day trial',
        href: '/',
      },
      hasRibbon: false,
    },
    {
      title: 'standard',
      value: 69,
      period: 'per month',
      texts: ['Proin vel laoreet', 'Ut efficitur egestas', 'Pellentesque ut nibh', 'Donec fringilla sem'],
      callToAction: {
        text: 'Free 15-day trial',
        href: '/',
      },
      hasRibbon: true,
      ribbonTitle: 'Popular',
    },
    {
      title: 'premium',
      value: 199,
      period: 'per month',
      texts: [
        'Curabitur suscipit risus',
        'Aliquam blandit malesuada',
        'Suspendisse sit amet',
        'Suspendisse auctor dui',
      ],
      callToAction: {
        text: 'Free 30-day trial',
        href: '/',
      },
      hasRibbon: false,
    },
  ],
};

// Comparison data
export const comparisonData: ComparisonProps = {
  header: {
    title: "What's available for each plan?",
    subtitle:
      'Morbi ut imperdiet ex. Nullam sed tincidunt purus. Donec finibus dui at odio dictum facilisis. Maecenas ut orci quis nisi congue maximus. Sed quis augue sapien.',
    // highlight: 'Comparison',
  },
  columns: [
    {
      title: 'compare plans',
      items: [
        {
          title: 'In vitae finibus',
        },
        {
          title: 'Cras sollicitudin',
        },
        {
          title: 'Suspendisse',
        },
        {
          title: 'Vestibulum ornare',
        },
        {
          title: 'In hendrerit',
        },
        {
          title: 'Ut pharetra',
        },
      ],
    },
    {
      title: 'basic',
      items: [
        {
          title: 'Free 7-day trial',
        },
        {
          title: 'Limited',
        },
        {
          title: '$29',
        },
        {
          title: false,
        },
        {
          title: false,
        },
        {
          title: true,
        },
      ],
      callToAction: {
        text: 'Get started',
        href: '/',
        btnType: 'primary',
      },
    },
    {
      title: 'standard',
      items: [
        {
          title: 'Free 15-day trial',
        },
        {
          title: 'Unlimited',
        },
        {
          title: '$69',
        },
        {
          title: false,
        },
        {
          title: true,
        },
        {
          title: true,
        },
      ],
      callToAction: {
        text: 'Get started',
        href: '/',
        btnType: 'primary',
      },
    },
    {
      title: 'premium',
      items: [
        {
          title: 'Free 30-day trial',
        },
        {
          title: 'Unlimited',
        },
        {
          title: '$199',
        },
        {
          title: true,
        },
        {
          title: true,
        },
        {
          title: true,
        },
      ],
      callToAction: {
        text: 'Get started',
        href: '/',
        btnType: 'primary',
      },
    },
  ],
};

// Stats
export const statsData: StatsProps = {
  items: [
    {
      title: 13269,
      description: 'Downloads',
    },
    {
      title: 24.8,
      description: 'Stars',
    },
    {
      title: 1767.77,
      description: 'Forks',
    },
    {
      title: 484000,
      description: 'Users',
    },
  ],
};

// Contact data
export const contactData: ContactProps = {
  header: {
    title: 'Get in Touch',
    subtitle: 'In hac habitasse platea dictumst',
    highlight: 'Contact',
  },
  content:
    'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque sagittis ante, ac tincidunt sem venenatis ut.',
  items: [
    {
      title: 'Our Address',
      description: ['1230 Maecenas Street Donec Road', 'New York, EEUU'],
      icon: IconMapPin,
    },
    {
      title: 'Contact',
      description: ['Mobile: +1 (123) 456-7890', 'Mail: tailnext@gmail.com'],
      icon: IconPhoneCall,
    },
    {
      title: 'Working hours',
      description: ['Monday - Friday: 08:00 - 17:00', 'Saturday & Sunday: 08:00 - 12:00'],
      icon: IconClock,
    },
  ],
  form: {
    title: 'Ready to Get Started?',
    inputs: [
      {
        type: 'text',
        name: 'name',
        autocomplete: 'given-name',
        placeholder: 'Your name',
      },
      {
        type: 'email',
        name: 'email',
        autocomplete: 'email',
        placeholder: 'Your email address',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder: 'Write your message...',
    },
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};

// Contact2 data
export const contact2Data: ContactProps = {
  header: {
    title: 'Get in Touch',
    subtitle: 'In hac habitasse platea dictumst',
    highlight: 'Contact',
  },
  content:
    'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque sagittis ante, ac tincidunt sem venenatis ut.',
  items: [
    {
      title: 'Our Address',
      description: ['1230 Maecenas Street Donec Road', 'New York, EEUU'],
      icon: IconMapPin,
    },
    {
      title: 'Contact',
      description: ['Mobile: +1 (123) 456-7890', 'Mail: tailnext@gmail.com'],
      icon: IconPhoneCall,
    },
    {
      title: 'Working hours',
      description: ['Monday - Friday: 08:00 - 17:00', 'Saturday & Sunday: 08:00 - 12:00'],
      icon: IconClock,
    },
  ],
  form: {
    title: 'Ready to Get Started?',
    description:
      'Mauris consequat, urna vel varius auctor, enim risus ornare felis, at hendrerit erat justo eu justo. Curabitur sagittis efficitur aliquam. Duis eget porttitor lectus, vel pharetra ex. Nam volutpat nibh ut porta egestas.',
    inputs: [
      {
        type: 'text',
        label: 'First name',
        name: 'name',
        autocomplete: 'given-name',
        placeholder: 'First name',
      },
      {
        type: 'text',
        label: 'Last name',
        name: 'lastName',
        placeholder: 'Last name',
      },
      {
        type: 'email',
        label: 'Email address',
        name: 'email',
        placeholder: 'Email address',
      },
    ],
    radioBtns: {
      label: 'What is the reason for your contact?',
      radios: [
        {
          label: 'General inquiries',
        },
        {
          label: 'Technical help',
        },
        {
          label: 'Claims',
        },
        {
          label: 'Others',
        },
      ],
    },
    textarea: {
      cols: 30,
      rows: 5,
      label: 'How can we help you?',
      name: 'textarea',
      placeholder: 'Write your message...',
    },
    checkboxes: [
      {
        label: 'Have you read our privacy policy?',
        value: '',
      },
      {
        label: 'Do you want to receive monthly updates by email?',
        value: '',
      },
    ],
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};

// Footer data
export const footerData: FooterProps = {
  title: 'TailNext',
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Product',
      links: [
        {
          label: 'Features',
          href: '/',
        },
        {
          label: 'Security',
          href: '/',
        },
        {
          label: 'Team',
          href: '/',
        },
        {
          label: 'Enterprise',
          href: '/',
        },
        {
          label: 'Customer stories',
          href: '/',
        },
        {
          label: 'Pricing',
          href: '/pricing',
        },
        {
          label: 'Resources',
          href: '/',
        },
      ],
    },
    {
      title: 'Platform',
      links: [
        {
          label: 'Developer API',
          href: '/',
        },
        {
          label: 'Partners',
          href: '/',
        },
      ],
    },
    {
      title: 'Support',
      links: [
        {
          label: 'Docs',
          href: '/',
        },
        {
          label: 'Community Forum',
          href: '/',
        },
        {
          label: 'Professional Services',
          href: '/',
        },
        {
          label: 'Skills',
          href: '/',
        },
        {
          label: 'Status',
          href: '/',
        },
      ],
    },
    {
      title: 'Company',
      links: [
        {
          label: 'About',
          href: '/',
        },
        {
          label: 'Blog',
          href: '/blog',
        },
        {
          label: 'Careers',
          href: '/',
        },
        {
          label: 'Press',
          href: '/',
        },
        {
          label: 'Inclusion',
          href: '/',
        },
        {
          label: 'Social Impact',
          href: '/',
        },
        {
          label: 'Shop',
          href: '/',
        },
      ],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: '#' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
    { label: 'RSS', icon: IconRss, href: '#' },
    { label: 'Github', icon: IconBrandGithub, href: 'https://github.com/onwidget/tailnext' },
  ],
  footNote: (
    <div className="mr-4 text-sm dark:text-slate-400">
      <span className="float-left mr-1.5 h-5 w-5 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
      Made by{' '}
      <a className="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/">
        {' '}
        onWidget
      </a>{' '}
      · All rights reserved.
    </div>
  ),
};

// Footer2 data
export const footerData2: FooterProps = {
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Address',
      texts: ['51 Phasellus Avenue Maecenas', 'Aliquam, AQ 52098'],
    },
    {
      title: 'Phone',
      texts: ['Reception: +105 123 4567', 'Office: +107 235 7890'],
    },
    {
      title: 'Email',
      texts: ['Office: info@example.com', 'Site: https://example.com'],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: '#' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
    { label: 'RSS', icon: IconRss, href: '#' },
    { label: 'Github', icon: IconBrandGithub, href: 'https://github.com/onwidget/tailnext' },
  ],
  footNote: (
    <div className="mr-4 text-sm dark:text-slate-400">
      <span className="float-left mr-1.5 h-5 w-5 rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
      Made by{' '}
      <a className="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/">
        {' '}
        onWidget
      </a>{' '}
      · All rights reserved.
    </div>
  ),
};

export interface Href {
  name: string;
  link: string;
}
interface lectureData {
  image: string;
  title: string;
  description: string;
  lecturers: string[];
  hrefs: Href[];
}

// lecture series data
export const lectureSeriesData: lectureData[] = [
  {
    image: '/images/lectures/First_General_Body_Meeting.png',
    title: 'First General Body Meeting',
    description:
      "At this meeting, we'll introduce the club and its goals. You'll also get to meet our officers and learn about what they do. This is a great opportunity to meet new poeple and to ensure that your suggesstions are incorporatd for the coming semster.",
    lecturers: ['Ryan Bahlous-Boldi'],
    hrefs: [],
  },
  {
    image: '/images/lectures/intro_to_ML.jpg',
    title: 'Introduction to Machine Learning',
    description:
      'Get a start to machine learning fundamentals, types, and various applications of machine learning in this beginner series lecture!',
    lecturers: ['Ryan Bahlous-Boldi'],
    hrefs: [
      {
        name: 'Google Slides',
        link: 'https://docs.google.com/presentation/d/1KOlPG4bPs-OH_cFIJYdRwpqaBLmhdEYzByz2kW3NxjU/edit?usp=sharing',
      },
    ],
  },
  {
    image: '/images/lectures/gradient_descent.png',
    title: 'Math of ML',
    description:
      'Learn about fundamental mathematical concepts important to Machine Learning such as: Linear Algebra, Calculus, Backpropagation, and Gradient Optimizers.',
    lecturers: ['Aadam Lokhandwala'],
    hrefs: [
      {
        name: 'Echo 360 Recording',
        link: 'https://echo360.org/media/6c82055c-99f1-4e4a-a9dc-077936aa7d85/public',
      },
    ],
  },
  {
    image: '/images/lectures/perceptron.png',
    title: 'Advanced Regression',
    description:
      'Dive deeper into Machine Learning mathematical concepts such as Multi-Layer Perceptrons, Nonlinear Regression, and Activation Functions.',
    lecturers: ['Suryam Gupta'],
    hrefs: [
      {
        name: 'Google Colab Demo 1',
        link: 'https://colab.research.google.com/drive/1EoR9m3ShBM-AOBIx171NTwTMNMvg0xPf?usp=sharing',
      },
      {
        name: 'Google Colab Demo 2',
        link: 'https://colab.research.google.com/drive/1yiMCdko2geMkLePxbbILLY23w54ZSPed?usp=sharing',
      },
    ],
  },
  {
    image: '/images/lectures/python.jpg',
    title: 'Python for ML',
    description:
      'Learn the basics of Python and how to use it for Machine Learning. More specifically, certain technologies covered are Python along with NumPy, Pandas, PyTorch, and Hugging Face.',
    lecturers: ['Karthik Shankar', 'Ruchira Sharma'],
    hrefs: [
      {
        name: 'Echo360 Recording',
        link: 'https://echo360.org/media/a3205c81-eaeb-4de5-bef0-3aa1f61700cd/public',
      },
    ],
  },
  {
    image: '/images/lectures/computer_vision.jpg',
    title: 'Computer Vision',
    description:
      'Learn about a specific field of Machine Learning, Computer Vision, and how it is used in the real world. Technologies covered are ConvNet, Classification Loss, and other Neural Network (NN) Models',
    lecturers: ['Karthik Shankar', 'Kien To'],
    hrefs: [
      {
        name: 'Google Slides',
        link: 'https://docs.google.com/presentation/d/1UBsCH_3fXKcKo68OpATAtCFpg2oIfCz9SYnllmcdvTI/edit?usp=sharing',
      },
      {
        name: 'Google Colab Demo',
        link: 'https://colab.research.google.com/drive/1ffHtz3eBIu_2V12oa-FEletMq6SUSs77?usp=sharing',
      },
      {
        name: 'Echo360 Recording',
        link: 'https://echo360.org/media/cb9f8596-8bfb-4946-9bb0-4066deba6132/public',
      },
    ],
  },
  {
    image: '/images/lectures/generative_AI.png',
    title: 'Generative Machine Learning',
    description:
      'Learn more about the intricacies of Generative AI: Variational Autoencoders, and  Generative Adversarial Networks.',
    lecturers: ['Suryam Gupta', 'Kien To'],
    hrefs: [
      {
        name: 'Google Slides',
        link: 'https://docs.google.com/presentation/d/10Ch_FuaDfua9c1yye1vbuGOYgaRKncB8qecnHzbfvRQ/edit?usp=sharing',
      },
      {
        name: 'Google Colab Demo',
        link: 'https://colab.research.google.com/drive/175OsVYjCBS4XBVMEKU0W0kI4VMeEKy7Y#scrollTo=QqBiMj6Sz9uj',
      },
      {
        name: 'Echo360 Recording',
        link: 'https://echo360.org/media/bbdf62e8-7534-4a9e-9bd9-5822cad3dd07/public',
      },
    ],
  },
  {
    image: '/images/lectures/reinforcement_Learning.png',
    title: 'Reinforcement Learning',
    description:
      'Learn about the basics of RL which was invented at UMass Amherst! Specific topics are Q-Learning, Tabular Reinforcement, and Function Approximation.',
    lecturers: ['Aadam Lokhandwala'],
    hrefs: [],
  },
  {
    image: '/images/lectures/deep_reinforcement_learning.jpg',
    title: 'Deep Reinforcement Learning',
    description: 'Dive deeper into the previous talk on RL and learn Deep-Q Network and Proximal Policy Optimization.',
    lecturers: ['Ryan Bahlous-Boldi'],
    hrefs: [
      { name: 'Google Colab Demo', link: 'https://colab.research.google.com/drive/19DiVgKY9ffo6ofdeqtASbgth8FJZRpMw' },
    ],
  },
  {
    image: '/images/lectures/nlp.png',
    title: 'Natural Language Processing (NLP)',
    description:
      'Learn about the basics of NLP and how it is used in the real world. Specific topics are Basic NLP, Recurrent NNs (RNNs), and Long Short-Term Memory (LSTM).',
    lecturers: ['Ruichira Sharma'],
    hrefs: [],
  },
  {
    image: '/images/lectures/evolution.png',
    title: 'Evolutionary Computation',
    description:
      'Learn about the basics of Evolutionary Computation from Ryan, a leading researcher in the field! Specific topics include: NeuroEvolution of Augmenting Topologies (NEAT), HyperNEAT, Covariance Matrix Adaptation Evolution Strategy',
    lecturers: ['Ryan Bahlous-Boldi'],
    hrefs: [],
  },
  {
    image: '/images/lectures/recommender.jpg',
    title: 'Recommender Systems',
    description:
      'Ever wonder how Netflix and YouTube recommend content? This lecture is all about understanding how Information Retrieval and Recommender Systems work.',
    lecturers: ['Kim'],
    hrefs: [],
  },
];
