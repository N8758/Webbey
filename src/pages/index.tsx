import Navbar from "@components/Navbar";
import Hero from "@components/Hero";
import ContactForm from "@components/ContactForm";
import Newsletter from "@components/Newsletter";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mt-16">
        <Hero />
        <section className="py-12 bg-white">
          <h2 className="text-center text-3xl font-bold mb-6">Get in Touch</h2>
          <ContactForm />
        </section>
        <section className="py-12 bg-gray-100">
          <Newsletter />
        </section>
      </main>
      <Footer />
    </>
  );
}
