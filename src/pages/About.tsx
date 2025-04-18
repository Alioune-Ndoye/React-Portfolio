export default function About() {
  return (
    <section className="about">
      <h2>About Me</h2>
      <div className="about-content" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        
        {/* Image Section */}
        <div className="avatar">
          <img 
            src="/images/ali.jpeg" 
            alt="Alioune Ndoye" 
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              objectFit: "cover"
            }}
          />
        </div>

        {/* Bio Section */}
        <div className="bio">
          <p>
            Hi! I'm a passionate developer with expertise in modern web technologies.
            I love creating clean, efficient, and user-friendly applications.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or learning about UX design.
          </p>
        </div>

      </div>
    </section>
  );
}
