import Image from 'next/image'
import classes from './About.module.css'

export default function About() {
  const src = '/headshot1.JPG'
  return (
    <div className={classes.about}>
      <div className={classes.headshot}>
        {/* <Image src="/headshot1.JPG" alt="banner" layout="fill" objectFit="cover" objectPosition="top" /> */}
        <Image
          loader={() => src}
          src={src}
          alt="headshot"
          unoptimized
          layout="fill"
          objectFit="cover"
          objectPosition="top"
        />
      </div>
      <div className={classes.about_content}>
        <h2>About Me</h2>
        <ul>
          <p>Hi! I&#39;m Yi Ching &#58;&#41;</p>
          <li>從 0 開始自學 &#62; 2個月後用 NextJs 獨立完成第一個網站</li>
          <li>2022/05~ 前端接案 &#38; 軟體公司實習</li>
          <li>2022/02~ 自學前端 &#40;React &#38; NextJs&#41;</li>
          <li>2021/11~2022/04 數據分析接案 &#40;Python &#38; R&#41;</li>
          <li>
            2021/06~2021/10 AI大數據企業實務應用班 &#40;Python &#38; R&#41;
          </li>
          <li>AWS Cloud Practitioner 證照</li>
        </ul>
      </div>
    </div>
  )
}
