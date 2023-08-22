import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from 'node-html-parser';
import test from 'node:test';
import { Mod } from './mod';
import assert from 'node:assert';

const html = readFileSync(join(__dirname, 'testdata', 'modlist.html'));

test('parses html correctly', () => {
    const parsed = parse(html.toString());
    const modcontainer = parsed.querySelectorAll('tr[data-type=ModContainer]')[2];
    const mod = Mod.fromHtml(modcontainer!!);
    assert(mod.displayName == 'Project SFX: Footsteps');
    assert(mod.source.workshopUrl == 'https://steamcommunity.com/sharedfiles/filedetails/?id=2806487814');
});