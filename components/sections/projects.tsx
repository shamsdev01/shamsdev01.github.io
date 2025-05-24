'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Code } from 'lucide-react';
import Image from 'next/image';

type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  category: 'frontend' | 'fullstack' | 'mobile';
};

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with product management, user authentication, and payment processing capabilities.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    githubUrl: '#',
    liveUrl: '#',
    category: 'fullstack',
  },
  {
    id: 2,
    title: 'Real-Time Dashboard',
    description: 'An interactive dashboard for monitoring business analytics with real-time data visualization and customizable widgets.',
    technologies: ['Next.js', 'TypeScript', 'Socket.io', 'D3.js', 'Tailwind CSS'],
    image: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    githubUrl: '#',
    liveUrl: '#',
    category: 'frontend',
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A collaborative task management application with features for organizing projects, assigning tasks, and tracking progress.',
    technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
    image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    githubUrl: '#',
    liveUrl: '#',
    category: 'mobile',
  },
  {
    id: 4,
    title: 'Social Media Platform',
    description: 'A social networking platform with real-time messaging, post sharing, and content discovery features.',
    technologies: ['React', 'GraphQL', 'Apollo', 'PostgreSQL', 'AWS'],
    image: 'https://images.pexels.com/photos/935979/pexels-photo-935979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    githubUrl: '#',
    liveUrl: '#',
    category: 'fullstack',
  },
  {
    id: 5,
    title: 'AI Content Generator',
    description: 'An AI-powered application that generates various types of content including articles, social media posts, and product descriptions.',
    technologies: ['TypeScript', 'OpenAI API', 'Next.js', 'Tailwind CSS'],
    image: 'https://images.pexels.com/photos/4050312/pexels-photo-4050312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    githubUrl: '#',
    liveUrl: '#',
    category: 'frontend',
  },
  {
    id: 6,
    title: 'Fitness Tracking Mobile App',
    description: 'A mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations.',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux'],
    image: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    githubUrl: '#',
    liveUrl: '#',
    category: 'mobile',
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<string>('all');
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary glow shadow-primary">
              My Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work across various technologies and domains.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'frontend', 'fullstack', 'mobile'].map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card group bg-card rounded-lg overflow-hidden border border-border relative h-full"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ 
                  boxShadow: `0 0 20px 0 hsla(var(--primary) / 0.2)`,
                  borderColor: 'hsla(var(--primary) / 0.5)'
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
                  
                  {/* Overlay with links */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/80 backdrop-blur-sm">
                    <div className="flex gap-4">
                      <motion.a
                        href={project.githubUrl}
                        className="h-12 w-12 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="h-5 w-5" />
                      </motion.a>
                      <motion.a
                        href={project.liveUrl}
                        className="h-12 w-12 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="h-5 w-5" />
                      </motion.a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-block px-3 py-1 text-xs font-medium bg-muted rounded-full text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Code-like overlay effect */}
                <div className="absolute inset-0 opacity-0 pointer-events-none group-hover:opacity-20 transition-opacity duration-500">
                  <div className="p-4 font-mono text-xs text-primary/70 whitespace-pre overflow-hidden">
                    {`function ${project.title.replace(/\s+/g, '')}() {
  const technologies = [${project.technologies.map(t => `'${t}'`).join(', ')}];
  const result = technologies.map(tech => 
    implement(tech)
  );
  return buildAwesomeProject(result);
}`}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}