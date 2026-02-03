export default function App() {
  return (
    <div className="min-h-screen bg-white text-black px-6 py-20 md:px-12 md:py-32">
      <div className="max-w-2xl mx-auto space-y-16">
        {/* Company name */}
        <h1 className="text-[2rem] leading-[1.2] tracking-tight">
          Stach LTD
        </h1>

        {/* Main description */}
        <div className="space-y-6">
          <p className="text-[1rem] leading-[1.75] text-black/80 font-bold">
            I've over 20 years of experience helping businesses to innovate, grow, and succeed, I bring a strategic approach to creating user-centred digital products. My expertise is supported by a deep understanding of agile, lean, and pragmatic methodologies; data-driven decision-making; and cross-functional team leadership.
          </p>
          <p className="text-[1rem] leading-[1.75] text-black/80">
            From startups to long-established companies, I am able to develop and lead your product strategy and enhance user experiences for real, measurable results.
          </p>
        </div>

        {/* Recent clients */}
        <div className="space-y-4">
          <h2 className="text-[1rem] leading-[1.75] text-black">
            Recent clients
          </h2>
          <div className="space-y-3 text-[1rem] leading-[1.75] text-black/70">
            <li>IG Group, Office of the CEO &mdash; Skunkworks B2C iOS project (Oct 24 to March 25)</li>
            <li>Artsy, supporting VP Product &mdash; Interim Director of Product Design & Research (Sept 25 to Dec 25)</li>
          </div>
        </div>

        {/* Side projects */}
        <div className="space-y-4">
          <h2 className="text-[1rem] leading-[1.75] text-black">
            Side projects
          </h2>
          <div className="space-y-3 text-[1rem] leading-[1.75] text-black/70">
            <p>I'm constantly exploring new ideas and building tools that push the boundaries of design and development. Here's what I'm currently working on:</p>
          </div>
          <div className="space-y-3 text-[1rem] leading-[1.75] text-black/70">
            <li>2026 &mdash; <strong className="text-black/70 font-semibold"><a href="https://b2.stach.ltd" title="">B2</a></strong>, a macOS app. B2 is a fast, lightweight spreadsheet that lives in your menubar. A spreadsheet for thinking, not reporting.</li>
            <li>2025 &mdash; <strong className="text-black/70 font-semibold"><a href="https://www.figma.com/community/plugin/1496924636095373164/ctrlfrk-grad" title="">GRAD</a></strong>, a Figma plugin. GRAD gives you unprecedented control over colour transitions through the power of Bezier curves.</li>
            <li>2025 &mdash; <strong className="text-black/70 font-semibold"><a href="https://colourtool.stach.co.uk" title="">Colourtool</a></strong>, a utility for designers to create and manage accessible colour palettes</li>
          </div>
        </div>

        {/* How I can help */}
        <div className="space-y-4">
          <h2 className="text-[1rem] leading-[1.75] text-black">
            How I can help
          </h2>
          <div className="space-y-3 text-[1rem] leading-[1.75] text-black/70">
            <h3 className="text-[1rem] leading-[1.75] text-black/70">Product design and development</h3>
            <p>From concept to launch, I collaborate closely with you to shape products that resonate with your users and achieve your business goals. My approach combines user-centred design principles with practical, data-driven insights to ensure every product delivers on its promise.</p>
            <h3 className="text-[1rem] leading-[1.75] text-black/70">Building and leading teams</h3>
            <p>A strong product team is at the heart of every successful product. I work with you to set up or reorganise teams that excel, leveraging my background in team leadership and design systems implementation to foster collaboration and innovation.</p>
            <h3 className="text-[1rem] leading-[1.75] text-black/70">Identifying new product opportunities</h3>
            <p>With a proven track record in launching successful new product lines, I help you identify and act on new opportunities that align with your brand and business objectives. Together, we'll create a roadmap for sustainable growth and innovation.</p>
            <h3 className="text-[1rem] leading-[1.75] text-black/70">Streamlining operations for efficiency</h3>
            <p>Organisational clarity and efficiency drive lasting impact. I offer guidance on optimising team processes, ensuring transparency, accountability, and smoother workflows across your product development and design functions.</p>
          </div>
        </div>

        {/* Contact */}
        <div className="pt-8 space-y-3">
          <div>
            <a 
              href="mailto:hello@stach.ltd" 
              className="text-[1rem] leading-[1.75] text-black hover:text-black/60 transition-colors underline decoration-black/20 hover:decoration-black/40 underline-offset-4"
            >
              hello@stach.ltd
            </a>
          </div>
          <div>
            <a 
              href="https://www.linkedin.com/in/justinstach" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[1rem] leading-[1.75] text-black hover:text-black/60 transition-colors underline decoration-black/20 hover:decoration-black/40 underline-offset-4"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Company registration */}
        <div className="pt-16 text-[0.875rem] leading-[1.75] text-black/40 space-y-1">
          <p>Company Registration No: 16046981</p>
          <p>Registered Office: 27 Mortimer Street, London, W1T 3BL, United Kingdom</p>
        </div>
      </div>
    </div>
  );
}