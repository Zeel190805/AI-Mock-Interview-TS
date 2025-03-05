import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function AboutUsPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">About Our Company</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          We're dedicated to delivering innovative solutions that empower businesses to thrive in the digital age.
        </p>
      </div>

      {/* Our Story */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Our Story</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="mb-4">
              Founded in 2015, our company began with a simple idea: to create technology that makes a difference. What
              started as a small team of passionate developers has grown into a thriving company with clients across the
              globe.
            </p>
            <p>
              Today, we're proud to be at the forefront of the industry, constantly pushing boundaries and exploring new
              possibilities in technology. Our commitment to excellence and innovation drives everything we do.
            </p>
          </div>

        </div>
      </div>

      {/* Our Mission */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg mb-4">
          Our mission is to empower businesses with cutting-edge technology solutions that drive growth, efficiency, and
          innovation. We strive to:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Deliver high-quality, scalable software solutions</li>
          <li>Foster long-term partnerships with our clients</li>
          <li>Stay at the forefront of technological advancements</li>
          <li>Contribute positively to the tech community</li>
        </ul>
      </div>

      {/* Our Team */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Our Team</h2>
        <p className="mb-6">
          Our success is driven by our talented team of professionals who bring diverse skills and perspectives to the
          table.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Zeel Barvaliya", role: "CEO & Founder" },
            // { name: "Michael Chen", role: "CTO" },
            // { name: "Aisha Patel", role: "Lead Developer" },
            // { name: "David Rodriguez", role: "UX Designer" },
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="mb-3">
                <img
                  src="/assets/img/owner.jpg"
                  alt={member.name}
                  width={150}
                  height={100}
                  className="rounded-full mx-auto"
                />
              </div>
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Values */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Our Values</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Innovation</h3>
            <p className="text-muted-foreground">
              We constantly push boundaries and embrace new ideas to solve complex problems.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Excellence</h3>
            <p className="text-muted-foreground">
              We are committed to delivering the highest quality in everything we do.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Collaboration</h3>
            <p className="text-muted-foreground">
              We believe in the power of teamwork and fostering strong partnerships.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Integrity</h3>
            <p className="text-muted-foreground">
              We conduct our business with honesty, transparency, and ethical practices.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Work With Us?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Let's build something amazing together. Contact us today to discuss your project.
        </p>
        <Link to={"/contact"}>
          <Button>
            Contact Us
          </Button>
        </Link>
      </div>
    </div>
  )
}

