import React from 'react';
import LPVoiceBubble from './LPVoiceBubble';

interface VoiceItem {
  text: string;
  context: string;
  author: string;
  detail: string;
  img: string;
}

const voices: VoiceItem[] = [
  {
    context: '',
    text: '3社比較した中で、見積もりの内訳が一番細かかったです。融資の書類にもそのまま使えて助かりました。',
    author: 'カフェオーナー',
    detail: '仙台市青葉区・12坪',
    img: '/images/voice-cafe-owner.webp',
  },
  {
    context: '',
    text: '物件が決まる前から相談できて、居抜きの活かし方まで提案してくれました。断っても大丈夫と言ってくれたのが安心でした。',
    author: '居酒屋オーナー',
    detail: '仙台市宮城野区・18坪',
    img: '/images/voice-izakaya-owner.webp',
  },
];

const LPVoiceBlock2: React.FC = () => {
  return (
    <section style={{
      background: '#FFFFFF',
      padding: '56px 20px',
    }}>
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <p style={{
          fontSize: 12,
          fontWeight: 300,
          letterSpacing: 4,
          color: '#A8BFA2',
          margin: '0 0 8px',
          textTransform: 'uppercase',
        }}>
          Voice
        </p>
        <h2 style={{
          fontSize: 20,
          fontWeight: 500,
          color: '#333333',
          margin: 0,
        }}>
          ご利用いただいた方の声
        </h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
        {voices.map((v, i) => (
          <div key={i}>
            {v.context && (
              <p style={{
                fontSize: 12,
                color: '#999999',
                margin: '0 0 12px',
                maxWidth: 640,
                marginLeft: 'auto',
                marginRight: 'auto',
                paddingLeft: 72,
              }}>
                {v.context}
              </p>
            )}
            <LPVoiceBubble
              text={v.text}
              author={v.author}
              detail={v.detail}
              img={v.img}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LPVoiceBlock2;
