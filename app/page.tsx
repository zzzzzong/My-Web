import Image from "next/image"
import { Github, Mail, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SmoothScroll } from "@/components/smooth-scroll"
import { ActiveSectionObserver } from "@/components/active-section-observer"
import { ContactForm } from "@/components/contact-form"
import { ImageGallery } from "@/components/image-gallery"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <SmoothScroll />
      <ActiveSectionObserver />
      {/* Header */}
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="w-full max-w-7xl mx-auto flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <a className="flex items-center space-x-2 font-bold mr-8" href="#hero">
              <span>Caius Yang</span>
            </a>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <a
                className="transition-colors hover:text-foreground/80 relative py-1 px-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-foreground/60 after:transition-all hover:after:w-full"
                href="#about"
              >
                About
              </a>
              <a
                className="transition-colors hover:text-foreground/80 relative py-1 px-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-foreground/60 after:transition-all hover:after:w-full"
                href="#experience"
              >
                Experience
              </a>
              <a
                className="transition-colors hover:text-foreground/80 relative py-1 px-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-foreground/60 after:transition-all hover:after:w-full"
                href="#education"
              >
                Education
              </a>
              <a
                className="transition-colors hover:text-foreground/80 relative py-1 px-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-foreground/60 after:transition-all hover:after:w-full"
                href="#skills"
              >
                Skills
              </a>
              <a
                className="transition-colors hover:text-foreground/80 relative py-1 px-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-foreground/60 after:transition-all hover:after:w-full"
                href="#contact"
              >
                Contact
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon" asChild>
              <a href="#contact">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Contact</span>
              </a>
            </Button>
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
          </div>
        </div>
      </header>

      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section id="hero" className="w-full py-4 md:py-8 lg:py-12 xl:py-16">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Caius Yang</h1>
                  <p className="text-xl text-muted-foreground">Data Analyst & US stock investors</p>
                </div>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Hi, I'm Caius! I work with data. I'm also really into investing in U.S. stocks, and I'm a big fan of
                  milk tea. Want to learn more? Feel free to check out my website!
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button variant="outline" asChild>
                    <a href="#contact">Contact Me</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="#experience">View My Work</a>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <Image
                  src="/images/profile.jpg"
                  width={550}
                  height={550}
                  alt="Caius Yang Profile"
                  className="aspect-square overflow-hidden rounded-full object-cover border-4 border-border max-w-[400px] w-full"
                  style={{ objectPosition: "60% 30%" }}
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-4 md:py-8 lg:py-12 bg-muted/40">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Get to know me better - my background, interests, and what drives me.
                </p>
              </div>
            </div>
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Personal Information</h3>
                  <p className="text-muted-foreground">
                    I'm all about doing my homework before I dive in. Finding patterns in numbers and turning those
                    insights into real value? That's incredibly fulfilling and why I'm into the stock market and
                    aspiring to be an analyst. I love challenging myself, making unfamiliar things my own – every
                    breakthrough feels amazing! This website is a big leap out of my comfort zone, and it'll be a fun
                    space to document my life and challenges.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Hobbies & Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Investing</Badge>
                    <Badge>Working out</Badge>
                    <Badge>Reading</Badge>
                    <Badge>Music</Badge>
                    <Badge>Milk Tea</Badge>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <ImageGallery />
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="w-full py-4 md:py-8 lg:py-12">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Work Experience</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  My professional journey and the companies I've worked with.
                </p>
              </div>
            </div>
            <div className="grid gap-8 max-w-5xl mx-auto">
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
        <section id="education" className="w-full py-4 md:py-8 lg:py-12 bg-muted/40">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Education</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  My academic background and continuous learning journey.
                </p>
              </div>
            </div>
            <div className="grid gap-8 max-w-5xl mx-auto">
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
        <section id="skills" className="w-full py-4 md:py-8 lg:py-12">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Skills</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Technical skills and expertise I've developed throughout my career.
                </p>
              </div>
            </div>
            <div className="max-w-5xl mx-auto">
              <Tabs defaultValue="technical" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="technical">Technical</TabsTrigger>
                  <TabsTrigger value="soft">Soft Skills</TabsTrigger>
                  <TabsTrigger value="tools">Tools & Software</TabsTrigger>
                </TabsList>
                <TabsContent value="technical" className="mt-6 skills-tab-content">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <SkillCard name="Python" level="Expert" />
                    <SkillCard name="R" level="Expert" />
                    <SkillCard name="Excel VbA" level="Advanced" />
                    <SkillCard name="Node.js" level="Advanced" />
                    <SkillCard name="HTML/CSS" level="Expert" />
                    <SkillCard name="SQL" level="Intermediate" />
                    <SkillCard name="Python" level="Intermediate" />
                    <SkillCard name="GraphQL" level="Advanced" />
                    <SkillCard name="Next.js" level="Advanced" />
                  </div>
                </TabsContent>
                <TabsContent value="soft" className="mt-6 skills-tab-content">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <SkillCard name="Communication" level="Expert" />
                    <SkillCard name="Team Leadership" level="Advanced" />
                    <SkillCard name="Problem Solving" level="Expert" />
                    <SkillCard name="Time Management" level="Advanced" />
                    <SkillCard name="Adaptability" level="Expert" />
                    <SkillCard name="Critical Thinking" level="Expert" />
                  </div>
                </TabsContent>
                <TabsContent value="tools" className="mt-6 skills-tab-content">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <SkillCard name="Spyder" level="Expert" />
                    <SkillCard name="JupyterNotebook" level="Expert" />
                    <SkillCard name="RStudio" level="Advanced" />
                    <SkillCard name="Excel" level="Advanced" />
                    <SkillCard name="MySQL" level="Advanced" />
                    <SkillCard name="PowerBI" level="Intermediate" />
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="w-full py-4 md:py-8 lg:py-12 bg-muted/40">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Testimonials</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">What others say about working with me.</p>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 max-w-5xl mx-auto">
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
        <section id="contact" className="w-full py-4 md:py-8 lg:py-12">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Have a project in mind or want to discuss opportunities? Reach out to me.
                </p>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 max-w-5xl mx-auto">
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
                    <a href="mailto:huazong1028@gmail.com" className="hover:underline">
                      huazong1028@gmail.com
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
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center gap-4 px-4 sm:px-6 lg:px-8 md:flex-row md:justify-between">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Caius Yang. All rights reserved.</p>
          <div className="flex gap-4">
            <a
              href="https://github.com/johndoe"
              target="_blank"
              rel="noreferrer"
              className="text-sm transition-colors duration-200 hover:text-foreground/70"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/johndoe"
              target="_blank"
              rel="noreferrer"
              className="text-sm transition-colors duration-200 hover:text-foreground/70"
            >
              LinkedIn
            </a>
            <a
              href="mailto:huazong1028@gmail.com"
              className="text-sm transition-colors duration-200 hover:text-foreground/70"
            >
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
