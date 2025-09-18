import Particles from "react-tsparticles";

export default function ParticlesBackground() {
  return (
    <Particles
      options={{
        background: { color: "transparent" },
        particles: {
          number: { value: 60 },
          size: { value: 3 },
          move: { speed: 1 },
          links: { enable: true, color: "#00f5d4" },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  );
}
