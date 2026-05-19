# Quantum Programming Language — Official Course Repository

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

**Quantum** is a multi-paradigm, multi-syntax programming language. Write Python-style and C++-style code in the same `.sa` source file — Quantum understands both and runs them as one program.

```sa
n = input("Enter")
cout << n
```

This repository is the **official learning platform** for Quantum: structured courses from beginner to advanced, with room for a website, quizzes, AI helper, downloadable notes, online execution, and project showcases.

---

## Features

| Feature | Description |
|--------|-------------|
| **Mixed syntax** | Python + C++ (and more) in a single `.sa` file |
| **Compiler** | `quantum file.sa` → native executable (`.exe` on Windows) |
| **Interpreter** | `qrun file.sa` → run immediately, no extra output files |
| **Structured curriculum** | Beginner → intermediate → advanced tracks |
| **Extensible platform** | Hooks for web, quizzes, AI, and projects |

---

## Quick start

### Interpreter (run directly)

```bash
qrun hello.sa
```

### Compiler (build executable)

```bash
quantum hello.sa
```

On Windows, run the generated `.exe` after compile.

---

## Example

**`hello.sa`**

```sa
print("Hello, Quantum!")
```

**`mixed.sa`**

```sa
n = input("Enter a number: ")
cout << n
```

---

## Repository structure

```
Quantum/
├── README.md              # You are here
├── CONTRIBUTING.md        # How to contribute
├── LICENSE
├── .gitignore
│
├── data/                  # Course curriculum (lessons by level)
│   ├── beginner/          # 10 topics
│   ├── intermediate/      # 9 topics
│   └── advanced/          # 9 topics
│
├── docs/                  # Language & toolchain documentation
├── examples/              # Standalone sample programs
├── projects/              # Community & capstone projects
├── quizzes/               # Assessments (per topic / level)
├── website/               # Future web platform integration
└── assets/                # Images, diagrams, branding
```

### Curriculum roadmap

| Level | Topics | Folder |
|-------|--------|--------|
| **Beginner** | What is Quantum, installation, first program, I/O, mixed syntax, variables, conditions, loops, functions, projects | `data/beginner/` |
| **Intermediate** | Memory sharing, language communication, files, modules, errors, Python/C++/C integration, advanced mixing, projects | `data/intermediate/` |
| **Advanced** | Runtime, execution engine, performance, AI, web, APIs, custom modules, compiler internals, projects | `data/advanced/` |

Each topic folder contains:

- `README.md` — lesson template (introduction, syntax, examples, run instructions)
- `example1.sa`, `example2.sa` — starter samples
- `practice.md` — exercises (placeholder)
- `notes.md` — supplementary notes (placeholder)

---

## Lesson layout (per topic)

```
data/<level>/<topic>/
├── README.md
├── example1.sa
├── example2.sa
├── practice.md
└── notes.md
```

Content is **placeholder** during initial setup; lessons will be filled in over time.

---

## Platform roadmap (this repo)

- [x] Scalable folder architecture
- [ ] Full lesson content (beginner → advanced)
- [ ] Website integration (`website/`)
- [ ] Quizzes (`quizzes/`)
- [ ] AI chatbot helper (docs + API hooks)
- [ ] Downloadable notes export
- [ ] Online code execution
- [ ] Project showcase (`projects/`)

---

## Contributing

We welcome contributions. See [CONTRIBUTING.md](CONTRIBUTING.md).

---

## License

This repository is licensed under the [MIT License](LICENSE).

---

## Links

<!-- Add when published -->
- Website: _coming soon_
- Compiler / interpreter releases: _coming soon_
- Community: _coming soon_
