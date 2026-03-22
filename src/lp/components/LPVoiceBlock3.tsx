import React from 'react';
import LPVoiceBubble from './LPVoiceBubble';

const LPVoiceBlock3: React.FC = () => {
  return (
    <section style={{
      background: '#FFFFFF',
      padding: '32px 20px',
    }}>
      <LPVoiceBubble
        text="正直、もっとかかると思っていました。居抜きを活かすことでここまで抑えられるとは。最初の概算と最終金額の差がほとんどなかったのも信頼できました。"
        author="ラーメン店オーナー"
        detail="仙台市太白区・15坪"
      />
    </section>
  );
};

export default LPVoiceBlock3;
