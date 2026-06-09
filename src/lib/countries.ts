export interface Country {
  code: string;
  name: string;
  flag: string;
}

export const COUNTRIES: Country[] = [
  { code: "BR", name: "Brazil", flag: "🇧🇷" },
  { code: "AR", name: "Argentina", flag: "🇦🇷" },
  { code: "DE", name: "Germany", flag: "🇩🇪" },
  { code: "IT", name: "Italy", flag: "🇮🇹" },
  { code: "EN", name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
  { code: "US", name: "USA", flag: "🇺🇸" },
  { code: "JP", name: "Japan", flag: "🇯🇵" },
  { code: "UY", name: "Uruguay", flag: "🇺🇾" },
  { code: "ES", name: "Spain", flag: "🇪🇸" },
  { code: "CM", name: "Cameroon", flag: "🇨🇲" },
  { code: "FR", name: "France", flag: "🇫🇷" },
  { code: "PT", name: "Portugal", flag: "🇵🇹" },
  { code: "NL", name: "Netherlands", flag: "🇳🇱" },
  { code: "BE", name: "Belgium", flag: "🇧🇪" },
  { code: "HR", name: "Croatia", flag: "🇭🇷" },
  { code: "MX", name: "Mexico", flag: "🇲🇽" },
  { code: "CO", name: "Colombia", flag: "🇨🇴" },
  { code: "CL", name: "Chile", flag: "🇨🇱" },
  { code: "KR", name: "South Korea", flag: "🇰🇷" },
  { code: "SN", name: "Senegal", flag: "🇸🇳" },
  { code: "MA", name: "Morocco", flag: "🇲🇦" },
  { code: "GH", name: "Ghana", flag: "🇬🇭" },
  { code: "NG", name: "Nigeria", flag: "🇳🇬" },
  { code: "AU", name: "Australia", flag: "🇦🇺" },
  { code: "CA", name: "Canada", flag: "🇨🇦" },
  { code: "PL", name: "Poland", flag: "🇵🇱" },
  { code: "DK", name: "Denmark", flag: "🇩🇰" },
  { code: "CH", name: "Switzerland", flag: "🇨🇭" },
  { code: "SE", name: "Sweden", flag: "🇸🇪" },
  { code: "RU", name: "Russia", flag: "🇷🇺" },
];

export function findCountry(code?: string | null): Country | undefined {
  if (!code) return undefined;
  return COUNTRIES.find((c) => c.code === code);
}
