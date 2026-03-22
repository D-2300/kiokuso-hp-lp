import React from 'react';
import LPVoiceBubble from './LPVoiceBubble';

const LPVoiceBlock1: React.FC = () => {
  return (
    <section style={{
      background: '#FFFFFF',
      padding: '36px 20px',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <LPVoiceBubble
          text="見積もりの内訳がここまで細かいのは初めてでした。他社と比べて一番納得できました。"
          author="カフェオーナー"
          detail="仙台市青葉区・12坪"
        />
        <LPVoiceBubble
          text="物件が決まる前から相談できたのが大きかったです。融資の書類にも使える見積もりを出してもらえました。"
          author="居酒屋オーナー"
          detail="仙台市宮城野区・18坪"
        />
      </div>
    </section>
  );
};

export default LPVoiceBlock1;
