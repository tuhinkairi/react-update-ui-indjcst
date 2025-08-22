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
        title: `${path.split("/")[1].toLocaleUpperCase()} | International Journal of Innovative Research in Engineering`,
        description: 'IJIRE (e-ISSN: 2582-8746) is a bi-monthly, peer-reviewed, open-access journal publishing innovative research in Science, Engineering & Technology.',
        canonical: baseUrl,
        meta: {
            charset: 'utf-8',
            name: {
                keywords: 'IJIRE, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
            }
        }
    };
    switch (path) {
        case "/":
            meta =  {
                title: 'IJIRE | International Journal of Innovative Research in Engineering',
                description: 'IJIRE (e-ISSN: 2582-8746) is a bi-monthly, peer-reviewed, open-access journal publishing innovative research in Science, Engineering & Technology.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJIRE, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/ethics":
            meta =  {
                title: 'IJIRE | Ethics & Policies – International Journal of Innovative Research in Engineering',
                description: 'IJIRE upholds strong ethics and policies in publishing, following double-blind peer review and COPE guidelines to ensure integrity, originality, and high-quality research.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJIRE, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/aim-and-scope":
            meta =  {
                title: 'Aim & Scope | IJIRE - Multidisciplinary Journal in Engineering & Technology',
                description: 'IJIRE is a peer-reviewed, open-access journal publishing global research in engineering and technology, offering a platform for academicians and researchers.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJIRE, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/editorial-board":
            meta =  {
                title: 'IJIRE | Editorial Board – International Journal of Innovative Research in Engineering',
                description: 'Meet the distinguished editorial board of IJIRE, comprising renowned academicians, researchers, and experts in engineering and technology who guide and review innovative research.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJIRE, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/peer-review-policy":
            meta =  {
                title: 'IJIRE | Peer Review Policy – International Journal of Innovative Research in Engineering',
                description: 'IJIRE follows a single peer review process to ensure quality, originality, and integrity of research. We publish innovative work in engineering, technology, and related disciplines.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJIRE, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/publication-ethics-policy":
            meta =  {
                title: 'IJIRE | Publication Ethics Policy – Upholding Research Integrity',
                description: 'IJIRE follows COPE and Elsevier guidelines to ensure ethical publishing. Our Publication Ethics Policy defines responsibilities for authors, editors, reviewers, and publishers.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJIRE, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/indexing-and-abstracting":
            meta =  {
                title: 'IJIRE | Indexing & Abstracting – International Journal of Innovative Research in Engineering',
                description: 'Discover IJIRE’s indexing and abstracting details. The journal is listed in leading databases, enhancing visibility, accessibility, and global recognition of published research.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJIRE, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/cross-mark-policy":
            meta =  {
                title: 'IJIRE | Crossmark Policy – Ensuring Research Integrity & Updates',
                description: 'IJIRE follows the CrossMark policy to maintain content integrity. Readers can access the latest article versions, corrections, and updates for reliable academic research.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJIRE, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/impact-factor":
            meta =  {
                title: 'IJIRE | Impact Factor – International Journal of Innovative Research in Engineering',
                description: 'Explore the Impact Factor of IJIRE, a peer-reviewed open-access journal in engineering and technology, highlighting global recognition, research quality, and citation influence.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJIRE, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/FAQs":
            meta =  {
                title: 'IJIRE | Frequently Asked Questions – International Journal of Innovative Research in Engineering',
                description: 'Find answers to common questions about IJIRE, including paper submission, peer review, publication process, indexing, ethics policies, and open-access guidelines.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJIRE, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/journal-publishing-process":
            meta =  {
                title: 'IJIRE | Journal Publishing Process – International Journal of Innovative Research in Engineering',
                description: 'Learn about the IJIRE journal publishing process, from manuscript submission and peer review to acceptance, publication, indexing, and global online access.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJIRE, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/archives":
            meta =  {
                title: 'Archives | IJIRE – Browse Previous Journal Issues',
                description: 'Explore IJIRE’s archives. Access previously published issues by year, volume, and issue. Download peer-reviewed research papers in multidisciplinary fields.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJIRE, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/current-issue":
            meta =  {
                title: 'Current Issue | IJIRE – Latest Research Articles Online',
                description: 'Explore the latest issue of IJIRE. Read recently published peer-reviewed research articles in science, engineering, medicine, and multidisciplinary domains.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJIRE, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/publications":
            meta =  {
                title: 'IJIRE | Thesis Publication – International Journal of Innovative Research in Engineering',
                description: 'Publish your thesis or dissertation with IJIRE, an open-access peer-reviewed journal in engineering and technology. Submit original, plagiarism-free work for global visibility.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJIRE, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/thesis":
            meta =  {
                title: 'Thesis Archives | IJIRE – Published Theses & Dissertations',
                description: 'Explore IJIRE’s Thesis Archives. Download peer-reviewed and published postgraduate and doctoral theses in engineering, science, and multidisciplinary fields.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJIRE, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/conference":
            meta =  {
                title: 'Conference Archives | IJIRE – Published Conference Papers',
                description: 'Explore IJIRE’s conference archives. Access published proceedings, special issues, and papers from national and international academic conferences.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJIRE, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/conference-procedings":
            meta =  {
                title: 'IJIRE | Conference Proceedings – International Journal of Innovative Research in Engineering',
                description: 'IJIRE collaborates with institutions and universities to publish conference proceedings. We offer peer-reviewed, open-access publication for selected high-quality research papers.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJIRE, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/topics":
            meta =  {
                title: 'IJIRE | Research Topics – International Journal of Innovative Research in Engineering',
                description: 'IJIRE publishes research across diverse topics in science, engineering, technology, management, medicine, pharmacy, social sciences, arts, and emerging interdisciplinary fields.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJIRE, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/blogs":
            meta =  {
                title: 'Research Blogs | IJIRE – Insights on Science & Engineering',
                description: 'Read blogs from IJIRE on research trends, publishing tips, engineering breakthroughs, and academic writing to stay updated and improve your research impact.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJIRE, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/call-for-papers":
            meta =  {
                title: 'IJIRE | Call for Papers – International Journal of Innovative Research in Engineering',
                description: 'Submit your research to IJIRE (ISSN: 2582-8746), a peer-reviewed, open-access journal publishing original work in engineering, technology, and interdisciplinary fields.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJIRE, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/instruction-for-author":
            meta =  {
                title: 'IJIRE | Instructions for Authors – International Journal of Innovative Research in Engineering',
                description: 'Read IJIRE author instructions for manuscript preparation, formatting, submission, and publication guidelines in engineering, technology, and multidisciplinary research.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJIRE, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/guidance-for-ems":
            meta =  {
                title: 'IJIRE | Editorial Management System – Article Submission Guidelines',
                description: 'Submit your article to IJIRE through our Editorial Management System. Create an account, choose research area, process mode, and article type for seamless submission.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJIRE, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/paper-status":
            meta =  {
                title: 'IJIRE | Check Article Status – International Journal of Innovative Research in Engineering',
                description: 'Authors can check the status of their submitted articles using login credentials in the IJIRE editorial system for real-time updates on review and publication.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJIRE, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/article-processing-charges":
            meta =  {
                title: 'IJIRE | Article Processing Charges – International Journal of Innovative Research in Engineering',
                description: 'IJIRE charges minimal article processing fees to support open-access publishing. Affordable APCs for Indian and international authors ensure global research accessibility.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJIRE, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/journal-particulars":
            meta =  {
                title: 'IJIRE | Journal Particulars – International Journal of Innovative Research in Engineering',
                description: 'View IJIRE journal particulars including ISSN: 2582-8746, bi-monthly frequency, publisher details, editorial board, DOI, contact information, and publication format.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJIRE, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/downloads":
            meta =  {
                title: 'IJIRE | Downloads – Copyright Form & Manuscript Template',
                description: 'Download IJIRE resources including copyright form and manuscript template. Authors can access required documents for article submission and publication in our journal.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJIRE, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/contact-us":
            meta =  {
                title: 'IJIRE | Contact Us – International Journal of Innovative Research in Engineering',
                description: 'Get in touch with IJIRE for paper submissions, editorial queries, or publication support. Contact us via email, phone, or visit our office in Tamil Nadu, India.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJIRE, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/privacy-policy":
            meta =  {
                title: 'Privacy Policy | IJIRE',
                description: 'Learn how IJIRE handles your personal information, data collection, usage, and security practices.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJIRE, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/terms-and-conditions":
            meta =  {
                title: 'Terms and Conditions | IJIRE',
                description: 'Read the terms governing the use of IJIRE website and services, including author responsibilities and publication policies.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJIRE, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/refund-policy":
            meta =  {
                title: 'Refund Policy | IJIRE',
                description: 'Understand IJIRE\'s refund policy for article processing charges (APCs) after acceptance.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJIRE, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;

        default:
            break;
    }
    return meta;
} 