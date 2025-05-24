'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Server, 
  Database, 
  Layout, 
  Smartphone, 
  GitBranch,
  Globe,
  FileJson,
  Cpu,
  Boxes,
  TestTube,
  Workflow,
  PenTool,
  Wrench,
  Gauge,
  BrainCircuit,
  Bot,
  Puzzle,
  Laptop,
  Blocks,
  Braces,
  Webhook,
  Binary,
  Fingerprint,
  Lightbulb
} from 'lucide-react';

type Skill = {
  name: string;
  level: number;  // 0-100
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'mobile' | 'other';
  icon: React.ReactNode;
};

type SkillCategory = {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    icon: <Layout className="h-8 w-8" />,
    skills: [
      { name: 'React', level: 95, category: 'frontend', icon: <Boxes className="h-4 w-4" /> },
      { name: 'TypeScript', level: 90, category: 'frontend', icon: <FileJson className="h-4 w-4" /> },
      { name: 'Next.js', level: 88, category: 'frontend', icon: <Blocks className="h-4 w-4" /> },
      { name: 'CSS/SCSS', level: 92, category: 'frontend', icon: <PenTool className="h-4 w-4" /> },
      { name: 'Tailwind CSS', level: 95, category: 'frontend', icon: <Wrench className="h-4 w-4" /> },
      { name: 'JavaScript', level: 98, category: 'frontend', icon: <Braces className="h-4 w-4" /> },
    ],
  },
  {
    name: 'Backend',
    icon: <Server className="h-8 w-8" />,
    skills: [
      { name: 'Node.js', level: 90, category: 'backend', icon: <Webhook className="h-4 w-4" /> },
      { name: 'Express', level: 88, category: 'backend', icon: <Binary className="h-4 w-4" /> },
      { name: 'REST API', level: 95, category: 'backend', icon: <Globe className="h-4 w-4" /> },
      { name: 'GraphQL', level: 85, category: 'backend', icon: <Cpu className="h-4 w-4" /> },
      { name: 'Python', level: 80, category: 'backend', icon: <Code className="h-4 w-4" /> },
    ],
  },
  {
    name: 'Database',
    icon: <Database className="h-8 w-8" />,
    skills: [
      { name: 'MongoDB', level: 88, category: 'database', icon: <Boxes className="h-4 w-4" /> },
      { name: 'PostgreSQL', level: 85, category: 'database', icon: <Database className="h-4 w-4" /> },
      { name: 'Firebase', level: 92, category: 'database', icon: <Fingerprint className="h-4 w-4" /> },
      { name: 'Redis', level: 75, category: 'database', icon: <Cpu className="h-4 w-4" /> },
    ],
  },
  {
    name: 'DevOps',
    icon: <GitBranch className="h-8 w-8" />,
    skills: [
      { name: 'Git', level: 95, category: 'devops', icon: <GitBranch className="h-4 w-4" /> },
      { name: 'Docker', level: 85, category: 'devops', icon: <Boxes className="h-4 w-4" /> },
      { name: 'CI/CD', level: 82, category: 'devops', icon: <Workflow className="h-4 w-4" /> },
      { name: 'AWS', level: 78, category: 'devops', icon: <Server className="h-4 w-4" /> },
    ],
  },
  {
    name: 'Mobile',
    icon: <Smartphone className="h-8 w-8" />,
    skills: [
      { name: 'React Native', level: 90, category: 'mobile', icon: <Smartphone className="h-4 w-4" /> },
      { name: 'Flutter', level: 75, category: 'mobile', icon: <Laptop className="h-4 w-4" /> },
      { name: 'Responsive Design', level: 95, category: 'mobile', icon: <Layout className="h-4 w-4" /> },
    ],
  },
  {
    name: 'Other',
    icon: <Code className="h-8 w-8" />,
    skills: [
      { name: 'UI/UX Design', level: 88, category: 'other', icon: <PenTool className="h-4 w-4" /> },
      { name: 'Testing', level: 85, category: 'other', icon: <TestTube className="h-4 w-4" /> },
      { name: 'Agile', level: 90, category: 'other', icon: <Puzzle className="h-4 w-4" /> },
      { name: 'Problem Solving', level: 95, category: 'other', icon: <BrainCircuit className="h-4 w-4" /> },
    ],
  },
];

const SkillBar = ({ name, level, icon, index }: Skill & { index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="mb-4 last:mb-0"
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center gap-2">
          <span className="text-primary">{icon}</span>
          <span className="text-sm font-medium">{name}</span>
        </div>
        <span className="text-xs font-medium text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2.5 w-full bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-secondary"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ 
            duration: 1, 
            ease: [0.22, 1, 0.36, 1],
            delay: index * 0.1 + 0.2
          }}
        />
      </div>
    </motion.div>
  );
};

const SkillCategoryCard = ({ category, index }: { category: SkillCategory; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-colors duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center text-primary">
          {category.icon}
        </div>
        <h3 className="text-xl font-bold">{category.name}</h3>
      </div>
      <div className="space-y-4">
        {category.skills.map((skill, idx) => (
          <SkillBar key={skill.name} {...skill} index={idx} />
        ))}
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary glow shadow-primary">
              My Skills
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technical expertise and proficiencies I've developed throughout my career.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard key={category.name} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}