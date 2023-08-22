import { NextPage } from "next";
import { useRef, useState } from "react";
import { Mod, Preset } from "~/a3lib";

const requiredMods = [
    new Mod('Better Inventory', { source: 'steam', workshopUrl: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2791403093' }),
    new Mod('A3 Thermal Improvement', { source: 'steam', workshopUrl: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2041057379' }),
    new Mod('BHC Map Contour', { source: 'steam', workshopUrl: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1364777346' }),
    new Mod('CH View Distance', { source: 'steam', workshopUrl: 'http://steamcommunity.com/sharedfiles/filedetails/?id=837729515' }),
    new Mod('Cyprus Autorun By A. Cyprus', { source: 'steam', workshopUrl: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1433000796' }),
    new Mod('Discord Rich Presence', { source: 'steam', workshopUrl: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1493485159' }),
    new Mod('DUI - Squad Radar', { source: 'steam', workshopUrl: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1638341685' }),
    new Mod('Fawks\' Enhanced NVGs', { source: 'steam', workshopUrl: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2513044572' }),
    new Mod('Improved Game Sounds', { source: 'steam', workshopUrl: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2995724580' }),
    new Mod('Blastcore Murr Edition', { source: 'steam', workshopUrl: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2257686620' }),
    new Mod('Turret Enhanced', { source: 'steam', workshopUrl: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1623498241' }),
];

const UploadPage: NextPage = () => {
    const upload = useRef<HTMLInputElement | null>(null);
    const [modified, setModified] = useState<Preset>();

    const checkUpload = async () => {
        const file = (upload.current!!).files?.item(0);
        const fileBody = await file?.text();
        const preset = Preset.fromHtml(fileBody!!);
        setModified(preset);

        for (const mod of requiredMods) {
            if (!preset.mods.find(v => v.displayName == mod.displayName)) {
                preset.addMod(mod);
            }
        }

        const blob = new Blob([preset.html], { type: 'text/html' });
        const download = document.createElement('a');
        download.href = URL.createObjectURL(blob);
        download.download = 'Arma 3 Preset - ' + preset.name + ' (modified)';
        download.click();
        URL.revokeObjectURL(download.href);
    };

    return (
        <>
            <h1>Upload preset</h1>
            <input ref={upload} type="file" onChange={checkUpload} />
        </>
    );
};

export default UploadPage;