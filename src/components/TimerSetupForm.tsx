import { Card, CardContent } from './ui/card';
import { Button } from '@mui/material';


export const TimerSetupForm = ({ onStart }: any) => {
  return (
    <Card className="max-w-2xl mx-auto">
      <CardContent
        className="p-6"
        style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
      >
        <h3 className="text-xl font-bold mb-4">How to use?</h3>
        <div className="mb-4">
            <p className="mb-2">Sziasztok! Üdvözlünk titeket a Bolyai Wordle bajnokságon! Az alábbiakban felsorolunk pár fontos tudnivalót a bajnokságról:</p>            
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Minden pályán egy különböző Wordle-spinoff játékkal játszhattok majd, melyek megoldására 1 órát kaptok kezdéskor.</li>
              <li>A játék kényelme érdekében azt javasoljuk, hogy ezt az oldalt 50-67%-os nagyításban használjátok.</li>
              <li>Ha egy pálya sikerült, akkor a zöld színű gombra kattintva tudod ezt jelezni. Ez továbbít a következő játékra és 2 perc 45 másodperccel növeli a hátralévő idődet.</li>
              <li>Ha egy pálya nem sikerült, vagy át szeretnéd ugrani, akkor a piros gombra kattintva át tudsz ugrani rajta, ez viszont 3 perc 15 másodperccel csökkenti a hátralévő idődet.</li>
              <li>A játékok során hinteket és undokat nem használhattok (kivéve ott, ahol külön jelezve van, hogy lehet). Az, hogy egy játék hány tippből sikerült, nem számít, csak az, hogy mennyi idő alatt.</li>
              <li>Ha lejár az időd, vagy megcsinálod az utolsó játékot, akkor bajnokságnak számodra véget ér.</li>
              <li>A bajnokságot az nyeri, aki a legtöbb játékot teljesítette SIKERESEN (holtverseny esetén számít csak, hogy ki jutott el a többedik pályáig).</li>
              <li>Ha bármilyen kérdésetek van valamelyik pálya értelmezésével kapcsolatban, vagy technikai problémátok akadt, jeletkezzetek és Áron segít nektek benne.</li>
              <li>A bajnokság becsületalapú, akit szándékos csaláson kapunk, automatikusan kizárásra kerül a bajnokságról.</li>
            </ul>
            
            <p>Jó versenyzést kívánunk mindenkinek!</p>
        </div>

            <Button
            onClick={() => onStart()}
            variant="contained"
            color="success"
            fullWidth
            sx={{ p: 2 }}
            >
            Játék kezdése
            </Button>
      </CardContent>
    </Card>
  );
};
