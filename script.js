const root = document.documentElement;
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const metaDescription = document.getElementById("meta-description");
const pageTitle = document.getElementById("page-title");
const languageToggle = document.getElementById("language-toggle");

const translations = {
  "zh-CN": {
    htmlTitle: "Chaoxiang Yang | 个人主页",
    metaDescription: "Chaoxiang Yang 的个人工程作品集，聚焦 FPGA、Python 与音频工具开发。",
    splashAriaLabel: "开屏动画",
    skipSplash: "跳过动画",
    skipToMain: "跳转到主要内容",
    backToTopAriaLabel: "返回顶部",
    primaryNavAriaLabel: "主导航",
    languageToggleAriaLabel: "切换语言",
    themeToggleAriaLabel: "切换主题",
    projectHighlightsAriaLabel: "项目概览",
    currentFocusAriaLabel: "当前重点方向",
    brandText: "工程作品集",
    navProjects: "项目",
    navFeatures: "功能",
    navCertificates: "证书",
    navContact: "联系",
    themeToggle: "主题",
    heroSubtitle: "这个站点将作为我的个人工程主页。当前先集中展示两个核心项目：一个是基于 FPGA 的 BMS 播放器基础版本，另一个是基于 Python 的音频编辑软件开发版本，后续会继续加入功能迭代、证书与更多工程实践。",
    heroPrimaryButton: "查看项目",
    heroSecondaryButton: "查看规划功能",
    statCurrentProjects: "当前项目",
    statPlannedFeatures: "规划功能",
    statCertificateSlots: "证书展示位",
    focusItemOneTitle: "FPGA 基础 BMS 播放器",
    focusItemOneDetail: "基础版本，突出音频播放逻辑、硬件时序控制与模块化设计。",
    focusItemTwoTitle: "Python 音频编辑软件",
    focusItemTwoDetail: "develop 中，面向音频切片、可视化编辑和基础处理流程。",
    focusNext: "功能扩展 / 文档补全 / 证书展示",
    projectsEyebrow: "精选项目",
    projectsTitle: "项目展示",
    projectsIntro: "首页内容先收缩到两个最核心的工程项目，让访问者一眼看到你当前真正投入的方向。",
    projectOneTag: "FPGA",
    projectOneTitle: "FPGA 基础版 BMS 播放器",
    projectOneDesc: "以硬件逻辑为核心的基础版播放器项目，重点展示 BMS 播放流程、节奏控制、音频输出链路和适合继续扩展的模块组织方式。",
    projectOneMetaA: "基础版本",
    projectOneMetaB: "硬件时序",
    projectOneMetaC: "模块化设计",
    projectTwoTag: "Python",
    projectTwoTitle: "Python 音频编辑软件",
    projectTwoDesc: "正在 develop 中的桌面音频工具，目标是提供更直观的音频剪辑与编辑体验，后续会逐步补充波形显示、处理流程和导出能力。",
    projectTwoMetaA: "develop",
    projectTwoMetaB: "音频编辑",
    projectTwoMetaC: "工具软件",
    featuresEyebrow: "功能路线",
    featuresTitle: "后续功能",
    featuresIntro: "这里保留为可持续扩展的区域，适合陆续补充你想做的功能、优化方向和正在推进的工程点。",
    featureOneTitle: "波形可视化编辑",
    featureOneDesc: "为 Python 音频软件加入更清晰的波形浏览、缩放与区间选取能力。",
    featureTwoTitle: "批量处理流程",
    featureTwoDesc: "支持批量导入、批量裁剪或统一导出，降低重复操作成本。",
    featureThreeTitle: "硬件演示页面",
    featureThreeDesc: "为 FPGA 项目补上架构图、时序说明和演示视频入口。",
    featureFourTitle: "工程文档整理",
    featureFourDesc: "沉淀设计说明、开发日志与使用说明，让作品更完整可读。",
    certificatesEyebrow: "证书与经历",
    certificatesTitle: "证书与经历",
    certificatesIntro: "这里先做成展示位。之后你只需要把证书名称、时间、机构和对应图片或链接补进去即可。",
    certificateOneSlot: "位置 01",
    certificateOneTitle: "FPGA / 嵌入式相关证书",
    certificateOneDesc: "预留给硬件方向证书、竞赛或项目认证。",
    certificateTwoSlot: "位置 02",
    certificateTwoTitle: "Python / 软件开发相关证书",
    certificateTwoDesc: "预留给编程、工具开发或技术课程认证。",
    certificateThreeSlot: "位置 03",
    certificateThreeTitle: "音频 / 创作工具相关成果",
    certificateThreeDesc: "也可以放作品证明、开发经历或阶段性里程碑。",
    contactEyebrow: "联系",
    contactTitle: "欢迎交流项目与合作",
    contactDesc: "如果你对 FPGA、音频工具或工程实现细节感兴趣，欢迎通过邮件或 GitHub 联系我。",
    contactPrimaryButton: "发送邮件",
    copyEmail: "复制邮箱",
    copiedEmail: "已复制",
    footerBuiltWith: "使用原生 HTML / CSS / JS 构建"
  },
  en: {
    htmlTitle: "Chaoxiang Yang | Portfolio",
    metaDescription: "Chaoxiang Yang's engineering portfolio, focused on FPGA, Python, and audio tool development.",
    splashAriaLabel: "Opening animation",
    skipSplash: "Skip animation",
    skipToMain: "Skip to main content",
    backToTopAriaLabel: "Back to top",
    primaryNavAriaLabel: "Primary navigation",
    languageToggleAriaLabel: "Switch language",
    themeToggleAriaLabel: "Toggle theme",
    projectHighlightsAriaLabel: "Project highlights",
    currentFocusAriaLabel: "Current focus",
    brandText: "Engineering Portfolio",
    navProjects: "Projects",
    navFeatures: "Features",
    navCertificates: "Certificates",
    navContact: "Contact",
    themeToggle: "Theme",
    heroSubtitle: "This site will serve as my personal engineering homepage. For now it focuses on two core projects: a basic FPGA-based BMS player and a Python audio editing application in development, with more features, certificates, and engineering work to be added over time.",
    heroPrimaryButton: "View Projects",
    heroSecondaryButton: "View Roadmap",
    statCurrentProjects: "Current Projects",
    statPlannedFeatures: "Planned Features",
    statCertificateSlots: "Certificate Slots",
    focusItemOneTitle: "Basic FPGA BMS Player",
    focusItemOneDetail: "An entry version highlighting audio playback logic, hardware timing control, and modular design.",
    focusItemTwoTitle: "Python Audio Editor",
    focusItemTwoDetail: "Currently in develop, aimed at audio slicing, visual editing, and a practical basic processing workflow.",
    focusNext: "Feature expansion / docs / certificates",
    projectsEyebrow: "Selected Projects",
    projectsTitle: "Projects",
    projectsIntro: "The homepage is intentionally narrowed to the two projects that best show where my current effort is going.",
    projectOneTag: "FPGA",
    projectOneTitle: "Basic FPGA BMS Player",
    projectOneDesc: "A hardware-centered base player project focused on BMS playback flow, rhythm control, the audio output path, and a modular structure that can keep growing.",
    projectOneMetaA: "Base version",
    projectOneMetaB: "Timing control",
    projectOneMetaC: "Modular design",
    projectTwoTag: "Python",
    projectTwoTitle: "Python Audio Editor",
    projectTwoDesc: "A desktop audio tool now in develop, aiming to provide a more intuitive editing experience with waveform display, processing flow, and export support added step by step.",
    projectTwoMetaA: "develop",
    projectTwoMetaB: "Audio editing",
    projectTwoMetaC: "Desktop tool",
    featuresEyebrow: "Roadmap",
    featuresTitle: "Upcoming Features",
    featuresIntro: "This section stays open for continuous expansion, making it easy to add features, optimizations, and engineering directions as they move forward.",
    featureOneTitle: "Waveform Visual Editing",
    featureOneDesc: "Add clearer waveform browsing, zooming, and range selection to the Python audio tool.",
    featureTwoTitle: "Batch Processing Flow",
    featureTwoDesc: "Support batch import, batch trimming, and unified export to reduce repetitive work.",
    featureThreeTitle: "Hardware Demo Page",
    featureThreeDesc: "Add architecture diagrams, timing notes, and a demo video entry for the FPGA project.",
    featureFourTitle: "Engineering Documentation",
    featureFourDesc: "Capture design notes, dev logs, and usage docs so the work feels complete and readable.",
    certificatesEyebrow: "Certificates",
    certificatesTitle: "Certificates & Experience",
    certificatesIntro: "This area is currently a placeholder. Later you can simply fill in certificate names, dates, institutions, and related images or links.",
    certificateOneSlot: "Slot 01",
    certificateOneTitle: "FPGA / Embedded Certificates",
    certificateOneDesc: "Reserved for hardware-related certificates, competitions, or project credentials.",
    certificateTwoSlot: "Slot 02",
    certificateTwoTitle: "Python / Software Development Certificates",
    certificateTwoDesc: "Reserved for programming, tool development, or technical course credentials.",
    certificateThreeSlot: "Slot 03",
    certificateThreeTitle: "Audio / Creative Tool Outcomes",
    certificateThreeDesc: "This can also hold portfolio proof, development experience, or milestone highlights.",
    contactEyebrow: "Contact",
    contactTitle: "Open to Project Discussions and Collaboration",
    contactDesc: "If you're interested in FPGA, audio tools, or engineering implementation details, feel free to reach out by email or GitHub.",
    contactPrimaryButton: "Send Email",
    copyEmail: "Copy Email",
    copiedEmail: "Copied",
    footerBuiltWith: "Built with plain HTML / CSS / JS"
  }
};

