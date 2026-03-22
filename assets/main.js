/* Crimson SparrowCollective — Offline luxury boutique site
   System fonts only • No external assets • Accessible + responsive
*/

:root{
  --bg: #0f0f12;
  --bg2: #121218;
  --panel: rgba(255,255,255,.06);
  --panel2: rgba(255,255,255,.085);
  --ivory: #f3efe6;
  --ivory2:#f7f3ea;
  --ink: #111114;
  --muted: rgba(243,239,230,.72);
  --muted2: rgba(243,239,230,.55);
  --line: rgba(243,239,230,.14);
  --line2: rgba(243,239,230,.10);
  --accent: #a1122a;    /* deep crimson */
  --accent2:#c01f3a;
  --accentSoft: rgba(161,18,42,.22);
  --shadow: 0 16px 50px rgba(0,0,0,.45);
  --shadow2: 0 10px 25px rgba(0,0,0,.35);

  --radius-lg: 22px;
  --radius-md: 16px;
  --radius-sm: 12px;

  --container: 1160px;

  --space-1: 8px;
  --space-2: 12px;
  --space-3: 16px;
  --space-4: 22px;
  --space-5: 32px;
  --space-6: 44px;
  --space-7: 64px;
  --space-8: 92px;

  --ease: cubic-bezier(.2,.8,.2,1);
  --ease2: cubic-bezier(.16,.9,.2,1);
}

:root[data-theme="light"]{
  --bg: #f6f3ec;
  --bg2: #f2eee6;
  --panel: rgba(17,17,20,.06);
  --panel2: rgba(17,17,20,.085);
  --ivory: #121215;
  --ivory2:#0f0f12;
  --ink: #121215;
  --muted: rgba(18,18,21,.72);
  --muted2: rgba(18,18,21,.55);
  --line: rgba(18,18,21,.14);
  --line2: rgba(18,18,21,.10);
  --shadow: 0 16px 50px rgba(13,13,16,.18);
  --shadow2: 0 10px 25px rgba(13,13,16,.14);
}

*,
*::before,
*::after { box-sizing: border-box; }

html{
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce){
  html{ scroll-behavior: auto; }
  *{ animation-duration: .001ms !important; animation-iteration-count: 1 !important; transition-duration: .001ms !important; }
}

body{
  margin: 0;
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji";
  background: radial-gradient(1200px 900px at 20% 10%, rgba(161,18,42,.14), transparent 55%),
              radial-gradient(1100px 900px at 80% 0%, rgba(243,239,230,.08), transparent 60%),
              linear-gradient(180deg, var(--bg) 0%, var(--bg2) 100%);
  color: var(--ivory);
  line-height: 1.5;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

a{ color: inherit; text-decoration: none; }
a:focus-visible,
button:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible{
  outline: 3px solid rgba(161,18,42,.5);
  outline-offset: 3px;
  border-radius: 10px;
}

img, svg{ max-width: 100%; height: auto; display:block; }

.no-js .nav-menu{ display:block !important; }
.no-js .nav-toggle{ display:none !important; }

.skip-link{
  position:absolute;
  left: -999px;
  top: 12px;
  padding: 10px 14px;
  background: var(--ivory2);
  color: var(--bg);
  border-radius: 12px;
  z-index: 9999;
}
.skip-link:focus{ left: 12px; }

.container{
  width: min(var(--container), calc(100% - 2*var(--space-4)));
  margin-inline: auto;
}

.section{
  padding: var(--space-8) 0;
  position: relative;
}

.section-head{
  max-width: 70ch;
  margin-bottom: var(--space-6);
}

.section-kicker{
  margin: 0 0 var(--space-2);
  letter-spacing: .12em;
  text-transform: uppercase;
  font-size: 12px;
  color: var(--muted2);
}

.section-title{
  margin: 0 0 var(--space-3);
  font-size: clamp(28px, 3.2vw, 44px);
  line-height: 1.08;
  letter-spacing: -0.02em;
}

.section-lede{
  margin: 0;
  font-size: 16px;
  color: var(--muted);
}

/* Header */
.site-header{
  position: sticky;
  top: 0;
  z-index: 60;
  backdrop-filter: blur(14px);
  background: linear-gradient(180deg, rgba(15,15,18,.78), rgba(15,15,18,.48));
}
:root[data-theme="light"] .site-header{
  background: linear-gradient(180deg, rgba(246,243,236,.86), rgba(246,243,236,.52));
}
.header-inner{
  display:flex;
  align-items:center;
  justify-content: space-between;
  padding: 14px 0;
  gap: var(--space-3);
}

.header-border{
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--line), transparent);
}

