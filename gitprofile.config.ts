// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'alexcbb', // Your GitHub org/user name. (This is the only required config)
  },
  base: '/',
  projects: {
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'LeCopain',
          description:
            '🤖 What if your robot could play board games ? ♟️ This is what we want to explore with this project. 2nd position at the first Mistral AI Robotic Hackathon in Paris',
          imageUrl:
            'logo_lecopain_notxt.png',
          link: 'https://github.com/alexcbb/LeCopain',
        },
        {
          title: 'LeGobot',
          description:
            'Creation of an automatic pipeline to let robots create pixel art with Lego blocks. Position 22 out 300 teams (top 30 winning teams) at the LeRobot Worldwide Hackathon)',
          imageUrl:
            'logo_legobot.png',
          link: 'https://www.linkedin.com/posts/alexandre-chapin_lerobot-robotics-ai-activity-7340631557629427718-1HPN?utm_source=share&utm_medium=member_desktop&rcm=ACoAACRdK40B9sDtrpwHsZV8ECPIqpld2HOXOos',
        },
        {
          title: 'LeRobot data curation',
          description:
            'Creation of an automatic pipeline to curate datasets for the LeRobot project.',
          imageUrl:
            'lerobot.png',
          link: 'https://huggingface.co/blog/lerobot-datasets',
        },
      ],
    },
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Repo',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['alexcbb/LeCopain', 'alexcbb/Genie-Generative-Interactive-Environments'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
  },
  seo: {
    title: 'Portfolio of Alexandre Chapin',
    description: 'Fourth year PhD student at Ecole Centrale de Lyon (LIRIS lab).',
    imageURL: '',
  },
  social: {
    linkedin: 'alexandre-chapin',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    scholar: 'd-WHKh4AAAAJ',
    huggingFace: 'Beegbrain',
    email: 'alexandre.chapin@ec-lyon.fr',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Pytorch',
    'Tensorflow',
    'C++',
    'C',
    'C#',
    'Java',
    'HTML',
    'CSS',
    'React',
    'Node.js',
    'Git',
    'JavaScript',
  ],
  experiences: [
    {
      company: 'Ecole Centrale de Lyon',
      position: 'PhD student',
      from: 'October 2022',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'IRISA',
      position: 'Research intern',
      from: 'February 2022',
      to: 'September 2022',
      companyLink: '',
    },
    {
      company: 'Inria Rennes',
      position: 'Research intern',
      from: 'June 2021',
      to: 'August 2021',
      companyLink: '',
    },
    {
      company: 'Capgemini',
      position: 'Internship',
      from: 'June 2020',
      to: 'August 2020',
      companyLink: '',
    },
    {
      company: 'Working in the crop fields, working in a cheese factory, and working in a bank during the summer holidays.',
      position: 'Summer jobs (Miscellaneous)',
      from: 'July',
      to: 'August (2015-2019)',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'AI Agents Fundamentals',
      body: 'Hugging Face',
      year: 'April 2025',
      link: 'https://cdn-lfs-us-1.hf.co/repos/f2/34/f2344151f60f6027c436821dc61cf3f27a46435de57df8df50ad02b5acca7c07/3041e08ed83138bd63fb31c81a909d05975ac168abbc91917b9ccdbd9d8bb6bd?response-content-disposition=inline%3B+filename*%3DUTF-8%27%272025-04-21.png%3B+filename%3D%222025-04-21.png%22%3B&response-content-type=image%2Fpng&Expires=1746985187&Policy=eyJTdGF0ZW1lbnQiOlt7IkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc0Njk4NTE4N319LCJSZXNvdXJjZSI6Imh0dHBzOi8vY2RuLWxmcy11cy0xLmhmLmNvL3JlcG9zL2YyLzM0L2YyMzQ0MTUxZjYwZjYwMjdjNDM2ODIxZGM2MWNmM2YyN2E0NjQzNWRlNTdkZjhkZjUwYWQwMmI1YWNjYTdjMDcvMzA0MWUwOGVkODMxMzhiZDYzZmIzMWM4MWE5MDlkMDU5NzVhYzE2OGFiYmM5MTkxN2I5Y2NkYmQ5ZDhiYjZiZD9yZXNwb25zZS1jb250ZW50LWRpc3Bvc2l0aW9uPSomcmVzcG9uc2UtY29udGVudC10eXBlPSoifV19&Signature=pclucy%7EdcnUc1ErIoeG6msmshrwODpCHUeJLa-SZuJAL-xIWDOCp1dHtrpuIL6H0OFJHFana0KriAnXMFly4znKC0mjRP2iqnJVFLtgaLayytar10HUIDDE-ZivJck9YRQKViw0uE7lvgCC5kMFzrJbO9q3OXmmr-O79m%7ETvcJgmlvoQfDEFth41e9Ek4Ppsx-ww%7EvWH9gHvQmKuHrEAb3fKLwJHa4OtT3oaeutyYlAUuXGgrU4KKvDonaKcUnRRaTNOBAOOw%7EflBs1WfyLTPh5QaUrr0Oqkmi5DA7s1nQjGvgoHkAhaZ5aqUnHGkjE9wg%7E5LFrlT2fzHqFRiUmAwQ__&Key-Pair-Id=K24J24Z295AEI9',
    },
  ],
  educations: [
    {
      institution: 'Université de Rennes 1',
      degree: 'Master in Computer Science Research',
      from: '2021',
      to: '2022',
    },
    {
      institution: 'Luleå tekniska universitet',
      degree: 'ERASMUS program',
      from: 'January 2021',
      to: 'June 2021',
    },
    {
      institution: 'INSA (Institut National des Sciences Appliquées) de Rennes',
      degree: 'Graduate Engineering School',
      from: '2017',
      to: '2022',
    },
  ],
  publications: [
    {
      title: 'Robotic Manipulation via Imitation Learning: Taxonomy, Evolution, Benchmark, and Challenges',
      conferenceName: 'Preprint (Under review)',
      journalName: '',
      authors: 'Zezeng Li, Alexandre Chapin, Enda Xiang, Rui Yang, Bruno Machado, Na Lei, Emmanuel Dellandrea, Di Huang, Liming Chen',
      link: 'https://arxiv.org/abs/2508.17449',
      description:
        'This survey focuses on RM methodologies that leverage imitation learning, a powerful technique that allows robots to learn complex manipulation skills by mimicking human demonstrations. We identify and analyze the most influential studies in this domain, selected based on community impact and intrinsic quality. ',
    },
    {
      title: 'Slot-Based Object-Centric Representations Improve Policy Generalization in Robot Manipulation',
      conferenceName: 'Generalizable Priors for Robot Manipulation (CoRL 2025 Workshop)',
      journalName: '',
      authors: 'Alexandre Chapin, Bruno Machado, Emmanuel Dellandrea, Liming Chen',
      link: 'https://arxiv.org/abs/2505.11563',
      description:
        'This work explores object-centric representations (OCR) as a structured alternative to global or dense visual features for robotic manipulation, aiming to improve generalization by disentangling task-relevant information.',
    },
    {
      title: 'Is an object-centric representation beneficial for robotic manipulation ?',
      conferenceName: 'ROBOVIS 2025',
      journalName: '',
      authors: 'Alexandre Chapin, Emmanuel Dellandrea, Liming Chen',
      link: 'https://hal.science/view/index/docid/5062028',
      description:
        'This paper introduces a new multi-object robotic benchmark with progressively increasing levels of difficulty and evaluates the effectiveness of object-centric representations in enhancing robotic manipulation performance.',
    },
    {
      title: 'FruitBin: a tunable large-scale dataset for advancing 6D pose estimation in fruit bin-picking automation',
      conferenceName: 'ECCV 2024 Workshops',
      journalName: '',
      authors: 'Guillaume Duret, Mahmoud Ali, Nicolas Cazin, Danylo Mazurak, Anna Samsonenko, Alexandre Chapin, Florence Zara, Emmanuel Dellandrea, Liming Chen, Jan Peters',
      link: 'https://hal.science/hal-04122072/',
      description:
        'We introduce FruitBin, a dataset featuring over 1 million images and 40 million 6D poses in challenging fruit bin scenarios. FruitBin encompasses all main challenges, such as symmetric and asymmetric fruits, textured and non-textured objects, and varied lighting conditions.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a>`,

  enablePWA: true,
};

export default CONFIG;
