export async function recupera() {
  return await ( await fetch('assets/db.json')).json();
}