import { useCallback, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../../lib/store/store"
import { useNavigate, useParams } from "react-router-dom"
import CommonLayout from "../../../components/layout/CommonLayout"
import { selectedTopic, setTopicsList } from "../../../../lib/store/Features/TopicsSlice"
import { fetchTopics } from "../../../../lib/axios/api/topics"
import MetaDataWrapper from "../../../components/layout/MetaDataWrapper"

function TopicDetails() {
  const navigate = useNavigate()
  const { slug } = useParams<{ slug: string }>()
  const currentTitle = slug?.split("-").join(" ") ?? ""

  const dispatch = useAppDispatch()
  const topicDetails = useAppSelector(s => s.topics.selectedTopic)
  const topicList = useAppSelector(s => s.topics.topics)

  const loadTopics = useCallback(async () => {
    try {
      const data = await fetchTopics()
      if (data) {
        dispatch(setTopicsList(data))
      }
    } catch (err) {
      console.error(err)
    }
  }, [dispatch])

  useEffect(() => {
    if (!slug) {
      navigate("/topics")
    }

    // if topics not loaded yet, fetch them
    if (!topicList || Object.keys(topicList).length === 0) {
      loadTopics()
      return
    }

    // find the topic that matches current slug
    const allTopics = Object.values(topicList).flat()
    const normalize = (str: string) =>
      str.toLowerCase().replace(/[^a-z0-9 ]/gi, "");

    const matched = allTopics.find(
      item => normalize(item.title) === normalize(currentTitle)
    );
    if (matched) {
      dispatch(selectedTopic(matched))
    }
  }, [slug, topicList, currentTitle, loadTopics, dispatch, navigate])

  return (
    <MetaDataWrapper titleDynamic={topicDetails?.meta_title} desciptionDynamic={topicDetails?.meta_description}>
      <CommonLayout>

        <article className="py-6" dangerouslySetInnerHTML={{ __html: topicDetails?.content ?? "" }} />
      </CommonLayout>
    </MetaDataWrapper>
  )
}

export default TopicDetails