.brand{
  display:flex;
  align-items:center;
  gap: 12px;
  min-width: 220px;
}
.brand-mark{
  width: 36px; height: 36px;
  display:grid; place-items:center;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(161,18,42,.25), rgba(255,255,255,.06));
  border: 1px solid var(--line2);
  box-shadow: var(--shadow2);
}
.brand-text{ display:flex; flex-direction:column; }
.brand-name{
  font-weight: 650;
  letter-spacing: -0.02em;
  font-size: 14.5px;
}
.brand-sub{
  font-size: 12px;
  color: var(--muted2);
  margin-top: 1px;
}

.nav{ display:flex; align-items:center; gap: var(--space-2); }
.nav-toggle{
  display:none;
  border: 1px solid var(--line2);
  background: rgba(255,255,255,.04);
  color: var(--ivory);
  border-radius: 12px;
  padding: 10px 12px;
  box-shadow: var(--shadow2);
  cursor:pointer;
}
.nav-toggle-lines{
  width: 18px; height: 12px;
  display:block;
  position: relative;
}
.nav-toggle-lines::before,
.nav-toggle-lines::after,
.nav-toggle-lines{
  background: currentColor;
  border-radius: 999px;
}
.nav-toggle-lines::before,
.nav-toggle-lines::after{
  content:"";
  position:absolute;
  left:0; right:0;
  height: 2px;
}
.nav-toggle-lines{ height:2px; top: 5px; position:relative; }
.nav-toggle-lines::before{ top: -5px; }
.nav-toggle-lines::after{ top: 5px; opacity:.9; }

.nav-menu{
  display:flex;
  align-items:center;
  gap: var(--space-3);
}

.nav-list{
  display:flex;
  align-items:center;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav-link{
  padding: 10px 12px;
  border-radius: 999px;
  color: var(--muted);
  font-size: 13.5px;
  transition: background .25s var(--ease), color .25s var(--ease), transform .25s var(--ease);
}
.nav-link:hover{
  background: rgba(255,255,255,.06);
  color: var(--ivory);
  transform: translateY(-1px);
}

.nav-cta{
  background: linear-gradient(135deg, rgba(161,18,42,.95), rgba(192,31,58,.8));
  color: #fff;
  border: 1px solid rgba(255,255,255,.14);
  box-shadow: 0 14px 30px rgba(161,18,42,.25);
}
.nav-cta:hover{
  background: linear-gradient(135deg, rgba(161,18,42,1), rgba(192,31,58,.92));
}

.nav-tools{
  display:flex;
  align-items:center;
  gap: 10px;
  padding-left: 6px;
  border-left: 1px solid var(--line2);
}

.icon-btn{
  border: 1px solid var(--line2);
  background: rgba(255,255,255,.04);
  color: var(--ivory);
  border-radius: 12px;
  padding: 10px 11px;
  cursor:pointer;
  transition: transform .22s var(--ease), background .22s var(--ease), border-color .22s var(--ease);
}
.icon-btn:hover{
  transform: translateY(-1px);
  background: rgba(255,255,255,.07);
  border-color: var(--line);
}

.sr-only{
  position:absolute!important;
  width:1px;height:1px;
  padding:0;margin:-1px;
  overflow:hidden;clip:rect(0,0,0,0);
  white-space:nowrap;border:0;
}

/* Hero */
.hero{
  padding-top: calc(var(--space-8) - 22px);
  overflow:hidden;
}
.hero-bg{
  position:absolute;
  inset: 0;
  pointer-events:none;
  opacity: .9;
}
.hero-motif{
  width: 100%;
  height: 100%;
  transform: translateY(-4%) scale(1.05);
  filter: saturate(1.05);
}
.hero-inner{
  position: relative;
  display:grid;
  grid-template-columns: 1.15fr .85fr;
  gap: var(--space-6);
  align-items: start;
}

.eyebrow{
  margin: 0 0 var(--space-3);
  font-size: 12px;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--muted2);
  display:inline-flex;
  align-items:center;
  gap: 10px;
}
.eyebrow::before{
  content:"";
  width: 22px;
  height: 1px;
  background: linear-gradient(90deg, var(--accent), transparent);
  opacity:.9;
}

.hero-title{
  margin: 0 0 var(--space-3);
  font-size: clamp(38px, 4.8vw, 66px);
  line-height: 1.02;
  letter-spacing: -0.04em;
}
.title-accent{
  display:block;
  margin-top: 10px;
  font-weight: 600;
  color: rgba(243,239,230,.92);
}
.hero-subtitle{
  margin: 0 0 var(--space-5);
  font-size: 16.5px;
  color: var(--muted);
  max-width: 62ch;
}

