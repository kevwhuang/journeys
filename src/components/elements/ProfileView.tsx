// @ts-ignore
import Flag from 'react-world-flags';
import React from 'react';
import { Link } from 'react-router-dom';

import useAxios from '../../hooks/useAxios';
import useRanking from '../../hooks/useRanking';
import useZustand from '../../hooks/useZustand';

import defaultPhoto from '../../assets/default-photo.webp';

interface Axios {
    data: Profile[],
    loading: boolean,
    mutate: any,
}

interface Profile {
    bio: string,
    country: string,
    experience: number,
    first_name: string,
    last_name: string,
    page: string,
    photo: string,
    registered: string,
    username: string,
}

interface Props {
    username: string,
}

function ProfileView(props: Props): React.ReactElement {
    const [changeGallery, navbar] = useZustand(s => [s.changeGallery, s.navbar]);

    const { data: profile, loading }: Axios = useAxios({
        endpoint: 'getUser',
        options: {
            headers: {
                'x-username': props.username,
            },
        },
    });

    function handleClick(e: any) {
        // @ts-ignore
        document.startViewTransition(() => {
            const modal = document.querySelector('.gallery');

            modal && modal.classList.remove('closed');
            changeGallery(e.target.src);
        });
    }

    return (
        <section className={navbar ? 'profile__view opened' : 'profile__view'}>
            {!loading && (<>
                <img
                    className="profile__view--image"
                    src={profile[0].photo || defaultPhoto}
                    alt="Profile"
                    draggable="false"
                    onClick={e => handleClick(e)}
                />
                <section className="profile__view--details">
                    <p>{profile[0].first_name} {profile[0].last_name}</p>
                    <p>
                        {/* eslint-disable-next-line react-hooks/rules-of-hooks */}
                        {useRanking(profile[0].experience)}
                        &nbsp;&nbsp;
                        <Flag
                            code={profile[0].country}
                            draggable="false"
                            fallback={<Flag code="AQ" draggable="false" />}
                        />
                    </p>
                    <p>Since {profile[0].registered.slice(0, 10)}</p>
                    <p>{profile[0].bio}</p>
                    {profile[0].page
                        && <a href={profile[0].page} target="_blank">
                            {profile[0].username}'s page
                        </a>
                    }
                    <Link to="../../rankings">go back</Link>
                </section>
            </>)}
        </section>
    );
}

export default ProfileView;
