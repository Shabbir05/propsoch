"use client";

import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="bg-background sticky top-0 z-40 flex w-full flex-col items-center shadow-md border-b border-border-light/40">
      {/* Announcement Banner */}
      <a 
        className="bg-brand-orange hover:bg-brand-orange-hover flex w-full items-center justify-center transition-colors duration-200" 
        href="/fair-price-calculator?utm_source=website&amp;utm_medium=banner&amp;utm_campaign=fpc_announcement"
        aria-label="Check property fair price calculator"
      >
        <div className="w-full max-w-screen-xl px-4 py-1.5 xl:px-0 text-center">
          <p className="text-xs md:text-sm font-medium text-white">
            Check any property's <span className="font-semibold underline">fair price</span> &amp; negotiate confidently.
          </p>
        </div>
      </a>

      {/* Main Navbar */}
      <nav className="flex w-full max-w-screen-xl items-center justify-between px-4 py-3 xl:px-0" role="navigation" aria-label="Main Navigation">
        {/* Logo */}
        <a className="flex items-center" aria-label="Go to homepage" href="/">
          <svg width="128" height="30" viewBox="0 0 463 107" fill="none" className="w-28 md:w-32" aria-hidden="true">
            <path d="m105.269 34.12-.144-.11-.665-.498-.127-.092L63.916 3.143h-.005l-1.075-.803s-.006 0-.006-.006A13.6 13.6 0 0 0 55.186 0h-.075c-3.057 0-5.877 1-8.153 2.693-.058.04-.11.086-.168.127L5.726 33.576c-.006.006-.012.006-.017.011l-.451.341c-.006.006-.012.006-.017.012q-.65.51-1.231 1.092A13.64 13.64 0 0 0 0 44.71v48.426c0 7.557 6.13 13.688 13.688 13.688h5.593c12.487 0 22.656-10.071 22.725-22.558v-.294C42 83.926 42 83.874 42 83.827s0-.098.006-.144v-.006a17.2 17.2 0 0 0-.468-3.837 17.27 17.27 0 0 0-6.2-9.69 17.38 17.38 0 0 0-10.69-3.691h-.016a2.17 2.17 0 0 1-1.537-.636 2.17 2.17 0 0 1-.636-1.537c0-.6.243-1.144.636-1.537a2.17 2.17 0 0 1 1.537-.636c4.865 0 9.256-1.999 12.41-5.217A17.3 17.3 0 0 0 42 44.82v-.168c.018-.566.26-1.08.636-1.456a2.176 2.176 0 0 1 3.074 0c.393.393.635.936.635 1.537v.012a17.32 17.32 0 0 0 4.952 12.145c.046.046.087.093.133.139a17.3 17.3 0 0 0 12.284 5.084 2.166 2.166 0 0 1 2.172 2.173 2.174 2.174 0 0 1-2.155 2.173h-.011c-1.318 0-2.652.15-3.987.468a17.27 17.27 0 0 0-9.69 6.2 17.35 17.35 0 0 0-3.692 10.504v.098c0 .035.006.064.006.098v.416c.07 12.492 10.233 22.575 22.725 22.575h27.532a13.64 13.64 0 0 0 9.678-4.01 13.64 13.64 0 0 0 4.01-9.678V44.479a13.71 13.71 0 0 0-5.033-10.36m-18.131 9.793h-.006c-.67 0-1.346.075-2.022.237a8.78 8.78 0 0 0-4.917 3.149 8.8 8.8 0 0 0-1.872 5.327v.162a1.104 1.104 0 0 1-1.884.722 1.08 1.08 0 0 1-.318-.705v-.15a8.7 8.7 0 0 0-.237-1.947 8.82 8.82 0 0 0-8.575-6.79h-.005a1.1 1.1 0 0 1-.78-.323 1.08 1.08 0 0 1-.324-.78c0-.306.122-.578.324-.78a1.1 1.1 0 0 1 .78-.324 8.8 8.8 0 0 0 6.298-2.646 8.77 8.77 0 0 0 2.514-6.125v-.092a1.105 1.105 0 0 1 2.207.04v.012c0 1.202.243 2.346.676 3.386a8.9 8.9 0 0 0 1.837 2.78l.07.068a8.8 8.8 0 0 0 6.234 2.583c.306 0 .578.122.78.324.202.196.324.474.324.78a1.116 1.116 0 0 1-1.104 1.092m44.55 41.58V28.237h21.026q5.747 0 10.169 2.08c2.947 1.387 5.258 3.404 6.922 6.05q2.496 3.968 2.496 9.643 0 5.599-2.531 9.569c-1.687 2.646-3.998 4.674-6.922 6.09-2.923 1.41-6.304 2.12-10.134 2.12h-10.742v21.708h-10.284zm10.284-30.786h10.892q2.798.002 4.842-1.098a7.9 7.9 0 0 0 3.178-3.062q1.134-1.968 1.132-4.536.002-2.643-1.132-4.576c-.757-1.288-1.815-2.294-3.178-3.027-1.364-.728-2.976-1.098-4.842-1.098h-10.892zm58.462-12.154v8.77h-3.553c-2.826 0-5.091.867-6.807 2.612q-2.572 2.61-2.571 7.298v24.285h-9.909V43.008h9.302v5.796q1.397-3.043 3.744-4.438c2.04-1.208 4.502-1.814 7.373-1.814zm23.281 42.938q-6.05.002-11.002-2.797c-3.305-1.866-5.922-4.408-7.863-7.638q-2.913-4.836-2.912-11.042 0-6.197 2.912-11.042a21.26 21.26 0 0 1 7.829-7.638q4.914-2.799 11.042-2.797c4.033 0 7.69.936 10.966 2.797q4.916 2.798 7.829 7.598t2.913 11.082q0 6.206-2.947 11.042a21.53 21.53 0 0 1-7.864 7.638c-3.288 1.86-6.916 2.797-10.903 2.797m0-9.077q3.328-.001 5.859-1.59c1.687-1.057 3.027-2.53 4.01-4.425q1.473-2.837 1.473-6.39c0-2.422-.491-4.548-1.473-6.391q-1.473-2.757-4.01-4.386c-1.687-1.086-3.646-1.623-5.859-1.623-2.271 0-4.259.543-5.975 1.623q-2.573 1.63-4.044 4.386c-.983 1.843-1.474 3.97-1.474 6.39q0 3.556 1.474 6.39c.982 1.89 2.334 3.363 4.044 4.427q2.576 1.587 5.975 1.589m67.414-23.375c-1.843-3.224-4.322-5.795-7.448-7.713s-6.633-2.872-10.516-2.872q-4.765 0-8.395 1.855c-1.936.988-3.548 2.294-4.842 3.906v-5.195h-9.303v56.607h9.909V80.524q1.82 1.906 4.351 3.109 3.742 1.775 8.205 1.774c3.981 0 7.534-.942 10.666-2.837q4.69-2.834 7.413-7.748c1.815-3.277 2.722-6.911 2.722-10.892q.001-6.048-2.762-10.892m-8.997 17.404q-1.475 2.8-4.119 4.385c-1.763 1.058-3.785 1.59-6.05 1.59q-3.25-.001-5.859-1.59-2.61-1.586-4.085-4.385-1.473-2.802-1.473-6.425 0-3.556 1.473-6.39 1.476-2.834 4.085-4.427 2.608-1.587 5.859-1.589 3.406.001 6.05 1.624a11.35 11.35 0 0 1 4.119 4.385c.983 1.844 1.474 3.97 1.474 6.39q0 3.632-1.474 6.432" fill="#FF6D33"></path>
            <path d="M314.867 85.492q-6.577 0-11.457-3.138t-6.691-8.51l7.413-3.554c1.057 2.317 2.531 4.137 4.426 5.443q2.833 1.965 6.315 1.964 2.723-.001 4.311-1.207c1.057-.804 1.589-1.867 1.589-3.178q0-1.207-.642-2.005c-.427-.532-1.011-.983-1.739-1.364a14 14 0 0 0-2.38-.948l-6.732-1.889c-3.478-1.005-6.113-2.548-7.904-4.61q-2.687-3.103-2.687-7.339-.002-3.78 1.93-6.616c1.288-1.89 3.074-3.362 5.368-4.426q3.44-1.587 7.904-1.589c3.883 0 7.309.936 10.285 2.797q4.461 2.801 6.35 7.864l-7.564 3.553q-1.057-2.798-3.553-4.46-2.496-1.665-5.599-1.664-2.496-.002-3.935 1.132-1.438 1.136-1.438 2.947 0 1.134.606 1.964.606.833 1.705 1.364c.728.352 1.577.682 2.531.982l6.581 1.965c3.38 1.01 5.986 2.519 7.829 4.535 1.837 2.017 2.762 4.49 2.762 7.414 0 2.473-.659 4.651-1.965 6.54q-1.967 2.833-5.443 4.426c-2.328 1.075-5.05 1.607-8.176 1.607m41.051-.002q-6.051.002-11.001-2.797c-3.305-1.866-5.923-4.408-7.864-7.638q-2.913-4.836-2.912-11.042 0-6.197 2.912-11.042a21.26 21.26 0 0 1 7.829-7.638q4.914-2.799 11.042-2.797c4.033 0 7.69.936 10.966 2.797q4.916 2.798 7.83 7.598 2.912 4.8 2.912 11.082 0 6.206-2.947 11.042a21.53 21.53 0 0 1-7.864 7.638c-3.288 1.86-6.922 2.797-10.903 2.797m0-9.077q3.328-.001 5.859-1.59c1.687-1.057 3.027-2.53 4.01-4.425q1.473-2.837 1.473-6.39c0-2.422-.491-4.548-1.473-6.391-.983-1.838-2.317-3.3-4.01-4.386-1.687-1.086-3.646-1.623-5.859-1.623-2.271 0-4.258.543-5.975 1.623q-2.572 1.63-4.044 4.386c-.982 1.843-1.474 3.97-1.474 6.39q0 3.556 1.474 6.39c.982 1.89 2.334 3.363 4.044 4.427 1.717 1.057 3.704 1.589 5.975 1.589m46.762 9.077q-6.129-.002-11.001-2.837-4.88-2.834-7.679-7.714t-2.797-11.001q-.002-6.121 2.797-10.967 2.8-4.838 7.679-7.638 4.881-2.799 11.001-2.797c2.924 0 5.645.52 8.17 1.549 2.519 1.034 4.703 2.444 6.541 4.235a15.6 15.6 0 0 1 3.969 6.39l-8.696 3.78q-1.134-3.104-3.819-4.993-2.688-1.89-6.165-1.89-3.252.002-5.784 1.59c-1.687 1.057-3.016 2.519-3.969 4.385q-1.44 2.8-1.439 6.431t1.439 6.43 3.969 4.386q2.532 1.589 5.784 1.59 3.555 0 6.2-1.89c1.762-1.26 3.027-2.947 3.779-5.067l8.695 3.935q-1.213 3.474-3.934 6.24c-1.815 1.843-3.981 3.276-6.506 4.31-2.514 1.023-5.258 1.543-8.234 1.543M463 58.117V85.5h-9.909V60.463q0-2.723-1.057-4.691-1.058-1.97-2.912-3.063c-1.237-.728-2.687-1.098-4.351-1.098q-2.42-.002-4.311 1.098a7.67 7.67 0 0 0-2.946 3.063c-.705 1.311-1.058 2.871-1.058 4.691V85.5h-9.909V28.245h9.909v19.293a10.6 10.6 0 0 1 3.369-3.074c2.195-1.283 4.749-1.93 7.673-1.93 3.028 0 5.709.653 8.054 1.965a14 14 0 0 1 5.484 5.483q1.965 3.518 1.964 8.135" fill="#212130"></path>
          </svg>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden xl:flex items-center gap-1">
          {["Properties", "Services", "Resources", "Company"].map((item) => (
            <button 
              key={item}
              className="inline-flex h-9 items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 transition-all focus:outline-none cursor-pointer"
            >
              {item}
              <svg width="12" height="12" viewBox="0 0 49 48" fill="none" className="ml-1 size-3 transition duration-300" aria-hidden="true">
                <path d="M33.386 20c-4.387 4.133-6.918 6.917-6.918 6.917A3.47 3.47 0 0 1 24 27.946c-.46 0-.914-.091-1.337-.268-.424-.176-1.132-.76-1.132-.76L14.614 20" stroke="currentColor" strokeWidth="3"></path>
              </svg>
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Search Trigger */}
          <button 
            onClick={() => setSearchOpen(true)}
            className="inline-flex items-center justify-center rounded-lg hover:bg-white/5 h-9 w-9 text-zinc-300 hover:text-white transition-colors cursor-pointer border border-transparent"
            aria-label="Search properties"
          >
            <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-5">
              <path d="M14.9698 19.807C17.969 19.807 20.4005 17.3756 20.4005 14.3762C20.4005 11.377 17.969 8.94556 14.9698 8.94556C11.9705 8.94556 9.53906 11.377 9.53906 14.3762C9.53906 17.3756 11.9705 19.807 14.9698 19.807Z" stroke="currentColor" strokeWidth="2"></path>
              <path d="M21.9508 22.9103C22.2538 23.2132 22.745 23.2132 23.048 22.9103C23.3509 22.6073 23.3509 22.1161 23.048 21.8131L21.9508 22.9103ZM18.3303 19.2898L21.9508 22.9103L23.048 21.8131L19.4275 18.1926L18.3303 19.2898Z" fill="currentColor"></path>
            </svg>
          </button>

          {/* Share Button */}
          <button 
            className="inline-flex items-center justify-center rounded-lg hover:bg-white/5 h-9 w-9 text-zinc-300 hover:text-white transition-colors cursor-pointer border border-transparent"
            aria-label="Share this website"
          >
            <svg width="20" height="20" viewBox="0 0 49 48" fill="none" className="size-5">
              <path d="M19.4436 26.265L29.6886 32.235M29.6736 15.765L19.4436 21.735M38.0586 13.5C38.0586 15.9853 36.0439 18 33.5586 18C31.0733 18 29.0586 15.9853 29.0586 13.5C29.0586 11.0147 31.0733 9 33.5586 9C36.0439 9 38.0586 11.0147 38.0586 13.5ZM20.0586 24C20.0586 26.4853 18.0439 28.5 15.5586 28.5C13.0733 28.5 11.0586 26.4853 11.0586 24C11.0586 21.5147 13.0733 19.5 15.5586 19.5C18.0439 19.5 20.0586 21.5147 20.0586 24ZM38.0586 34.5C38.0586 36.9853 36.0439 39 33.5586 39C31.0733 39 29.0586 36.9853 29.0586 34.5C29.0586 32.0147 31.0733 30 33.5586 30C36.0439 30 38.0586 32.0147 38.0586 34.5Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </button>

          {/* Wishlist Link */}
          <a 
            className="inline-flex items-center justify-center rounded-lg hover:bg-white/5 h-9 w-9 text-zinc-300 hover:text-white transition-colors border border-transparent" 
            href="/shortlist?entry_point=navbar&amp;cta=wishlist-icon"
            aria-label="View shortlist / wishlist"
          >
            <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-5">
              <path d="M9.465 15.6075C9.21 15.6975 8.79 15.6975 8.535 15.6075C6.36 14.865 1.5 11.7675 1.5 6.51745C1.5 4.19995 3.3675 2.32495 5.67 2.32495C7.035 2.32495 8.2425 2.98495 9 4.00495C9.7575 2.98495 10.9725 2.32495 12.33 2.32495C14.6325 2.32495 16.5 4.19995 16.5 6.51745C16.5 11.7675 11.64 14.865 9.465 15.6075Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </a>

          {/* User Profile / Login */}
          <a 
            href="/journey" 
            className="bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors border border-transparent"
            aria-label="Login or register"
          >
            Login
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex xl:hidden items-center justify-center rounded-lg hover:bg-white/5 h-9 w-9 text-zinc-300 hover:text-white transition-colors cursor-pointer border border-transparent"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg width="20" height="20" viewBox="0 0 49 48" fill="none" className="size-5">
              <path d="M8 13.2598H41.8476" stroke="currentColor" strokeWidth="3" strokeLinecap="round"></path>
              <path d="M8 24H42" stroke="currentColor" strokeWidth="3" strokeLinecap="round"></path>
              <path d="M8 36H42" stroke="currentColor" strokeWidth="3" strokeLinecap="round"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden w-full bg-background border-t border-border-light/40 py-4 px-4 flex flex-col gap-3 animate-accordion-down">
          {["Properties", "Services", "Resources", "Company"].map((item) => (
            <button 
              key={item}
              className="flex w-full items-center justify-between py-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors cursor-pointer"
            >
              <span>{item}</span>
              <svg width="12" height="12" viewBox="0 0 49 48" fill="none" className="size-3" aria-hidden="true">
                <path d="M33.386 20c-4.387 4.133-6.918 6.917-6.918 6.917A3.47 3.47 0 0 1 24 27.946c-.46 0-.914-.091-1.337-.268-.424-.176-1.132-.76-1.132-.76L14.614 20" stroke="currentColor" strokeWidth="3"></path>
              </svg>
            </button>
          ))}
        </div>
      )}

      {/* Search Modal Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
          <div className="glass-panel w-full max-w-lg rounded-2xl p-6 flex flex-col gap-4 relative animate-accordion-down">
            <button 
              onClick={() => setSearchOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white text-lg p-1"
              aria-label="Close search box"
            >
              ✕
            </button>
            <h2 className="text-lg font-semibold text-white">Search Propsoch</h2>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search by developers, locations, or projects..." 
                className="w-full bg-zinc-900 border border-zinc-700 rounded-xl py-3 pl-4 pr-10 text-white placeholder-zinc-500 focus:outline-none focus:border-brand-orange text-sm"
                autoFocus
              />
              <span className="absolute right-3 top-3.5 text-zinc-500">
                <svg width="18" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-4">
                  <path d="M14.9698 19.807C17.969 19.807 20.4005 17.3756 20.4005 14.3762C20.4005 11.377 17.969 8.94556 14.9698 8.94556C11.9705 8.94556 9.53906 11.377 9.53906 14.3762C9.53906 17.3756 11.9705 19.807 14.9698 19.807Z" stroke="currentColor" strokeWidth="2"></path>
                  <path d="M21.9508 22.9103C22.2538 23.2132 22.745 23.2132 23.048 22.9103C23.3509 22.6073 23.3509 22.1161 23.048 21.8131L21.9508 22.9103ZM18.3303 19.2898L21.9508 22.9103L23.048 21.8131L19.4275 18.1926L18.3303 19.2898Z" fill="currentColor"></path>
                </svg>
              </span>
            </div>
            <p className="text-xs text-zinc-400">Try searching "Whitefield", "Prestige", or "Koramangala"</p>
          </div>
        </div>
      )}
    </header>
  );
}