.hero-actions{
  display:flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: var(--space-6);
}

.btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap: 10px;
  padding: 12px 16px;
  border-radius: 999px;
  font-weight: 620;
  letter-spacing: -0.01em;
  border: 1px solid transparent;
  cursor:pointer;
  transition: transform .22s var(--ease), box-shadow .22s var(--ease), background .22s var(--ease), border-color .22s var(--ease);
  user-select:none;
}
.btn-primary{
  background: linear-gradient(135deg, rgba(161,18,42,1), rgba(192,31,58,.85));
  color: #fff;
  border-color: rgba(255,255,255,.12);
  box-shadow: 0 16px 34px rgba(161,18,42,.22);
}
.btn-primary:hover{ transform: translateY(-1px); box-shadow: 0 18px 40px rgba(161,18,42,.28); }
.btn-ghost{
  background: rgba(255,255,255,.04);
  color: var(--ivory);
  border-color: var(--line2);
}
.btn-ghost:hover{ transform: translateY(-1px); background: rgba(255,255,255,.07); border-color: var(--line); }
.btn-small{ padding: 10px 12px; font-size: 13px; }

.text-link{
  display:inline-flex;
  align-items:center;
  gap: 8px;
  color: rgba(243,239,230,.92);
  text-decoration: none;
  padding: 8px 0;
  border-bottom: 1px solid transparent;
  transition: transform .22s var(--ease), border-color .22s var(--ease), color .22s var(--ease);
}
.text-link:hover{
  transform: translateY(-1px);
  border-color: rgba(243,239,230,.22);
  color: #fff;
}

.hero-metrics{
  display:flex;
  gap: 14px;
  flex-wrap: wrap;
}
.metric{
  padding: 12px 14px;
  border-radius: 16px;
  border: 1px solid var(--line2);
  background: rgba(255,255,255,.04);
  box-shadow: var(--shadow2);
  min-width: 160px;
}
.metric-kicker{
  font-size: 12px;
  color: var(--muted2);
  letter-spacing: .08em;
  text-transform: uppercase;
}
.metric-value{
  font-size: 18px;
  font-weight: 650;
  margin-top: 6px;
}

.hero-panel{
  display:flex;
  flex-direction: column;
  gap: var(--space-3);
  margin-top: 6px;
}

.panel-card{
  border-radius: var(--radius-lg);
  border: 1px solid var(--line2);
  background: linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.02));
  box-shadow: var(--shadow);
  overflow:hidden;
  position:relative;
}
.panel-card::before{
  content:"";
  position:absolute;
  inset:-2px;
  background: radial-gradient(420px 240px at 30% 0%, rgba(161,18,42,.20), transparent 60%);
  pointer-events:none;
}
.panel-top{
  display:flex;
  gap: 10px;
  padding: 18px 18px 0;
  position: relative;
  z-index: 1;
}
.chip{
  display:inline-flex;
  align-items:center;
  padding: 8px 10px;
  border-radius: 999px;
  font-size: 12px;
  letter-spacing: .06em;
  text-transform: uppercase;
  border: 1px solid var(--line2);
  background: rgba(255,255,255,.04);
}
.chip-muted{ color: var(--muted2); }

.panel-art{
  padding: 14px 18px 0;
  position: relative;
  z-index: 1;
  opacity: .95;
}
.panel-body{
  padding: 14px 18px 18px;
  position: relative;
  z-index: 1;
}
.panel-title{
  margin: 0 0 8px;
  font-size: 18px;
  letter-spacing: -0.02em;
}
.panel-text{
  margin: 0 0 12px;
  color: var(--muted);
  font-size: 14px;
}
.panel-actions{
  display:flex;
  gap: 16px;
  flex-wrap: wrap;
}

.trust-row{
  display:flex;
  gap: 14px;
  flex-wrap: wrap;
  padding: 10px 4px 0;
  color: var(--muted2);
  font-size: 13px;
}
.trust-item{
  display:flex;
  align-items:center;
  gap: 10px;
}
.trust-dot{
  width: 8px; height: 8px;
  border-radius: 999px;
  background: rgba(161,18,42,.65);
  box-shadow: 0 0 0 5px rgba(161,18,42,.12);
}

/* Cards */
.card{
  border-radius: var(--radius-lg);
  border: 1px solid var(--line2);
  background: rgba(255,255,255,.04);
  box-shadow: var(--shadow2);
  padding: var(--space-5);
}

