import { HTMLElement } from 'node-html-parser';

export type ModSource = {
    source: 'steam',
    workshopUrl: string,
};

export class Mod {
    constructor(
        public displayName: string,
        public source: ModSource,
    ) {}

    get html(): string {
        return `
<tr data-type="ModContainer">
    <td data-type="DisplayName">${this.displayName}</td>
    <td>
        <span class="from-steam">Steam</span>
    </td>
    <td>
        <a href="${this.source.workshopUrl}" data-type="Link">${this.source.workshopUrl}</a>
    </td>
</tr>
`;
    }

    static fromHtml(html: HTMLElement): Mod {
        if ((html.getAttribute('data-type') ?? '') != 'ModContainer') {
            throw new Error('Provided element is not a data-type=ModContainer.');
        }
        return new Mod(
            html.querySelector('td[data-type=DisplayName]')?.text!!,
            {
                source: 'steam',
                workshopUrl: html.querySelector('a[data-type=Link]')?.text!!,
            }
        );
    }
}