'use client';

import { YamlPreviewDark, Y } from '@arianeguay/design-system';

const DV = (s: string) => <span style={{ color: 'rgba(232, 158, 118, 0.95)' }}>{s}</span>;
const DM = (s: string) => <span style={{ color: 'rgba(255, 255, 255, 0.55)' }}>{s}</span>;
const DC = (s: string) => <span style={{ color: 'rgba(255, 255, 255, 0.45)', fontStyle: 'italic' }}>{s}</span>;

const yamlTheme = { '--color-dark': '#2a2018', '--color-dark-elev': '#3a2e23' } as React.CSSProperties;

export function PatternYaml1() {
  return (
    <div style={yamlTheme}>
      <YamlPreviewDark filename="wiki-creator.pipeline.yaml">
        {DC('# wiki-creator.pipeline.yaml')}{'\n'}
        {Y.dkey('groups')}{'\n'}
        {'  - '}{Y.dkey('id')}{': '}{DV('generate-critique')}{'\n'}
        {'    '}{Y.dkey('max_iterations')}{': '}{DV('3')}{'\n'}
        {'    '}{Y.dkey('stages')}{'\n'}
        {'      - '}{Y.dkey('id')}{': '}{DV('generate')}{'\n'}
        {'          '}{Y.dkey('agent')}{': '}{DV('wiki-writer')}{'\n'}
        {'          '}{Y.dkey('contract')}{': '}{DV('wiki-page')}{'\n'}
        {'      - '}{Y.dkey('id')}{': '}{DV('critique')}{'\n'}
        {'          '}{Y.dkey('agent')}{': '}{DV('wiki-reviewer')}{'\n'}
        {'          '}{Y.dkey('contract')}{': '}{DV('qa-review')}{'\n'}
        {'          '}{Y.dkey('context')}{'\n'}
        {'            '}{Y.dkey('include')}{': '}{DM('[previous_stage_output]')}{'\n'}
      </YamlPreviewDark>
    </div>
  );
}

export function PatternYaml2() {
  return (
    <div style={yamlTheme}>
      <YamlPreviewDark filename="wiki-creator.pipeline.yaml">
        {DC('# wiki-creator.pipeline.yaml')}{'\n'}
        {Y.dkey('stages')}{'\n'}
        {'  - '}{Y.dkey('id')}{': '}{DV('research-en')}{'\n'}
        {'    '}{Y.dkey('agent')}{': '}{DV('researcher')}{'\n'}
        {'    '}{Y.dkey('parallel_group')}{': '}{DV('research')}{'\n'}
        {'  - '}{Y.dkey('id')}{': '}{DV('research-fr')}{'\n'}
        {'    '}{Y.dkey('agent')}{': '}{DV('researcher')}{'\n'}
        {'    '}{Y.dkey('parallel_group')}{': '}{DV('research')}{'\n'}
        {'  - '}{Y.dkey('id')}{': '}{DV('merge')}{'\n'}
        {'    '}{Y.dkey('agent')}{': '}{DV('merger')}{'\n'}
        {'    '}{Y.dkey('context')}{'\n'}
        {'      '}{Y.dkey('include')}{': '}{DM('[all_stage_outputs]')}{'\n'}
      </YamlPreviewDark>
    </div>
  );
}

export function PatternYaml3() {
  return (
    <div style={yamlTheme}>
      <YamlPreviewDark filename="code-generation.contract.yaml">
        {DC('# code-generation.contract.yaml')}{'\n'}
        {Y.dkey('name')}{': '}{DV('code-generation')}{'\n'}
        {Y.dkey('output_schema')}{'\n'}
        {'  '}{Y.dkey('type')}{': '}{DV('object')}{'\n'}
        {'  '}{Y.dkey('required')}{': '}{DM('[files_written, summary]')}{'\n'}
        {Y.dkey('tool_calls')}{'\n'}
        {'  '}{Y.dkey('minimum')}{': '}{DV('1')}{'\n'}
        {'  '}{Y.dkey('required')}{'\n'}
        {'    - '}{DV('repo_manager.write_file')}{'\n'}
        {DC('# Agent cannot skip writing — anti-theatre.')}{'\n'}
      </YamlPreviewDark>
    </div>
  );
}
