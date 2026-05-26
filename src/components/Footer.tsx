import React from "react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-border-light text-zinc-400 py-12 px-4 md:px-6 w-full" role="contentinfo">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-10">
        
        {/* Breadcrumb section */}
        <nav aria-label="Breadcrumb" className="text-xs md:text-sm text-zinc-500">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <a href="/" className="hover:text-white transition-colors flex items-center gap-1.5" aria-label="Go to homepage">
                <svg width="14" height="14" viewBox="0 0 34 32" fill="none" className="text-brand-orange" aria-hidden="true">
                  <path clipRule="evenodd" d="M31.5344 10.2207L31.4911 10.1878L31.2921 10.0389L31.254 10.0113L19.1467 0.941584C19.1467 0.941584 19.1467 0.941584 19.145 0.941584L18.823 0.700993C18.823 0.700993 18.8213 0.700991 18.8213 0.699261C18.167 0.257893 17.3795 0 16.5314 0H16.5089C15.5932 0 14.7486 0.299433 14.0666 0.806573C14.0493 0.818689 14.0337 0.832541 14.0164 0.844657L1.71527 10.058C1.71354 10.0597 1.7118 10.0597 1.71007 10.0614L1.57507 10.1636C1.57334 10.1653 1.5716 10.1653 1.56987 10.167C1.44006 10.2691 1.31718 10.3782 1.20121 10.4942C0.458676 11.2367 0 12.2614 0 13.3933V27.8996C0 30.1636 1.83643 32 4.10039 32H5.77585C9.51623 32 12.5625 28.9831 12.5833 25.2428C12.5833 25.2185 12.5833 25.196 12.5833 25.1718V25.1562V25.1545C12.5816 25.1406 12.5816 25.1251 12.5816 25.1112C12.5816 25.0974 12.5816 25.0818 12.5833 25.0679V25.0662C12.5798 24.6871 12.5348 24.3012 12.4431 23.9169C12.161 22.7192 11.4859 21.717 10.5859 21.0143C9.68585 20.3115 8.56252 19.9083 7.38381 19.9083H7.37861C7.19861 19.9083 7.03591 19.8356 6.91821 19.7179C6.80051 19.6002 6.72782 19.4375 6.72782 19.2575C6.72782 19.0775 6.80051 18.9148 6.91821 18.7971C7.03591 18.6794 7.19861 18.6067 7.37861 18.6067C8.83599 18.6067 10.1514 18.0078 11.0965 17.0437C12.0104 16.1108 12.5764 14.8351 12.5816 13.4262V13.4245C12.5816 13.4176 12.5816 13.4106 12.5816 13.4037V13.4003C12.5816 13.3916 12.5816 13.3847 12.5816 13.3778V13.376C12.5868 13.2064 12.6595 13.0524 12.772 12.9399C12.8897 12.8222 13.0524 12.7495 13.2324 12.7495C13.4106 12.7495 13.5751 12.8222 13.6928 12.9399C13.8105 13.0576 13.8832 13.2202 13.8832 13.4003V13.4037C13.8832 14.8196 14.4492 16.1039 15.3665 17.042C15.3803 17.0558 15.3925 17.0697 15.4063 17.0835C16.3479 18.0251 17.6478 18.6067 19.0861 18.6067C19.2661 18.6067 19.4288 18.6794 19.5465 18.7971C19.6642 18.9148 19.7369 19.0775 19.7369 19.2575C19.7369 19.6158 19.4479 19.9048 19.0913 19.9083H19.0878C18.6932 19.9083 18.2934 19.9533 17.8935 20.0485C16.6958 20.3306 15.6936 21.0056 14.9909 21.9057C14.2986 22.7901 13.897 23.8927 13.8849 25.0524C13.8849 25.061 13.8849 25.0697 13.8849 25.0783V25.0818C13.8849 25.0922 13.8866 25.1008 13.8866 25.1112C13.8866 25.1199 13.8866 25.1268 13.8866 25.1354C13.8866 25.1389 13.8866 25.1406 13.8866 25.1441C13.8866 25.1753 13.8866 25.2064 13.8866 25.2358C13.9074 28.9779 16.952 31.9983 20.6941 31.9983H28.9416C30.0736 31.9983 31.0982 31.5396 31.8408 30.7971C32.5833 30.0545 33.042 29.0299 33.042 27.8979V13.3241C33.0177 12.0744 32.4362 10.9598 31.5344 10.2207ZM26.103 13.1545H26.1013C25.9005 13.1545 25.698 13.177 25.4955 13.2254C24.8879 13.3691 24.3791 13.7118 24.0225 14.1688C23.6711 14.6188 23.4669 15.1778 23.4617 15.7646V15.7802V15.7819C23.4617 15.7871 23.4617 15.7906 23.4617 15.7958C23.4617 15.7992 23.4617 15.8044 23.4617 15.8079V15.8131C23.453 15.9879 23.3077 16.1263 23.1311 16.1263C23.0394 16.1263 22.958 16.09 22.8974 16.0294C22.8421 15.974 22.8074 15.9013 22.8022 15.8183C22.8022 15.8113 22.8022 15.8044 22.8022 15.7958C22.8022 15.7888 22.8022 15.7819 22.8022 15.775V15.7733C22.8005 15.5811 22.778 15.3855 22.7313 15.19C22.5876 14.5824 22.2449 14.0736 21.788 13.717C21.331 13.3604 20.7616 13.1562 20.1627 13.1562H20.161C20.0692 13.1562 19.9879 13.1199 19.9273 13.0593C19.8667 13.0004 19.8304 12.9173 19.8304 12.8256C19.8304 12.7339 19.8667 12.6525 19.9273 12.592C19.9879 12.5314 20.0692 12.495 20.161 12.495C20.9 12.495 21.5681 12.1904 22.0476 11.7023C22.5115 11.228 22.7988 10.5807 22.8005 9.86759V9.86586C22.8005 9.8624 22.8005 9.85894 22.8005 9.85547V9.85374C22.8005 9.85028 22.8005 9.84682 22.8005 9.84162V9.83989C22.804 9.75335 22.8403 9.67547 22.8974 9.61835C22.9563 9.55777 23.0394 9.52142 23.1311 9.52142C23.2228 9.52142 23.3042 9.55777 23.3648 9.61835C23.4254 9.67893 23.4617 9.76027 23.4617 9.85201V9.85547C23.4617 10.2155 23.5344 10.5582 23.6642 10.8698C23.794 11.1813 23.9827 11.4634 24.2146 11.7023C24.2215 11.7092 24.2285 11.7161 24.2354 11.7231C24.7131 12.2008 25.3726 12.4968 26.103 12.4968C26.1947 12.4968 26.2761 12.5331 26.3366 12.5937C26.3972 12.6525 26.4336 12.7356 26.4336 12.8273C26.4301 13.0074 26.283 13.1527 26.103 13.1545Z" fill="currentColor"></path>
                </svg>
                Home
              </a>
            </li>
            <li className="text-zinc-600" aria-hidden="true">/</li>
            <li className="text-zinc-300 font-medium" aria-current="page">Guided Home Buying</li>
          </ol>
        </nav>

        {/* Separator line */}
        <hr className="border-zinc-800" />

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          
          {/* Logo & Social Column */}
          <div className="flex flex-col gap-6">
            <a href="/" aria-label="Propsoch Homepage">
              <svg width="118" height="28" viewBox="0 0 139 32" fill="none" className="text-white" aria-hidden="true">
                <path d="m31.534 10.22-.043-.032-.199-.15-.038-.027L19.147.941h-.002l-.322-.24-.002-.002A4.1 4.1 0 0 0 16.531 0h-.022c-.916 0-1.76.3-2.442.807l-.05.038-12.303 9.213-.005.003-.135.103-.005.003A4.09 4.09 0 0 0 0 13.393V27.9A4.1 4.1 0 0 0 4.1 32h1.676c3.74 0 6.787-3.017 6.807-6.757v-.089l-.001-.043.001-.043v-.002a5.2 5.2 0 0 0-.14-1.15 5.206 5.206 0 0 0-5.06-4.009H7.38a.65.65 0 0 1-.651-.65.65.65 0 0 1 .65-.65 5.2 5.2 0 0 0 3.719-1.563 5.18 5.18 0 0 0 1.485-3.618v-.05a.649.649 0 0 1 1.111-.436.65.65 0 0 1 .19.46v.004c0 1.416.566 2.7 1.484 3.638q.018.021.04.041a5.2 5.2 0 0 0 3.68 1.524.65.65 0 0 1 .65.65.65.65 0 0 1-.646.651h-.003q-.594-.001-1.195.14a5.17 5.17 0 0 0-2.902 1.858 5.2 5.2 0 0 0-1.106 3.146v.03l.002.03v.123a6.805 6.805 0 0 0 6.807 6.763h8.248a4.1 4.1 0 0 0 2.899-1.2 4.1 4.1 0 0 0 1.201-2.9V13.324a4.1 4.1 0 0 0-1.508-3.103m-5.431 2.935h-.002q-.301-.001-.605.07a2.63 2.63 0 0 0-1.473.944 2.63 2.63 0 0 0-.561 1.596v.048a.33.33 0 0 1-.66.005v-.045a2.63 2.63 0 0 0-1.014-2.056 2.64 2.64 0 0 0-1.625-.56h-.002a.33.33 0 0 1-.234-.098.32.32 0 0 1-.097-.233c0-.092.037-.174.097-.234a.33.33 0 0 1 .234-.097 2.64 2.64 0 0 0 2.64-2.627V9.84a.331.331 0 0 1 .66.012v.003a2.63 2.63 0 0 0 .754 1.847l.02.021a2.63 2.63 0 0 0 1.868.774c.092 0 .173.036.234.097.06.059.097.142.097.233a.334.334 0 0 1-.331.328m13.34 12.455V8.459h6.298q1.722 0 3.047.623t2.073 1.812.748 2.89q0 1.676-.758 2.865a4.97 4.97 0 0 1-2.074 1.825q-1.313.634-3.036.635h-3.217v6.503h-3.081zm3.08-9.222h3.263q.839 0 1.45-.329.614-.327.953-.917.34-.59.34-1.359 0-.792-.34-1.37a2.4 2.4 0 0 0-.952-.908q-.613-.328-1.45-.329h-3.263zm17.513-3.641v2.627h-1.065q-1.269 0-2.039.783-.77.781-.77 2.186v7.275h-2.968V12.884h2.786v1.736q.419-.911 1.122-1.33.916-.542 2.208-.543zm6.978 12.863q-1.812 0-3.296-.838a6.33 6.33 0 0 1-2.355-2.288q-.873-1.449-.872-3.308 0-1.856.872-3.307a6.37 6.37 0 0 1 2.345-2.289q1.472-.838 3.308-.837 1.812 0 3.285.837a6.4 6.4 0 0 1 2.345 2.277q.873 1.436.873 3.32 0 1.858-.883 3.307a6.45 6.45 0 0 1-2.356 2.288q-1.476.837-3.266.838m0-2.72q.998 0 1.755-.475a3.34 3.34 0 0 0 1.201-1.326q.442-.85.442-1.915 0-1.087-.442-1.914a3.5 3.5 0 0 0-1.2-1.314q-.76-.487-1.756-.486-1.02 0-1.79.486a3.45 3.45 0 0 0-1.211 1.314q-.441.828-.442 1.914 0 1.066.442 1.915a3.34 3.34 0 0 0 1.211 1.326q.772.475 1.79.476m20.197-7.002a6.4 6.4 0 0 0-2.231-2.311q-1.406-.861-3.15-.86-1.428 0-2.516.555a4.4 4.4 0 0 0-1.45 1.17v-1.556h-2.787v16.958h2.969v-5.723q.545.571 1.303.932a5.66 5.66 0 0 0 2.458.53q1.788.002 3.195-.849a6.13 6.13 0 0 0 2.22-2.321q.816-1.473.816-3.263 0-1.812-.827-3.262m-2.695 5.213q-.442.84-1.234 1.314-.793.476-1.813.476-.973-.001-1.755-.476a3.3 3.3 0 0 1-1.223-1.314q-.442-.84-.442-1.925 0-1.065.442-1.914a3.3 3.3 0 0 1 1.223-1.326 3.3 3.3 0 0 1 1.755-.476q1.02 0 1.813.486a3.4 3.4 0 0 1 1.234 1.314q.441.828.441 1.915t-.441 1.926" fill="currentColor"></path>
              </svg>
            </a>
            <p className="text-sm text-zinc-400">
              Propsoch is a technology platform that empowers homebuyers to make intelligent, data-backed decisions throughout their property purchase journey.
            </p>
            {/* Social handles */}
            <div className="flex gap-4">
              {["Instagram", "LinkedIn", "YouTube", "Mail"].map((social) => (
                <a 
                  key={social}
                  href={`#${social.toLowerCase()}`}
                  className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-brand-orange hover:border-brand-orange transition-all"
                  aria-label={`Follow Propsoch on ${social}`}
                >
                  <span className="text-xs font-semibold">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="flex flex-col gap-4">
            <h2 className="text-white font-semibold text-sm tracking-wider uppercase">Services</h2>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li><a href="#ghb" className="hover:text-white transition-colors">Guided Home Buying (GHB)</a></li>
              <li><a href="#pom" className="hover:text-white transition-colors">Peace of Mind (POM) Advisory</a></li>
              <li><a href="#fair-price" className="hover:text-white transition-colors">Fair Price Assessment</a></li>
              <li><a href="#negotiation" className="hover:text-white transition-colors">Developer Negotiations</a></li>
            </ul>
          </div>

          {/* Column 3: Tools & Resources */}
          <div className="flex flex-col gap-4">
            <h2 className="text-white font-semibold text-sm tracking-wider uppercase">Tools &amp; Resources</h2>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li><a href="#calculator" className="hover:text-white transition-colors">Fair Price Calculator</a></li>
              <li><a href="#loyalty" className="hover:text-white transition-colors">Loyalty Reward Calculator</a></li>
              <li><a href="#guides" className="hover:text-white transition-colors">Homebuyer Guides &amp; Hacks</a></li>
              <li><a href="#sample-report" className="hover:text-white transition-colors">Download Sample Insights Report</a></li>
            </ul>
          </div>

          {/* Column 4: Locations We Cover */}
          <div className="flex flex-col gap-4">
            <h2 className="text-white font-semibold text-sm tracking-wider uppercase">Locations We Cover</h2>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li><a href="#bangalore" className="hover:text-white transition-colors">Bangalore (Whitefield, Sarjapur, North Bangalore)</a></li>
              <li><a href="#mumbai" className="hover:text-white transition-colors">Mumbai (Western Suburbs, Central Mumbai, Thane)</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Request a Location Expansion</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom bar with legal & copyright */}
        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Thinkr Proptech Private Limited. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
