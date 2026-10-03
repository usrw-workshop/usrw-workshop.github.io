# Citation Registry

`refs.bib` is the single source of truth for deck citations.

Add only verified BibTeX entries. Then run:

```sh
python3 presentation/tools/build-citations.py
```

The generator writes `assets/js/citations.js`, including author-year labels,
titles, DOI/URL links, and fields used by the references slide. Slide files
should cite by key rather than hard-coding bibliographic metadata.
