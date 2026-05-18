'use client';

import { YamlPreviewDark, Y } from '@arianeguay/design-system';

// Y.dval hardcodes rgba(201,100,66,0.75) — too dark on the dark bg.
// DV uses a brighter, more readable value color for this context.
const DV = (s: string) => <span style={{ color: 'rgba(232, 158, 118, 0.95)' }}>{s}</span>;
const DM = (s: string) => <span style={{ color: 'rgba(255, 255, 255, 0.55)' }}>{s}</span>;
const DC = (s: string) => <span style={{ color: 'rgba(255, 255, 255, 0.45)', fontStyle: 'italic' }}>{s}</span>;

const yamlTheme = { '--color-dark': '#2a2018', '--color-dark-elev': '#3a2e23' } as React.CSSProperties;

export default function HeroYamlPreview() {
  return (
    <div style={yamlTheme}>
      <YamlPreviewDark filename="code-generation.contract.yaml">
        {DC('# code-generation.contract.yaml')}{'\n'}
        {Y.dkey('name')}{': '}{DV('code-generation')}{'\n'}
        {Y.dkey('output_schema')}{'\n'}
        {'  '}{Y.dkey('type')}{': '}{DV('object')}{'\n'}
        {'  '}{Y.dkey('required')}{': '}{DM('[files_written, summary]')}{'\n'}
        {'  '}{Y.dkey('properties')}{'\n'}
        {'    '}{Y.dkey('files_written')}{'\n'}
        {'      '}{Y.dkey('type')}{': '}{DV('array')}{'\n'}
        {'    '}{Y.dkey('summary')}{'\n'}
        {'      '}{Y.dkey('type')}{': '}{DV('string')}{'\n'}
        {Y.dkey('tool_calls')}{'\n'}
        {'  '}{Y.dkey('minimum')}{': '}{DV('1')}{'\n'}
        {'  '}{Y.dkey('required')}{'\n'}
        {'    - '}{DV('repo_manager.write_file')}{'\n'}
        {DC('# Anti-theatre: runner tracks actual calls.')}{'\n'}
      </YamlPreviewDark>
    </div>
  );
}
