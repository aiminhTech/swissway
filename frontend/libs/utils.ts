export const groupTitles = (titles: { information_title: string }[]) => {
  const map = new Map<string, string[]>();

  for (const { information_title } of titles) {
    const [base, ...rest] = information_title.split("///");
    if (!map.has(base)) {
      map.set(base, []);
    }
    if (rest.length > 0) {
      map.get(base)!.push(rest.join("///"));
    }
  }

  return Array.from(map.entries()).map(([base, variations]) => ({
    base,
    variations,
  }));
};
