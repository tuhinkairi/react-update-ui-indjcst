import Title2 from "../../other/Title2";
import Title2h2 from "../../other/Title2h2";

const AimScope = () => {
  return (
    <div className="space-y-8 text-base 2xl:text-lg">
      {/* Aim Section */}
      <section>
        <Title2>Aim</Title2>
        <p className=" leading-relaxed text-gray-600">
          The Indian Journal of Computer Science and Technology (INDJCST) aims to advance research, innovation, and knowledge dissemination in the field of Computer Science and Technology. The journal provides an open-access platform for researchers, academicians, industry professionals, and students to publish their original research findings, review articles, and technical studies. By promoting high-quality research and encouraging scholarly communication, INDJCST supports the growth of scientific inquiry and technological development both in India and globally.
        </p>
      </section>

      {/* Scope Section */}
      <section>
        <Title2h2>Scope</Title2h2>
        <p className="leading-relaxed  text-gray-600">
          The journal covers a broad range of topics related to Computer Science and emerging technologies, including but not limited to:
        </p>
        <ul className="list-disc pl-6 text-gray-600 space-y-3 my-4">
          <li>Artificial Intelligence and Machine Learning</li>
          <li>Data Science and Big Data Analytics</li>
          <li>Internet of Things (IoT)</li>
          <li>Cloud and Edge Computing</li>
          <li>Cybersecurity and Cryptography</li>
          <li>Software Engineering and Programming Languages</li>
          <li>Computer Networks and Network Security</li>
          <li>Image Processing and Computer Vision</li>
          <li>Natural Language Processing</li>
          <li>Human-Computer Interaction</li>
          <li>Web Technologies and Mobile Computing</li>
          <li>Blockchain Technology</li>
          <li>Robotics and Automation</li>
          <li>Embedded Systems</li>
          <li>Computational Intelligence</li>
          <li>Bioinformatics and Health Informatics</li>
          <li>Information Systems and Database Management</li>
        </ul>
        <p className="leading-relaxed mb-4 text-gray-600">INDJCST welcomes interdisciplinary research and encourages submissions that demonstrate practical applications of computing technologies in various domains. All papers undergo a peer-review process, ensuring academic integrity and quality before publication.</p>

      </section>
    </div>
  );
};

export default AimScope;
