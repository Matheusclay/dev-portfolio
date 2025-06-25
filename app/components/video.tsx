// components/video.tsx
import React from 'react';

export function Video() {
  const videoId = '6fOAqH81rgU';

  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem',
      }}
    >
      <h2 className="text-2xl font-bold text-center mb-10">EXTRA</h2>

      <div
        style={{
          width: '100%',
          maxWidth: 800,
          aspectRatio: '16 / 9',
        }}
      >
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?start=7`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Video"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 8,
          }}
        />
      </div>
    </section>
  );
}
