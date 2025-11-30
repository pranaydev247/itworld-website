import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                Get In Touch
              </h1>
              <p className="text-xl text-muted-foreground">
                Have a question or want to discuss how our AI solutions can help you?
                We'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-lg text-foreground">
                For any questions or demos please contact us at{" "}
                <a 
                  href="mailto:contact@ngtl.tech" 
                  className="font-semibold text-primary hover:underline"
                >
                  contact@ngtl.tech
                </a>
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Contact;