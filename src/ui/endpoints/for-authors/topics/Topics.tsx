import CommonLayout from '../../../components/layout/CommonLayout'
import Title from '../../../other/Title'
import TopicCard from './TopicCard'
import { useEffect, useState } from 'react'
import type { TopicsResponse } from '../../../../types/Api'
import { useAppDispatch, useAppSelector } from '../../../../lib/store/store'
import { setTopicsList } from '../../../../lib/store/Features/TopicsSlice'
import { fetchTopics } from '../../../../lib/axios/api/topics'

export default function Topics() {
  const topicList =useAppSelector(s=>s.topics.topics)
  const [topics, setTopics] = useState<TopicsResponse>(topicList)
  const dispatch = useAppDispatch()

  useEffect(() => {
    fetchTopics()
      .then((data) => {
        if (data) {
          setTopics(data)
          dispatch(setTopicsList(data))
        }
      })
      .catch((err) => console.log(err))
  }, [dispatch]) 

  return (
    <CommonLayout>
      <article>
        <Title>Topics</Title>
        <section className="topics mb-4 py-2 grid sm:grid-cols-2 gap-4 justify-center">
          <div className="space-y-8">
            {topics &&
              Object.keys(topics).map((category,index) => (
                index%2===0 && <TopicCard
                  key={category}
                  title={category}
                  Apidata={topics[category]}
                />
              ))}
          </div>
          <div className="space-y-8">
            {topics &&
              Object.keys(topics).map((category,index) => (
                index%2===1 && <TopicCard
                  key={category}
                  title={category}
                  Apidata={topics[category]}
                />
              ))}
          </div>
        </section>
      </article>
    </CommonLayout>
  )
}
