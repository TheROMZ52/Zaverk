# Žavërk Translator Design

## Direction
A compact language-lab tool for translating Persian into the fictional Žavërk language and back. The product should feel like a small experimental instrument rather than a generic translation website.

## Visual system
- Background: near-black navy with two cool atmospheric glows and a subtle technical grid.
- Surfaces: deep blue-black glass panels with restrained borders and large 22–28px radii.
- Accent: electric cyan for language markers and active states; violet is reserved for secondary gradient depth.
- Positive feedback: mint green; warnings use warm gold without relying on color alone.
- Typography: Vazirmatn for Persian UI, with Latin Žavërk text rendered direction-aware.

## Composition
The hero establishes the language identity. The translator is the primary workspace: two equal editor panes with a narrow control bridge. Dictionary and examples are secondary reference surfaces below the workspace.

## Signature
The language bridge: a small glowing Ž mark, paired language pills, and a central swap/translate control make the interface read as a bespoke language instrument.

## Behavior
- Sentence-aware phrase rules take priority over isolated dictionary replacement.
- Proper names remain untouched unless a translation rule explicitly exists.
- Word replacement is boundary-aware so substrings do not corrupt unrelated words.
- Persian normalization handles Arabic ی/ک variants and zero-width joiner noise.
- Copy, paste, clear, swap, keyboard translation, character counts, and live status are available.
- Reduced-motion users receive the same functionality without transition effects.
- Textareas remain fixed-height application surfaces on mobile; users do not get accidental page reflow from resizing.
