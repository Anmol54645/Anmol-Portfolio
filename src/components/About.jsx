const About = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">
          About Me
        </h2>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-10 shadow-lg">

          <p className="text-gray-300 text-base md:text-lg leading-8 md:leading-9 text-center">
            Hello! I'm <span className="text-blue-400 font-semibold">
              Anmol Kumar Prajapati
            </span>, a passionate Full Stack Developer with expertise in
            React.js, JavaScript, Python, Django, and MySQL.
          </p>

          <p className="text-gray-300 text-base md:text-lg leading-8 md:leading-9 mt-6 text-center">
            I completed my B.Tech in Computer Science & Engineering
            (Data Science) from AKGEC, Ghaziabad. I enjoy building
            responsive, scalable, and user-friendly web applications
            that solve real-world problems.
          </p>

          <p className="text-gray-300 text-base md:text-lg leading-8 md:leading-9 mt-6 text-center">
            My experience includes developing full-stack projects such as
            <span className="text-blue-400 font-medium"> Anmol FinTech</span>,
            <span className="text-blue-400 font-medium"> AnmolTweet</span>,
            and a Quiz Application using modern technologies.
          </p>

          <p className="text-gray-300 text-base md:text-lg leading-8 md:leading-9 mt-6 text-center">
            I am actively seeking opportunities where I can contribute,
            learn from experienced professionals, and grow as a software
            developer.
          </p>

        </div>
      </div>
    </section>
  );
};

export default About;