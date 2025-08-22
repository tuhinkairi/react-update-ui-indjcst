import { Bookmark, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function IndexingCard() {
  return (
    <div className="max-w-md w-full mx-auto rounded-2xl p-6 text-white bg-gradient-to-b from-primary to-primary-hover shadow-md">
      <Link aria-label="link" to="/indexing-and-abstracting">
      <div className="flex items-center gap-3 py-2">
        <Bookmark className="w-6 h-6 text-white" />
        <span className="text-base xl:text-lg 2xl:text-lg font-medium">Indexing</span>
      </div>
      </Link>
      <hr className="my-4 border-white/30" />
      <Link aria-label="link" to="/journal-publishing-process ">
      <div className="flex items-center gap-3 py-2">
        <ShieldCheck className="w-6 h-6 text-white" />
        <span className="text-base xl:text-lg 2xl:text-lg font-medium text-wrap">Journal Publication Process</span>
      </div>
      </Link>
    </div>
  );
}
