import Image from 'next/image';
import Link from 'next/link';
// import { useState, useEffect } from 'react';
import classes from './Card.module.css';

export default function Card(props) {

    const { id, title, description, skill, img, link } = {...props.data};
    const api = "https://next-app-content.s3.ap-northeast-1.amazonaws.com/portfolio-app";
    const src = `${api}/${img}`;

    function getCard() {
        if (props.blank) {
            return (
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <div className={classes.card}>
                        <div className={classes.img_wrapper}>
                            <div className={classes.is_hovered}>
                                Details &#62;
                                {/* <Image src="/tap.png" alt="banner" width="100%" height="100%"/> */}
                            </div>
                            {/* <Image  src={`/${img}`} alt={title} layout="fill" objectFit="cover" objectPosition="top" /> */}
                            <Image 
                                loader={() => src} src={src} alt="thumbnail" 
                                unoptimized layout="fill" objectFit="cover" objectPosition="top" 
                            />
                        </div>
                        <h3>{title}</h3>
                        <p className={classes.grid_p1}>{description}</p>
                        <p className={classes.grid_p2}>{skill}</p>
                    </div>
                </a>
            )
        } else {
            const src = `${api}/${img}`;
            return (
                <Link href={`/${id}`}>
                    <div className={classes.card}>
                        <div className={classes.img_wrapper}>
                            <div className={classes.is_hovered}>
                                Details &#62;
                            </div>
                            {/* <Image src={`/${img}`} alt={title} layout="fill" objectFit="cover" objectPosition="top" /> */}
                            <Image 
                                loader={() => src} src={src} alt="thumbnail" 
                                unoptimized layout="fill" objectFit="cover" objectPosition="top" 
                            />
                        </div>
                        <h3>{title}</h3>
                        <p className={classes.grid_p1}>{description}</p>
                        <p className={classes.grid_p2}>{skill}</p>
                    </div>
                </Link>
            )
        }
    };

    return (
        <div>
            {getCard()}
        </div>
    );
};