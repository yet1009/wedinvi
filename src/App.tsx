import React, { useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './App.module.scss';
import FullScreenMessage from '@shared/FullScreenMessage';
import Heading from '@components/sections/Heading';
import Video from '@components/sections/Video';
import { Wedding } from '@models/wedding';
import ImageGallery from '@components/sections/ImageGallery';
import Intro from '@components/sections/Intro';
import Invitation from '@components/sections/Invitation';
import Calendar from '@components/sections/Calendar';

const cx = classNames.bind(styles);

function App() {
  const [wedding, setWedding] = useState<Wedding | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch('http://localhost:8888/wedding')
      .then((res) => {
        if (res.ok === false) {
          throw new Error('정보를 불러오지 못함');
        }

        return res.json();
      })
      .then((data) => {
        setWedding(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log('에러 발생', err);
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <FullScreenMessage type={'loading'} />;
  if (error) return <FullScreenMessage type={'error'} />;

  if (wedding === null) {
    return null;
  }

  const {
    date,
    galleryImages,
    groom,
    bride,
    location,
    message: { intro, invitation },
  } = wedding;

  return (
    <div className={cx('container')}>
      <Heading date={date} />
      <Video />
      <Intro
        groomName={groom.name}
        brideName={bride.name}
        location={location.name}
        date={date}
        message={intro}
      />
      <Invitation message={invitation} />
      <ImageGallery images={galleryImages} />
      <Calendar date={date} />
    </div>
  );
}

export default App;
