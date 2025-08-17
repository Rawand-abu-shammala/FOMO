// src/components/mentor/MentorNotes.tsx
'use client';

import { useEffect, useState } from 'react';

type Props = {
  slug: string;
};

export default function MentorNotes({ slug }: Props) {
  const storageKey = `mentor-note-${slug}`;

  const [text, setText] = useState<string>('');
  const [saved, setSaved] = useState<string>('');
  const [saving, setSaving] = useState<boolean>(false);

  // load saved value from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        setText(raw);
        setSaved(raw);
      } else {
        setText('');
        setSaved('');
      }
    } catch (err) {
      console.error('Failed to read mentor note from localStorage', err);
    }
  }, [storageKey]);

  // Save handler
  function handleSend() {
    // simple validation: trim and allow empty saves (if you want to block empty, check and return)
    const value = text.trim();
    setSaving(true);
    try {
      localStorage.setItem(storageKey, value);
      setSaved(value);
    } catch (err) {
      console.error('Failed to save note to localStorage', err);
    } finally {
      // small UX delay to show saving state if needed
      setTimeout(() => setSaving(false), 200);
    }
  }

  // Cancel handler: revert draft to last saved
  function handleCancel() {
    setText(saved);
  }

  return (
    <section className="mt-12" data-testid="mentor-notes">
      <h3 className="text-lg font-semibold mb-2">Your Note</h3>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={5}
        className="w-full p-4 border border-gray-200 rounded-lg bg-gray-50 resize-vertical focus:outline-none focus:ring-2 focus:ring-blue-200"
        placeholder="Write your notes here..."
        aria-label="Mentor note"
      />

      <div className="mt-3 flex justify-end gap-3">
        <button
          type="button"
          onClick={handleCancel}
          className="px-4 py-2 border border-gray-300 rounded-md bg-white text-sm hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleSend}
          className="px-4 py-2 rounded-md bg-blue-600 text-white text-sm hover:opacity-95"
          disabled={saving}
        >
          {saving ? 'Saving...' : 'Send'}
        </button>
      </div>

      {saved ? (
        <div className="mt-4">
          <p className="text-sm text-gray-600 mb-2">Saved note preview:</p>
          <div className="rounded-md border border-gray-200 bg-white p-3 text-sm whitespace-pre-wrap break-words">
            {saved}
          </div>
        </div>
      ) : (
        <p className="mt-4 text-sm text-gray-500">No saved note yet.</p>
      )}
    </section>
  );
}

