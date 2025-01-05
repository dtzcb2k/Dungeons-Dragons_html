import React, { useEffect } from 'react';
import Image from 'next/image'; // Import the Image component from next/image

const LocationSelection: React.FC = () => {
  useEffect(() => {
    start();
  }, []);

  const SaveData = (message: string) => {
    console.log(message);
  };

  return (
    <div className="container">
      <h1 style={{ color: 'white' }}>要前往哪裡呢?</h1>
      <div className="go-to-image">
        {/* Use Next.js Image component for optimized images */}
        <Image
          src="/picture/cave.jpg"
          alt="洞穴"
          width={500} // You can specify the width and height of the image
          height={300} // Adjust the dimensions according to your needs
        />
        <Image
          src="/picture/forest.jpg"
          alt="森林"
          width={500}
          height={300}
        />
        <Image
          src="/picture/glassland.jpg"
          alt="平原"
          width={500}
          height={300}
        />
      </div>
      <div className="go-to-where">
        <input
          type="button"
          value="進入洞窟"
          onClick={() => {
            location.href = 'cave/cave.html';
            SaveData('進入洞穴');
          }}
        />
        <input
          type="button"
          value="進入森林"
          onClick={() => {
            location.href = 'forest/forest.html';
            SaveData('進入森林');
          }}
        />
        <input
          type="button"
          value="前往草原"
          onClick={() => {
            location.href = 'glassland/glassland.html';
            SaveData('前往草原');
          }}
        />
      </div>
      <div className="monster-rate">
        <label>(洞穴中遇見怪物的機率是50%)</label>
        <label>(森林中遇見怪物的機率是70%)</label>
        <label>(平原中遇見怪物的機率是30%)</label>
      </div>
    </div>
  );
};

const start = () => {
  const bgm = document.getElementById('bgm') as HTMLAudioElement;
  if (bgm) {
    bgm.play();
  }
};

export default LocationSelection;
