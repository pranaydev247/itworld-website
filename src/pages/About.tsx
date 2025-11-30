import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ExternalLink } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container px-4 md:px-6 py-20">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Hero Section */}
          <section className="space-y-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">About Us</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At NextGen Tech Labs, we believe that the world's most meaningful progress happens when bold ideas meet intelligent technology.
              We exist to solve niche, high-impact problems using Artificial Intelligence—not as buzzwords, but as practical, scalable solutions that transform everyday experiences for businesses, consumers, and students alike.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From DevOps automation to children's learning to fashion try-ons, our products redefine what's possible when AI is engineered with precision, empathy, and imagination.
            </p>
          </section>

          {/* Mission Section */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To empower people and businesses by building AI-first products that eliminate friction, accelerate outcomes, and unlock new opportunities—across infrastructure, education, and lifestyle.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>We focus on real problems, not vanity tech.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>We build products that work, not prototypes.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>And we deliver innovation that is useful, not overwhelming.</span>
              </li>
            </ul>
          </section>

          {/* Products Section */}
          <section className="space-y-10">
            {/* InfraJet */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🚀</span>
                <h3 className="text-2xl font-bold text-foreground">InfraJet – AI for Faster, Better Cloud Infrastructure</h3>
              </div>
              <a 
                href="https://infrajet.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                infrajet.dev <ExternalLink className="w-4 h-4" />
              </a>
              <p className="text-muted-foreground leading-relaxed">
                InfraJet is our enterprise-grade product built for DevOps, Cloud, and SRE teams.
                It reimagines infrastructure automation by combining:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>AI-driven Terraform and IaC generation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Multi-cloud support for Azure, AWS, and GCP</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Built-in CI/CD testing</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Compliance-aware templates</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>One-click GitHub integration</span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                InfraJet enables teams to go from idea → code → deployment in minutes, helping organisations ship faster, reduce errors, and streamline cloud engineering. It is our flagship demonstration that AI can remove weeks of manual work for engineering teams.
              </p>
            </div>

            {/* PrepStreak */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📘</span>
                <h3 className="text-2xl font-bold text-foreground">PrepStreak – AI-Enhanced Learning for Students</h3>
              </div>
              <a 
                href="https://prepstreak.co.uk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                prepstreak.co.uk <ExternalLink className="w-4 h-4" />
              </a>
              <p className="text-muted-foreground leading-relaxed">
                PrepStreak is our interactive learning platform designed specifically for UK KS2, 11+, and entrance exam students.
                We use AI to create:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Personalised practice</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Daily streak-based motivation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Smart difficulty progression</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Automated explanations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Parent dashboards</span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                PrepStreak makes learning engaging, structured, and measurable, helping children build confidence and master essential maths, English, and reasoning concepts with ease.
              </p>
            </div>

            {/* SareeStage */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">👗</span>
                <h3 className="text-2xl font-bold text-foreground">SareeStage – AI Virtual Saree Try-On</h3>
              </div>
              <a 
                href="https://sareestage.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                sareestage.com <ExternalLink className="w-4 h-4" />
              </a>
              <p className="text-muted-foreground leading-relaxed">
                SareeStage brings the power of AI imaging to fashion.
                Users can instantly visualise sarees on themselves using:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Photo-based virtual try-on</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Real-time camera try-on (AR-style)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>AI-powered saree renderings using model anchoring</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Colour, pattern, and design extraction</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Social-media-share-friendly outputs</span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                This solution bridges the gap between online saree shopping and the in-store draping experience, helping boutiques, designers, and B2C users choose with confidence.
              </p>
            </div>
          </section>

          {/* Philosophy Section */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Our Philosophy</h2>
            <p className="text-muted-foreground leading-relaxed">We follow three guiding principles:</p>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-2">1. Solve Underserved Problems</h4>
                <p className="text-muted-foreground leading-relaxed">
                  We don't chase crowded spaces.
                  We identify niche challenges—where people silently struggle—and build specialised solutions that feel magical.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-2">2. Design for Real Users</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Every product is crafted with deep respect for user needs, simplicity, and intuitive experience.
                  If it's not easy, it's not finished.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-2">3. Build with Speed, Iterate with Purpose</h4>
                <p className="text-muted-foreground leading-relaxed">
                  We believe in fast execution backed by strong engineering.
                  Our cycles are rapid, our experiments thoughtful, and our ambition limitless.
                </p>
              </div>
            </div>
          </section>

          {/* Vision Section */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              To build a global ecosystem of AI-powered products that meaningfully enhance human capability—whether you're deploying cloud infrastructure, preparing for exams, or choosing your next favourite saree.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We envision a future where AI becomes a natural extension of human creativity and decision-making, making life simpler, smarter, and more beautiful.
            </p>
          </section>

          {/* Closing Section */}
          <section className="space-y-6 text-center py-10">
            <h2 className="text-3xl font-bold text-foreground">Join Us on the Journey</h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Whether you're an enterprise engineering leader, an educator, a parent, a fashion brand, or an everyday user—our mission is to empower you through intelligent technology.
            </p>
            <div className="pt-6">
              <p className="text-xl font-semibold text-foreground">NextGen Tech Labs</p>
              <p className="text-muted-foreground">Where AI meets real-world impact.</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
