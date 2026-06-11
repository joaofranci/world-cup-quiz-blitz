import { supabase } from "@/integrations/supabase/client";

export interface RankingRow {
  player_id: string;
  nickname: string;
  best_score: number;
  total_matches: number;
  trophies_earned: number;
  country: string | null;
}

export async function fetchTopRankings(limit = 10): Promise<RankingRow[]> {
  const { data, error } = await supabase
    .from("rankings")
    .select("player_id, nickname, best_score, total_matches, trophies_earned, country")
    .order("best_score", { ascending: false })
    .limit(limit);
  if (error) throw error;
  return (data ?? []) as RankingRow[];
}

export async function submitScore(params: {
  playerId: string;
  nickname: string;
  score: number;
  won: boolean;
  country?: string | null;
}) {
  const { playerId, nickname, score, won, country } = params;
  const { data: existing } = await supabase
    .from("rankings")
    .select("best_score, total_matches, trophies_earned")
    .eq("player_id", playerId)
    .maybeSingle();

  if (!existing) {
    await supabase.from("rankings").insert({
      player_id: playerId,
      nickname,
      country: country ?? null,
      best_score: score,
      total_matches: 1,
      trophies_earned: won ? 1 : 0,
    });
  } else {
    await supabase
      .from("rankings")
      .update({
        nickname,
        country: country ?? null,
        best_score: Math.max(existing.best_score, score),
        total_matches: existing.total_matches + 1,
        trophies_earned: existing.trophies_earned + (won ? 1 : 0),
        updated_at: new Date().toISOString(),
      })
      .eq("player_id", playerId);
  }
}
