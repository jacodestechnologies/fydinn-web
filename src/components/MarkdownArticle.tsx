import type { ReactNode } from "react";

type MarkdownArticleProps = {
  markdown: string;
  eyebrow?: string;
};

type TableBlock = {
  headers: string[];
  rows: string[][];
};

function splitTableRow(line: string) {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function isTableDivider(line: string) {
  return /^\|\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?$/.test(line.trim());
}

function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    const linkMatch = remaining.match(/\[([^\]]+)\]\(([^)]+)\)/);
    const boldMatch = remaining.match(/\*\*([^*]+)\*\*/);
    const codeMatch = remaining.match(/`([^`]+)`/);
    const italicMatch = remaining.match(/_([^_]+)_/);
    const matches = [linkMatch, boldMatch, codeMatch, italicMatch].filter(Boolean) as RegExpMatchArray[];
    const next = matches.sort((a, b) => (a.index ?? 0) - (b.index ?? 0))[0];

    if (!next || next.index === undefined) {
      nodes.push(remaining);
      break;
    }

    if (next.index > 0) {
      nodes.push(remaining.slice(0, next.index));
    }

    if (next === linkMatch) {
      const href = next[2];
      const isExternal = /^https?:\/\//.test(href);
      nodes.push(
        <a
          key={key++}
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noreferrer" : undefined}
          className="font-semibold text-brand underline-offset-4 hover:underline"
        >
          {next[1]}
        </a>,
      );
    } else if (next === boldMatch) {
      nodes.push(
        <strong key={key++} className="font-bold text-ink">
          {next[1]}
        </strong>,
      );
    } else if (next === codeMatch) {
      nodes.push(
        <code key={key++} className="rounded bg-ink/8 px-1.5 py-0.5 text-[0.92em] text-ink">
          {next[1]}
        </code>,
      );
    } else if (next === italicMatch) {
      nodes.push(
        <em key={key++} className="italic">
          {next[1]}
        </em>,
      );
    }

    remaining = remaining.slice(next.index + next[0].length);
  }

  return nodes;
}

function MarkdownTable({ table }: { table: TableBlock }) {
  return (
    <div className="my-8 overflow-x-auto border border-ink/10 bg-white/50">
      <table className="min-w-full border-collapse text-left text-sm">
        <thead>
          <tr className="bg-ink/5">
            {table.headers.map((header) => (
              <th key={header} className="border-b border-r border-ink/10 px-4 py-3 font-bold text-ink last:border-r-0">
                {renderInline(header)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-ink/8 last:border-b-0">
              {row.map((cell, cellIndex) => (
                <td key={`${rowIndex}-${cellIndex}`} className="border-r border-ink/8 px-4 py-3 text-ink/68 last:border-r-0">
                  {renderInline(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function MarkdownArticle({ markdown, eyebrow = "Legal" }: MarkdownArticleProps) {
  const lines = markdown.trim().split(/\r?\n/);
  const blocks: ReactNode[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    const trimmed = line.trim();

    if (!trimmed) {
      index += 1;
      continue;
    }

    if (/^---+$/.test(trimmed)) {
      blocks.push(<hr key={index} className="my-10 border-ink/10" />);
      index += 1;
      continue;
    }

    const heading = trimmed.match(/^(#{1,4})\s+(.+)$/);
    if (heading) {
      const level = heading[1].length;
      const text = heading[2];
      if (level === 1) {
        blocks.push(
          <h1 key={index} className="mb-5 font-display text-5xl font-black leading-[1] tracking-tight text-ink md:text-6xl">
            {renderInline(text)}
          </h1>,
        );
      } else if (level === 2) {
        blocks.push(
          <h2 key={index} className="mt-14 border-t border-ink/10 pt-10 font-display text-3xl font-black leading-tight text-ink">
            {renderInline(text)}
          </h2>,
        );
      } else if (level === 3) {
        blocks.push(
          <h3 key={index} className="mt-9 text-xl font-black leading-tight text-ink">
            {renderInline(text)}
          </h3>,
        );
      } else {
        blocks.push(
          <h4 key={index} className="mt-7 text-base font-black leading-tight text-ink">
            {renderInline(text)}
          </h4>,
        );
      }
      index += 1;
      continue;
    }

    if (trimmed.startsWith("|") && lines[index + 1] && isTableDivider(lines[index + 1])) {
      const headers = splitTableRow(trimmed);
      const rows: string[][] = [];
      index += 2;
      while (index < lines.length && lines[index].trim().startsWith("|")) {
        rows.push(splitTableRow(lines[index]));
        index += 1;
      }
      blocks.push(<MarkdownTable key={index} table={{ headers, rows }} />);
      continue;
    }

    if (/^[-*]\s+/.test(trimmed)) {
      const items: string[] = [];
      while (index < lines.length && /^[-*]\s+/.test(lines[index].trim())) {
        items.push(lines[index].trim().replace(/^[-*]\s+/, ""));
        index += 1;
      }
      blocks.push(
        <ul key={index} className="my-5 list-disc space-y-2 pl-6 text-ink/68">
          {items.map((item) => (
            <li key={item} className="leading-8">
              {renderInline(item)}
            </li>
          ))}
        </ul>,
      );
      continue;
    }

    if (/^\d+\.\s+/.test(trimmed)) {
      const items: string[] = [];
      while (index < lines.length && /^\d+\.\s+/.test(lines[index].trim())) {
        items.push(lines[index].trim().replace(/^\d+\.\s+/, ""));
        index += 1;
      }
      blocks.push(
        <ol key={index} className="my-5 list-decimal space-y-2 pl-6 text-ink/68">
          {items.map((item) => (
            <li key={item} className="leading-8">
              {renderInline(item)}
            </li>
          ))}
        </ol>,
      );
      continue;
    }

    const paragraph: string[] = [];
    while (
      index < lines.length &&
      lines[index].trim() &&
      !/^#{1,4}\s+/.test(lines[index].trim()) &&
      !/^---+$/.test(lines[index].trim()) &&
      !/^[-*]\s+/.test(lines[index].trim()) &&
      !/^\d+\.\s+/.test(lines[index].trim()) &&
      !lines[index].trim().startsWith("|")
    ) {
      paragraph.push(lines[index].trim());
      index += 1;
    }

    blocks.push(
      <p key={index} className="my-5 leading-8 text-ink/68">
        {renderInline(paragraph.join(" "))}
      </p>,
    );
  }

  return (
    <article className="mx-auto max-w-4xl px-6 pb-32 pt-16">
      <p className="mb-6 text-xs font-bold uppercase tracking-[0.24em] text-brand">{eyebrow}</p>
      <div>{blocks}</div>
    </article>
  );
}
