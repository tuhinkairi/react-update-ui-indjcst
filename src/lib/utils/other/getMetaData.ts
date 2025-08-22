export interface metaData {
    title: string,
    description: string,
    canonical: string,
    meta: {
        charset: string,
        name: {
            keywords: string
        }
    }
}
export default function getMetaData({path,baseUrl}:{path: string, baseUrl:string}): metaData {
    // console.log(path, baseUrl)
    let meta: metaData = {
        title: `${path.split("/")[1].toLocaleUpperCase()} | The Indian Journal of Computer Science and Technology`,
        description: 'INDJCST (e-ISSN: 2583-5300) is a bi-monthly, peer-reviewed, open-access journal publishing innovative research in Science, Engineering & Technology.',
        canonical: baseUrl,
        meta: {
            charset: 'utf-8',
            name: {
                keywords: 'INDJCST, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
            }
        }
    };
    switch (path) {
        case "/":
            meta =  {
                title: 'INDJCST | The Indian Journal of Computer Science and Technology',
                description: 'INDJCST (e-ISSN: 2583-5300) is a bi-monthly, peer-reviewed, open-access journal publishing innovative research in Science, Engineering & Technology.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'INDJCST, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/ethics":
            meta =  {
                title: 'INDJCST | Ethics & Policies – The Indian Journal of Computer Science and Technology',
                description: 'INDJCST upholds strong ethics and policies in publishing, following double-blind peer review and COPE guidelines to ensure integrity, originality, and high-quality research.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'INDJCST, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/aim-and-scope":
            meta =  {
                title: 'Aim & Scope | INDJCST - Multidisciplinary Journal in Engineering & Technology',
                description: 'INDJCST is a peer-reviewed, open-access journal publishing global research in engineering and technology, offering a platform for academicians and researchers.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'INDJCST, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/editorial-board":
            meta =  {
                title: 'INDJCST | Editorial Board – The Indian Journal of Computer Science and Technology',
                description: 'Meet the distinguished editorial board of INDJCST, comprising renowned academicians, researchers, and experts in engineering and technology who guide and review innovative research.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'INDJCST, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/peer-review-policy":
            meta =  {
                title: 'INDJCST | Peer Review Policy – The Indian Journal of Computer Science and Technology',
                description: 'INDJCST follows a single peer review process to ensure quality, originality, and integrity of research. We publish innovative work in engineering, technology, and related disciplines.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'INDJCST, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/publication-ethics-policy":
            meta =  {
                title: 'INDJCST | Publication Ethics Policy – Upholding Research Integrity',
                description: 'INDJCST follows COPE and Elsevier guidelines to ensure ethical publishing. Our Publication Ethics Policy defines responsibilities for authors, editors, reviewers, and publishers.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'INDJCST, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/indexing-and-abstracting":
            meta =  {
                title: 'INDJCST | Indexing & Abstracting – The Indian Journal of Computer Science and Technology',
                description: 'Discover INDJCST’s indexing and abstracting details. The journal is listed in leading databases, enhancing visibility, accessibility, and global recognition of published research.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'INDJCST, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/cross-mark-policy":
            meta =  {
                title: 'INDJCST | Crossmark Policy – Ensuring Research Integrity & Updates',
                description: 'INDJCST follows the CrossMark policy to maintain content integrity. Readers can access the latest article versions, corrections, and updates for reliable academic research.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'INDJCST, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/impact-factor":
            meta =  {
                title: 'INDJCST | Impact Factor – The Indian Journal of Computer Science and Technology',
                description: 'Explore the Impact Factor of INDJCST, a peer-reviewed open-access journal in engineering and technology, highlighting global recognition, research quality, and citation influence.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'INDJCST, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/FAQs":
            meta =  {
                title: 'INDJCST | Frequently Asked Questions – The Indian Journal of Computer Science and Technology',
                description: 'Find answers to common questions about INDJCST, including paper submission, peer review, publication process, indexing, ethics policies, and open-access guidelines.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'INDJCST, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/journal-publishing-process":
            meta =  {
                title: 'INDJCST | Journal Publishing Process – The Indian Journal of Computer Science and Technology',
                description: 'Learn about the INDJCST journal publishing process, from manuscript submission and peer review to acceptance, publication, indexing, and global online access.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'INDJCST, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/archives":
            meta =  {
                title: 'Archives | INDJCST – Browse Previous Journal Issues',
                description: 'Explore INDJCST’s archives. Access previously published issues by year, volume, and issue. Download peer-reviewed research papers in multidisciplinary fields.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'INDJCST, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/current-issue":
            meta =  {
                title: 'Current Issue | INDJCST – Latest Research Articles Online',
                description: 'Explore the latest issue of INDJCST. Read recently published peer-reviewed research articles in science, engineering, medicine, and multidisciplinary domains.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'INDJCST, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/publications":
            meta =  {
                title: 'INDJCST | Thesis Publication – The Indian Journal of Computer Science and Technology',
                description: 'Publish your thesis or dissertation with INDJCST, an open-access peer-reviewed journal in engineering and technology. Submit original, plagiarism-free work for global visibility.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'INDJCST, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/thesis":
            meta =  {
                title: 'Thesis Archives | INDJCST – Published Theses & Dissertations',
                description: 'Explore INDJCST’s Thesis Archives. Download peer-reviewed and published postgraduate and doctoral theses in engineering, science, and multidisciplinary fields.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'INDJCST, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/conference":
            meta =  {
                title: 'Conference Archives | INDJCST – Published Conference Papers',
                description: 'Explore INDJCST’s conference archives. Access published proceedings, special issues, and papers from national and international academic conferences.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'INDJCST, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/conference-procedings":
            meta =  {
                title: 'INDJCST | Conference Proceedings – The Indian Journal of Computer Science and Technology',
                description: 'INDJCST collaborates with institutions and universities to publish conference proceedings. We offer peer-reviewed, open-access publication for selected high-quality research papers.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'INDJCST, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/topics":
            meta =  {
                title: 'INDJCST | Research Topics – The Indian Journal of Computer Science and Technology',
                description: 'INDJCST publishes research across diverse topics in science, engineering, technology, management, medicine, pharmacy, social sciences, arts, and emerging interdisciplinary fields.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'INDJCST, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/blogs":
            meta =  {
                title: 'Research Blogs | INDJCST – Insights on Science & Engineering',
                description: 'Read blogs from INDJCST on research trends, publishing tips, engineering breakthroughs, and academic writing to stay updated and improve your research impact.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'INDJCST, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/call-for-papers":
            meta =  {
                title: 'INDJCST | Call for Papers – The Indian Journal of Computer Science and Technology',
                description: 'Submit your research to INDJCST (ISSN: 2583-5300), a peer-reviewed, open-access journal publishing original work in engineering, technology, and interdisciplinary fields.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'INDJCST, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/instruction-for-author":
            meta =  {
                title: 'INDJCST | Instructions for Authors – The Indian Journal of Computer Science and Technology',
                description: 'Read INDJCST author instructions for manuscript preparation, formatting, submission, and publication guidelines in engineering, technology, and multidisciplinary research.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'INDJCST, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/guidance-for-ems":
            meta =  {
                title: 'INDJCST | Editorial Management System – Article Submission Guidelines',
                description: 'Submit your article to INDJCST through our Editorial Management System. Create an account, choose research area, process mode, and article type for seamless submission.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'INDJCST, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/paper-status":
            meta =  {
                title: 'INDJCST | Check Article Status – The Indian Journal of Computer Science and Technology',
                description: 'Authors can check the status of their submitted articles using login credentials in the INDJCST editorial system for real-time updates on review and publication.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'INDJCST, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/article-processing-charges":
            meta =  {
                title: 'INDJCST | Article Processing Charges – The Indian Journal of Computer Science and Technology',
                description: 'INDJCST charges minimal article processing fees to support open-access publishing. Affordable APCs for Indian and international authors ensure global research accessibility.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'INDJCST, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/journal-particulars":
            meta =  {
                title: 'INDJCST | Journal Particulars – The Indian Journal of Computer Science and Technology',
                description: 'View INDJCST journal particulars including ISSN: 2583-5300, bi-monthly frequency, publisher details, editorial board, DOI, contact information, and publication format.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'INDJCST, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/downloads":
            meta =  {
                title: 'INDJCST | Downloads – Copyright Form & Manuscript Template',
                description: 'Download INDJCST resources including copyright form and manuscript template. Authors can access required documents for article submission and publication in our journal.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'INDJCST, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/contact-us":
            meta =  {
                title: 'INDJCST | Contact Us – The Indian Journal of Computer Science and Technology',
                description: 'Get in touch with INDJCST for paper submissions, editorial queries, or publication support. Contact us via email, phone, or visit our office in Tamil Nadu, India.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'INDJCST, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/privacy-policy":
            meta =  {
                title: 'Privacy Policy | INDJCST',
                description: 'Learn how INDJCST handles your personal information, data collection, usage, and security practices.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'INDJCST, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/terms-and-conditions":
            meta =  {
                title: 'Terms and Conditions | INDJCST',
                description: 'Read the terms governing the use of INDJCST website and services, including author responsibilities and publication policies.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'INDJCST, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/refund-policy":
            meta =  {
                title: 'Refund Policy | INDJCST',
                description: 'Understand INDJCST\'s refund policy for article processing charges (APCs) after acceptance.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'INDJCST, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;

        default:
            break;
    }
    return meta;
} 