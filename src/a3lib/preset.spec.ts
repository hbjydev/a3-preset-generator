import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';
import { Mod } from './mod';
import { Preset } from './preset';
import assert from 'node:assert';

const html = readFileSync(join(__dirname, 'testdata', 'modlist.html'));

test('parses html correctly', () => {
    const parsed = Preset.fromHtml(html.toString());
    assert(parsed.name == '19_08_23_LRPG');
    assert(parsed.mods.length == 75);
});

test('adds new mod correctly', () => {
    const preset = Preset.fromHtml(html.toString());
    assert(preset.mods.length <= 75);
    preset.addMod(
        new Mod('CBA_A4', { source: 'steam', workshopUrl: 'https://example.com' }),
    );
    assert(preset.mods.length == 76);
});