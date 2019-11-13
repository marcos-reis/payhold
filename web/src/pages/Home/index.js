import React, { useState } from 'react';
import MaterialIcon from 'material-icons-react';

import Navbar from '../../components/Site/Navbar';
import Footer from '../../components/Site/Footer';

import apple from '../../assets/apple-play-store.png';
import google from '../../assets/google-play-store.png';
import shape from '../../assets/liquid-shape.png';
import payholdApp from '../../assets/iPhoneX.png';

// import { Container } from './styles';

export default function Home() {
  const [totalCash, setTotalCash] = useState(100);
  const [percentCash, setPercentCash] = useState(12);
  const moneyFormat = (n) => setTotalCash(n.toFixed(2).replace('.', ','));
  const percentFormat = (n) => setPercentCash(`${n}%`);
  return (

    <>
      <Navbar />
      <div className="bg-primary">
        <div className="container">
          <div className="row pb-4">
            <div className="col-xl-7 col-lg-7 col-sm pt-5 pb-5">
              <h2 className="text-light font-weight-bold pt-5 ">
          Ganhe cashback nas suas compras online.
              </h2>
              <h3 className="text-light font-weight-light">
          Faça seu registro e baixe o nosso app.
              </h3>
              <img className="mt-5 " style={{ width: '200px' }} alt="Apple Store" src={apple} />
              <img className="mt-5 " style={{ width: '200px' }} alt="Google Play Store" src={google} />

            </div>
            <div className="d-lg-block d-none pb-5">
              <img src={shape} className="w-100" alt="none" />
            </div>
          </div>
        </div>

      </div>
      <div className="container">
        <article>
          <h1 className="text-gray text-center mt-5 mb-5 display-4 font-weight-bold">Como funciona?</h1>
          <h5 className="text-grey text-justify  mx-md-5 px-5 mb-5 pb-5 font-weight-normal">
          Acesse nossa plataforma, crie uma conta,
          escolha um parceiro e realize sua compra.
          Cada parceiro ofertara um percentual de retorno
          em nossa plataforma que pode variar por categorias de produtos.
          O valor do cashback poderá ser sacado ou mantidos rendendo 100% do CDI.

          </h5>
        </article>
        <div className="row mb-5">
          <div className="col-md col-12  mx-md-0 mx-sm-5 pl-5">
            <MaterialIcon icon="touch_app" color="#2B6BCB" size="large" />
            <p className="font-weight-light">Acesse nosso app e realize seu login</p>
            <MaterialIcon icon="done" color="#2B6BCB" size="large" />
            <p className="font-weight-light">Escolha o parceiro que está em nossa lista</p>
            <MaterialIcon icon="shopping_cart" color="#2B6BCB" size="large" />
            <p className="font-weight-light">Escolha o produto que deseja e realize sua compra</p>

            <p className="font-weight-light">Receba o cashback</p>
          </div>
          <div className="col text-center">
            <img src={payholdApp} alt="App Payhold" />
          </div>
        </div>
      </div>

      <div className="py-5" style={{ backgroundColor: '#3C86F6' }}>
        <div className="container">
          <div className="row">
            <div className=" col-md-8 col-lg-6 col-sm-10 col-10 bg-white mx-auto px-sm-5 py-5">
              <h3 className=" text-justify px-sm-5 font-weight-bold text-gray"> Veja o total de CashBack concedido em tempo real!</h3>
              <h6 className=" text-justify px-sm-5 mb-4 font-weight-light">Cashback que retorna para você melhor investir.</h6>
              <div className="border border-primary w-75 mx-auto mb-5">

                <p className="text-center my-3">
R$
                  <input onChange={(e) => setTotalCash(e.target.value)} className="font-weight-bold text-grey ml-3 w-50 border-0" onBlur={() => moneyFormat(totalCash)} style={{ fontSize: 40 }} value={totalCash} />

                </p>
              </div>

              <h5 className="font-weight-bold mt-4 ml-5">
Cash:
                <input onChange={(e) => setPercentCash(e.target.value)} className="font-weight-bold text-grey w-25 border-0" onBlur={() => percentFormat(percentCash)} value={percentCash} />
              </h5>

              <h5 className="font-weight-bold ml-5">
Retorno:
                <span className="font-weight-bold ml-1">R$</span>
                <span className="font-weight-bold ml-2 text-primary">12,00</span>
              </h5>
            </div>
          </div>

        </div>

      </div>
      <Footer />
    </>
  );
}