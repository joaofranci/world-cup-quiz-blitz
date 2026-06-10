import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { CATEGORIES, CATEGORY_META, type Category } from "@/lib/game/types";
import { getTrophyCount } from "@/lib/profile";

export const Route = createFileRoute("/collection")({
  head: () => ({
    meta: [
      { title: "Trophy Collection — World Cup Trivia" },
      {
        name: "description",
        content:
          "Your earned trophies across all World Cup trivia categories.",
      },
    ],
  }),
  component: CollectionPage,
});

function CollectionPage() {
  const [counts, setCounts] = useState<Record<string, number> | null>(null);

  useEffect(() => {
    setCounts(getTrophyCount());
  }, []);

  const { total, unlocked, completion } = useMemo(() => {
    const c = counts ?? {};
    const total = Object.values(c).reduce((a, b) => a + b, 0);
    const unlocked = CATEGORIES.filter((cat) => (c[cat] || 0) > 0).length;
    const completion = Math.round((unlocked / CATEGORIES.length) * 100);
    return { total, unlocked, completion };
  }, [counts]);

  return (
    <div className="min-h-screen px-4 py-6">
      <div className="max-w-5xl mx-auto">
        <header className="flex items-center justify-between mb-8">
          <Link
            to="/"
            className="text-sm text-muted-foreground hover:text-foreground transition inline-flex items-center gap-1"
          >
            ← Home
          </Link>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Trophies
              </div>
              <div className="font-display text-3xl leading-none">{total}</div>
            </div>
            <div className="text-right">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Categories
              </div>
              <div className="font-display text-3xl leading-none">
                {unlocked}/{CATEGORIES.length}
              </div>
            </div>
          </div>
        </header>

        <div className="text-center mb-6">
          <h1 className="font-display text-5xl md:text-6xl tracking-wider">
            🏆 Trophy Cabinet
          </h1>
          <p className="text-muted-foreground mt-2">
            Win a question in each category to unlock its trophy.
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-10">
          <div className="flex items-center justify-between text-xs uppercase tracking-widest text-muted-foreground mb-1.5">
            <span>Completion</span>
            <span>{completion}%</span>
          </div>
          <div className="h-3 rounded-full bg-secondary overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-grass via-primary to-gold transition-[width] duration-700"
              style={{ width: `${completion}%` }}
            />
          </div>
        </div>

        {counts === null ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {CATEGORIES.map((c) => (
              <div
                key={c}
                className="h-56 rounded-3xl bg-secondary/60 animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {CATEGORIES.map((cat) => (
              <TrophyCard key={cat} cat={cat} count={counts[cat] || 0} />
            ))}
          </div>
        )}

        {total === 0 && counts !== null && (
          <div className="mt-10 text-center">
            <Link
              to="/game"
              className="inline-block px-8 py-4 rounded-2xl bg-gold text-gold-foreground font-display text-2xl tracking-wider shadow-trophy hover:scale-105 active:scale-95 transition"
            >
              ▶ Play your first match
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

function TrophyCard({ cat, count }: { cat: Category; count: number }) {
  const meta = CATEGORY_META[cat];
  const earned = count > 0;
  return (
    <div
      className={`group relative rounded-3xl p-6 text-center border-2 overflow-hidden transition-all duration-300 ${
        earned
          ? "shadow-trophy hover:-translate-y-1"
          : "opacity-80 hover:opacity-100"
      }`}
      style={{
        borderColor: meta.color,
        background: earned
          ? `linear-gradient(160deg, ${meta.color}, color-mix(in oklab, ${meta.color} 70%, black))`
          : `color-mix(in oklab, ${meta.color} 10%, var(--color-card))`,
        color: earned ? "white" : undefined,
      }}
    >
      {earned && (
        <div
          aria-hidden
          className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-2xl opacity-40 pointer-events-none"
          style={{ background: "white" }}
        />
      )}

      <div
        className={`text-7xl mb-3 transition-transform duration-300 ${
          earned ? "drop-shadow-lg group-hover:scale-110" : "grayscale"
        }`}
      >
        {earned ? meta.trophy : "🔒"}
      </div>
      <div className="font-display text-2xl tracking-wider">{cat}</div>
      <div
        className={`text-xs mt-1 ${earned ? "opacity-90" : "text-muted-foreground"}`}
      >
        {meta.tagline}
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        <span
          className={`inline-flex items-center gap-1 px-3 py-1 rounded-full font-display text-sm tracking-wider ${
            earned
              ? "bg-black/25 text-white"
              : "bg-foreground/5 text-muted-foreground"
          }`}
        >
          <span>{meta.icon}</span>
          <span>{count}×</span>
        </span>
      </div>

      {!earned && (
        <div className="mt-3 text-[10px] uppercase tracking-widest text-muted-foreground">
          Locked
        </div>
      )}
    </div>
  );
}