let currentLanguage = null;

function normalizeLanguage(language) {
  if (!language) return "en";
  return language.toLowerCase().startsWith("zh") ? "zh-CN" : "en";
}

function translate(key) {
  return translations[currentLanguage]?.[key] ?? translations.en[key] ?? key;
}

function applyTranslations(language) {
  currentLanguage = normalizeLanguage(language);
  document.documentElement.lang = currentLanguage;

  if (pageTitle) {
    pageTitle.textContent = translate("htmlTitle");
  }

  if (metaDescription) {
    metaDescription.setAttribute("content", translate("metaDescription"));
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translate(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    const mappings = element.dataset.i18nAttr.split(";");
    mappings.forEach((mapping) => {
      const [attribute, key] = mapping.split(":");
      if (attribute && key) {
        element.setAttribute(attribute.trim(), translate(key.trim()));
      }
    });
  });

  if (languageToggle) {
    languageToggle.textContent = currentLanguage === "zh-CN" ? "EN" : "中";
  }
}

function getPreferredLanguage() {
  const savedLanguage = localStorage.getItem("site-language");
  if (savedLanguage) return normalizeLanguage(savedLanguage);

  const browserLanguage = navigator.languages?.[0] || navigator.language || "en";
  return normalizeLanguage(browserLanguage);
}

