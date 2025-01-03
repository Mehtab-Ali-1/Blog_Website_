export interface Comment {
    id: string;
    blogId: number;
    name: string;
    email: string;
    content: string;
    createdAt: string;
  }
  
  export interface BlogPost {
    id: number;
    title: string;
    description: string;
    slug: string;
    date: string;
    author: string;
    image: string;
    content: string;
  }
  
  export const blogs: BlogPost[] = [
    {
      id: 1,
      title: "Getting Started with Next.js",
      description: "Learn the basics of Next.js framework and build modern web applications with React.",
      slug: "getting-started-with-nextjs",
      date: "2024-01-15",
      author: "John Doe",
      image: "/pic4.jpeg",
      content: `
        Next.js is a powerful React framework that makes building web applications easier and more efficient.
        
        In this blog post, we'll cover:
        - Server-side rendering
        - Static site generation
        - API routes
        - File-based routing
        
        Next.js provides an excellent developer experience out of the box, with features like Fast Refresh and automatic code splitting.
      `
    },
    {
      id: 2, 
      title: "Mastering Tailwind CSS",
      description: "Deep dive into Tailwind CSS utility classes and build beautiful responsive layouts.",
      slug: "mastering-tailwind-css", 
      date: "2024-01-12",
      author: "Jane Smith",
      image: "/pic5.jpg",
      content: `
        Tailwind CSS is a utility-first CSS framework that makes styling your applications a breeze.
        
        In this comprehensive guide, we'll explore:
        - Core concepts of utility-first CSS
        - Responsive design with Tailwind
        - Custom configurations
        - Best practices and optimization
      `
    },
    {
      id: 3, 
      title: "Mastering CSS",
      description: "Deep dive into Tailwind CSS utility classes and build beautiful responsive layouts.",
      slug: "mastering-CSS", 
      date: "2024-01-12",
      author: "Jane Smith",
      image: "/pic12.jpg",
      content: `
        CSS is the backbone of web styling, and mastering it is crucial for any web developer.
        
        Key topics covered:
        - CSS Grid and Flexbox
        - CSS Variables
        - Animations and Transitions
        - Advanced Selectors
        - Responsive Design Principles
      `
    },
    {
      id: 4, 
      title: "Mastering HTML",
      description: "Deep dive into Tailwind CSS utility classes and build beautiful responsive layouts.",
      slug: "Mastering-HTML", 
      date: "2024-01-12",
      author: "Jane Smith",
      image: "/pic7.jpg",
      content: `
        HTML is the foundation of the web. This guide covers everything from basics to advanced concepts.
        
        Topics include:
        - Semantic HTML5
        - Accessibility best practices
        - Forms and validation
        - HTML5 APIs
        - SEO optimization
      `
    },
    {
      id: 5, 
      title: "Mastering TypeScript",
      description: "Deep dive into Tailwind CSS utility classes and build beautiful responsive layouts.",
      slug: "Mastering-TypeScript", 
      date: "2024-01-12",
      author: "Jane Smith",
      image: "/pic8.jpg",
      content: `
        TypeScript adds static typing to JavaScript, making your code more robust and maintainable.
        
        We'll explore:
        - Type systems and interfaces
        - Generics
        - Advanced types
        - Decorators
        - Integration with popular frameworks
      `
    },
    {
      id: 6, 
      title: "Mastering Javascript",
      description: "Deep dive into Tailwind CSS utility classes and build beautiful responsive layouts.",
      slug: "Mastering-Javascript", 
      date: "2024-01-12",
      author: "Jane Smith",
      image: "/pic10.jpg",
      content: `
        JavaScript is the programming language of the web. Master its concepts and features.
        
        Key areas covered:
        - ES6+ features
        - Async programming
        - Closures and scope
        - Object-oriented JavaScript
        - Modern JavaScript patterns
      `
    },
    {
      id: 7, 
      title: "Mastering ShadcnUI",
      description: "Deep dive into Tailwind CSS utility classes and build beautiful responsive layouts.",
      slug: "Mastering-ShadcnUI", 
      date: "2024-01-12",
      author: "Jane Smith",
      image: "/pic9.jpg",
      content: `
        shadcn/ui provides beautiful and accessible components for your React applications.
        
        Learn about:
        - Component installation and setup
        - Customization options
        - Theme configuration
        - Building complex UIs
        - Accessibility features
      `
    },
    {
      id: 8, 
      title: "Mastering React",
      description: "Deep dive into Tailwind CSS utility classes and build beautiful responsive layouts.",
      slug: "Mastering-React", 
      date: "2024-01-12",
      author: "Jane Smith",
      image: "/pic11.jpg",
      content: `
        React is a powerful library for building user interfaces. Master its core concepts and advanced features.
        
        Topics covered:
        - Hooks and custom hooks
        - State management
        - Performance optimization
        - Component patterns
        - Testing React applications
      `
    },
    {
      id: 9, 
      title: "Mastering React Native",
      description: "Deep dive into Tailwind CSS utility classes and build beautiful responsive layouts.",
      slug: "Mastering-React-Native", 
      date: "2024-01-12",
      author: "Jane Smith",
      image: "/pic6.jpg",
      content: `
        React Native lets you build mobile applications using React. Learn how to create native apps.
        
        We'll cover:
        - Setting up your development environment
        - Native components
        - Navigation
        - Platform-specific code
        - Publishing your app
      `
    }
  ];
  
  // In-memory storage for comments
  export let comments: Comment[] = [];
  
  