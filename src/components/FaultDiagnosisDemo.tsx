"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FaultType = "healthy" | "valve_fault" | "piston_fault" | "bearing_fault";

interface DiagnosticResult {
  fault: FaultType;
  confidence: number;
  model: string;
  features: { name: string; value: number; unit: string }[];
}

const FAULT_CONFIG: Record<FaultType, {
  label: string;
  color: string;
  bgColor: string;
  borderColor: string;
  waveColor: string;
  desc: string;
  freq: number;
  amplitude: number;
  noise: number;
}> = {
  healthy: {
    label: "Healthy — Normal Operation",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
    waveColor: "#10b981",
    desc: "Compressor running within normal parameters. Pressure cycles are smooth and periodic with low vibration noise.",
    freq: 1.2,
    amplitude: 0.6,
    noise: 0.03,
  },
  valve_fault: {
    label: "Fault Detected — Valve Leakage",
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/30",
    waveColor: "#f59e0b",
    desc: "Irregular pressure drops detected between compression cycles. Characteristic of inlet or outlet valve wear or leakage.",
    freq: 1.8,
    amplitude: 0.55,
    noise: 0.15,
  },
  piston_fault: {
    label: "Fault Detected — Piston Ring Wear",
    color: "text-red-400",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30",
    waveColor: "#ef4444",
    desc: "High-frequency vibration spikes over the base signal. Indicates piston ring degradation causing blow-by and loss of compression.",
    freq: 2.5,
    amplitude: 0.85,
    noise: 0.25,
  },
  bearing_fault: {
    label: "Fault Detected — Bearing Defect",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    waveColor: "#a855f7",
    desc: "Recurring impulse vibrations at sub-harmonic intervals. Consistent with rolling element bearing defect frequency patterns.",
    freq: 3.2,
    amplitude: 0.7,
    noise: 0.2,
  },
};

const ML_MODELS = ["SVM (RBF Kernel)", "J48 Decision Tree", "K-NN (k=5)", "LMD + SVM"];

function generateWave(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  t: number,
  config: typeof FAULT_CONFIG[FaultType],
  faultType: FaultType
) {
  ctx.clearRect(0, 0, width, height);

  // Grid lines
  ctx.strokeStyle = "rgba(148,163,184,0.08)";
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = (i / 4) * height;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }

  // Waveform
  ctx.beginPath();
  ctx.strokeStyle = config.waveColor;
  ctx.lineWidth = 2;
  ctx.shadowColor = config.waveColor;
  ctx.shadowBlur = 6;

  const points = 300;
  for (let i = 0; i < points; i++) {
    const x = (i / points) * width;
    const xNorm = i / points;

    let y = Math.sin((xNorm * Math.PI * 2 * config.freq * 8) + t) * config.amplitude;

    // Add fault-specific patterns
    if (faultType === "valve_fault") {
      y += Math.sin(xNorm * Math.PI * 2 * 3 + t * 0.5) * 0.3;
      if (Math.sin(xNorm * Math.PI * 6 + t) > 0.85) y *= 0.3;
    } else if (faultType === "piston_fault") {
      y += Math.sin(xNorm * Math.PI * 2 * 12 + t * 2) * 0.35;
      y += (Math.random() - 0.5) * config.noise * 2;
    } else if (faultType === "bearing_fault") {
      const impulse = Math.abs(Math.sin(xNorm * Math.PI * 2 * 4.5 + t * 0.7));
      y += impulse > 0.9 ? (Math.random() > 0.5 ? 0.6 : -0.6) : 0;
    }

    // Add noise
    y += (Math.random() - 0.5) * config.noise;

    const canvasY = height / 2 - y * (height / 2.5);

    if (i === 0) ctx.moveTo(x, canvasY);
    else ctx.lineTo(x, canvasY);
  }
  ctx.stroke();
  ctx.shadowBlur = 0;
}

