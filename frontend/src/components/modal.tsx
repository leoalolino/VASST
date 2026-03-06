import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type Props = {
  openModal: () => void;
  modalStatus: boolean;
};
const ModalPortal = ({ children }: { children: React.ReactNode }) => {
  const mountNode = useRef<HTMLElement | null>(null);

  if (!mountNode.current) {
    mountNode.current = document.getElementById("modal-root");
  }

  return mountNode.current
    ? createPortal(children, mountNode.current)
    : createPortal(children, document.body);
};

export function ImageModal({ openModal, modalStatus }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  console.log(modalStatus);
  useEffect(() => {
    if (modalStatus) {
      setShouldRender(true);
      document.body.style.overflow = "hidden";
      const timer = setTimeout(() => setIsExpanded(true), 50);
      return () => clearTimeout(timer);
    } else {
      setIsExpanded(false);
      const animationTimer = setTimeout(() => {
        setShouldRender(false);
        document.body.style.overflow = "unset";
      }, 500); // Wait for shrink animation before removing from DOM
      return () => clearTimeout(animationTimer);
    }
  }, [modalStatus]);

  const handleClose = () => {
    openModal();
  };

  return (
    <>
      {shouldRender && (
        <ModalPortal>
          {/* Overlay - Subtle backdrop for focus */}
          <div
            className={`fixed inset-0 z-[1000] bg-white/90 backdrop-blur-md transition-opacity duration-700 pointer-events-auto ${
              isExpanded ? "opacity-100" : "opacity-0"
            }`}
            onClick={handleClose}
            aria-hidden="true"
          />

          {/* THE MODAL BODY - Sized to fit, centered */}
          <div className="fixed inset-0 z-[1001] flex items-center justify-center p-6 md:p-12 pointer-events-none">
            <div
              className={`relative bg-white shadow-2xl z-[1002] pointer-events-auto overflow-hidden
              transition-all duration-700 ease-[cubic-bezier(0.2,1,0.2,1)]
              flex flex-col
              ${
                isExpanded
                  ? "max-h-[90vh] opacity-100 scale-100 w-auto" // Modal expands vertically from center line
                  : "max-h-[1px] opacity-0 scale-[0.95] w-auto" // Starts as a slim horizontal line
              }`}
              role="dialog"
              aria-labelledby="modal-title"
              aria-modal="true"
            >
              {/* Header: Minimalist Top Left Title only */}
              <div
                className={`px-8 pt-8 pb-4 transition-opacity duration-500 delay-300 ${isExpanded ? "opacity-100" : "opacity-0"}`}
              >
                <h2
                  id="modal-title"
                  className="text-xl font-medium text-slate-950 tracking-tight"
                >
                  <span className="font-bold">Resume</span>
                </h2>
              </div>

              {/* Natural Image Area - Fits within modal, scrolls if needed */}
              <div
                className={`px-8 flex-1 overflow-auto transition-all duration-700 delay-300 ${isExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                <div className="flex items-center justify-center rounded-sm">
                  <img
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
                    alt="Asset Preview"
                    // Modal sizes based on image intrinsic aspect ratio, capped at 90vh
                    className="w-full h-auto max-h-[70vh] object-contain rounded-sm"
                  />
                </div>
              </div>

              {/* Minimalist Bottom Right Actions */}
              <div
                className={`px-8 mt-8 mb-6 flex justify-end gap-3 items-center border-t border-slate-100 pt-6 transition-opacity duration-500 delay-300 ${isExpanded ? "opacity-100" : "opacity-0"}`}
              >
                <button
                  onClick={handleClose}
                  className="px-6 py-2.5 text-[10px] font-bold text-slate-500 hover:text-black transition-colors uppercase tracking-widest rounded-sm cursor-pointer"
                >
                  Dismiss
                </button>
                <button className="px-6 py-2.5 bg-black text-white text-[10px] font-bold uppercase tracking-widest rounded-sm hover:bg-slate-900 transition-colors active:scale-95 shadow-lg shadow-black/10">
                  Download
                </button>
              </div>
            </div>
          </div>
        </ModalPortal>
      )}
    </>
  );
}
