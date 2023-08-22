import { Mod } from "./mod";
import { template } from "./template-parts";
import { parse } from 'node-html-parser';

export class Preset {
    constructor(public name: string, public mods: Mod[]) {}

    public addMod(mod: Mod): Preset {
        this.mods.push(mod);
        return this;
    }

    public get modsHtml(): string {
        const modHtmls = [];

        for (const mod of this.mods) {
            modHtmls.push(mod.html);
        }

        return modHtmls.join('\n');
    }

    public get html(): string {
        return template(this.name, this.modsHtml);
    }

    static fromHtml(html: string): Preset {
        const parsed = parse(html);

        const title = parsed.querySelector('h1 > strong')?.text!!;
        const modHtmls = parsed.querySelectorAll('tr[data-type=ModContainer]');
        const mods = [];
        for (const mod of modHtmls) {
            mods.push(Mod.fromHtml(mod));
        }

        return new Preset(title, mods);
    }
}