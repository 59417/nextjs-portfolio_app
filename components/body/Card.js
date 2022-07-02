import Image from 'next/image';
import Link from 'next/link';
// import { useState, useEffect } from 'react';
import classes from './Card.module.css';

export default function Card(props) {
    const { id, title, description, skill, img, link } = {...props.data};

    function getCard() {
        if (props.blank) {
            return (
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <div className={classes.card}>
                        <div className={classes.img_wrapper}>
                            <div className={classes.is_hovered}>
                                <Image src="/tap.png" alt="banner" width="100%" height="100%"/>
                            </div>
                            <Image 
                                src={`/${img}`} alt={title} layout="fill" objectFit="cover" objectPosition="top" 
                            />
                        </div>
                        <h3>{title}</h3>
                        <p className={classes.grid_p1}>{description}</p>
                        <p className={classes.grid_p2}>{skill}</p>
                    </div>
                </a>
            )
        } else {
            return (
                <Link href={`/${id}`}>
                    <div className={classes.card}>
                        <div className={classes.img_wrapper}>
                            <div className={classes.is_hovered}>
                                <Image src="/tap.png" alt="banner" width="100%" height="100%"/>
                            </div>
                            <Image 
                                src={`/${img}`} alt={title} layout="fill" objectFit="cover" objectPosition="top" 
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
            {/* <Link href={`/${id}`}> */}
            {/* <a href={link}> */}
                {/* <div className={classes.card}>
                    <div className={classes.img_wrapper}>
                        <div className={classes.is_hovered}>
                            <Image src="/tap.png" alt="banner" width="100%" height="100%"/>
                        </div>
                        <Image 
                            src={`/${img}`} alt={title} layout="fill" objectFit="cover" objectPosition="top" 
                        />
                    </div>
                    <h3>{title}</h3>
                    <p className={classes.grid_p1}>{description}</p>
                    <p className={classes.grid_p2}>{skill}</p>
                </div> */}
            {/* </a> */}
            {/* </Link> */}
        </div>
    );
};