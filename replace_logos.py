import re

with open("app/page.tsx", "r") as f:
    content = f.read()

# Google
google_svg = """<svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>"""

content = re.sub(
    r'<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">\s*<path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />\s*</svg>',
    google_svg,
    content
)


# HackerRank
hackerrank_svg = """<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <rect width="24" height="24" rx="5" fill="#2EC866" />
                          <path d="M7 6h2.5v4h3V6H15v12h-2.5v-4.5h-3V18H7V6z" fill="#FFF" />
                        </svg>"""

# Find all 5 instances of the various generic SVGs in HackerRank cards and replace them with HackerRank SVG
# Also replace their parent div background if it's missing or different to use the green tint
content = re.sub(
    r'<div className="certificate-icon"[^>]*>\s*<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">\s*<rect width="20" height="20" x="2" y="2" rx="4" stroke="currentColor" />\s*<path strokeLinecap="round" strokeLinejoin="round" d="M7 6h2.5v4h3V6H15v12h-2.5v-4.5h-3V18H7V6z" />\s*</svg>\s*</div>',
    f'<div className="certificate-icon" style={{{{ background: "rgba(46, 200, 102, 0.08)" }}}}>\n                        {hackerrank_svg}\n                      </div>',
    content
)

content = re.sub(
    r'<div className="certificate-icon">\s*<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">\s*<path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />\s*</svg>\s*</div>',
    f'<div className="certificate-icon" style={{{{ background: "rgba(46, 200, 102, 0.08)" }}}}>\n                        {hackerrank_svg}\n                      </div>',
    content
)

content = re.sub(
    r'<div className="certificate-icon">\s*<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">\s*<path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />\s*</svg>\s*</div>',
    f'<div className="certificate-icon" style={{{{ background: "rgba(46, 200, 102, 0.08)" }}}}>\n                        {hackerrank_svg}\n                      </div>',
    content
)

content = re.sub(
    r'<div className="certificate-icon">\s*<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">\s*<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />\s*</svg>\s*</div>',
    f'<div className="certificate-icon" style={{{{ background: "rgba(46, 200, 102, 0.08)" }}}}>\n                        {hackerrank_svg}\n                      </div>',
    content
)

content = re.sub(
    r'<div className="certificate-icon">\s*<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">\s*<path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />\s*</svg>\s*</div>',
    f'<div className="certificate-icon" style={{{{ background: "rgba(46, 200, 102, 0.08)" }}}}>\n                        {hackerrank_svg}\n                      </div>',
    content
)


# DeepLearning.AI
dlai_svg = """<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="12" fill="#0056D2" />
                          <text x="12" y="16" fill="white" fontSize="10" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">dl.ai</text>
                        </svg>"""

content = re.sub(
    r'<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">\s*<path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" />\s*</svg>',
    dlai_svg,
    content
)

with open("app/page.tsx", "w") as f:
    f.write(content)

print("Replaced successfully!")
