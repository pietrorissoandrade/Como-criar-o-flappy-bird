* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

body {
  background-color: #0b0e14;
  color: #e1e6ed;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background: linear-gradient(135deg, #001f3f, #00d26a);
  color: white;
  text-align: center;
  padding: 3rem 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
}

header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
}

header p {
  font-size: 1.1rem;
  color: #a0aec0;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1000px;
  margin: 2rem auto;
  padding: 0 1rem;
  flex: 1;
}

.card {
  background: #161b22;
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid #30363d;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.card h2 {
  color: #00d26a;
  margin-bottom: 1.2rem;
  border-bottom: 2px solid #30363d;
  padding-bottom: 0.5rem;
  font-size: 1.5rem;
}

.history-section p {
  line-height: 1.7;
  margin-bottom: 1rem;
  color: #c9d1d9;
}

/* Linha do Tempo */
.timeline-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1.5rem 0;
}

.era-btn {
  background-color: #21262d;
  color: #c9d1d9;
  border: 1px solid #30363d;
  padding: 0.75rem 1.25rem;
  font-size: 0.95rem;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.era-btn:hover {
  background-color: #30363d;
  color: #00d26a;
}

.era-btn.active {
  background-color: #00d26a;
  color: #0d1117;
  border-color: #00d26a;
}

.era-box {
  background: #0d1117;
  border-left: 4px solid #00d26a;
  padding: 1.5rem;
  border-radius: 6px;
  margin-top: 1rem;
}

.era-box h3 {
  color: #fff;
  margin-bottom: 0.6rem;
  font-size: 1.2rem;
}

.era-box p {
  line-height: 1.6;
  color: #8b949e;
}

/* Grid de Estatísticas */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.stat-item {
  background: #0d1117;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #30363d;
  text-align: center;
}

.stat-item h3 {
  color: #00d26a;
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
}

.stat-item p {
  color: #8b949e;
  font-size: 0.95rem;
  line-height: 1.4;
}

/* Layout do Manual */
.manual-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.manual-col h3 {
  color: #fff;
  margin-bottom: 0.8rem;
}

.manual-col ul {
  margin-left: 1.2rem;
  line-height: 1.8;
}

.manual-col li {
  margin-bottom: 0.8rem;
  color: #c9d1d9;
}

/* Glossário */
.glossary-section dl {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

.glossary-section dt {
  color: #00d26a;
  font-size: 1.05rem;
}

.glossary-section dd {
  margin-left: 0;
  color: #8b949e;
  line-height: 1.5;
  margin-bottom: 0.5rem;
}

footer {
  text-align: center;
  padding: 1.5rem;
  background-color: #161b22;
  border-top: 1px solid #30363d;
  color: #8b949e;
  margin-top: 2rem;
}
