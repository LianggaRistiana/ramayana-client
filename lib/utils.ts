import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// String.prototype.toTitle = function (): string {
//   if (/^[^a-z]*$/.test(this)) {
//     const lower = this.toLowerCase();
//     return lower.charAt(0).toUpperCase() + lower.slice(1);
//   }
//   return this.toString();
// };


// // Penting: agar file dianggap sebagai modul dan deklarasi global tidak dibuang
// export {};