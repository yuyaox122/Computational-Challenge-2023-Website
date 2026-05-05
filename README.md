# BPhO Computational Challenge 2023 — Solar System Orbital Modelling

[![Website](https://img.shields.io/badge/Website-Live-blue)](http://computational-challenge.netlify.app/)
[![Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/drive/1cvxSeJW4UPG7EYQNYBPJ6KV8dELnf206?usp=sharing)

## About the Challenge

The [BPhO Computational Challenge](https://www.bpho.org.uk/bpho/computational-challenge/) is an annual extended project run by the **British Physics Olympiad**. Rather than a single exam, it is a three-month project (Easter–August) in which students build computational models of a physics topic, then submit a 2-minute screencast video explaining their work. We were lucky to be in the top 5 and were invited to present at the **Royal Institution** in London.

The **2023 theme was orbital mechanics** — building progressively more sophisticated models of the Solar System, from Kepler's Third Law through to 3D animated orbits, eccentric motion, spirographs, and Ptolemaic (relative) orbit plots.

This repository contains the **Vue.js website** built to present the project, alongside the full Python/Manim source code. The interactive Unity 3D solar system is in a separate repo linked below.

---

## Links

| Resource | Link |
|---|---|
| 🌐 Project Website | [http://computational-challenge.netlify.app/](http://computational-challenge.netlify.app/)|
| 📓 Google Colab (all tasks) | [Open in Colab](https://colab.research.google.com/drive/1cvxSeJW4UPG7EYQNYBPJ6KV8dELnf206?usp=sharing) |
| 🎮 Unity Solar System | [Solar System Unity Project](https://github.com/yuyaox122/Solar-System-Unity) |

---

## Tasks

All computational tasks were implemented in Python using **Manim** for animation and **NumPy / pandas / matplotlib** for data handling. Orbital mechanics follows Kepler's laws with elliptical orbits parameterised in polar form.

### Global Setup

Planetary data (Mercury through Pluto) is stored in a pandas DataFrame covering:
- Mass, semi-major axis, semi-minor axis, orbital & rotational periods
- Eccentricity, inclination angle, surface gravity, radius, and colour

The polar orbit equation used throughout is:

$$r(\theta) = \frac{a(1 - \varepsilon^2)}{1 - \varepsilon \cos\theta}$$

where $a$ is the semi-major axis and $\varepsilon$ is the eccentricity.

---

### Task 1 — Kepler's Third Law

Plots orbital period $T$ (years) against $a^{3/2}$ (AU) for all planets, verifying Kepler's Third Law ($T^2 \propto a^3$). Animated with Manim axes and a line graph.

---

### Task 2 — Elliptical Orbits (Static)

Draws the elliptical orbits of all 9 planets as parametric curves using the polar equation above. Uses a `MovingCameraScene` to first show the inner planets (Mercury–Mars) at small scale, then transforms and zooms out to reveal the outer planets (Jupiter–Pluto).

---

### Task 3 — 2D Animated Orbits

Animates planets moving along their elliptical orbits in real relative time. Inner and outer solar system are handled separately with scaled run-times so that all planets in each group complete their orbits simultaneously:

- **Inner system** (Mercury–Mars): time scaled relative to Mars's period
- **Outer system** (Jupiter–Pluto): time scaled relative to Pluto's period

Planets are represented as coloured dots; orbits are drawn first, then planets are created and set in motion using `MoveAlongPath`.

---

### Task 4 — 3D Animated Orbits

Extends Task 3 into three dimensions using `ThreeDScene`. Orbits are tilted by each planet's true **inclination angle** relative to the ecliptic plane. Planets are rendered as spheres. Ambient camera rotation is used to give a sense of depth. The scene transforms between the inner and outer solar system using the same zoom-out technique as Task 2.

---

### Task 5 — Eccentric Orbit: Angle vs Time

Demonstrates that a planet does **not** sweep its orbit angle at a constant rate — it moves faster near perihelion (Kepler's Second Law).

Time as a function of polar angle is computed by numerical integration (Simpson's Rule) of:

$$t(\theta) = \frac{P(1-\varepsilon^2)^{3/2}}{2\pi} \int_0^\theta \frac{d\theta'}{(1 - \varepsilon\cos\theta')^2}$$

The resulting $\theta(t)$ curve (eccentric) is plotted against the uniform circular approximation, making the difference in angular velocity visible. The plot is generated for a user-selected planet.

---

### Task 6 — Spirograph

Connects two planets with a line at each instant in time and traces the resulting spirograph pattern. The time-mapping from Task 5 is used to correctly position each planet at the same physical moment. The number of sampled time points and target orbits are configurable. Rendered using `MovingCameraScene` with a large number of `Line` objects created progressively.

---

### Task 7 — Relative (Ptolemaic) Orbits

Generates spirograph patterns viewed from the perspective of one planet rather than the Sun — i.e. the apparent path of one planet as seen from another. Two variants are provided:

- **`spirograph_s`** — relative orbit of one planet as seen from a chosen centre planet
- **`spirograph`** — relative orbits of three planets simultaneously as seen from a centre planet

Angular positions at each timestep are computed using the same eccentric time-mapping, and the resulting line vectors (length and angle) are stored and replayed in the Manim animation. This produces Ptolemaic epicycle-like patterns.

---

## Tech Stack

| Layer | Tools |
|---|---|
| Animations | [Manim Community](https://www.manim.community/) |
| Numerics | NumPy, pandas, manual Simpson's Rule integration |
| Website | Vue.js, Vite, Tailwind CSS |
| 3D Interactive | Unity |
| Notebook | Google Colab |

---

## Repository Structure

```
├── src/          # Vue.js website source
├── public/       # Static assets (videos, images)
├── dist/         # Built website
├── mathjax/      # MathJax for equation rendering
└── README.md
```

The Manim Python code for all 7 tasks lives in the [Google Colab notebook](https://colab.research.google.com/drive/1cvxSeJW4UPG7EYQNYBPJ6KV8dELnf206?usp=sharing).

---

## Running the Colab Notebook

1. Open the [Colab link](https://colab.research.google.com/drive/1cvxSeJW4UPG7EYQNYBPJ6KV8dELnf206?usp=sharing)
2. Run the **Imports** cell first — this installs Manim and its system dependencies (ffmpeg, LaTeX, Cairo, Pango)
3. Run the **Global Functions and Init** cell to load all planetary data
4. Run any individual Task cell and execute the corresponding `%manim` magic command to render the animation

> ⚠️ Manim installation in Colab takes a few minutes on first run. A GPU runtime is not required.

---

## Running the Website Locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```
