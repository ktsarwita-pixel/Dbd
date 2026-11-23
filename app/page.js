'use client';

import { useState } from 'react';

export default function Home() {
  const [ready, setReady] = useState(false);
  return (
    <main className="shell">
      <div className="grain" aria-hidden="true" />
      {!ready && <section className="intro" aria-label="Trial introduction">
        <div className="brand"><span className="sigil">✕</span><span>THE ENTITY’S REALM</span></div>
        <div className="intro-copy">
          <p className="eyebrow"><i /> THE TRIAL IS WAITING</p>
          <h1>DON’T<br/><em>LOOK BACK.</em></h1>
          <p className="description">One killer. One survivor. No way out but through.</p>
          <button className="enter" onClick={() => setReady(true)}>ENTER THE TRIAL <span>↗</span></button>
          <p className="controls">WASD / ARROWS <b>MOVE</b><span>·</span> MOUSE <b>AIM</b></p>
        </div>
        <div className="edition">DEAD BY DAYLIGHT <span>—</span> INTERACTIVE TRIAL</div>
        <div className="side-mark">BE SILENT <span>◆</span> BE QUICK</div>
      </section>}
      {ready && <button className="return" onClick={() => setReady(false)} aria-label="Return to title">✕</button>}
      {ready && <iframe className="game" src="/game.html" title="Dead by Daylight trial" allow="autoplay" />}
    </main>
  );
}
