'use client';

import { YamlPreviewDark, Y } from '@arianeguay/design-system';

export default function InstallYamlPreview({ title }: { title: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <p className="t-eyebrow" style={{ margin: 0 }}>{title}</p>
      <YamlPreviewDark filename="output.json (simplified)">
        {`{
  `}{Y.dkey('"stage"')}{`: `}{Y.dval('"feature_spec"')}{`,\n`}
        {`  `}{Y.dkey('"status"')}{`: `}{Y.dval('"success"')}{`,\n`}
        {`  `}{Y.dkey('"output"')}{`: {\n`}
        {`    `}{Y.dkey('"title"')}{`: `}{Y.dval('"User authentication flow"')}{`,\n`}
        {`    `}{Y.dkey('"acceptance_criteria"')}{`: [\n`}
        {`      `}{Y.dval('"Login with email and password"')}{`,\n`}
        {`      `}{Y.dval('"Session persists across page reloads"')}{`,\n`}
        {`      `}{Y.dval('"Logout clears session immediately"')}{`\n`}
        {`    ],\n`}
        {`    `}{Y.dkey('"complexity"')}{`: `}{Y.dval('"medium"')}{`\n`}
        {`  },\n`}
        {`  `}{Y.dkey('"tool_calls"')}{`: `}{Y.dval('3')}{`,\n`}
        {`  `}{Y.dkey('"attempts"')}{`: `}{Y.dval('1')}{`\n`}
        {`}`}
      </YamlPreviewDark>
    </div>
  );
}
