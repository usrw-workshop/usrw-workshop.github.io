# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the website for the **Unified Search and Recommendation Workshop (USRW)**, a full-day workshop accepted at **ACM RecSys 2026** (Minneapolis, Minnesota, USA, October 2, 2026). The website will be deployed as a static site on **GitHub Pages**.

The workshop bridges the Information Retrieval (IR) and Recommender Systems (RecSys) communities, focusing on unified architectures, generative retrieval, LLMs, and agentic systems for discovery.

## Key Deadlines

- **April 14, 2026:** Website URL and workshop blurb due to conference organizers
- **April 17, 2026:** CfP draft due to workshop chairs for approval
- **April 21, 2026:** CfP publication (after confirmation)
- **July 20, 2026:** Paper submission deadline; camera-ready workshop summary for main proceedings
- **August 7, 2026:** Reviewer deadline
- **August 14, 2026:** Author notification
- **August 28, 2026:** Camera-ready paper deadline

## Site Structure

The site is hosted on GitHub Pages at `usrw-workshop.github.io`. Each workshop edition lives in its own subfolder, with a root redirect to the current year.

```
index.html              → redirect to /2026/
2026/
  index.html            → main workshop page
  style.css             → styles
  config.js             → shared config (contact email, etc.)
  cfp-draft.html        → call for papers (draft, noindex)
```

Future editions (e.g., 2027) get their own subfolder.

## Submissions

Papers are submitted through a dedicated EasyChair track (set up by conference organizers — do not create a separate submission system).
