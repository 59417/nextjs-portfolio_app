import Image from 'next/image'
import classes from './Header.module.css'

export default function Header() {
  const src = '/banner.JPG'

  return (
    <div className={classes.banner}>
      <div className={classes.cover_full}></div>
      <div className={classes.cover_left}>
        <h1>Portfolio</h1>
        <p>React | Next.js | Node.js</p>
        <p>Javascript | Database | AWS</p>
        <div className={classes.banner_text}>
          React | Next.js | Node.js | Javascript | Database | AWS
        </div>
      </div>
      <Image
        // src="/banner.JPG"
        loader={() => src}
        src={src}
        alt="banner"
        unoptimized
        layout="fill"
        objectFit="cover"
        objectPosition="top"
      />
    </div>
  )
}
