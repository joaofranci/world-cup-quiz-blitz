import { useEffect, useState } from "react";
import { getProfile, setNickname, setCountry, type Profile } from "@/lib/profile";
import { COUNTRIES, findCountry, flagUrl, flagSrcSet } from "@/lib/countries";

export function ProfileCard() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState("");
  const [pickingFlag, setPickingFlag] = useState(false);

  useEffect(() => {
    const p = getProfile();
    setProfile(p);
    setDraft(p.nickname);
  }, []);

  if (!profile) return null;
  const country = findCountry(profile.country) ?? COUNTRIES[0];

  return (
    <div className="rounded-3xl p-6 bg-card border border-border shadow-stadium">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setPickingFlag((v) => !v)}
          className="w-16 h-16 rounded-2xl pitch-bg flex items-center justify-center text-4xl shadow-trophy hover:scale-105 transition"
          title="Change country"
          aria-label="Change country"
        >
          {country.flag}
        </button>
        <div className="flex-1 min-w-0">
          {editing ? (
            <div className="flex gap-2">
              <input
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                maxLength={20}
                className="flex-1 px-3 py-2 rounded-xl border-2 border-border bg-background font-medium"
                autoFocus
              />
              <button
                onClick={() => {
                  setProfile(setNickname(draft));
                  setEditing(false);
                }}
                className="px-4 py-2 rounded-xl bg-primary text-primary-foreground font-display tracking-wider"
              >
                Save
              </button>
            </div>
          ) : (
            <>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                {country.name}
              </div>
              <div className="font-display text-3xl tracking-wider truncate">{profile.nickname}</div>
            </>
          )}
        </div>
        {!editing && (
          <button
            onClick={() => setEditing(true)}
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            Edit
          </button>
        )}
      </div>

      {pickingFlag && (
        <div className="mt-4 grid grid-cols-6 sm:grid-cols-8 gap-2 p-3 rounded-2xl bg-secondary">
          {COUNTRIES.map((c) => (
            <button
              key={c.code}
              title={c.name}
              onClick={() => {
                setProfile(setCountry(c.code));
                setPickingFlag(false);
              }}
              className={`text-2xl aspect-square rounded-lg flex items-center justify-center hover:scale-110 transition ${
                c.code === country.code ? "bg-gold/40 ring-2 ring-gold" : "bg-background/50"
              }`}
            >
              {c.flag}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
