import { useNavigate } from 'react-router-dom'
import type { TopicType } from '../../../../data/topics'
import { useAppDispatch } from '../../../../lib/store/store'
import { selectedTopic } from '../../../../lib/store/Features/TopicsSlice'
import type { Topic } from '../../../../types/Api'

export default function TopicCard({ title, data, Apidata }: TopicType) {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const handleTitle = (data: Topic) => {
    dispatch(selectedTopic(data))
navigate(`/topics/${data.title.replace(/[^\w\s]/g, "").replace(/\s+/g, "-")}`);  }
  return (
    <div className='leading-relaxed w-fit h-fit '>
      <h2 className='text-lg xl:text-xl 2xl:text-2xl font-bold capitalize mb-2 xl:mb-4'>{title}</h2>
      <ul className='list-disc list-inside xl:text-base 2xl:text-lg xl:space-y-3'>
        {data && data.map((e, idx) => <li key={idx}>{e}</li>)}
        {Apidata && Apidata.map((e, idx) => <li key={e.title || idx} className='cursor-pointer hover:text-accent-blue' onClick={()=>handleTitle(e)}>{e.title}</li>)}
      </ul>
    </div>
  )
}
