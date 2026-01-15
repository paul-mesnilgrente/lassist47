"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "launch-offer-dismissed";

export default function LaunchOfferModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenOffer =
      typeof window !== "undefined" &&
      window.localStorage.getItem(STORAGE_KEY) === "true";

    if (!hasSeenOffer) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);

    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, "true");
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="relative w-[95vw] max-w-2xl space-y-4 border-4 border-gold bg-nblack p-6 text-foreground shadow-xl md:p-8 md:space-y-5 max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-3 top-3 rounded-full bg-gold px-3 py-1 text-sm font-semibold text-nblack transition hover:scale-105"
          aria-label="Fermer la fenêtre d'offre"
        >
          ×
        </button>

        <h2 className="text-2xl pb-3 font-bold text-gold md:text-3xl">
          Offre de lancement -10%
        </h2>

        <ul className="list-disc list-inside">
          <li>
            <span className="font-bold">
              Prestation horaire — 10 % sur la première mission,
            </span>{" "}
            dans la limite de <span className="font-bold">5h</span>
          </li>
          <li>
            <span className="font-bold">
              Forfait mensuel — 10 % sur le premier mois
            </span>{" "}
            avec engagement minimum de <span className="font-bold">2 mois</span>
          </li>
        </ul>
        <p className="italic text-sm text-gold">
          Offre valable pour tout nouveau client, non cumulable, jusqu&apos;au
          14/02/2026.
        </p>
      </div>
    </div>
  );
}
