# Skill: Large File Reading

## Trigger
User uploads a large PDF, doc, or file over 1MB or with 50+ pages

## Steps
1. Do not read the whole file at once
2. Split into chunks of 10 pages or 2000 tokens max
3. Read chunk 1, summarize key points
4. Read chunk 2, summarize, merge with chunk 1 summary
5. Repeat until all chunks done
6. Deliver final merged summary
7. If images exist, note page numbers for extraction
8. If tables exist, extract to CSV format

## Example
User uploads a 200-page report → split into 20 chunks, summarize each, merge

## Notes
Never load full file in one shot — context overflow. Always confirm chunk count with user first.
