import Title2 from "../../other/Title2";
import Title2h2 from "../../other/Title2h2";

const AimScope = () => {
  return (
    <div className="space-y-8 text-base 2xl:text-lg">
      {/* Aim Section */}
      <section>
        <Title2>Aim</Title2>
        <p className=" leading-relaxed text-gray-600">
          The The Indian Journal of Computer Science and Technology (INDJCST) is an international journal dedicated to the latest advancements in engineering and technology. This journal aims to provide a platform for scientists and academicians worldwide to promote, share, and discuss various new issues and developments in different areas of engineering and technologies.
        </p>
      </section>

      {/* Scope Section */}
      <section>
        <Title2h2>Scope</Title2h2>
        <p className="leading-relaxed mb-4 text-gray-600">
          The journal's scope is to provide an academic medium and an essential reference for advancing and disseminating research results that support high-level learning, teaching, and research in engineering & technology. We bring together scientists, academicians, engineers, scholars, and students of related fields.
        </p>
        <p className="leading-relaxed text-gray-600">
          The The Indian Journal of Computer Science and Technology (INDJCST) is an open-access, peer-reviewed multidisciplinary publication that offers authors a worldwide platform to share their research articles online. INDJCST adheres to an open-access paradigm that allows for the unrestricted sharing of research papers to the global community via the internet. All articles released under open access can be viewed freely.
        </p>
      </section>
    </div>
  );
};

export default AimScope;
