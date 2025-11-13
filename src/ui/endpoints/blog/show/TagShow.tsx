import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../lib/store/store';
import CommonLayout from '../../../components/layout/CommonLayout';
import JournalOverview from '../card/JournalOverview';
import { useEffect, useState } from 'react';
import { setLoading } from '../../../../lib/store/Features/loadingSlice';
import { fetchTag } from '../../../../lib/axios/api/blog';
import { setTotalPages } from '../../../../lib/store/Features/paginationSlice';
import type { Blog as Tag } from '../../../../types/Api';
import Loading from '../../../components/Loading';
import MetaDataWrapper from '../../../components/layout/MetaDataWrapper';
import { setStoreTagList, setTag } from '../../../../lib/store/Features/TagSlice';

const TagShow = () => {
  const path = useLocation().pathname;
  const data = useAppSelector((state) => state.tag.activeTag);
  const tagList = useAppSelector((state) => state.tag.TagList);
  const { slug } = useParams<{ slug: string }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setLoading(true));
        setError(null);

        // If we already have blog data and the current blog matches the slug, don't refetch
        if (tagList?.length > 0 && slug) {
          const existingTag = tagList.find(tag => tag.url_title === slug);
          if (existingTag && data?.url_title === slug) {
            return; // Data already loaded and matches
          }
          if (existingTag) {
            dispatch(setTag(existingTag));
            return;
          }
        }

        // Fetch blog data if we don't have it or need to find a specific blog
        const tagData: Tag[] = await fetchTag();

        if (!tagData || tagData.length === 0) {
          setError('No Tags found');
          return;
        }

        dispatch(setStoreTagList(tagData));
        dispatch(setTotalPages(Math.ceil(tagData.length / 10)));

        if (slug) {
          const matchingBlog = tagData.find(Tag => Tag.url_title === slug);
          if (matchingBlog) {
            dispatch(setTag(matchingBlog));
          } else {
            setError('Tag not found');
            // Optionally navigate to blog list or 404 page
            // navigate('/tags');
          }
        }
      } catch (error) {
        console.error('Error fetching blog data:', error);
        setError('Failed to load blog data');
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchData();
  }, [dispatch, slug, navigate, tagList, data?.url_title]);

  // Show error state
  if (error) {
    navigate('/tags');
  }

  // Show loading or empty state when no data
  if (!data?.id && slug) {
    return (
      <Loading title='Blog Details...' />
    );
  }

  return (
    <MetaDataWrapper desciptionDynamic={data?.meta_description?.split(".")[0] ?? 'Blog Details'} titleDynamic={data?.title ?? slug}>
      <CommonLayout className='space-y-6' title={path.includes("blogs")?"Blog":"Tag"}>
        <JournalOverview
          category={data?.category ?? ""}
          title={data?.title ?? ""}
          date={data?.created_at?.split("T")[0] ?? ""}
          description={data?.meta_description ?? ""}
          points={[]}
          other={data?.description ?? ""}
        />
      </CommonLayout>
    </MetaDataWrapper>
  );
};

export default TagShow;