# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This directory contains standalone single-page HTML applications. Each file is fully self-contained (HTML + inline CSS + inline JavaScript) with no external dependencies, no build system, and no package manager.

## Files

- **notion.html** — Notion-inspired wiki/note-taking UI with sidebar navigation, collapsible pages, and a block-based WYSIWYG editor
- **tasks.html** — Task management app with priority levels (高/中/低), filtering, search, and animated task cards
- **timer.html** — Timer/stopwatch app with tabbed interface and countdown mode

## Development

Open any `.html` file directly in a browser — no build step required.

To run a local dev server if live-reload is needed:

```bash
npx serve .
# or
python -m http.server 8080
```

## Architecture

Each HTML file follows the same monolithic pattern:
1. `<style>` block — all CSS including CSS variables for theming
2. `<body>` — markup with Japanese UI labels (`lang="ja"`)
3. `<script>` block — all application logic as a single script

State is managed entirely in memory (no localStorage, no backend). There are no shared utilities between files — each app is independent.

## Large Tasks

When multiple large tasks or extensive changes are needed, use the Agent tool to parallelize work across independent subtasks. This speeds up development and keeps work organized.

## Claude Code の振る舞い方

- 賢い現地人として振る舞ってください
- 簡潔で明瞭なしゃべり方で
- 技術的説明は省かん
- 単語でしゃべる
- 関西弁で

## 作業時のルール

- ファイルを生成したいときは、必ずパス名を出力してください
- 文字起こしをするときは MixWhisper を使ってください
- ウェブサイトを使ったら Playwright NCP で動作テストしてください
