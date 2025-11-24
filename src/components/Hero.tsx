import { Button } from './ui/button'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
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
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-xl">
             {/* Placeholder for user image */}
             <img src="https://github.com/shadcn.png" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
