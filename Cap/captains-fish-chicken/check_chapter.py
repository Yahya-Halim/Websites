import re
with open('D:\\website\\captains-fish-chicken\\google-content-quality-swarm-packet_sec07.md', 'r') as f:
    text = f.read()
# Remove footnote definitions
body = re.sub(r'\[\^\d+\]:.*?(?=\n\[\^|\Z)', '', text, flags=re.DOTALL)
# Remove markdown table syntax lines
body = re.sub(r'\|[-:\s|]+\|', '', body)
# Remove markdown formatting
body = re.sub(r'[#*|!\[\]()`\-_]', ' ', body)
# Clean URLs
body = re.sub(r'https?://\S+', 'URL', body)
# Clean whitespace
body = re.sub(r'\s+', ' ', body).strip()
words = body.split()
print(f'Approximate word count (body): {len(words)}')
# Check for table
print(f'Table rows: {text.count(chr(10)+"|")}')
# Check for figure
print(f'Figure 7.1 references: {len(re.findall("Figure 7\\.1", text))}')
# Check citations
footnotes = re.findall(r'\[\^(\d+)\]', text)
print(f'Unique footnote IDs: {len(set(footnotes))}')
print(f'Footnote IDs: {sorted(set(footnotes), key=int)}')
