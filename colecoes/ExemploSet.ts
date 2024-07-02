const frutas: Set<string> = new Set<string>();

frutas.add("Kiwi");
frutas.add("Caqui");
frutas.add("Manga");
frutas.add("Caqui");
frutas.add("Morango");
frutas.add("Framboesa");
frutas.add("Banana");

console.table(frutas);  

console.log(`\nA fruta Caqui existe? ${frutas.has("Caqui")}`);

frutas.delete("Caqui");

console.table(frutas);

/** 
 * Para ordenar o Set é necessário converter para uma
 * Collection Array
 * */ 
let orderSet: Array<string> = Array.from(frutas).sort();

console.table(orderSet);