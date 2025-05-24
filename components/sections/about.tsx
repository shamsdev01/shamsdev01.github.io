'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Briefcase, GraduationCap, Award } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

type TimelineItemProps = {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
};

const TimelineItem = ({ year, title, description, icon, index }: TimelineItemProps) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.2
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col md:flex-row gap-4 mb-12 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="flex md:w-1/2">
        <div className={`flex items-center justify-center ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} w-full`}>
          <div className={`bg-muted p-6 rounded-lg max-w-md ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
            <div className="flex items-center gap-2 mb-2 text-primary text-sm font-medium">
              <Calendar className="h-4 w-4" /> {year}
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </div>
      </div>
      <div className="md:w-px flex-shrink-0 bg-border/50 relative flex items-center justify-center">
        <div className="absolute w-10 h-10 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="md:w-1/2" />
    </motion.div>
  );
};

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.4, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  // Timeline data
  const timelineItems = [
    {
      year: '2022 - Present',
      title: 'Senior Software Developer',
      description: 'Leading development of cutting-edge web applications using React, TypeScript, and Next.js. Implementing modern frontend architecture and mentoring junior developers.',
      icon: <Briefcase className="h-5 w-5 text-primary" />,
    },
    {
      year: '2020 - 2022',
      title: 'Software Engineer',
      description: 'Developed robust full-stack applications with Node.js and React. Collaborated with cross-functional teams to deliver high-quality software solutions.',
      icon: <Briefcase className="h-5 w-5 text-primary" />,
    },
    {
      year: '2019 - 2020',
      title: 'Frontend Developer',
      description: 'Created responsive, user-friendly interfaces using modern JavaScript frameworks. Optimized web performance and implemented accessibility standards.',
      icon: <Briefcase className="h-5 w-5 text-primary" />,
    },
    {
      year: '2018',
      title: 'Computer Science Degree',
      description: 'Graduated with honors in Computer Science, specializing in software development and algorithms. Completed multiple advanced projects in web technologies.',
      icon: <GraduationCap className="h-5 w-5 text-primary" />,
    },
  ];

  const [headingRef, headingInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 relative"
    >
      <div className="container mx-auto px-6">
        <motion.div
          ref={headingRef}
          style={{ opacity, scale }}
          className="text-center mb-16"
          variants={headingVariants}
          initial="hidden"
          animate={headingInView ? "visible" : "hidden"}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary glow shadow-primary">About Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about developing software solutions that are both efficient and user-centric. I merge technical proficiency with creative problem-solving to deliver clean, maintainable code that aligns with the latest industry trends.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-border/50"></div>
            
            {/* Timeline items */}
            <div className="relative">
              {timelineItems.map((item, index) => (
                <TimelineItem
                  key={index}
                  year={item.year}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* <motion.div 
          className="mt-16 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-4">My Philosophy</h3>
          <p className="text-muted-foreground">
            I believe in creating software that not only solves problems efficiently but also provides an exceptional user experience. My approach combines technical excellence with creative problem-solving, always staying ahead of industry trends while maintaining a focus on clean, maintainable code.
          </p>
        </motion.div> */}
      </div>
    </section>
  );
}