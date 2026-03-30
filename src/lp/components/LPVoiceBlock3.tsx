import React from 'react';
import LPVoiceBubble from './LPVoiceBubble';

const LPVoiceBlock3: React.FC = () => {
  return (
    <section style={{
      background: '#FFFFFF',
      padding: '32px 20px',
    }}>
      <LPVoiceBubble
        text="居抜きを活かすことで、思っていたよりずっと抑えられました。最初の概算と最終金額がほとんど変わらなかったのも安心でした。"
        author="ラーメン店オーナー"
        detail="仙台市太白区・15坪"
        img="/images/voice-ramen-owner.webp"
      />
    </section>
  );
};

export default LPVoiceBlock3;
