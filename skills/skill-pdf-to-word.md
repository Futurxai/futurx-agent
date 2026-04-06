# Skill: PDF to Word to Canvas Pipeline

## Trigger
User says "convert PDF", "extract from PDF", or uploads PDF + asks to edit

## Steps
1. Read the PDF using large file skill if over 10 pages
2. Extract raw text, tables, and images separately
3. Reconstruct in clean Word-compatible markdown
4. Ask: "Should I push this to Canvas for editing?"
5. If yes, format as structured document with headings

## Example
Upload syllabus PDF → extract text + tables → output clean .docx-ready markdown

## Notes
Images need manual extraction. Tables must be verified for column alignment.
