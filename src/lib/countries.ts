export interface Country {
  code: string;   // ISO 3166-1 alpha-2 (or special: GB-ENG)
  name: string;
  flagCode: string; // flagcdn slug, lowercase
}

export const COUNTRIES: Country[] = [
  { code: "BR", name: "Brazil",      flagCode: "br" },
  { code: "AR", name: "Argentina",   flagCode: "ar" },
  { code: "DE", name: "Germany",     flagCode: "de" },
  { code: "IT", name: "Italy",       flagCode: "it" },
  { code: "EN", name: "England",     flagCode: "gb-eng" },
  { code: "US", name: "USA",         flagCode: "us" },
  { code: "JP", name: "Japan",       flagCode: "jp" },
  { code: "UY", name: "Uruguay",     flagCode: "uy" },
  { code: "ES", name: "Spain",       flagCode: "es" },
  { code: "CM", name: "Cameroon",    flagCode: "cm" },
  { code: "FR", name: "France",      flagCode: "fr" },
  { code: "PT", name: "Portugal",    flagCode: "pt" },
  { code: "NL", name: "Netherlands", flagCode: "nl" },
  { code: "BE", name: "Belgium",     flagCode: "be" },
  { code: "HR", name: "Croatia",     flagCode: "hr" },
  { code: "MX", name: "Mexico",      flagCode: "mx" },
  { code: "CO", name: "Colombia",    flagCode: "co" },
  { code: "CL", name: "Chile",       flagCode: "cl" },
  { code: "KR", name: "South Korea", flagCode: "kr" },
  { code: "SN", name: "Senegal",     flagCode: "sn" },
  { code: "MA", name: "Morocco",     flagCode: "ma" },
  { code: "GH", name: "Ghana",       flagCode: "gh" },
  { code: "NG", name: "Nigeria",     flagCode: "ng" },
  { code: "AU", name: "Australia",   flagCode: "au" },
  { code: "CA", name: "Canada",      flagCode: "ca" },
  { code: "PL", name: "Poland",      flagCode: "pl" },
  { code: "DK", name: "Denmark",     flagCode: "dk" },
  { code: "CH", name: "Switzerland", flagCode: "ch" },
  { code: "SE", name: "Sweden",      flagCode: "se" },
  { code: "RU", name: "Russia",      flagCode: "ru" },
];

export function findCountry(code?: string | null): Country | undefined {
  if (!code) return undefined;
  return COUNTRIES.find((c) => c.code === code);
}

export function flagUrl(country: Country, size: "w40" | "w80" | "w160" | "w320" = "w80"): string {
  return `https://flagcdn.com/${size}/${country.flagCode}.png`;
}

export function flagSrcSet(country: Country): string {
  return [
    `https://flagcdn.com/w80/${country.flagCode}.png 1x`,
    `https://flagcdn.com/w160/${country.flagCode}.png 2x`,
    `https://flagcdn.com/w320/${country.flagCode}.png 4x`,
  ].join(", ");
}
