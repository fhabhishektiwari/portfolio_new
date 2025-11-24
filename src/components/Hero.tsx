import { Button } from './ui/button'
import resumeUrl from '../Abhishek_Tiwari_frontend_developer.pdf'
import { FileText } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 text-center md:text-left mb-8 md:mb-0"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-primary">Abhishek</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            A Frontend Developer building beautiful web experiences.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-4 w-4" /> Resume
              </a>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-xl">
             {/* Placeholder for user image */}
             <img src="https://github.com/shadcn.png" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
