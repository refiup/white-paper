"use client"

import { useState } from "react"
import Link from "next/link"
import { Languages, ChevronDown, Check } from "lucide-react"
import type { Locale } from "@/lib/translations"

interface HeaderProps {
  locale: Locale
  onLanguageChange: (locale: Locale) => void
}

export default function Header({ locale, onLanguageChange }: HeaderProps) {
  const [showLangMenu, setShowLangMenu] = useState(false)

  const changeLanguage = (newLocale: Locale) => {
    onLanguageChange(newLocale)
    setShowLangMenu(false)
  }

  const buttons = [
    { key: "stellar", label: { es: "Contratos Stellar", en: "Stellar Contracts", pt: "Contratos Stellar" } },
    { key: "celo", label: { es: "Contratos Celo", en: "Celo Contracts", pt: "Contratos Celo" } },
    { key: "human", label: { es: "App Humano", en: "Human App", pt: "App Humano" } },
    { key: "judge", label: { es: "App Judge (AI-DAO)", en: "Judge App (AI-DAO)", pt: "App Judge (AI-DAO)" } },
    { key: "validation", label: { es: "Validación IRL", en: "IRL Validation", pt: "Validação IRL" } },
  ]

  return (
    <header className="border-b border-black/10 bg-white flex-shrink-0">
      <nav className="container mx-auto px-2 py-2 md:px-4 md:py-3">
        <div className="flex items-center justify-between gap-2">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1.5 hover:opacity-70 transition-opacity flex-shrink-0">
            <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-black flex items-center justify-center font-bold text-[9px]">
              🌎
            </div>
            <span className="font-bold text-[10px] md:text-xs tracking-tight">ReFiUP</span>
          </Link>

          {/* Action Buttons - Single line with horizontal scroll on mobile */}
          <div className="flex-1 overflow-x-auto scrollbar-hide mx-2">
            <div className="flex items-center gap-1.5 md:gap-2 justify-center min-w-max">
              {buttons.map((btn) => (
                <a
                  key={btn.key}
                  href="https://www.instagram.com/p/DKxAt13MgNT/?img_index=3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-1 text-[7px] sm:text-[8px] md:text-[9px] font-bold border border-black hover:bg-black hover:text-white transition-colors uppercase tracking-wide whitespace-nowrap"
                >
                  {btn.label[locale]}
                </a>
              ))}
            </div>
          </div>

          {/* Language Selector */}
          <div className="relative flex-shrink-0">
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="hover:bg-black/5 transition-colors flex items-center gap-1 border border-black/20 px-2 py-1 text-[9px] md:text-xs"
              type="button"
            >
              <Languages className="w-3 h-3 md:w-4 md:h-4" />
              <span className="uppercase hidden sm:inline">{locale}</span>
              <ChevronDown className="w-3 h-3" />
            </button>
            {showLangMenu && (
              <div className="absolute right-0 mt-1 bg-white border border-black shadow-sm overflow-hidden min-w-[120px] z-50">
                <button
                  onClick={() => changeLanguage("en")}
                  className="w-full px-3 py-2 text-left hover:bg-black/5 flex items-center justify-between text-xs"
                  type="button"
                >
                  <span>English</span>
                  {locale === "en" && <Check className="w-3 h-3" />}
                </button>
                <button
                  onClick={() => changeLanguage("es")}
                  className="w-full px-3 py-2 text-left hover:bg-black/5 flex items-center justify-between text-xs"
                  type="button"
                >
                  <span>Español</span>
                  {locale === "es" && <Check className="w-3 h-3" />}
                </button>
                <button
                  onClick={() => changeLanguage("pt")}
                  className="w-full px-3 py-2 text-left hover:bg-black/5 flex items-center justify-between text-xs"
                  type="button"
                >
                  <span>Português</span>
                  {locale === "pt" && <Check className="w-3 h-3" />}
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}