/* ---------- Theme ---------- */
const savedTheme = localStorage.getItem("site-theme");
if (savedTheme) {
  root.dataset.theme = savedTheme;
}

applyTranslations(getPreferredLanguage());

const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    localStorage.setItem("site-theme", next);
  });
}

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    const next = currentLanguage === "zh-CN" ? "en" : "zh-CN";
    localStorage.setItem("site-language", next);
    applyTranslations(next);
  });
}

/* ---------- Year ---------- */
const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

/* ---------- Canvas background ---------- */
const canvas = document.getElementById("matrix-canvas");
const ctx = canvas ? canvas.getContext("2d") : null;
let width = 0;
let height = 0;
let particles = [];

function resizeCanvas() {
  if (!canvas || !ctx) return;

  width = canvas.width = window.innerWidth * window.devicePixelRatio;
  height = canvas.height = window.innerHeight * window.devicePixelRatio;
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;

  const count = Math.min(110, Math.floor(window.innerWidth / 14));
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.2 * window.devicePixelRatio,
    vy: (Math.random() - 0.5) * 0.2 * window.devicePixelRatio,
    r: (Math.random() * 1.5 + 0.5) * window.devicePixelRatio
  }));
}

function drawNetwork() {
  if (!ctx || prefersReducedMotion) return;

  ctx.clearRect(0, 0, width, height);
  const isLight = root.dataset.theme === "light";
  ctx.fillStyle = isLight ? "rgba(0,0,0,0.52)" : "rgba(255,255,255,0.62)";
  ctx.strokeStyle = isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.11)";

  for (const particle of particles) {
    particle.x += particle.vx;
    particle.y += particle.vy;

    if (particle.x < 0 || particle.x > width) particle.vx *= -1;
    if (particle.y < 0 || particle.y > height) particle.vy *= -1;

    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
    ctx.fill();
  }

  for (let i = 0; i < particles.length; i += 1) {
    for (let j = i + 1; j < particles.length; j += 1) {
      const a = particles[i];
      const b = particles[j];
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const limit = 120 * window.devicePixelRatio;

      if (dist < limit) {
        ctx.globalAlpha = 1 - dist / limit;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
        ctx.globalAlpha = 1;
      }
    }
  }

  requestAnimationFrame(drawNetwork);
}