export default function FaultDiagnosisDemo() {
  const [selectedFault, setSelectedFault] = useState<FaultType>("healthy");
  const [isRunning, setIsRunning] = useState(false);
  const [result, setResult] = useState<DiagnosticResult | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [selectedModel, setSelectedModel] = useState(ML_MODELS[3]);
  const [tRef, setTRef] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    if (!isRunning) {
      cancelAnimationFrame(animRef.current);
      return;
    }
    let t = tRef;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const animate = () => {
      t += 0.04;
      setTRef(t);
      const config = FAULT_CONFIG[selectedFault];
      generateWave(ctx, canvas.width, canvas.height, t, config, selectedFault);
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRunning, selectedFault]);

  const runDiagnosis = () => {
    setAnalyzing(true);
    setResult(null);
    setTimeout(() => {
      const config = FAULT_CONFIG[selectedFault];
      const confidences: Record<FaultType, number> = {
        healthy: selectedFault === "healthy" ? 94 + Math.floor(Math.random() * 4) : Math.floor(Math.random() * 20),
        valve_fault: selectedFault === "valve_fault" ? 91 + Math.floor(Math.random() * 6) : Math.floor(Math.random() * 15),
        piston_fault: selectedFault === "piston_fault" ? 93 + Math.floor(Math.random() * 5) : Math.floor(Math.random() * 12),
        bearing_fault: selectedFault === "bearing_fault" ? 89 + Math.floor(Math.random() * 8) : Math.floor(Math.random() * 18),
      };
      setResult({
        fault: selectedFault,
        confidence: confidences[selectedFault],
        model: selectedModel,
        features: [
          { name: "RMS Vibration", value: selectedFault === "healthy" ? 0.23 : 0.65 + Math.random() * 0.4, unit: "m/s²" },
          { name: "Kurtosis", value: selectedFault === "healthy" ? 2.9 : 5.1 + Math.random() * 4, unit: "" },
          { name: "Peak Frequency", value: selectedFault === "healthy" ? 49.8 : 49.8 + config.noise * 100, unit: "Hz" },
          { name: "LMD Energy", value: selectedFault === "healthy" ? 0.41 : 0.78 + Math.random() * 0.18, unit: "J" },
        ],
      });
      setAnalyzing(false);
    }, 2200);
  };

  const faultTypes: { key: FaultType; label: string; icon: string }[] = [
    { key: "healthy", label: "Normal", icon: "✅" },
    { key: "valve_fault", label: "Valve Leak", icon: "⚠️" },
    { key: "piston_fault", label: "Piston Wear", icon: "🔴" },
    { key: "bearing_fault", label: "Bearing Defect", icon: "🟣" },
  ];

  return (
    <div className="glass-panel rounded-3xl border border-slate-200/50 dark:border-slate-800/50 p-6 md:p-8 overflow-hidden">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            Ph.D. Research Demo
          </span>
          <span className="px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Interactive Simulation
          </span>
        </div>
        <h3 className="text-xl font-black text-slate-800 dark:text-slate-100 tracking-tight">
          Compressor Fault Diagnosis — ML Simulator
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed max-w-2xl">
          Simulate the vibro-acoustic signal of a reciprocating air compressor and run the machine learning classification pipeline (LMD feature extraction + SVM/J48/K-NN) — based on Dr. Dhakar&apos;s doctoral research at JUET Guna.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Controls */}
        <div className="space-y-5">
          {/* Fault selector */}
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
              1. Select Compressor Condition
            </label>
            <div className="grid grid-cols-2 gap-2">
              {faultTypes.map(({ key, label, icon }) => {
                const cfg = FAULT_CONFIG[key];
                return (
                  <button
                    key={key}
                    onClick={() => { setSelectedFault(key); setResult(null); }}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${selectedFault === key ? `${cfg.bgColor} ${cfg.borderColor} ${cfg.color}` : "border-slate-200/50 dark:border-slate-800/50 text-slate-500 hover:border-slate-300 dark:hover:border-slate-700"}`}
                  >
                    <span className="text-lg">{icon}</span>
                    <span className="block text-xs font-bold mt-1">{label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ML Model selector */}
          <div>
            <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
              2. Select ML Classification Model
            </label>
            <div className="grid grid-cols-2 gap-2">
              {ML_MODELS.map((model) => (
                <button
                  key={model}
                  onClick={() => setSelectedModel(model)}
                  className={`px-3 py-2.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer text-left ${selectedModel === model ? "bg-indigo-500/10 border-indigo-500/30 text-indigo-400" : "border-slate-200/50 dark:border-slate-800/50 text-slate-500 hover:border-slate-300 dark:hover:border-slate-700"}`}
                >
                  {model}
                </button>
              ))}
            </div>
          </div>

          {/* Run buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => setIsRunning(!isRunning)}
              className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all cursor-pointer ${isRunning ? "bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300" : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 hover:-translate-y-0.5"}`}
            >
              {isRunning ? "⏸ Pause Signal" : "▶ Start Compressor"}
            </button>
            <button
              onClick={runDiagnosis}
              disabled={!isRunning || analyzing}
              className="flex-1 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/25 hover:-translate-y-0.5 transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:translate-y-0"
            >
              {analyzing ? "🔍 Analyzing..." : "🧠 Run Diagnosis"}
            </button>
          </div>
        </div>

        {/* Right: Waveform + result */}
        <div className="space-y-4">
          {/* Oscilloscope */}
          <div className="rounded-2xl overflow-hidden bg-slate-950 border border-slate-800/80 relative">
            <div className="absolute top-2 left-3 flex items-center gap-1.5 z-10">
              <div className={`w-1.5 h-1.5 rounded-full ${isRunning ? "bg-emerald-400 animate-pulse" : "bg-slate-600"}`} />
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                {isRunning ? "Live Signal" : "Standby"}
              </span>
            </div>
            <div className="absolute top-2 right-3 text-[9px] font-bold text-slate-600 font-mono">
              Vibro-Acoustic Sensor · 1kHz
            </div>
            <canvas
              ref={canvasRef}
              width={500}
              height={130}
              className="w-full"
              style={{ display: "block" }}
            />
          </div>

          {/* Diagnosis Result */}
          <AnimatePresence mode="wait">
            {analyzing && (
              <motion.div
                key="analyzing"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="glass-panel rounded-2xl border border-slate-800/50 p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-indigo-400">Running {selectedModel}...</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">Extracting LMD features → Classifying signal pattern</p>
                  </div>
                </div>
                <div className="mt-3 space-y-1">
                  {["Applying LMD decomposition", "Extracting energy features", "Classifying with " + selectedModel].map((step, i) => (
                    <div key={step} className="flex items-center gap-2 text-[10px] text-slate-500">
                      <div className="w-1 h-1 rounded-full bg-indigo-400 animate-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
                      {step}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
            {result && !analyzing && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`rounded-2xl border p-4 ${FAULT_CONFIG[result.fault].bgColor} ${FAULT_CONFIG[result.fault].borderColor}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Diagnosis Result</p>
                    <p className={`text-sm font-bold mt-0.5 ${FAULT_CONFIG[result.fault].color}`}>
                      {FAULT_CONFIG[result.fault].label}
                    </p>
                    <p className="text-[10px] text-slate-500 mt-1 max-w-xs leading-relaxed">
                      {FAULT_CONFIG[result.fault].desc}
                    </p>
                  </div>
                  <div className="text-right shrink-0 ml-3">
                    <p className={`text-2xl font-black ${FAULT_CONFIG[result.fault].color}`}>{result.confidence}%</p>
                    <p className="text-[9px] text-slate-500 font-bold">Confidence</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {result.features.map((f) => (
                    <div key={f.name} className="bg-slate-900/40 rounded-xl p-2.5">
                      <p className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">{f.name}</p>
                      <p className="text-sm font-black text-slate-200 mt-0.5">{f.value.toFixed(2)}<span className="text-[10px] font-normal text-slate-500 ml-1">{f.unit}</span></p>
                    </div>
                  ))}
                </div>
                <p className="text-[9px] font-bold text-slate-600 mt-2 text-right">Model: {result.model} · JUET Research 2025</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
