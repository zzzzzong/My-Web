import Image from "next/image"
import { Github, Mail, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2 font-bold" href="/">
              <span>Caius Yang </span>
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a className="transition-colors hover:text-foreground/80" href="#about">
                About
              </a>
              <a className="transition-colors hover:text-foreground/80" href="#experience">
                Experience
              </a>
              <a className="transition-colors hover:text-foreground/80" href="#education">
                Education
              </a>
              <a className="transition-colors hover:text-foreground/80" href="#skills">
                Skills
              </a>
              <a className="transition-colors hover:text-foreground/80" href="#contact">
                Contact
              </a>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Button variant="outline" size="icon" className="ml-auto hidden md:flex">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Contact</span>
              </Button>
            </div>
            <nav className="flex items-center">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Caius Yang</h1>
                  <p className="text-xl text-muted-foreground">Data Analyst & Junior Web Developer</p>
                </div>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Passionate about creating efficient, user-friendly applications that solve real-world problems. With
                  expertise in modern web technologies and a keen eye for design.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <a href="#contact">Contact Me</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="#experience">View My Work</a>
                  </Button>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Profile"
                className="mx-auto aspect-square overflow-hidden rounded-full object-cover border-4 border-border lg:order-last"
                priority
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Get to know me better - my background, interests, and what drives me.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Personal Information</h3>
                  <p className="text-muted-foreground">
                    I'm a software engineer with a passion for creating elegant solutions to complex problems. When I'm
                    not coding, you can find me exploring new hiking trails, reading science fiction, or experimenting
                    with new recipes in the kitchen.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Hobbies & Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Photography</Badge>
                    <Badge>Hiking</Badge>
                    <Badge>Reading</Badge>
                    <Badge>Cooking</Badge>
                    <Badge>Travel</Badge>
                    <Badge>Chess</Badge>
                  </div>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="About me"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              />
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Work Experience</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  My professional journey and the companies I've worked with.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12">
              <ExperienceCard
                title="Senior Software Engineer"
                company="Tech Solutions Inc."
                period="2020 - Present"
                description="Led the development of a customer-facing web application that increased user engagement by 40%. Mentored junior developers and implemented best practices for code quality and testing."
                technologies={["React", "Node.js", "TypeScript", "AWS"]}
              />
              <ExperienceCard
                title="Web Developer"
                company="Digital Creations"
                period="2018 - 2020"
                description="Developed responsive websites for clients across various industries. Collaborated with designers to implement pixel-perfect UIs and optimize for performance."
                technologies={["JavaScript", "HTML/CSS", "PHP", "WordPress"]}
              />
              <ExperienceCard
                title="Junior Developer"
                company="StartUp Innovations"
                period="2016 - 2018"
                description="Assisted in the development of a mobile application. Worked on bug fixes and feature implementations under senior guidance."
                technologies={["JavaScript", "React Native", "Firebase"]}
              />
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Education</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  My academic background and continuous learning journey.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12">
              <EducationCard
                degree="Master of Science in Computer Science"
                institution="Tech University"
                period="2014 - 2016"
                description="Specialized in Software Engineering with focus on web technologies and distributed systems."
              />
              <EducationCard
                degree="Bachelor of Science in Computer Science"
                institution="State University"
                period="2010 - 2014"
                description="Graduated with honors. Participated in coding competitions and hackathons."
              />
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Certifications & Programs</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <h4 className="font-bold">AWS Certified Solutions Architect</h4>
                        <p className="text-sm text-muted-foreground">Amazon Web Services, 2022</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <h4 className="font-bold">Full Stack Web Development</h4>
                        <p className="text-sm text-muted-foreground">Coding Bootcamp, 2019</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <h4 className="font-bold">Machine Learning Specialization</h4>
                        <p className="text-sm text-muted-foreground">Online Course, 2021</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <h4 className="font-bold">UI/UX Design Fundamentals</h4>
                        <p className="text-sm text-muted-foreground">Design Institute, 2020</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Skills</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Technical skills and expertise I've developed throughout my career.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <Tabs defaultValue="technical" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="technical">Technical</TabsTrigger>
                  <TabsTrigger value="soft">Soft Skills</TabsTrigger>
                  <TabsTrigger value="tools">Tools & Software</TabsTrigger>
                </TabsList>
                <TabsContent value="technical" className="mt-6">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <SkillCard name="JavaScript" level="Expert" />
                    <SkillCard name="TypeScript" level="Advanced" />
                    <SkillCard name="React" level="Expert" />
                    <SkillCard name="Node.js" level="Advanced" />
                    <SkillCard name="HTML/CSS" level="Expert" />
                    <SkillCard name="SQL" level="Intermediate" />
                    <SkillCard name="Python" level="Intermediate" />
                    <SkillCard name="GraphQL" level="Advanced" />
                    <SkillCard name="Next.js" level="Advanced" />
                  </div>
                </TabsContent>
                <TabsContent value="soft" className="mt-6">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <SkillCard name="Communication" level="Expert" />
                    <SkillCard name="Team Leadership" level="Advanced" />
                    <SkillCard name="Problem Solving" level="Expert" />
                    <SkillCard name="Time Management" level="Advanced" />
                    <SkillCard name="Adaptability" level="Expert" />
                    <SkillCard name="Critical Thinking" level="Advanced" />
                  </div>
                </TabsContent>
                <TabsContent value="tools" className="mt-6">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <SkillCard name="Git" level="Expert" />
                    <SkillCard name="VS Code" level="Expert" />
                    <SkillCard name="Docker" level="Intermediate" />
                    <SkillCard name="AWS" level="Advanced" />
                    <SkillCard name="Figma" level="Intermediate" />
                    <SkillCard name="JIRA" level="Advanced" />
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Testimonials</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">What others say about working with me.</p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <ReviewCard
                content="John is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills make him a valuable asset to any team."
                author="Sarah Johnson"
                position="CTO, Tech Solutions Inc."
              />
              <ReviewCard
                content="Working with John was a pleasure. He has a deep understanding of web technologies and always finds elegant solutions to complex problems."
                author="Michael Chen"
                position="Project Manager, Digital Creations"
              />
              <ReviewCard
                content="John's technical expertise and communication skills are outstanding. He not only writes clean code but also explains complex concepts in an easy-to-understand manner."
                author="Emily Rodriguez"
                position="Senior Developer, StartUp Innovations"
              />
              <ReviewCard
                content="I was impressed by John's ability to quickly adapt to new technologies and deliver projects ahead of schedule. Highly recommended!"
                author="David Kim"
                position="Product Owner, Tech Enterprise"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Have a project in mind or want to discuss opportunities? Reach out to me.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Contact Information</h3>
                  <p className="text-muted-foreground">
                    Feel free to reach out through any of these channels. I'll get back to you as soon as possible.
                  </p>
                </div>
                <div className="grid gap-4">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    <a href="mailto:john.doe@example.com" className="hover:underline">
                      john.doe@example.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Linkedin className="h-5 w-5" />
                    <a
                      href="https://linkedin.com/in/johndoe"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      linkedin.com/in/johndoe
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Github className="h-5 w-5" />
                    <a href="https://github.com/johndoe" target="_blank" rel="noreferrer" className="hover:underline">
                      github.com/johndoe
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Send Me a Message</h3>
                </div>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your message"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row md:justify-between">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Caius Yang. All rights reserved.</p>
          <div className="flex gap-4">
            <a
              href="https://github.com/johndoe"
              target="_blank"
              rel="noreferrer"
              className="text-sm hover:underline underline-offset-4"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/johndoe"
              target="_blank"
              rel="noreferrer"
              className="text-sm hover:underline underline-offset-4"
            >
              LinkedIn
            </a>
            <a href="mailto:john.doe@example.com" className="text-sm hover:underline underline-offset-4">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Component for Experience Cards
function ExperienceCard({ title, company, period, description, technologies }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-xl">{title}</h3>
              <span className="text-sm text-muted-foreground">{period}</span>
            </div>
            <p className="font-medium text-muted-foreground">{company}</p>
          </div>
          <p className="text-muted-foreground">{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Component for Education Cards
function EducationCard({ degree, institution, period, description }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-xl">{degree}</h3>
              <span className="text-sm text-muted-foreground">{period}</span>
            </div>
            <p className="font-medium text-muted-foreground">{institution}</p>
          </div>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}

// Component for Skill Cards
function SkillCard({ name, level }) {
  return (
    <Card>
      <CardContent className="p-4 flex justify-between items-center">
        <h4 className="font-medium">{name}</h4>
        <Badge variant={level === "Expert" ? "default" : level === "Advanced" ? "secondary" : "outline"}>{level}</Badge>
      </CardContent>
    </Card>
  )
}

// Component for Review Cards
function ReviewCard({ content, author, position }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-4">
          <p className="italic">"{content}"</p>
          <div>
            <p className="font-medium">{author}</p>
            <p className="text-sm text-muted-foreground">{position}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
