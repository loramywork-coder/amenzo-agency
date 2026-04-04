"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const VS_SOURCE = `
precision mediump float;
attribute vec2 a_position;
varying vec2 vUv;
void main() { vUv = .5 * (a_position + 1.); gl_Position = vec4(a_position, 0., 1.); }
`;

const FS_SOURCE = `
precision mediump float;
varying vec2 vUv;
uniform float u_time;
uniform float u_ratio;
uniform vec2 u_pointer;

vec2 rotate(vec2 uv, float th) { return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv; }

float fbm(vec2 uv, float t) {
  vec2 acc = vec2(0.); vec2 res = vec2(0.); float s = 6.;
  for (int i = 0; i < 12; i++) {
    uv = rotate(uv, 1.); acc = rotate(acc, 1.);
    vec2 l = uv * s + float(i) + acc - t;
    acc += sin(l); res += (.5 + .5 * cos(l)) / s; s *= 1.2;
  }
  return res.x + res.y;
}

void main() {
  vec2 uv = .5 * vUv; uv.x *= u_ratio;
  vec2 p = vUv - u_pointer; p.x *= u_ratio;
  float d = .5 * pow(1. - clamp(length(p), 0., 1.), 2.);
  float t = .001 * u_time;
  float n = fbm(uv, t + d);
  n = 1.2 * pow(n, 3.); n += pow(n, 10.);
  n = max(0., n - .5); n *= (1. - length(vUv - .5));
  vec3 c = mix(vec3(.04,.04,.18), vec3(.12,.25,1.), .4);
  c = mix(c, vec3(.49,.23,.93), .3 + .2*sin(t*2.));
  c += vec3(.75,.15,.83) * .15 * sin(t*3.+1.);
  gl_FragColor = vec4(c * n, 1.);
}
`;

const INFO_CARDS = [
  {
    title: "Fragment Shaders",
    description:
      "Each pixel is computed independently on the GPU, allowing millions of calculations per frame. The aurora effect uses fractal Brownian motion to create organic, flowing patterns.",
  },
  {
    title: "Cursor Reactivity",
    description:
      "The mouse position is passed as a uniform to the shader, creating a displacement field that warps the aurora around your cursor in real time.",
  },
  {
    title: "FBM Noise",
    description:
      "Fractal Brownian Motion layers multiple octaves of rotated sine waves, each at increasing frequency and decreasing amplitude, to produce natural-looking turbulence.",
  },
  {
    title: "GPU-Powered",
    description:
      "WebGL leverages the graphics card for massively parallel computation. This shader runs 12 loop iterations per pixel at 60fps with minimal CPU overhead.",
  },
];

function compileShader(
  gl: WebGLRenderingContext,
  source: string,
  type: number
) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error("Shader error:", gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export default function LiquidAuroraPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointer = useRef({ x: 0, y: 0, tX: 0, tY: 0 });
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvasEl = canvasRef.current;
    if (!canvasEl) return;

    const gl = (canvasEl.getContext("webgl") ||
      canvasEl.getContext("experimental-webgl")) as WebGLRenderingContext | null;
    if (!gl) {
      console.error("WebGL not supported");
      return;
    }

    const vertexShader = compileShader(gl, VS_SOURCE, gl.VERTEX_SHADER);
    const fragmentShader = compileShader(gl, FS_SOURCE, gl.FRAGMENT_SHADER);
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program link error:", gl.getProgramInfoLog(program));
      return;
    }
    gl.useProgram(program);

    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, "u_time");
    const uRatio = gl.getUniformLocation(program, "u_ratio");
    const uPointer = gl.getUniformLocation(program, "u_pointer");

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvasEl.width = window.innerWidth * dpr;
      canvasEl.height = window.innerHeight * dpr;
      gl.viewport(0, 0, canvasEl.width, canvasEl.height);
      gl.uniform1f(uRatio, canvasEl.width / canvasEl.height);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let slowTime = 0;

    const render = () => {
      slowTime += 4;

      pointer.current.x += (pointer.current.tX - pointer.current.x) * 0.2;
      pointer.current.y += (pointer.current.tY - pointer.current.y) * 0.2;

      gl.uniform1f(uTime, slowTime);
      gl.uniform2f(
        uPointer,
        pointer.current.x / window.innerWidth,
        1 - pointer.current.y / window.innerHeight
      );
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationRef.current = requestAnimationFrame(render);
    };

    render();

    const handlePointerMove = (e: PointerEvent) => {
      pointer.current.tX = e.clientX;
      pointer.current.tY = e.clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) {
        pointer.current.tX = e.touches[0].clientX;
        pointer.current.tY = e.touches[0].clientY;
      }
    };
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("touchmove", handleTouchMove);
      cancelAnimationFrame(animationRef.current);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
    };
  }, []);

  return (
    <>
      {/* WebGL Canvas — fixed full viewport */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      />

      {/* Hero text overlay */}
      <section className="relative z-10 flex flex-col items-center justify-center h-screen pt-16 pb-20 px-4">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-[60px] md:text-[100px] lg:text-[140px] font-black text-white tracking-tighter leading-none"
          >
            LIQUID
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
            className="text-[60px] md:text-[100px] lg:text-[140px] font-black text-white tracking-tighter leading-none"
            style={{ mixBlendMode: "difference" }}
          >
            AURORA
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="mt-8 text-[10px] text-white/20 tracking-[0.3em] uppercase"
          >
            WebGL &middot; Real-time Rendering &middot; GPU-Powered &middot;
            Cursor-Reactive
          </motion.p>
        </div>
      </section>

      {/* Scroll section — info cards */}
      <section className="relative z-10 pt-16 pb-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {INFO_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
              className="bg-white/[0.03] backdrop-blur border border-white/[0.05] rounded-2xl p-6"
            >
              <h3 className="text-sm font-semibold text-white/80 mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
