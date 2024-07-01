var frutas = new Set();
frutas.add("Kiwi");
frutas.add("Caqui");
frutas.add("Manga");
frutas.add("Caqui");
console.table(frutas);
console.log("\nA fruta Caqui existe? ".concat(frutas.has("Caqui")));
frutas.delete("Caqui");
console.table(frutas);
