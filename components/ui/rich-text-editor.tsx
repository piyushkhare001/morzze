"use client";

import React, { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Underline } from "@tiptap/extension-underline";
import { Link } from "@tiptap/extension-link";
import { Table } from "@tiptap/extension-table";
import { TableRow } from "@tiptap/extension-table-row";
import { TableCell } from "@tiptap/extension-table-cell";
import { TableHeader } from "@tiptap/extension-table-header";
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Strikethrough,
  List,
  ListOrdered,
  Link as LinkIcon,
  Link2Off,
  Undo,
  Redo,
} from "lucide-react";

type Props = {
  value: string;
  onChange: (content: string) => void;
};

export default function RichTextEditor({ value, onChange }: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4, 5, 6],
        },
      }),
      Underline,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "text-[#e6aa12] underline cursor-pointer",
        },
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content: value || "",
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "focus:outline-none min-h-[250px] max-h-[500px] overflow-y-auto px-4 py-3 text-zinc-100 bg-zinc-950 focus:ring-0 w-full ProseMirror",
      },
    },
  });

  // Sync value from parent component
  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || "");
    }
  }, [value, editor]);

  if (!editor) {
    return (
      <div className="animate-pulse bg-zinc-900 h-10 w-full rounded-md mt-2 border border-zinc-800" />
    );
  }

  const setLink = () => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL:", previousUrl);

    if (url === null) {
      return;
    }

    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }

    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };

  const HeadingSelector = () => {
    const handleHeadingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const val = e.target.value;
      if (val === "paragraph") {
        editor.chain().focus().setParagraph().run();
      } else if (val.startsWith("h")) {
        const level = parseInt(val.substring(1)) as any;
        editor.chain().focus().toggleHeading({ level }).run();
      }
    };

    const getActiveValue = () => {
      if (editor.isActive("paragraph")) return "paragraph";
      for (let i = 1; i <= 6; i++) {
        if (editor.isActive("heading", { level: i })) return `h${i}`;
      }
      return "paragraph";
    };

    return (
      <select
        value={getActiveValue()}
        onChange={handleHeadingChange}
        className="h-8 rounded border border-zinc-800 bg-zinc-900 px-2 text-xs outline-none cursor-pointer focus:ring-1 focus:ring-ring text-zinc-100 font-medium"
      >
        <option value="paragraph">Paragraph</option>
        <option value="h1">Heading 1</option>
        <option value="h2">Heading 2</option>
        <option value="h3">Heading 3</option>
        <option value="h4">Heading 4</option>
        <option value="h5">Heading 5</option>
        <option value="h6">Heading 6</option>
      </select>
    );
  };

  const TableDropdown = () => {
    const handleTableAction = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const action = e.target.value;
      if (action === "insert") {
        editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
      } else if (action === "addRowBefore") {
        editor.chain().focus().addRowBefore().run();
      } else if (action === "addRowAfter") {
        editor.chain().focus().addRowAfter().run();
      } else if (action === "addColumnBefore") {
        editor.chain().focus().addColumnBefore().run();
      } else if (action === "addColumnAfter") {
        editor.chain().focus().addColumnAfter().run();
      } else if (action === "deleteRow") {
        editor.chain().focus().deleteRow().run();
      } else if (action === "deleteColumn") {
        editor.chain().focus().deleteColumn().run();
      } else if (action === "deleteTable") {
        editor.chain().focus().deleteTable().run();
      } else if (action === "toggleHeaderCell") {
        editor.chain().focus().toggleHeaderCell().run();
      }
      e.target.value = ""; // Reset dropdown selection
    };

    return (
      <select
        onChange={handleTableAction}
        defaultValue=""
        className="h-8 rounded border border-zinc-800 bg-zinc-900 px-2 text-xs outline-none cursor-pointer focus:ring-1 focus:ring-ring text-zinc-100 font-medium"
      >
        <option value="" disabled hidden>
          Table
        </option>
        {!editor.isActive("table") && <option value="insert">Insert Table (3x3)</option>}
        {editor.isActive("table") && (
          <>
            <option value="addRowBefore">Add Row Above</option>
            <option value="addRowAfter">Add Row Below</option>
            <option value="addColumnBefore">Add Col Left</option>
            <option value="addColumnAfter">Add Col Right</option>
            <option value="deleteRow">Delete Row</option>
            <option value="deleteColumn">Delete Col</option>
            <option value="toggleHeaderCell">Toggle Header Cell</option>
            <option value="deleteTable" className="text-red-500 font-semibold">
              Delete Table 🗑️
            </option>
          </>
        )}
      </select>
    );
  };

  return (
    <div className="bg-zinc-950 rounded-md mt-2 border border-zinc-800 overflow-hidden flex flex-col min-h-[300px]">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1.5 p-2 bg-zinc-900 border-b border-zinc-800 select-none">
        <button
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          className="p-1.5 rounded hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100 disabled:opacity-40"
          title="Undo"
        >
          <Undo size={16} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          className="p-1.5 rounded hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100 disabled:opacity-40"
          title="Redo"
        >
          <Redo size={16} />
        </button>

        <div className="w-px h-5 bg-zinc-800 mx-1" />

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-1.5 rounded text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 ${
            editor.isActive("bold") ? "bg-zinc-800 text-zinc-100 font-bold" : ""
          }`}
          title="Bold"
        >
          <Bold size={16} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-1.5 rounded text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 ${
            editor.isActive("italic") ? "bg-zinc-800 text-zinc-100" : ""
          }`}
          title="Italic"
        >
          <Italic size={16} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`p-1.5 rounded text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 ${
            editor.isActive("underline") ? "bg-zinc-800 text-zinc-100" : ""
          }`}
          title="Underline"
        >
          <UnderlineIcon size={16} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`p-1.5 rounded text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 ${
            editor.isActive("strike") ? "bg-zinc-800 text-zinc-100" : ""
          }`}
          title="Strike-through"
        >
          <Strikethrough size={16} />
        </button>

        <div className="w-px h-5 bg-zinc-800 mx-1" />

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-1.5 rounded text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 ${
            editor.isActive("bulletList") ? "bg-zinc-800 text-zinc-100" : ""
          }`}
          title="Bullet List"
        >
          <List size={16} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-1.5 rounded text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 ${
            editor.isActive("orderedList") ? "bg-zinc-800 text-zinc-100" : ""
          }`}
          title="Numbered List"
        >
          <ListOrdered size={16} />
        </button>

        <div className="w-px h-5 bg-zinc-800 mx-1" />

        <button
          type="button"
          onClick={setLink}
          className={`p-1.5 rounded text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 ${
            editor.isActive("link") ? "bg-zinc-800 text-zinc-100" : ""
          }`}
          title="Insert Link"
        >
          <LinkIcon size={16} />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().unsetLink().run()}
          disabled={!editor.isActive("link")}
          className="p-1.5 rounded hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100 disabled:opacity-40"
          title="Remove Link"
        >
          <Link2Off size={16} />
        </button>

        <div className="w-px h-5 bg-zinc-800 mx-1" />

        <HeadingSelector />

        <div className="w-px h-5 bg-zinc-800 mx-1" />

        <TableDropdown />
      </div>

      {/* Editor Content Area */}
      <div className="flex-1 w-full border-t border-zinc-800 min-h-[250px] relative">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
