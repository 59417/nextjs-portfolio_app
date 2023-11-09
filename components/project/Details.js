import Link from 'next/link'
import classes from './Details.module.css'
import { FrontDetails, BusinessDetails } from '../data'

export default function Details(props) {
  const { id, title, link, mov } = { ...props.data }
  const allData = [...BusinessDetails, ...FrontDetails]
  const description = allData.find(obj => obj.id === id).description

  const no = parseInt(id.slice(-1))
  const src = `/demo${id}.${mov ? `mov` : `mp4`}`

  return (
    <div className={classes.container}>
      <div className={classes.demo}>
        <h1>Demo Video</h1>
        <video src={src} controls={true} />
      </div>
      <div className={classes.details}>
        <div className={classes.details_title}>
          <h3>{title}</h3>
        </div>
        <div className={classes.details_content}>
          <p>
            負責部分:&ensp;
            {['1-5', '1-6'].includes(id) && `邊看邊做`}
            {['0-2', '1-1', '1-2', '1-4'].includes(id) && `一手包辦`}
            {['1-3'].includes(id) && `網頁維護`}
            {['0-1', '0-3'].includes(id) && `二手包辦`}
          </p>
          <p>小碎念:</p>
          <ul>
            <li>{description[0]}</li>
            <li>{description[1]}</li>
            <li>{description[2]}</li>
            <li>{description[3]}</li>
          </ul>
        </div>
        {/* <Link href={link} passHref>
          <a target="_blank" rel="noopener noreferrer">
            <button className={classes.link}>點此前往</button>
          </a>
        </Link> */}
      </div>
    </div>
  )
}
