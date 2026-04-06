// === Planet Unicode glyphs and names (Vedic planets) ===
const planetGlyphs = {
  SUN: '☉', MOON: '☾', MARS: '♂', MERCURY: '☿',
  JUPITER: '♃', VENUS: '♀', SATURN: '♄',
  RAHU: '☊', KETU: '☋'
};

// Tamil + English sign names
const signNames = [
  {en:"Aries", ta:"மேஷம்"},
  {en:"Taurus", ta:"ரிஷபம்"},
  {en:"Gemini", ta:"மிதுனம்"},
  {en:"Cancer", ta:"கடகம்"},
  {en:"Leo", ta:"சிம்மம்"},
  {en:"Virgo", ta:"கன்னி"},
  {en:"Libra", ta:"துலாம்"},
  {en:"Scorpio", ta:"விருச்சிகம்"},
  {en:"Sagittarius", ta:"தனுசு"},
  {en:"Capricorn", ta:"மகரம்"},
  {en:"Aquarius", ta:"கும்பம்"},
  {en:"Pisces", ta:"மீனம்"}

function drawGrid() {
  ctx.clearRect(0, 0, size, size);
  ctx.strokeStyle = '#333';
  ctx.lineWidth = 1.4;
  ctx.strokeRect(0, 0, size, size);

  // 3×3 grid lines
  for (let i = 1; i < 3; i++) {
    ctx.moveTo(i * box, 0); ctx.lineTo(i * box, size);
    ctx.moveTo(0, i * box); ctx.lineTo(size, i * box);
  }
  ctx.stroke();

  // Draw sign names (Tamil + English)
  ctx.font = '12px Noto Sans Tamil';
  for (let i = 1; i <= 12; i++) {
    const x = ((i - 1) % 3) * box + 10;
    const y = Math.floor((i - 1) / 3) * box + 20;
    const sign = signNames[i - 1];
    const label = (lang === 'en')
      ? `${sign.en} (${i})` : `${sign.ta} (${i})`;
    ctx.fillStyle = '#700'; ctx.fillText(label, x, y);
  }

  // draw any planets present
  drawPlanets();
}

function drawPlanets() {
  ctx.font = '20px Arial';
  ctx.fillStyle = '#1a1a1a';
  for (let i = 1; i <= 12; i++) {
    if (houses[i].length) {
      let glyphs = houses[i]
        .map(p => planetGlyphs[p.toUpperCase()] || p[0])
        .join(' ');
      const x = ((i - 1) % 3) * box + 20;
      const y = Math.floor((i - 1) / 3) * box + 60;
      ctx.fillText(glyphs, x, y);
    }
  }
}
