import Image from 'next/image'
import { useRouter } from 'next/router'
import classes from './NavigateHeader.module.css'

export default function NavigateHeader() {
  const src = '/banner2.JPG'

  const router = useRouter()
  function goBack() {
    router.back()
  }
  return (
    <div className={classes.banner} onClick={() => goBack()}>
      <div className={classes.cover}>
        <h1>Yi-Ching Portfolio</h1>
      </div>
      {/* <Image src="/banner2.JPG" alt="banner" layout="fill" objectFit="cover" /> */}
      <Image
        // src="/banner.JPG"
        loader={() => src}
        src={src}
        alt="banner"
        unoptimized
        layout="fill"
        objectFit="cover"
      />
    </div>
  )
}