resizeCanvas();
drawNetwork();
window.addEventListener("resize", resizeCanvas);

/* ---------- Splash animation ---------- */
const splashScreen = document.getElementById("splash-screen");
const skipSplash = document.getElementById("skip-splash");
const cubesHost = document.getElementById("orbit-cubes");
let splashFinished = false;
let splashAnimationFrame = null;

function finishSplash() {
  if (!splashScreen || splashFinished) return;
  splashFinished = true;
  splashScreen.classList.add("is-hidden");

  if (splashAnimationFrame) {
    cancelAnimationFrame(splashAnimationFrame);
  }

  window.setTimeout(() => {
    splashScreen.remove();
  }, 900);
}

if (skipSplash) {
  skipSplash.addEventListener("click", finishSplash);
}

if (splashScreen && cubesHost) {
  const cubeCount = 12;
  const cubes = Array.from({ length: cubeCount }, () => {
    const cube = document.createElement("span");
    cube.className = "cube";
    cubesHost.appendChild(cube);
    return cube;
  });

  const animateOrbit = (time) => {
    const radiusX = cubesHost.clientWidth * 0.48;
    const radiusY = cubesHost.clientHeight * 0.48;
    const speed = 0.00018;

    cubes.forEach((cube, index) => {
      const progress = (time * speed + index / cubeCount) % 1;
      const angle = Math.PI - progress * Math.PI;
      const x = Math.cos(angle) * radiusX;
      const y = -Math.sin(angle) * radiusY;
      const lift = Math.sin(progress * Math.PI);
      const scale = 0.62 + lift * 0.7;
      const opacity = 0.28 + lift * 0.72;

      cube.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${progress * 360}deg) scale(${scale})`;
      cube.style.opacity = opacity.toFixed(2);
      cube.style.zIndex = `${Math.round(lift * 10)}`;
    });

    if (!splashFinished) {
      splashAnimationFrame = requestAnimationFrame(animateOrbit);
    }
  };

  if (prefersReducedMotion) {
    cubes.forEach((cube, index) => {
      const angle = Math.PI - (index / (cubeCount - 1)) * Math.PI;
      const x = Math.cos(angle) * cubesHost.clientWidth * 0.48;
      const y = -Math.sin(angle) * cubesHost.clientHeight * 0.48;
      cube.style.transform = `translate3d(${x}px, ${y}px, 0) scale(0.9)`;
      cube.style.opacity = "0.82";
    });
    window.setTimeout(finishSplash, 900);
  } else {
    splashAnimationFrame = requestAnimationFrame(animateOrbit);
    window.setTimeout(finishSplash, 3600);
  }
}

/* ---------- Counter animation ---------- */
const counters = document.querySelectorAll("[data-count]");

if (counters.length) {
  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const element = entry.target;
      const target = Number(element.dataset.count);
      let current = 0;
      const step = Math.max(1, Math.ceil(target / 40));

      const tick = () => {
        current = Math.min(target, current + step);
        element.textContent = current;
        if (current < target) {
          requestAnimationFrame(tick);
        }
      };

      tick();
      observer.unobserve(element);
    });
  }, { threshold: 0.55 });

  counters.forEach((counter) => counterObserver.observe(counter));
}

/* ---------- Reveal on scroll ---------- */
const revealItems = document.querySelectorAll(".reveal");

if (revealItems.length) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.15 });

  revealItems.forEach((item) => revealObserver.observe(item));
}

/* ---------- Copy email ---------- */
const copyEmail = document.getElementById("copy-email");

if (copyEmail) {
  copyEmail.addEventListener("click", async () => {
    const email = "Chaoxiang.22@intl.zju.edu.cn";
    try {
      await navigator.clipboard.writeText(email);
      copyEmail.textContent = translate("copiedEmail");
      window.setTimeout(() => {
        copyEmail.textContent = translate("copyEmail");
      }, 1200);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  });
}
