<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the Voicefy AI landing page self-contained at `/` with bundled generated media and local pointers for any copied reference media; this preserves the visual identity without runtime hotlinks.
- Keep the browser-powered speech preview in a separate client-safe component and label device voices distinctly from the unconnected product catalog; this prevents implying live generation or API availability.
