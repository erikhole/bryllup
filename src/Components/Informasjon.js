import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Informasjon = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = (text) => () => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };
  return (
    <div className="container">
      <h1 className="display-4">Praktisk informasjon</h1>
      <p className="lead">
        Velkommen til bryllupet vårt! Her er litt praktisk informasjon for den
        store dagen <br />
      </p>
      <p>
        PS - Vi kommer til å oppdatere denne siden etterhvert som det nærmer
        seg. Så sjekk innom her innimellom.
      </p>
      <div className="row">
        <div className="col-md-6">
          <h2>Dato og tid i kirka</h2>
          <p>Dato: 01.06.24</p>
          <p>Tid: 13:45</p>
          <h2>Sted</h2>
          <p>
            Adresse Julebygda kapell:
            <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwj8_OKO7-uDAxXSFBAIHWOdCuwQ4kB6BAg4EAM&url=%2Fmaps%2Fplace%2F%2Fdata%3D!4m2!3m1!1s0x463a49b2fb8f28db%3A0x90c18982c55bb09e%3Fsa%3DX%26ved%3D2ahUKEwj8_OKO7-uDAxXSFBAIHWOdCuwQ4kB6BAgQEAA&usg=AOvVaw1W4MJ9qurwQlVb5CWd_qyv&opi=89978449">
              Leiteveien 150, 4312 Sandnes
            </a>
          </p>
          <p>
            Adresse Løå på Lea:
            <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiJoOnq8OuDAxVfHRAIHSh0BSsQ4kB6BAhIEAM&url=%2Fmaps%2Fplace%2F%2Fdata%3D!4m2!3m1!1s0x463a48222ff52e85%3A0xc0171275b7c709af%3Fsa%3DX%26ved%3D2ahUKEwiJoOnq8OuDAxVfHRAIHSh0BSsQ4kB6BAgOEAA&usg=AOvVaw1gVd2OMTry_2cRCx5MoqIN&opi=89978449">
              Leaveien 205, 4312 Sandnes
            </a>
          </p>
          <h2>Overnatting</h2>
          <p>
            Hvis du kommer langveisfra, her er noen anbefalte
            overnattingssteder:
          </p>
          <ul>
            <p>Kommer</p>

            {/* <li>Vølstadskogen hytter og Camping</li>
            <li>Hotell Sverre</li>
            <li>Quality Hotel Residence</li>
            <li>Thon Hotel Sandnes</li> */}
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Transport</h2>
          <p>
            Vi kommer til å sette opp taxi fra Løa på Lea til Sandnes sentrum på
            kvelden/natten. Tidsplan kommer.
          </p>
          <h2>Taler o.l.</h2>
          <p>
            Hvis du ønsker å holde en tale eller lignenede ta kontakt med vår
            toastmaster, Viljar Fjellanger. Han kan kontaktes på tlf:{' '}
            <span
              style={{ cursor: 'pointer', borderBottom: '1px solid' }}
              onClick={copyToClipboard('97405495')}
            >
              974 05 495{isCopied && '(kopiert)'}
            </span>{' '}
            eller epost:
            <span
              style={{ cursor: 'pointer', borderBottom: '1px solid' }}
              onClick={copyToClipboard('viljar.fjellang@gmail.com')}
            >
              viljar.fjellang@gmail.com {isCopied && '(kopiert)'}
            </span>
          </p>
          <h2>Annen informasjon</h2>
          <p>
            <ul>
              <li>
                Vi ønsker ikke at det tas bilder under vielsen. Vi kommer til å
                få tatt bilder av en fotograf som vi deler med dere.
              </li>
              <li>
                Bare bruden skal ha hvite klær. Gjester kan gjerne ha fargerike
                klær.
              </li>
              <li>Barn er ikke invitert til bryllupet.</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Informasjon;
