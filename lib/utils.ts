import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


String.prototype.toTitleCase = function (): string {
  return this
    .toLowerCase()  // Mengubah seluruh teks menjadi huruf kecil terlebih dahulu
    .replace(/\b\w/g, char => char.toUpperCase());  // Mengubah huruf pertama dari setiap kata menjadi kapital
};