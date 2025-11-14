import { useEffect, useState } from 'react';
import CommonLayout from '../../components/layout/CommonLayout';
import { BlogCard } from './BlogCard';
import { Pagination } from '../Editorial/Pagination';  // Reusing same pagination component
import type { Blog as Tag } from '../../../types/Api';
import { fetchTag } from '../../../lib/axios/api/blog';
import { useAppDispatch, useAppSelector } from '../../../lib/store/store';
import { setStoreTagList } from '../../../lib/store/Features/TagSlice';
import { setLoading } from '../../../lib/store/Features/loadingSlice';
import Loading from '../../components/Loading';
import { setCurrentPage, setTotalPages as setTotalPagesAction } from '../../../lib/store/Features/paginationSlice';

export default function Tag() {
    const currentPage = useAppSelector(state=>state.pagination.current_page)
    const [page, setPage] = useState(currentPage);
    const [TagList, setTagList] = useState<Tag[]>(useAppSelector((state) => state.tag.TagList));
    // console.log(TagList)
    const itemsPerPage = 10;
    const [totalPages, setTotalPages] = useState(Math.ceil(TagList.length/itemsPerPage)); // Ensure at least 1 page if no tags
    const dispatch = useAppDispatch();
    const loading = useAppSelector((state) => state.loadingScreen.loading);

    const setActivePage=(p:number)=>{
        setPage(p)
        dispatch(setCurrentPage(p))
    }
    useEffect(() => {
        if (TagList.length == 0) {

            dispatch(setLoading(true));
            fetchTag().then(data => {
                setTagList(data);
                dispatch(setStoreTagList(data));
                dispatch(setLoading(false));
                setTotalPages(Math.ceil(data.length / itemsPerPage));
                dispatch(setTotalPagesAction(Math.ceil(data.length / itemsPerPage)));
            })
        }
        dispatch(setLoading(false));
        // setTotalPages(TagList.length/itemsPerPage)
    }, [dispatch, TagList]);
    // console.log(totalPages)
    const paginatedTags = TagList.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );

    const getVisiblePages = () => {
        const maxVisible = 5;
        if (totalPages <= maxVisible) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        const halfVisible = Math.floor(maxVisible / 2);
        let startPage = Math.max(1, page - halfVisible);
        let endPage = Math.min(totalPages, page + halfVisible);

        if (endPage - startPage + 1 < maxVisible) {
            if (startPage === 1) {
                endPage = Math.min(totalPages, startPage + maxVisible - 1);
            } else if (endPage === totalPages) {
                startPage = Math.max(1, endPage - maxVisible + 1);
            }
        }

        return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    };
    if (loading || TagList.length === 0) {
        return <Loading />
    }
    return (
        <CommonLayout className='bg-white' title='Tag'>
            <section className="grid sm:grid-cols-2 2xl:grid-cols-3 gap-8 justify-center sm:justify-between mb-12">
                {paginatedTags.map((tag, index) => (
                    <BlogCard key={index} blog={tag} keyProp={index} />
                ))}
            </section>

            {totalPages && (
                <Pagination
                    currentPage={page}
                    totalPages={totalPages}
                    onPageChange={setActivePage}
                    rangeList={getVisiblePages()}
                />
            )}
        </CommonLayout>
    );
}
