import React from "react"
import styled from "styled-components"

const ListTitle = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin-top: 10px;
`

export const ReferenceScreen = () => (
  <>
    <div className="site-main">
      <div className=" content-section">
        <div className="container">
          <div>
            <ListTitle>OBIEKTY SZKOLNICTWA, KULTURY I  SPORTU</ListTitle>
              <ul>
                <li>Modernizacja Stadionu im. Ernesta Pohla w Zabrzu</li>
                <li>Przebudowa obiektu MUZA w Sosnowcu</li>
                <li>Budowa nowoczesnej hali widowiskowo-sportowej PODIUM w Gliwicach</li>
                <li>Budowa Akademickiego Centrum Sportu - Hala widowiskowo-sportowa Akademii im. Jana Długosza w Częstochowie</li>
                <li>Kompleks Sportowo – Rehabilitacyjno - Edukacyjny w Sędziszowie.</li>
                <li>Budowa budynku dydaktycznego Wydziału Nauk Społecznych Akademii Jana Długosza w Częstochowie</li>
                <li>Hala Sportowa przy ul. Żużlowej w Częstochowie</li>
                <li>Rozbudowa  Filharmonii Częstochowskiej</li>
                <li>Rewitalizacja Zespołu pałacowo-parkowego w ramach tworzenia Śląskiego Centrum Edukacji Regionalnej w Koszęcinie</li>
              </ul>
          </div>
          <div>
            <ListTitle>OBIEKTY HANDLOWO- USŁUGOWE</ListTitle>
              <ul>
                <li>Budowa centrum handlowego LIBERO w Katowicach</li>
                <li>Budowa Galerii Handlowej WROCLAVIA  we Wrocławiu</li>
                <li>Rozbudowa targowiska Wały Dwernickiego w Częstochowie</li>
                <li>Centrum  Handlowo-usługowe  GALERIA JURAJSKA  Częstochowa</li>
              </ul>
          </div>
          <div>
            <ListTitle>OBIEKTY SŁUŻBY ZDROWIA</ListTitle>
              <ul>
                <li>Modernizacja Ośrodka Zdrowia w Kleszczowie</li>
                <li>Rozbudowa Pawilonu „C” o funkcje Bloku operacyjnego i Oddziału Intensywnej Terapii w Szpitalu im. L. Rydygiera w Częstochowie</li>
                <li>Rozbudowa i przebudowa budynku Szpitala Powiatowego w Myszkowie</li>
                <li>Utworzenie Sali Intensywnego Nadzoru Kardiologicznego przy oddziale Kardiologii, Wojewódzki Szpital im. NMP ul Bialska , Częstochowa</li>
                <li>Budowa Zespołu Budynku Specjalistycznych Przychodni Lekarskich z odziałem chirurgii „Centrum Medyk, Częstochowa</li>
                <li>Adaptacja pomieszczeń Oddziału Neurologicznego dla potrzeb odcinka chorych z udarem mózgu, Wojewódzki Szpital Zespolony, ul. PCK  Częstochowa</li>
                <li>Rozbudowa Szpitala powiatowego w Lublińcu poprzez budowę pawilonu łóżkowego przy ul. Grunwaldzkiej </li>
              </ul>
          </div>
          <div>
            <ListTitle>DROGOWNICTWO – montaż barier energochłonnych drogowych i mostowych</ListTitle>
            <ul>
              <li>Autostrada A4 – Rzeszów - Jarosław</li>
              <li>Autostrada A2</li>
              <li>Autostrada A4 – Szarów –Brzesko</li>
              <li>S-69 Żagań – Bielsko-Biała</li>
              <li>Węzeł Sośnica – Maciejów - Gliwice</li>
              <li>DK1 Tychy</li>
            </ul>
          </div>
          <div>
            <ListTitle>ZAKŁADY PRODUKCYJNE, HALE PRODUKCYJNE</ListTitle>
            <ul>
              <li>Zakład produkcyjny ZF Częstochowa </li>
              <li>Centrum logistyczne PANATTONI AMAZON w Sosnowcu</li>
            </ul>
          </div>
          <div>
            <ListTitle>BASENY</ListTitle>
            <ul>
              <li>AQUAPARK Częstochowa</li>
              <li>Kryta pływalnia w Chełmcu</li>
              <li>Kryta pływalnia w Częstochowie</li>
              <li>Kompleks rekreacyjny z krytą pływalnia w Miechowie</li>
              <li>Pływalnia Letnia MOSiR Częstochowa</li>
            </ul>
          </div>
          
          <div>
            <ListTitle>BUDOWNICTWO MIESZKANIOWE</ListTitle>
              <ul>
                <li>Budowa budynków mieszkalnych wielorodzinnych TBS , ul Herberta, ul. Czecha w Częstochowie </li>
                <li>Budowa budynków mieszkalnych wielorodzinnych dla Spółdzielni Mieszkaniowej Metalurg w Częstochowie </li>
              </ul>
          </div>

          <div>
            <ListTitle>BUDYNKI UŻYTECZNOŚCI PUBLICZNEJ</ListTitle>
              <ul>
                <li>Rewitalizacja Parku Lisiniec w Częstochowie</li>
                <li>Budowa salonu samochodowego MAZDA z częścią serwisową, warsztatową i myjnią w Łodzi</li>
                <li>Termomodernizacja budynków Świętokrzyskiego Urzędu Wojewódzkiego w Kielcach</li>
                <li>Budowa wielofunkcyjnego budynku Międzynarodowego Centrum Kongresowego w Katowicach</li>
                <li>Komenda Powiatowej Straży Pożarnej w Lublińcu</li>
                <li>Zakład Ubezpieczeń Społecznych w Częstochowie</li>
              </ul>
          </div>
          <div>
            <ListTitle>INSTALACJE PRZEMYSŁOWE I TECHNOLOGICZNE</ListTitle>
              <ul>
              <li>Remonty bieżące i okresowe Arcelor Mittal Sosnowiec</li>
              <li>Remonty bieżące i okresowe ISD Huta Częstochowa</li>
              <li>Prace serwisowe i usuwanie awarii CEMEX Cementownia Rudniki</li>
              <li>Prace serwisowe i usuwanie awarii w TRW Polska Częstochowa</li>
              <li>Instalacja gazu mieszankowego d-600, instalacje wodne do pieca DANIELI I LOI dla ISO Huta Częstochowa</li>
              <li>Wymiana sieci preizolowanej dn 600 , ul. Olsztyńska Częstochowa</li>
              <li>Remonty rurociągów technologicznych dla Arcelor Mittal Sosnowiec</li>
              <li>Instalacje sanitarne dla instalacji paliw ze źródeł odnawialnych dla Elektrociepłowni Fortum w Częstochowie</li>
              <li>Wykonanie sieci preizolowanej dla Centrum Europa w Gliwicach </li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  </>
)
