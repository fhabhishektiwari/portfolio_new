import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: "E-commerce Dashboard",
    description: "A comprehensive dashboard for managing products, orders, and customers.",
    tags: ["React", "Tailwind", "Recharts"],
    link: "#",
    github: "#"
  },
  {
    title: "Task Management App",
    description: "A drag-and-drop task manager inspired by Trello.",
    tags: ["React", "TypeScript", "Dnd-kit"],
    link: "#",
    github: "#"
  },
  {
    title: "Weather App",
    description: "Real-time weather application using OpenWeatherMap API.",
    tags: ["React", "API", "CSS Modules"],
    link: "#",
    github: "#"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 bg-secondary rounded-md text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