.card-ivory{
  background: linear-gradient(180deg, rgba(243,239,230,.96), rgba(243,239,230,.90));
  border-color: rgba(255,255,255,.10);
  color: var(--ink);
  box-shadow: 0 20px 55px rgba(0,0,0,.24);
}
:root[data-theme="light"] .card-ivory{
  background: linear-gradient(180deg, rgba(255,255,255,.92), rgba(255,255,255,.86));
  border-color: rgba(18,18,21,.10);
  box-shadow: 0 18px 45px rgba(0,0,0,.10);
}

.card-title{
  margin: 0 0 var(--space-2);
  font-size: 18px;
  letter-spacing: -0.02em;
}
.card-text{
  margin: 0 0 12px;
  color: rgba(17,17,20,.76);
}
:root[data-theme="light"] .card-text{
  color: rgba(18,18,21,.78);
}

/* About */
.about-grid{
  display:grid;
  grid-template-columns: 1.05fr .95fr;
  gap: var(--space-6);
  align-items: start;
}

.values{
  display:grid;
  gap: 12px;
  padding: var(--space-5);
  border-radius: var(--radius-lg);
  border: 1px solid var(--line2);
  background: rgba(255,255,255,.03);
  box-shadow: var(--shadow2);
}

.value{
  display:flex;
  gap: 14px;
  align-items:flex-start;
  padding: 12px;
  border-radius: 16px;
  border: 1px solid var(--line2);
  background: rgba(255,255,255,.03);
}
.value-icon{
  width: 40px; height: 40px;
  border-radius: 14px;
  display:grid; place-items:center;
  background: linear-gradient(135deg, rgba(161,18,42,.22), rgba(255,255,255,.04));
  border: 1px solid var(--line2);
}
.value-title{
  margin: 0 0 4px;
  font-size: 14.5px;
}
.value-text{
  margin: 0;
  color: var(--muted);
  font-size: 13.5px;
}

/* Grids */
.grid-3{
  display:grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-4);
}
.grid-2{
  display:grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-4);
}

/* Collections */
.collection-card{
  border-radius: var(--radius-lg);
  border: 1px solid var(--line2);
  background: linear-gradient(180deg, rgba(255,255,255,.04), rgba(255,255,255,.02));
  box-shadow: var(--shadow2);
  overflow:hidden;
  position: relative;
}
.collection-card::before{
  content:"";
  position:absolute;
  inset:-2px;
  background: radial-gradient(380px 220px at 20% 10%, rgba(161,18,42,.12), transparent 58%);
  opacity:.9;
  pointer-events:none;
}
.collection-link{
  display:block;
  height: 100%;
  position:relative;
  z-index:1;
}
.collection-media{
  padding: 14px 14px 0;
  opacity:.95;
}
.collection-body{
  padding: 12px 18px 18px;
}
.collection-title{
  margin: 0 0 6px;
  font-size: 16px;
  letter-spacing: -0.02em;
}
.collection-text{
  margin: 0 0 12px;
  color: var(--muted);
  font-size: 13.5px;
}
.collection-cta{
  display:inline-flex;
  align-items:center;
  gap: 8px;
  font-size: 13px;
  color: rgba(243,239,230,.92);
  letter-spacing: .02em;
  border-bottom: 1px solid rgba(255,255,255,.10);
  padding-bottom: 6px;
  transition: transform .24s var(--ease), border-color .24s var(--ease), color .24s var(--ease);
}
.collection-link:hover .collection-cta{
  transform: translateY(-1px);
  border-color: rgba(243,239,230,.28);
  color: #fff;
}
.collection-link:hover{
  outline: none;
}
.collection-card:hover{
  transform: translateY(-2px);
  transition: transform .28s var(--ease2);
}

/* Featured */
.featured-controls{
  display:flex;
  align-items:center;
  justify-content: space-between;
  gap: var(--space-3);
  margin-bottom: var(--space-4);
}
.segmented{
  display:inline-flex;
  border: 1px solid var(--line2);
  border-radius: 999px;
  padding: 4px;
  background: rgba(255,255,255,.03);
}
.seg-btn{
  border: 0;
  background: transparent;
  color: var(--muted);
  padding: 9px 12px;
  border-radius: 999px;
  cursor:pointer;
  font-weight: 650;
  font-size: 13px;
  transition: background .2s var(--ease), color .2s var(--ease), transform .2s var(--ease);
}
.seg-btn:hover{ transform: translateY(-1px); }
.seg-btn.is-active{
  background: rgba(255,255,255,.08);
  color: var(--ivory);
}
.hint{
  display:flex;
  align-items:center;
  gap: 10px;
  font-size: 13px;
  color: var(--muted2);
}
.hint-dot{
  width: 8px; height: 8px;
  border-radius: 999px;
  background: rgba(243,239,230,.22);
}

