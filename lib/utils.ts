import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("cs-CZ", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export function formatDateShort(iso: string): string {
  return new Date(iso).toLocaleDateString("cs-CZ", {
    day: "numeric",
    month: "long",
  })
}

export function formatDay(iso: string): string {
  return new Date(iso).toLocaleDateString("cs-CZ", { day: "2-digit" })
}

export function formatMonth(iso: string): string {
  return new Date(iso).toLocaleDateString("cs-CZ", { month: "short" })
}
