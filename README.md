# Personal Open Source Website

这是一个黑白风格、互动性较强的个人开源资料主页模板，适合直接部署到 GitHub Pages。

## 文件结构

```text
.
├── index.html
├── styles.css
├── script.js
└── README.md
```

## 主要效果

- 黑白极简视觉风格
- 粒子网络背景
- Glitch 标题效果
- 自定义鼠标光标
- 卡片 3D tilt 互动
- 资源搜索与分类筛选
- 命令面板：`Ctrl / Cmd + K`
- 深色 / 浅色黑白主题切换
- 无外部依赖，适合 GitHub Pages

## 如何部署到 GitHub Pages

### 方法一：个人主页仓库

1. 新建仓库，名称必须是：

```text
你的GitHub用户名.github.io
```

例如：

```text
andyyang4317.github.io
```

2. 把本文件夹里的 `index.html`, `styles.css`, `script.js`, `README.md` 上传到仓库根目录。
3. 等待 GitHub Pages 自动部署。
4. 访问：

```text
https://你的GitHub用户名.github.io
```

### 方法二：普通项目仓库

1. 新建任意仓库，例如 `open-source-site`。
2. 上传本文件夹内容。
3. 进入仓库 Settings → Pages。
4. Source 选择 `Deploy from a branch`。
5. Branch 选择 `main`，目录选择 `/root`。
6. 保存后等待部署。

## 需要你自己替换的内容

在 `index.html` 中重点修改：

- 网站标题：`Chaoxiang Yang | Open Source Lab`
- Hero 介绍文字
- GitHub 链接：`https://github.com/andyyang4317`
- Email：`Chaoxiang.22@intl.zju.edu.cn`
- 资源卡片中的 `href="#"`，替换成你的真实链接
- 项目展示与更新时间线

## 自定义建议

- 想更“赛博”：增加更多 canvas 粒子数量，或把 `styles.css` 中的 `opacity` 调高。
- 想更“学术”：删掉 glitch 效果，增加 Publications / CV 区块。
- 想更“开源社区”：增加 issue、贡献指南、license、star history。
