import { useCallback, useEffect, useState } from "react";
import { fetchTopRankings, type RankingRow } from "@/lib/ranking";
import { getProfile } from "@/lib/profile";

type Status = "loading" | "ready" | "error";

export function RankingBoard({ refreshKey }: { refreshKey?: number }) {
  const [rows, setRows] = useState<RankingRow[]>([]);
  const [status, setStatus] = useState<Status>("loading");
  const [meId, setMeId] = useState<string>("");
  const [nonce, setNonce] = useState(0);

  useEffect(() => {
    setMeId(getProfile().playerId);
  }, []);

  const load = useCallback(async () => {
    setStatus("loading");
    try {
      const data = await fetchTopRankings(10);
      setRows(data);
      setStatus("ready");
    } catch {
      setStatus("error");
    }
  }, []);

  useEffect(() => {
    load();
  }, [load, refreshKey, nonce]);

  const medal = (i: number) =>
    i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : `#${i + 1}`;

  const myRank = rows.findIndex((r) => r.player_id === meId);

  return (
    <div className="rounded-3xl p-6 bg-card border border-border shadow-stadium relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-24 opacity-60 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top, color-mix(in oklab, var(--color-gold) 35%, transparent), transparent 70%)",
        }}
      />
      <div className="flex items-center justify-between mb-4 relative">
        <h2 className="font-display text-3xl tracking-wider flex items-center gap-2">
          🏆 Global Ranking
        </h2>
        <button
          onClick={() => setNonce((n) => n + 1)}
          aria-label="Refresh ranking"
          className="text-xs px-3 py-1.5 rounded-full bg-secondary hover:bg-secondary/70 font-medium transition active:scale-95"
        >
          ↻ Refresh
        </button>
      </div>

      {status === "loading" && (
        <ol className="space-y-2" aria-busy="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <li
              key={i}
              className="h-14 rounded-xl bg-secondary/60 animate-pulse"
            />
          ))}
        </ol>
      )}

      {status === "error" && (
        <div className="text-sm text-destructive flex items-center justify-between gap-3 p-3 rounded-xl bg-destructive/10">
          <span>Could not load ranking.</span>
          <button
            onClick={() => setNonce((n) => n + 1)}
            className="px-3 py-1 rounded-md bg-destructive text-destructive-foreground text-xs font-semibold"
          >
            Retry
          </button>
        </div>
      )}

      {status === "ready" && rows.length === 0 && (
        <div className="text-muted-foreground text-sm p-4 rounded-xl bg-secondary/60 text-center">
          No matches played yet. Be the first to lift the cup! ⚽
        </div>
      )}

      {status === "ready" && rows.length > 0 && (
        <>
          <ol className="space-y-2 relative">
            {rows.map((r, i) => {
              const isMe = r.player_id === meId;
              const isTop = i < 3;
              return (
                <li
                  key={r.player_id}
                  className={`flex items-center justify-between p-3 rounded-xl transition border ${
                    isMe
                      ? "bg-primary/10 border-primary/40 ring-2 ring-primary/30"
                      : "bg-secondary border-transparent hover:border-border"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className={`w-9 h-9 shrink-0 rounded-lg flex items-center justify-center font-display text-lg ${
                        i === 0
                          ? "bg-gold text-gold-foreground shadow-trophy"
                          : i === 1
                            ? "bg-muted-foreground/40 text-foreground"
                            : i === 2
                              ? "bg-[oklch(0.55_0.12_60)] text-white"
                              : "bg-foreground/10 text-foreground"
                      }`}
                      aria-label={`Rank ${i + 1}`}
                    >
                      {isTop ? medal(i) : i + 1}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold truncate">
                          {r.nickname}
                        </span>
                        {isMe && (
                          <span className="text-[10px] uppercase tracking-widest px-1.5 py-0.5 rounded bg-primary text-primary-foreground font-display">
                            You
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-muted-foreground flex gap-2">
                        <span>🏆 {r.trophies_earned}</span>
                        <span>·</span>
                        <span>⚽ {r.total_matches} matches</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-display text-3xl leading-none">
                      {r.best_score}
                    </div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      best
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
          {meId && myRank === -1 && (
            <div className="mt-4 text-xs text-muted-foreground text-center">
              You're not in the top 10 yet — play a match to enter the board.
            </div>
          )}
        </>
      )}
    </div>
  );
}
