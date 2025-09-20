import Title2h2 from "../other/Title2h2";

const features = [
  {
    title: "Affordable and Low Cost Computer Science Journals",
    img: "/review.webp", // Replace with actual path
    points: [
      "Strict peer review standards",
      "Multi-disciplinary expert reviewers",
      "Constructive feedback",
    ],
    desc: "Combining an affordable publication model with high visibility, INDJCST offers one of the best platforms among low cost computer science journals.",
  },
  {
    title: "High Visibility and Indexing:",
    img: "/publication.webp",
    points: [
      "Initial response within 12 hours",
      "Review completed in 2–7 days",
      "Final decision within 3–7 days",
    ],
    desc: "Indexed in global repositories including Google Scholar, making it part of the Google Scholar computer science journals list, enhancing discoverability and impact.",
  },
  {
    title: "Fast and Streamlined Publication Process",
    img: "/global.webp",
    points: [
      "Open Access policy",
      "Broad international readership",
      "Policy-maker engagement",
    ],
    desc: "From submission to publication, our fast publication computer science journals list standards mean authors receive decisions within days, ensuring rapid dissemination of research.",
  },
  {
    title: "Comprehensive Coverage",
    img: "/process.webp",
    desc: "Encompassing all research areas, INDJCST is a leading name in the computer science journals list and a key player among journal publication sites for computer science research.",
  },
  // {
  //   title: "Plagiarism Protection",
  //   img: "/protection.webp",
  //   desc: "Rigorous screening maintains academic integrity while our automated systems handle administrative tasks.",
  // },
  // {
  //   title: "COPE Compliance",
  //   img: "/cope.webp",
  //   desc: "We adhere to the highest publication ethics following COPE's Best Practice Guidelines.",
  // },
];

export default function WhyPublishWithUs() {
  return (
    <section className="">
      <div className="">
        {/* <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
          Why Publish With INDJCST?
        </h2> */}
        <Title2h2>
          Why Publish With INDJCST?
        </Title2h2>
        <p className="text-gray-600 mb-10">
          We combine academic excellence with efficient processes to maximize your research impact beyond academia
        </p>

        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((item, idx) => (
            <div key={idx} className="flex  md:flex-col  lg:flex-row  gap-4 bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
              <div className="w-28 md:w-auto lg:w-28  min-w-28 relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="object-center"
                />
              </div>
              <div className="flex flex-col justify-start">
                <h3 className="text-lg 2xl:text-lg font-semibold text-black">{item.title}</h3>
                <p className="text-sm 2xl:text-base text-gray-700 mb-2">{item.desc}</p>
                {item.points && (
                  <ul className="list-disc pl-5 text-sm 2xl:text-base text-gray-600">
                    {item.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:hidden">
          {features.map((item, idx) => (
            <div key={idx} className="flex flex-col bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
              <div className="flex gap-4">

                <div className="w-28 min-w-28 relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="object-center"
                  />
                </div>
                <div className="flex flex-col justify-start">
                  <h3 className="text-lg font-semibold text-black">{item.title}</h3>
                  <p className="text-sm xl:text-base 2xl:text-lg text-gray-700 mb-2">{item.desc}</p>
                </div>
              </div>
              {item.points && (
                <ul className="list-disc pl-5 text-sm 2xl:text-base text-gray-600">
                  {item.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
