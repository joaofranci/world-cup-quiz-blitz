import { CATEGORIES, CATEGORY_META, type Category } from "@/lib/game/types";

export function TrophySlots({ won }: { won: Category[] }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {CATEGORIES.map((cat) => {
        const isWon = won.includes(cat);
        const meta = CATEGORY_META[cat];
        return (
          <div
            key={cat}
            className="w-12 h-12 rounded-xl flex items-center justify-center text-xl border-2 transition shadow-sm"
            style={{
              borderColor: meta.color,
              background: isWon ? meta.color : `color-mix(in oklab, ${meta.color} 22%, transparent)`,
              color: isWon ? "#fff" : meta.color,
              opacity: isWon ? 1 : 0.95,
              boxShadow: isWon ? `0 0 12px ${meta.color}` : `inset 0 0 0 1px ${meta.color}`,
            }}
            title={cat}
          >
            <span>{isWon ? meta.trophy : meta.icon}</span>
          </div>
        );
      })}
    </div>
  );
}
