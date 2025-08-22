import React from 'react';
import Title from '../other/Title';

const JournalParticulars: React.FC = () => {
  return (
    <section className="leading-relaxed space-y-6 text-base 2xl:text-lg text-[#333333]">
      <Title>Journal Particulars</Title>
      <div className="grid grid-cols-1 gap-8 text-sm xl:text-base 2xl:text-lg leading-relaxed">
        <div className="space-y-2">
          <p className='text-paragraph'><span className="font-semibold text-primary-text">Title :</span>Indian Journal of Computer Science and Technology</p>
          <p className='text-paragraph'><span className="font-semibold text-primary-text">Frequency :</span> 3 issues per year</p>
          <p className='text-paragraph'><span className="font-semibold text-primary-text">ISSN :</span> 2583-5300</p>
          <p className='text-paragraph'><span className="font-semibold text-primary-text">Publisher :</span> Fifth Dimension Research Publication (P) Ltd.</p>
          <p className='text-paragraph'><span className="font-semibold text-primary-text">Editor–in–Chief :</span> Dr. S. Sivaganesan (Professor & Head)</p>
          <p className='text-paragraph'><span className="font-semibold text-primary-text">Copyright :</span> Fifth Dimension Research Publication (P) Ltd.</p>
          <p className='text-paragraph'><span className="font-semibold text-primary-text">Starting Year :</span> 2022</p>
          <p className='text-paragraph'><span className="font-semibold text-primary-text">Subject :</span> Computer Science and Technology</p>
          <p className='text-paragraph'><span className="font-semibold text-primary-text">DOI :</span> 10.59256/indjcst</p>
          <p className='text-paragraph'><span className="font-semibold text-primary-text">Language :</span> English</p>
          <p className='text-paragraph'><span className="font-semibold text-primary-text">Publication Format :</span> Online</p>
          <p className='text-paragraph'><span className="font-semibold text-primary-text">Mobile No :</span> +91 9840521421</p>
          <p className='text-paragraph'><span className="font-semibold text-primary-text">Email-ID :</span> editorinchief@indjcst.com</p>
          <p className='text-paragraph'><span className="font-semibold text-primary-text">Website :</span> www.indjcst.com</p>
        
          <p className='text-paragraph'><span className="font-semibold text-primary-text">Address :</span> Fifth Dimension Research Publication (P) Ltd. No: 38D5F, Rajaji Nagar, Ariyalur–621713. Tamilnadu, India.</p>
        </div>
      </div>
    </section>
  );
};

export default JournalParticulars;
