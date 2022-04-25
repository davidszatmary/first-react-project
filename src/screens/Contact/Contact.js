import { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './Contact.module.css';

export const Contact = memo((props) => {
  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <div className={styles.contact}>
        {' '}
        és ide is kéne valami...
        <p>
          Magyarország egy állam Közép-Európában, a Kárpát-medence közepén,
          amely 1989 óta parlamentáris köztársaság.[16] Északról Szlovákia,
          északkeletről Ukrajna, keletről és délkeletről Románia, délről Szerbia
          és Horvátország, délnyugatról Szlovénia, nyugatról pedig Ausztria
          határolja. Területe 93 030 négyzetkilométer, népessége pedig közel
          tízmillió fő, így az Európai Unió közepes méretű és közepes népességű
          tagállamai közé tartozik. Hivatalos nyelve a magyar, ami a legnagyobb
          az uráli nyelvcsaládba tartozó nyelvek közül.[17] Fővárosa és
          legnépesebb városa Budapest, amely világvárosnak számít.[18]
          Magyarország jelenlegi határai nagyjából egyeznek az 1920-ban, az első
          világháborút lezáró trianoni békeszerződésben kijelölt határokkal.
          Ennek következményeként az ország elvesztette területének 71,
          lakosságának 58 százalékát.[19][20][21] A két világháború között
          számos kormány megalakult, többek között kommunista kormány is,
          melynek bukása és felszámolása után megalakult két politikai
          vezetőség, melyek mindkét irányba más-más érdekeket szolgáltak ki.
          Magyarország a Horthy-kormány mellett a revízió reményében, a
          Szálasi-kormány mellett a német érdekeket kiszolgálva lépett be a
          második világháborúba, de a kisebb-nagyobb sikeres harcok és a súlyos
          veszteségek ellenére sem ért el tartós áttörést, az 1947-es párizsi
          békeszerződés pedig kialakította a mai országhatárokat. A világháborút
          követően a Szovjetunió megszállási övezetébe került az ország. A
          rendszerváltásig kétszer került Magyarország a világpolitika
          középpontjába: először az 1956-os forradalom kapcsán, másodszor az
          1989-es páneurópai piknik okán.[22][23] Polgárai számára általános
          társadalom- és nyugdíjbiztosítási rendszert tart fenn, ingyenes
          egészségügyi ellátással és az térítésmentes alap-, illetve középfokú
          oktatással. A felsőoktatás tandíjas, viszont ösztöndíjjal
          térítésmentesen is igénybe vehető. Magyarország nemzetközi
          rangsorokban elfoglalt pozíciói kifejezetten kedvezőnek mondhatóak: az
          életminőség-index alapján a világ 38. legjobb életminőségű
          országa,[24] 20. helyen áll a Jó Ország Index rangsorban (mely az
          adott országon belüli állapotokat nem veszi figyelembe),[25] 26.
          helyen áll az egyenlőtlenségekkel korrigált emberi fejlettség
          rangsorában,[26] 30. a Társadalmi Fejlettségi Index alapján,[27]
          2018-ban a világ 33. leginnovatívabb országa a Globális Innovációs
          Index felmérése szerint,[28] és a Global Peace Index 2017-es jelentése
          alapján a világ 15. legbiztonságosabb országa.[29] Magyarország
          2019-ben közepesen korrupt ország világviszonylatban, míg az Európai
          Unióban Romániával egy szinten az egyik legkorruptabb.[30] A
          Transparency International 180 országot rangsoroló korrupciós
          indexében 44 pontot kapott 2019-ben, és ezzel az ország a 70. helyen
          áll.[31] Az adatok alapján a 2010-es évek folyamán a magyarországi
          korrupció erősödött.[32][33] Sajtószabadság tekintetében a 2010-es
          évek folyamán folyamatosan csúszott le a nemzetközi ranglistán, a
          Riporterek Határok Nélkül szervezet 2020-as jelentésében a világ
          országai közül a 89. helyezett volt.[34] A 2020-as brüsszeli
          jogállamisági jelentés egy sor problémát tárt fel.[35]
        </p>
      </div>
    </>
  );
});
