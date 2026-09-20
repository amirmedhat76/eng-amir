/* ================= إعدادات أساسية ومتغيرات التصميم ================= */
:root {
    --bg-color: #030712;
    --card-bg: rgba(30, 41, 59, 0.7);
    --primary: #38bdf8;
    --secondary: #c084fc;
    --text-color: #f8fafc;
    --text-muted: #94a3b8;
    --border-glow: rgba(56, 189, 248, 0.3);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Cairo', sans-serif;
    scroll-behavior: smooth;
}

body {
    background-color: var(--bg-color);
    color: var(--text-color);
    overflow-x: hidden;
}

/* خلفية متوهجة متحركة في الخلفية */
body::before {
    content: '';
    position: fixed;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(56, 189, 248, 0.05) 0%, rgba(192, 132, 252, 0.02) 40%, transparent 70%);
    z-index: -1;
    animation: backgroundPulse 15s ease infinite alternate;
}

@keyframes backgroundPulse {
    0% { transform: scale(1) translate(0, 0); }
    100% { transform: scale(1.1) translate(30px, 30px); }
}

/* ================= الهيدر مع أنيميشن قوي ================= */
header {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 20px;
    position: relative;
}

header h3 {
    color: var(--primary);
    font-size: 1.5rem;
    margin-bottom: 15px;
    letter-spacing: 2px;
    animation: dropDown 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

header h1 {
    font-size: 4rem;
    margin-bottom: 20px;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: scaleUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    filter: drop-shadow(0 0 20px rgba(56, 189, 248, 0.3));
}

header p {
    font-size: 1.2rem;
    color: var(--text-muted);
    max-width: 650px;
    line-height: 1.8;
    animation: fadeIn 1.5s ease-out forwards;
}

/* ================= الأقسام والبطاقات المتحركة ================= */
section {
    padding: 100px 8%;
}

.section-title {
    text-align: center;
    font-size: 2.8rem;
    margin-bottom: 60px;
    position: relative;
}

.section-title span {
    color: var