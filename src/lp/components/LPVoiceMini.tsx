import React from 'react';

const voices = [
  {
    text: '見積もりの内訳がここまで細かいのは初めてでした。他社と比べて一番納得できた。',
    author: 'カフェオーナー',
    area: '仙台市青葉区',
  },
  {
    text: '物件が決まる前から相談できたのが大きかったです。融資の書類にも使える見積もりを出してもらえた。',
    author: '居酒屋オーナー',
    area: '仙台市宮城野区',
  },
];

const LPVoiceMini: React.FC = () => {
  return (
    <section style={{
      background: '#FFFFFF',
      padding: '32px 20px',
      maxWidth: 800,
      margin: '0 auto',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {voices.map((v, i) => (
          <div key={i} style={{
            borderLeft: '3px solid #A8BFA2',
            paddingLeft: 16,
          }}>
            <p style={{
              fontSize: 14,
              lineHeight: 1.8,
              color: '#333333',
              margin: 0,
              fontStyle: 'normal',
            }}>
              「{v.text}」
            </p>
            <p style={{
              fontSize: 12,
              color: '#999999',
              margin: '6px 0 0',
            }}>
              ── {v.author}・{v.area}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LPVoiceMini;
