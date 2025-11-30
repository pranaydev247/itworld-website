import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TeamCareers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                Team & Careers
              </h1>
              <p className="text-xl text-muted-foreground">
                Building the future of AI, one problem at a time
              </p>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We are a team of <span className="text-foreground font-semibold">4 globally connected innovators</span> working together at NextGen Tech Labs. 
                  United by a shared vision, we collaborate across time zones to build AI solutions that matter.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our approach is simple yet powerful: <span className="text-foreground font-semibold">we solve the problems we've faced ourselves</span>. 
                  Every product we build stems from real challenges we've encountered in our daily lives—whether in DevOps workflows, 
                  education systems, or online shopping experiences.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe that <span className="text-foreground font-semibold">AI can fundamentally improve lives</span> when applied thoughtfully 
                  to genuine pain points. That's why we don't chase trends—we identify overlooked problems and engineer elegant, 
                  AI-powered solutions that make a tangible difference.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">What Drives Us</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Global Collaboration</h3>
                  <p className="text-muted-foreground">
                    Distance is no barrier. We leverage diverse perspectives to build better products.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Real Problems</h3>
                  <p className="text-muted-foreground">
                    Every product addresses challenges we or our communities have personally experienced.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Impact Over Hype</h3>
                  <p className="text-muted-foreground">
                    We build practical AI solutions that work, not flashy tech demos that disappoint.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Careers Section */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
              <p className="text-lg text-muted-foreground mb-8">
                While we're a lean team right now, we're always open to connecting with talented individuals 
                who share our passion for solving real problems with AI.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Interested in what we're building? Have ideas to share? Reach out—we'd love to hear from you.
              </p>
              <a 
                href="#contact" 
                className="inline-block px-8 py-4 bg-gradient-primary text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TeamCareers;