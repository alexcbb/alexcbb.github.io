// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'alexcbb', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
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
        projects: ['alexcbb/gitprofile', 'alexcbb/LeCopain', 'alexcbb/Genie-Generative-Interactive-Environments'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
  },
  seo: {
    title: 'Portfolio of Alexandre Chapin',
    description: 'Third year PhD student at Ecole Centrale de Lyon.',
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
      company: 'Summer jobs',
      position: 'Working in the crop fields, working in a cheese factory, and working in a bank during the summer holidays.',
      from: 'July 2015-2019',
      to: 'August 2015-2019',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2015',
      to: '2019',
    },
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: '2012',
      to: '2014',
    },
  ],
  publications: [
    {
      title: 'Object-Centric Representations Improve Policy Generalization in Robot Manipulation',
      conferenceName: 'Preprint',
      journalName: '',
      authors: 'Alexandre Chapin, Bruno Machado, Emmanuel Dellandrea, Liming Chen',
      link: 'https://hal.science/view/index/docid/5062038',
      description:
        'Visual representations are central to the learning and generalization capabilities of robotic manipulation policies. While existing methods rely on global or dense features, such representations often entangle task-relevant and irrelevant scene information, limiting robustness under distribution shifts. In this work, we investigate object-centric representations (OCR) as a structured alternative that segments visual input into a finished set of entities, introducing inductive biases that align more naturally with manipulation tasks. We benchmark a range of visual encoders-object-centric, global and dense methods-across a suite of simulated and real-world manipulation tasks ranging from simple to complex, and evaluate their generalization under diverse visual conditions including changes in lighting, texture, and the presence of distractors. Our findings reveal that OCR-based policies outperform dense and global representations in generalization settings, even without task-specific pretraining. These insights suggest that OCR is a promising direction for designing visual systems that generalize effectively in dynamic, real-world robotic environments.',
    },
    {
      title: 'Is an object-centric representation beneficial for robotic manipulation ?',
      conferenceName: 'ROBOVIS 2025',
      journalName: '',
      authors: 'Alexandre Chapin, Emmanuel Dellandrea, Liming Chen',
      link: 'https://hal.science/view/index/docid/5062028',
      description:
        'Object-centric representation (OCR) has recently become a subject of interest in the computer vision community for learning a structured representation of images and videos. It has been several times presented as a potential way to improve data-efficiency and generalization capabilities to learn an agent on downstream tasks. However, most existing work only evaluates such models on scene decomposition, without any notion of reasoning over the learned representation. Robotic manipulation tasks generally involve multi-object environments with potential inter-object interaction. We thus argue that they are a very interesting playground to really evaluate the potential of existing object-centric work. To do so, we create several robotic manipulation tasks in simulated environments involving multiple objects (several distractors, the robot, etc.) and a high-level of randomization (object positions, colors, shapes, background, initial positions, etc.). We then evaluate one classical object-centric method across several generalization scenarios and compare its results against several state-of-the-art hollistic representations. Our results exhibit that existing methods are prone to failure in difficult scenarios involving complex scene structures, whereas object-centric methods help overcome these challenges.',
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
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

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
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
