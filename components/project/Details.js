import Link from 'next/link';
import classes from './Details.module.css';
import { FrontDetails } from '../data';


export default function Details(props) {

    const { id, title, link } = { ...props.data };
    const description = FrontDetails.find(obj => obj.id === id).description;
    const no = parseInt(id.slice(-1));
    const api = "https://next-app-content.s3.ap-northeast-1.amazonaws.com/portfolio-app";
    const src = `${api}/demo${id}.mp4`;

    return (
        <div className={classes.container}>
            <div className={classes.demo}>
                <h1>Demo Video</h1>
                <video 
                    src={src}
                    controls={true}
                />
            </div>
            <div className={classes.details}>
                <div className={classes.details_title}>
                    <h3>{title}</h3>
                </div>
                <div className={classes.details_content}>
                    <p>
                        負責部分:&ensp;
                        { no !== 3 ? [5,6].includes(no) ? '邊看邊做' : '一手包辦' : '網頁維護'}
                    </p>
                    <p>小碎念:</p>
                    <ul>
                        <li>{description[0]}</li>
                        <li>{description[1]}</li>
                        <li>{description[2]}</li>
                        <li>{description[3]}</li>
                    </ul>
                </div>
                <Link href={link} passHref>
                    <a target="_blank" rel="noopener noreferrer">
                        <button className={classes.link}>點此前往</button>
                    </a>
                </Link>
            </div>
        </div>
    )
};