.product-grid{
  display:grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-4);
}
.product{
  border-radius: var(--radius-lg);
  border: 1px solid var(--line2);
  background: linear-gradient(180deg, rgba(255,255,255,.04), rgba(255,255,255,.02));
  box-shadow: var(--shadow2);
  overflow:hidden;
  transition: transform .26s var(--ease), border-color .26s var(--ease), background .26s var(--ease);
}
.product:hover{
  transform: translateY(-2px);
  border-color: rgba(243,239,230,.20);
  background: linear-gradient(180deg, rgba(255,255,255,.05), rgba(255,255,255,.03));
}
.product-media{
  padding: 14px 14px 0;
}
.product-body{
  padding: 12px 16px 16px;
}
.product-title{
  margin: 0 0 6px;
  font-size: 15px;
  letter-spacing: -0.02em;
}
.product-meta{
  margin: 0 0 12px;
  font-size: 13px;
  color: var(--muted2);
}
.product-row{
  display:flex;
  align-items:center;
  justify-content: space-between;
  gap: 12px;
}
.price{
  font-weight: 700;
  letter-spacing: .04em;
  color: rgba(243,239,230,.92);
}

/* Carousel */
.carousel{
  border-radius: var(--radius-lg);
  border: 1px solid var(--line2);
  background: rgba(255,255,255,.03);
  box-shadow: var(--shadow2);
  overflow:hidden;
}
.carousel-track{
  display:flex;
  overflow:hidden;
  scroll-snap-type: x mandatory;
}
.carousel-slide{
  flex: 0 0 100%;
  scroll-snap-align: start;
  padding: var(--space-4);
}
.carousel-controls{
  display:flex;
  align-items:center;
  justify-content: space-between;
  padding: 14px;
  border-top: 1px solid var(--line2);
}
.carousel-status{
  color: var(--muted2);
  font-size: 13px;
  letter-spacing: .06em;
  text-transform: uppercase;
}

/* Custom timeline */
.timeline{
  list-style: none;
  padding: 0;
  margin: 0;
  display:grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--space-4);
  counter-reset: step;
}
.timeline-step{
  position: relative;
  border-radius: var(--radius-lg);
  border: 1px solid var(--line2);
  background: linear-gradient(180deg, rgba(255,255,255,.04), rgba(255,255,255,.02));
  box-shadow: var(--shadow2);
  padding: var(--space-5);
  overflow:hidden;
}
.timeline-step::before{
  content:"";
  position:absolute;
  inset:-2px;
  background: radial-gradient(240px 200px at 15% 0%, rgba(161,18,42,.14), transparent 60%);
  opacity:.9;
  pointer-events:none;
}
.step-badge{
  width: 42px; height: 42px;
  border-radius: 14px;
  display:grid; place-items:center;
  background: rgba(255,255,255,.06);
  border: 1px solid var(--line2);
  box-shadow: var(--shadow2);
  font-weight: 800;
  letter-spacing: .02em;
  position: relative;
  z-index: 1;
}
.step-body{ position: relative; z-index: 1; }
.step-title{
  margin: 14px 0 8px;
  font-size: 15px;
}
.step-text{
  margin: 0;
  color: var(--muted);
  font-size: 13.5px;
}
.timeline-step:not(:last-child)::after{
  content:"";
  position:absolute;
  top: 42px;
  right: -26px;
  width: 52px;
  height: 1px;
  background: linear-gradient(90deg, rgba(243,239,230,.22), transparent);
  transform: rotate(0deg);
  opacity: .65;
}

.custom-cta{ margin-top: var(--space-6); }
.custom-cta-card{
  border-radius: var(--radius-lg);
  border: 1px solid var(--line2);
  background: linear-gradient(135deg, rgba(161,18,42,.18), rgba(255,255,255,.03));
  box-shadow: var(--shadow2);
  padding: var(--space-5);
  display:flex;
  align-items:center;
  justify-content: space-between;
  gap: var(--space-4);
}
.custom-cta-title{
  margin: 0 0 8px;
  font-size: 18px;
  letter-spacing: -0.02em;
}
.custom-cta-text{
  margin: 0;
  color: var(--muted);
}

