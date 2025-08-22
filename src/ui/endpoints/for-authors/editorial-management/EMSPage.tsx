import Title from "../../../other/Title";

export default function EMSPage() {
    return (
        <section className="leading-relaxed space-y-6 mb-10  2xl:text-lg">
            <Title>
                Editorial management system
            </Title>
            <article className="space-y-12">
                <div className="_cardSectionEMS items-center gap-y-6 sm:gap-x-6 grid sm:grid-cols-2 justify-between">
                    <div className="textsection space-y-6">
                        <div>
                            <h2 className="font-medium text-lg xl:text-xl 2xl:text-2xl mb-2">1. How to submit article?</h2>
                            <p>Create Account by using Author <span className="text-green-500">Name, email ID, Mobile No</span>. Once Account created, author can enter directly Login Credential. After that, By Using New Submission, author can submit Article.
                                <br />
                                <span className="text-red-500 font-medium">Note:</span> Make sure are you entered <span className="text-green-500">correct email ID, Mobile No</span>. because we will send Notification registered Email, Mobile No.</p>
                        </div>
                        <div>
                            <h2 className="font-medium text-lg xl:text-xl 2xl:text-2xl mb-2">While Submitting Article, author can choose below Details:</h2>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Research Area</li>
                                <li>Mode of Process</li>
                                <li>Type of article</li>
                                <li>Type of Issues</li>
                            </ul>
                        </div>
                    </div>
                    <div className="image flex flex-col gap-8 justify-center">
                        <img loading='lazy'
                            src="/EMS/EMS1.webp" alt="submit article image" />
                        <iframe loading="lazy" height="210" src="https://www.youtube.com/embed/okLj9H5dZbI" title="INDJCST _Article Submission" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                    </div>
                </div>
                <hr className="text-gray-300" />
                <div className="_cardSectionEMS items-center gap-y-6 sm:gap-x-6 grid sm:grid-cols-2 justify-between">
                    <div className="image grid gap-8">
                        <img loading='lazy'
                            src="/EMS/EMS2.webp" alt=" Author can know task Process image" />
                        <div className="image grid gap-4">
                            <iframe loading="lazy" height="210" className="w-full" src="https://www.youtube.com/embed/WiJSjpbj2Ns" title="INDJCST _ Article Review &amp; Acceptance" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                        </div>
                    </div>
                    <div className="textsection space-y-4">
                        <div>
                            <h2 className="font-medium text-lg xl:text-xl 2xl:text-2xl mb-2">2. Author can know task Process?</h2>
                            <p>Yes. Absolutely.
                                <br />
                                <br />
                                After submitted article. Your article under Editorial Check. It can be represented, in terms of Plagiarism Check, Peer-Review etc. Once your article accepted after Review process, Author can view the <span className="text-green-500">Task</span> with Status.
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="text-gray-300" />
                <div className="_cardSectionEMS items-center gap-y-6 sm:gap-x-6 grid sm:grid-cols-2 justify-between">
                    <div className="textsection space-y-4">
                        <div>
                            <h2 className="font-medium text-lg xl:text-xl 2xl:text-2xl mb-2">3. Author can know Review Process?</h2>
                            <p>Yes. Absolutely.
                                <br />
                                <br />

                                After plagiarism Check, Article will assign to reviewer with respective Research area. Once Editorinchief, received response from reviewers. Final Note will be Displayed, Like <span className="text-green-500">-Accept/Accept with minor correction/ Reject</span> notification will send to author.

                            </p>
                        </div>
                    </div>
                    <div className="image grid gap-4">
                        <img loading='lazy'
                            src="/EMS/EMS3.webp" alt="Author can know Review Process image" />
                    </div>
                </div>
                <hr className="text-gray-300" />
                <div className="_cardSectionEMS items-center gap-y-6 sm:gap-x-6 grid sm:grid-cols-2 justify-between">
                    <div className="image grid gap-4">
                        <img loading='lazy'
                            src="/EMS/EMS4.webp" alt="How Author can Know submitted Article Accepted or Not image" />

                    </div>
                    <div className="textsection space-y-4">
                        <div>
                            <h2 className="font-medium text-lg xl:text-xl 2xl:text-2xl mb-2">4. How Author can Know submitted Article Accepted or Not?</h2>
                            <p>
                                Once Reviewer’s Command Satisfactory, Editorinchief will release Acceptance letter along with Tentative Article Publication Scheduled Date through Editorial Office. Author can view in <span className="text-green-500">Acceptance Tap</span>.
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="text-gray-300" />
                <div className="_cardSectionEMS items-center gap-y-6 sm:gap-x-6 grid xl:grid-cols-2 justify-between">
                    <div className="textsection space-y-4">
                        <div>
                            <h2 className="font-medium text-lg xl:text-xl 2xl:text-2xl mb-2">5. What is the Procedure for Accepted Article to be publish?</h2>
                            <p>
                                Once you’re Article Accepted for Publication, Author have to submit below mentioned Documents within a Week.
                                <h2 className="font-medium text-lg xl:text-xl 2xl:text-2xl my-2">a&#41; Final Manuscript</h2>
                                As per <span className="text-green-500">our journal format</span>
                            </p>
                        </div>
                    </div>
                    {/* <div className="image grid gap-4">
                        <img loading='lazy'
                            src="/EMS/EMS5.webp" alt="What is the Procedure for Accepted Article to be publish image" />
                    </div> */}
                </div>
                <hr className="text-gray-300" />
                <div className="_cardSectionEMS items-center gap-y-6 sm:gap-x-6 grid sm:grid-cols-2 justify-between">
                    <div className="image grid gap-4">
                        <img loading='lazy'
                            src="/EMS/EMS5.webp" alt="Copyright Form image" />
                    </div>
                    <div className="textsection space-y-4">
                        <div>
                            <h2 className="font-medium text-lg xl:text-xl 2xl:text-2xl mb-2">b&#41; Copyright Form</h2>
                            <p>
                                (For generating copyright form-Author have to update profile. <span className="text-green-500 font-medium">Like</span>, <span className="text-green-500 font-medium">Address</span>, etc. then only copyright form will <span className="text-green-500 font-medium">generate</span>. Take print out, manually corresponding author have to signature)
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="text-gray-300" />
                <div className="_cardSectionEMS items-center gap-y-6 sm:gap-x-6 grid sm:grid-cols-2 justify-between">
                    <div className="textsection space-y-4">
                        <div>
                            <h2 className="font-medium text-lg xl:text-xl 2xl:text-2xl mb-2">c&#41; Article Processing fee receipt (with DOI, With out DOI)</h2>
                        </div>
                    </div>
                    <div className="image grid gap-8">
                        <img loading='lazy'
                            src="/EMS/EMS6.webp" alt="Copyright Form image" />
                        <div className="image grid gap-4">
                            <iframe height={210} className="w-full" loading="lazy" src="https://www.youtube.com/embed/RUtHKw7v4II" title="INDJCST _ Article Final Submission &amp; Publish" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                        </div>
                    </div>

                </div>
                <div>
                    <h2>
                        <span className="text-red-500 text-lg xl:text-xl 2xl:text-2xl">
                            Note:
                        </span><br />
                        Once we received all necessary Documents. We will process your article. Article will publish with in <span className="text-green-500">24hrs to 48hrs</span>.
                    </h2>
                    <div className="_cardSectionEMS items-center gap-y-6 sm:gap-x-6 grid xl:grid-cols-2 justify-between mt-6">
                        <img loading='lazy'
                            src="/EMS/EMS7.webp" alt="Process verification image 2" />
                        <div>
                            <h2 className="">d&#41; Final Submission Upload your <span className="text-green-500">final article, copyright form, and APC receipt</span>. Verify your uploaded documents, and then click &gt; <span className="text-green-500">Final Submit</span> Button-for final submission.</h2>
                        </div>
                    </div>
                </div>
                <hr className="text-gray-300" />
                <div className="_cardSectionEMS items-center gap-y-6 sm:gap-x-6 grid xl:grid-cols-2 justify-between">
                    <div className="textsection space-y-4">
                        <div>
                            <h2 className="font-medium text-lg xl:text-xl 2xl:text-2xl mb-2">6. Author will get certificates including corresponding authors?</h2>
                            <p>
                                Yes. All author will get certificates. Author can download <span className="text-green-500">file Tab</span>. Also Published Article Copy and Journal Archive link also.

                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}
