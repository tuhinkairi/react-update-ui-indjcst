import { Link } from "react-router-dom";

const publications = [
  {
    title: 'Implementation Paper on Contactless Heart-Beat Detection Using Image Processing',
    id: '146',
    ink: "/archives/paper-details?paperid=146&papertitle=Implementation-Paper-on-Contactless-Heart-Beat-Detection-Using-Image-Processing"
  },
  {
    title: 'Genius AI: A Survey on Empowering Next-Generation Content Creation with API-Driven Models',
    id: '147',
    ink: "/archives/paper-details?paperid=147&papertitle=Genius-AI%3A-A-Survey-on-Empowering-Next-Generation-Content-Creation-with-API-Driven-Models"
  },
  {
    title: 'ITipy Do – A Digital Tipping Platform',
    id: '148',
    ink: "/archives/paper-details?paperid=148&papertitle=Tipy-Do-%E2%80%93-A-Digital-Tipping-Platform"
  },
];

export default function LatestPublication() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-[0px_0px_40px_5px_rgba(0,0,0,0.08)] p-6 space-y-6">
      <h2 className="text-center text-lg xl:text-xl capitalize font-semibold text-dark">Latest Publication</h2>

      {publications.map((pub, index) => (
        <div key={index} className="space-y-2">
          <Link aria-label="link" to={pub.ink}>
            <h3 className="text-sm 2xl:text-base text-gray-800">{pub.title}</h3>
            <h3 className="text-sm 2xl:text-base font-medium text-primary">Paper ID : {pub.id}</h3>
            {index !== publications.length - 1 && (
              <hr className="border-gray-300 mt-2" />
            )}
          </Link>
        </div>
      ))}
    </div>
  );
}
