import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LABIAN — Relationship Eligibility Test" },
      { name: "description", content: "A dramatic, sarcastic, interactive breakup game for LABIAN. Take the test, lose the points, face the music." },
      { property: "og:title", content: "LABIAN — Relationship Eligibility Test" },
      { property: "og:description", content: "Some memories deserve honesty. Take the Relationship Eligibility Test." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/labian.html"
      title="LABIAN — Relationship Eligibility Test"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        border: "none",
        background: "#0a0306",
      }}
      allow="autoplay"
    />
  );
}