/* Why */
.pill-card{
  border-radius: var(--radius-lg);
  border: 1px solid var(--line2);
  background: rgba(255,255,255,.03);
  box-shadow: var(--shadow2);
  padding: var(--space-5);
}
.pill-title{
  margin: 0 0 8px;
  font-size: 15px;
  letter-spacing: -0.02em;
}
.pill-text{
  margin: 0;
  color: var(--muted);
  font-size: 13.5px;
}

/* Testimonials */
.quote{
  margin: 0;
  border-radius: var(--radius-lg);
  border: 1px solid var(--line2);
  background: rgba(255,255,255,.03);
  box-shadow: var(--shadow2);
  padding: var(--space-5);
}
.quote blockquote{
  margin: 14px 0 14px;
  color: var(--muted);
  font-size: 14.5px;
}
.quote figcaption{
  color: var(--muted2);
  font-size: 13px;
}
.stars{
  display:flex;
  gap: 6px;
}
.star{
  width: 16px; height: 16px;
  display:inline-block;
  clip-path: polygon(50% 0%, 63% 36%, 100% 38%, 72% 60%, 82% 100%, 50% 78%, 18% 100%, 28% 60%, 0% 38%, 37% 36%);
  background: linear-gradient(135deg, rgba(161,18,42,.95), rgba(243,239,230,.65));
  box-shadow: 0 0 0 1px rgba(255,255,255,.12) inset;
}

/* Visit */
.visit-grid{
  display:grid;
  grid-template-columns: .95fr 1.05fr;
  gap: var(--space-6);
  align-items: start;
}
.visit-title{
  margin: 0 0 12px;
  font-size: 18px;
  letter-spacing: -0.02em;
}
.visit-info{
  font-style: normal;
  color: rgba(17,17,20,.78);
  line-height: 1.7;
}
:root[data-theme="light"] .visit-info{ color: rgba(18,18,21,.80); }
.link{
  color: rgba(17,17,20,.92);
  border-bottom: 1px solid rgba(161,18,42,.28);
  padding-bottom: 2px;
}
:root[data-theme="light"] .link{ color: rgba(18,18,21,.92); }
.link:hover{ border-bottom-color: rgba(161,18,42,.55); }

.visit-actions{
  display:flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 16px;
}
.fineprint{
  margin-top: 18px;
  display:flex;
  align-items:center;
  gap: 10px;
  color: rgba(17,17,20,.60);
  font-size: 13px;
}
.dot{
  width: 8px; height: 8px;
  border-radius: 999px;
  background: rgba(161,18,42,.65);
}

.map-card{
  border-radius: var(--radius-lg);
  border: 1px solid var(--line2);
  background: rgba(255,255,255,.03);
  box-shadow: var(--shadow2);
  overflow:hidden;
}
.map-frame{
  padding: 14px;
}
.map-caption{
  display:flex;
  gap: 10px;
  flex-wrap: wrap;
  padding: 14px 16px 16px;
  border-top: 1px solid var(--line2);
}

/* FAQ Accordion */
.accordion{
  max-width: 920px;
}
.accordion-item{
  border-radius: 18px;
  border: 1px solid var(--line2);
  background: rgba(255,255,255,.03);
  box-shadow: var(--shadow2);
  overflow:hidden;
}
.accordion-item + .accordion-item{ margin-top: 12px; }
.accordion-heading{ margin:0; }
.accordion-trigger{
  width:100%;
  text-align:left;
  padding: 16px 16px;
  display:flex;
  align-items:center;
  justify-content: space-between;
  gap: 14px;
  background: transparent;
  border: 0;
  color: var(--ivory);
  cursor:pointer;
  font-weight: 700;
  letter-spacing: -0.01em;
}
.accordion-icon{
  width: 22px; height: 22px;
  border-radius: 999px;
  border: 1px solid var(--line2);
  position: relative;
  flex: 0 0 auto;
}
.accordion-icon::before,
.accordion-icon::after{
  content:"";
  position:absolute;
  inset: 0;
  margin:auto;
  width: 12px;
  height: 2px;
  background: currentColor;
  opacity: .9;
  border-radius: 999px;
}
.accordion-icon::after{
  width: 2px;
  height: 12px;
  transition: transform .22s var(--ease);
}
.accordion-item.is-open .accordion-icon::after{
  transform: scaleY(0);
}
.accordion-panel{
  padding: 0 16px 16px;
  color: var(--muted);
  display:none;
}
.accordion-item.is-open .accordion-panel{ display:block; }
.accordion-panel p{ margin: 0; }

