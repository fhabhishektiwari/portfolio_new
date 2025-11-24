import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

export default function About() {
  const skills = ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML/CSS", "JavaScript", "Git"]

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
             <p className="text-lg text-muted-foreground leading-relaxed mb-6">
               I am a passionate Frontend Developer with a keen eye for design and a love for clean, efficient code. 
               I specialize in building responsive and user-friendly web applications using modern technologies like React and Tailwind CSS.
             </p>
             <p className="text-lg text-muted-foreground leading-relaxed">
               When I'm not coding, I enjoy exploring new technologies, contributing to open source, and learning about UI/UX design trends.
             </p>
          </div>
          <div className="md:w-1/2">
            <Card>
              <CardHeader>
                <CardTitle>Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
