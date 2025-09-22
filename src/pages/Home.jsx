export default function Home() {
  const projects = [
    {
      title: "Demo Project 1",
      desc: "A simple project description goes here.",
      link: "#",
    },
    {
      title: "Demo Project 2",
      desc: "Another project description here.",
      link: "#",
    },
  ];

  return (
    <div>
      {/* About Section */}
      <section id="about" className="mb-12">
        <h1 className="text-3xl font-bold mb-2">Hi, I’m Basil</h1>
        <p className="text-gray-700">
          This is my portfolio built with React, Vite, and Tailwind CSS. 🚀
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((p, i) => (
            <div
              key={i}
              className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <h3 className="font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-gray-700 mb-2">{p.desc}</p>
              <a
                href={p.link}
                className="text-cyan-500 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <p>
          Email:{" "}
          <a href="mailto:basil59mutuku@gmail.com" className="text-blue-600">
            basil59mutuku@gmail.com
          </a>
        </p>
        <p className="mt-2">
          GitHub:{" "}
          <a
            href="https://github.com/Breezy-Reese"
            className="text-blue-600"
            target="_blank"
            rel="noreferrer"
          >
            github.com/Breezy-Reese
          </a>
        </p>
      </section>
    </div>
  );
}
