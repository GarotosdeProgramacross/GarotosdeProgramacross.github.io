
import React from 'react';
import image from 'logodoctorvip.png';
import Image from 'next/image';

export default function PoliticaPrivacidade() {

    return (
        <main>
            <section>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", minHeight: "100vh", padding: 20 }}>
                    <Image src={image} width={200} height={200} />
                    <div style={{ textAlign: 'center' }}>
                        <h3>POLÍTICA DE PRIVACIDADE - DOCTOR VIP</h3>
                        <br />
                        <br />
                        {<div style={{ display: "inline", textAlign: "justfy" }}>
                            <p>
                                Iniciando o uso do aplicativo do Doctor Vip e dos serviços disponibilizados por ele, você deve concordar e está sujeito a todos os termos, políticas e condições gerais descritas abaixo.
                            </p>
                            <br />

                            <p>
                                <b>1.</b> Informações Coletadas<br />
                                Ao utilizar o Doctor Vip, podemos coletar as seguintes informações:
                                <br />
                                <br />
                            </p>
                            <p>
                                <b>1.1</b> Informações de Registro: Podemos coletar informações que você fornece ao criar uma conta, como nome, endereço de e-mail e senha.<br />
                                <b>1.2</b> Informações de Uso: Registramos dados sobre como você interage com o aplicativo, incluindo páginas visitadas, recursos utilizados e tempo gasto.<br />
                                <b>1.3</b> Informações do Dispositivo: Coletamos informações sobre o dispositivo que você utiliza para acessar o aplicativo, incluindo modelo, sistema operacional e identificadores únicos.<br />
                                <b>1.4</b> Informações de Localização: Se você der permissão, podemos coletar informações sobre sua localização para fornecer serviços baseados em localização.<br />
                                <br />
                                <b>2.</b> Uso das Informações<br />
                                Utilizamos as informações coletadas para:<br />
                                <b>2.1</b> Fornecer e manter nosso aplicativo.<br />
                                <b> 2.2</b> Personalizar sua experiência e oferecer conteúdo relevante.<br />
                                <b>2.3</b> Melhorar e otimizar nosso aplicativo.<br />
                                <b>2.4</b> Compreender o comportamento do usuário e tendências.<br />
                                <br />
                                <b>3.</b> Compartilhamento de Informações<br />
                                Não vendemos, alugamos ou comercializamos suas informações pessoais. Podemos compartilhar suas informações nas seguintes situações:<br />
                                <b>3.1</b> Parceiros de Negócios: Podemos compartilhar informações com parceiros de negócios que nos auxiliam na prestação de serviços.<br />
                                <b>3.2</b> Requisitos Legais: Podemos divulgar informações quando exigido por lei ou para proteger nossos direitos legais.<br />
                                <br />
                                <b>4.</b> Segurança das Informações<br />
                                Tomamos medidas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.<br />
                                <br />
                                <b>5.</b> Cookies e Tecnologias Semelhantes<br />
                                Utilizamos cookies e tecnologias semelhantes para melhorar a experiência do usuário. Ao utilizar o aplicativo, você concorda com o uso dessas tecnologias.<br />
                                <br />
                                <b>6.</b> Seus Direitos<br />
                                Você tem o direito de acessar, corrigir ou excluir suas informações pessoais. Para exercer esses direitos, entre em contato conosco através dos canais fornecidos no aplicativo.<br />
                                <br />
                                <b>7.</b> Alterações nesta Política de Privacidade<br />
                                <br />Reservamo-nos o direito de atualizar esta Política de Privacidade periodicamente. Recomendamos que você reveja regularmente para estar ciente de quaisquer alterações.<br />
                                Ao continuar a usar o Doctor Vip, você concorda com os termos desta Política de Privacidade.<br />
                                Para quaisquer dúvidas ou preocupações relacionadas a esta Política de Privacidade, entre em contato conosco através do email: <a href="mailto:suporte@doctorvip.com.br">suporte@doctorvip.com.br</a><br />
                            </p>
                        </div>}
                    </div>
                </div>
            </section >
        </main >
    );
}