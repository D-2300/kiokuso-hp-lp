import React from 'react';
import LPVoiceBubble from './LPVoiceBubble';

const LPVoiceBlock4: React.FC = () => {
  return (
    <section style={{
      background: '#FFFFFF',
      padding: '32px 20px',
    }}>
      <LPVoiceBubble
        text="Step 0で概算を出してもらった時点で、予算的に厳しいとわかったんです。でも「今は見送りましょう」と正直に言ってくれて、無理に進めなかった。半年後に改めて相談して、今の店ができました。"
        author="焼鳥店オーナー"
        detail="仙台市泉区・14坪"
      />
    </section>
  );
};

export default LPVoiceBlock4;
