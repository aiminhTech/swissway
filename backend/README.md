# Technology
## Bun
- https://bun.sh/
- A fast all-in-one JavaScript runtime, bundler, transpiler, and package manager. It’s an alternative to Node.js and npm designed for speed and modern JavaScript and TypeScript development.

### Installation
https://bun.sh/docs/installation

#### MacOS
```bash
curl -fsSL https://bun.sh/install | bash
```
Once installed, add Bun to your shell config

```bash
# For zsh:

# add to ~/.zshrc or ~/.bashrc with vim or nano, depends on your shell
export BUN_INSTALL="$HOME/.bun"
export PATH="$BUN_INSTALL/bin:$PATH"

# then save and run:
source ~/.zshrc 
# or 
source ~/.bashrc
```

#### Window 

```bash
powershell -c "irm bun.sh/install.ps1 | iex"
```

# Getting started

To install dependencies:

```bash
bun install
```

To create db and insert data:

```bash
bun run:db
```

Running this will create a swissway.db SQLite database file.

You can then open the database and run queries directly in your terminal using SQLite3. Make sure you have SQLite3 installed on your system. To open the database, run:

```bash
# Installation on Window
npm i sqlite3

# Installation on MacOS with Homebrew
npm i sqlite3

# Then run whis to open DB:
sqlite3 swissway.db
```


# Notes
## `db/` Folder Contains

The `db/` folder contains all database-related code and files, including:

- **`db.ts`** — SQLite3 database schema definitions  
- **`insert.ts`** (migration scripts) — Scripts to insert data into the database
- **`data.ts`** — Prepares seed data to insert into the database  
- **`DATABASE.md`** — Contains the ERD. You can view it with VSCode’s Markdown Preview using the extension [Markdown Preview Mermaid Support](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid)