/* Contact */
.contact-grid{
  display:grid;
  grid-template-columns: 1.1fr .9fr;
  gap: var(--space-6);
  align-items: start;
}
.form{
  padding: var(--space-6);
}
.form-row{
  display:grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-4);
}
.field{ margin-bottom: 14px; }
label{
  display:block;
  font-weight: 700;
  margin-bottom: 8px;
  color: rgba(17,17,20,.86);
}
:root[data-theme="light"] label{ color: rgba(18,18,21,.86); }

.req{ color: var(--accent); }

input, select, textarea{
  width:100%;
  padding: 12px 12px;
  border-radius: 14px;
  border: 1px solid rgba(17,17,20,.14);
  background: rgba(255,255,255,.86);
  color: rgba(17,17,20,.92);
  font: inherit;
  transition: border-color .2s var(--ease), box-shadow .2s var(--ease), transform .2s var(--ease);
}
:root[data-theme="light"] input,
:root[data-theme="light"] select,
:root[data-theme="light"] textarea{
  background: rgba(255,255,255,.92);
  border-color: rgba(18,18,21,.14);
}

textarea{ resize: vertical; min-height: 140px; }

input:focus,
select:focus,
textarea:focus{
  border-color: rgba(161,18,42,.45);
  box-shadow: 0 0 0 5px rgba(161,18,42,.14);
  outline: none;
}

.field-help{
  margin: 8px 0 0;
  color: rgba(17,17,20,.60);
  font-size: 12.5px;
}
.field-error{
  margin: 8px 0 0;
  color: rgba(161,18,42,.92);
  font-size: 12.5px;
  min-height: 1.1em;
}

.form-actions{
  display:flex;
  align-items:flex-start;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 10px;
}
.form-note{
  margin: 0;
  color: rgba(17,17,20,.62);
  font-size: 12.5px;
  max-width: 46ch;
}

.form-success{
  margin-top: 18px;
  border-radius: 16px;
  border: 1px solid rgba(17,17,20,.10);
  background: rgba(161,18,42,.08);
  padding: 14px 14px;
  display:flex;
  gap: 12px;
  align-items:flex-start;
}
.success-badge{
  width: 34px; height: 34px;
  border-radius: 12px;
  display:grid; place-items:center;
  background: rgba(161,18,42,.16);
  color: rgba(17,17,20,.85);
  font-weight: 900;
}

.contact-aside .contact-card{
  border-radius: var(--radius-lg);
  border: 1px solid var(--line2);
  background: rgba(255,255,255,.03);
  box-shadow: var(--shadow2);
  padding: var(--space-6);
}
.contact-title{
  margin: 0 0 8px;
  font-size: 16px;
}
.contact-text{
  margin: 0 0 14px;
  color: var(--muted);
}
.contact-lines{
  margin: 0;
  color: var(--muted);
}
.contact-divider{
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--line), transparent);
  margin: 18px 0;
}
.mini-cta{ margin-top: 6px; }

/* Footer */
.site-footer{
  padding: var(--space-7) 0 var(--space-5);
  border-top: 1px solid var(--line2);
  background: linear-gradient(180deg, rgba(255,255,255,.02), rgba(255,255,255,.00));
}
.footer-inner{
  display:flex;
  gap: var(--space-6);
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-bottom: var(--space-5);
}
.footer-name{
  font-weight: 750;
  letter-spacing: -0.02em;
  font-size: 16px;
}
.footer-tagline{
  margin: 10px 0 0;
  color: var(--muted);
  max-width: 40ch;
}
.footer-nav{
  display:flex;
  gap: var(--space-6);
  flex-wrap: wrap;
}
.footer-col{
  min-width: 160px;
}
.footer-head{
  font-size: 12px;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--muted2);
  margin-bottom: 10px;
}
.footer-col ul{
  margin: 0;
  padding: 0;
  list-style: none;
}
.footer-col li{ margin: 8px 0; }
.footer-col a{
  color: var(--muted);
  padding-bottom: 2px;
  border-bottom: 1px solid transparent;
  transition: color .2s var(--ease), border-color .2s var(--ease), transform .2s var(--ease);
  display:inline-block;
}
.footer-col a:hover{
  color: var(--ivory);
  border-color: rgba(243,239,230,.20);
  transform: translateY(-1px);
}

