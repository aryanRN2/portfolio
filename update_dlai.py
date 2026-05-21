import re

with open("app/page.tsx", "r") as f:
    content = f.read()

dlai_img = '<img src="https://www.deeplearning.ai/favicon.ico" width="24" height="24" alt="DeepLearning.AI" style={{ borderRadius: "50%" }} />'

# Replace the previous dlai svg with the image
content = re.sub(
    r'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\s*<circle cx="12" cy="12" r="12" fill="#0056D2" />\s*<text x="12" y="16" fill="white" fontSize="10" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">dl\.ai</text>\s*</svg>',
    dlai_img,
    content
)

# Also replace the single instance of "Unsupervised Learning, Recommenders, Reinforcement Learning" with it and the new Langchain cert below it.
# Wait, let's just find the DeepLearning.AI cert and append the LangChain cert after it.

cert_regex = r'({\s*/\*\s*Real Cert 2:\s*DeepLearning\.AI Andrew Ng Course 3\s*\*/\s*}[\s\S]*?</div>\s*</div>)'

langchain_cert = """
                    {/* DeepLearning.AI LangChain */}
                    <div className="glass-panel certificate-card">
                      <div className="certificate-icon" style={{ background: "rgba(79, 70, 229, 0.08)" }}>
                        <img src="https://www.deeplearning.ai/favicon.ico" width="24" height="24" alt="DeepLearning.AI" style={{ borderRadius: "50%" }} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <h3 style={{ fontSize: "1.0rem", fontWeight: 600 }}>LangChain for LLM Application Development</h3>
                        <p style={{ color: "var(--slate-400)", fontSize: "0.8rem" }}>DeepLearning.AI • 2026</p>
                        <a href="https://learn.deeplearning.ai/accomplishments/2cb1b828-cf93-4268-a1de-5d45b5647997" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.75rem", color: "var(--primary)", fontWeight: 500, textDecoration: "none", marginTop: "4px" }}>
                          Verify Credential ↗
                        </a>
                      </div>
                    </div>
"""

match = re.search(cert_regex, content)
if match:
    new_content = content[:match.end()] + "\n" + langchain_cert + content[match.end():]
    with open("app/page.tsx", "w") as f:
        f.write(new_content)
    print("Updates applied successfully!")
else:
    print("Could not find the target certificate card to append after.")