.footer-bottom{
  display:flex;
  align-items:center;
  justify-content: space-between;
  gap: var(--space-3);
  flex-wrap: wrap;
  padding-top: var(--space-4);
  border-top: 1px solid var(--line2);
}
.copyright{
  margin: 0;
  color: var(--muted2);
  font-size: 12.5px;
}
.back-to-top{
  color: var(--muted);
  font-size: 12.5px;
  border-bottom: 1px solid rgba(243,239,230,.12);
  padding-bottom: 2px;
}
.back-to-top:hover{ color: var(--ivory); border-bottom-color: rgba(243,239,230,.22); }

/* Modal */
.modal{
  position: fixed;
  inset: 0;
  display:none;
  z-index: 80;
}
.modal.is-open{ display:block; }
.modal-backdrop{
  position:absolute;
  inset: 0;
  background: rgba(0,0,0,.62);
  backdrop-filter: blur(6px);
}
.modal-dialog{
  position: relative;
  width: min(560px, calc(100% - 2*var(--space-4)));
  margin: 10vh auto;
  border-radius: var(--radius-lg);
  border: 1px solid var(--line2);
  background: linear-gradient(180deg, rgba(15,15,18,.95), rgba(15,15,18,.90));
  box-shadow: var(--shadow);
  overflow:hidden;
}
:root[data-theme="light"] .modal-dialog{
  background: linear-gradient(180deg, rgba(246,243,236,.98), rgba(246,243,236,.92));
  color: var(--ink);
}
.modal-head{
  display:flex;
  align-items:center;
  justify-content: space-between;
  gap: var(--space-2);
  padding: 16px 16px;
  border-bottom: 1px solid var(--line2);
}
.modal-title{
  margin: 0;
  font-size: 16px;
  letter-spacing: -0.02em;
}
.modal-body{
  padding: 16px;
}
.modal-text{
  margin: 0 0 14px;
  color: var(--muted);
}
:root[data-theme="light"] .modal-text{ color: rgba(18,18,21,.72); }
.modal-actions{
  display:flex;
  gap: 12px;
  flex-wrap: wrap;
}

/* Reveal on scroll */
.reveal{
  opacity: 0;
  transform: translateY(12px);
  transition: opacity .7s var(--ease2), transform .7s var(--ease2);
  will-change: opacity, transform;
}
.reveal.is-visible{
  opacity: 1;
  transform: translateY(0);
}

/* Responsive */
@media (max-width: 980px){
  .hero-inner{ grid-template-columns: 1fr; }
  .about-grid{ grid-template-columns: 1fr; }
  .visit-grid{ grid-template-columns: 1fr; }
  .contact-grid{ grid-template-columns: 1fr; }
  .timeline{ grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .timeline-step:not(:last-child)::after{ display:none; }
  .product-grid{ grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .grid-3{ grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 720px){
  .section{ padding: var(--space-7) 0; }
  .grid-3{ grid-template-columns: 1fr; }
  .grid-2{ grid-template-columns: 1fr; }
  .product-grid{ grid-template-columns: 1fr; }
  .timeline{ grid-template-columns: 1fr; }
  .form-row{ grid-template-columns: 1fr; }
  .featured-controls{ flex-direction: column; align-items:flex-start; }
  .nav-toggle{ display:inline-flex; }
  .nav-menu{
    position:absolute;
    top: calc(100% + 10px);
    right: 0;
    width: min(420px, calc(100vw - 2*var(--space-4)));
    border-radius: 18px;
    border: 1px solid var(--line2);
    background: linear-gradient(180deg, rgba(15,15,18,.98), rgba(15,15,18,.92));
    box-shadow: var(--shadow);
    padding: 10px;
    display:none;
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
  :root[data-theme="light"] .nav-menu{
    background: linear-gradient(180deg, rgba(246,243,236,.98), rgba(246,243,236,.92));
    color: var(--ink);
  }
  .nav-menu.is-open{ display:flex; }
  .nav-list{
    flex-direction: column;
    align-items: stretch;
    gap: 6px;
    padding: 4px;
  }
  .nav-link{
    border-radius: 14px;
    padding: 12px 12px;
    background: rgba(255,255,255,.03);
    border: 1px solid var(--line2);
  }
  :root[data-theme="light"] .nav-link{
    background: rgba(18,18,21,.04);
  }
  .nav-tools{
    border-left: 0;
    padding-left: 0;
    padding: 6px 4px 4px;
    justify-content: flex-end;
  }
}

/* Subtle section separators */
.section::before{
  content:"";
  position:absolute;
  left: 0; right:0;
  top: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(243,239,230,.08), transparent);
  opacity: .55;
}
.hero::before{ display:none; }

/* Selection */
::selection{
  background: rgba(161,18,42,.35);
  color: var(--ivory2);
}