import {
    Plus,
    HeartHandshake
} from "lucide-react";

import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">

            <a href="mailto:contato@mediasaver.com">
                Contato: contato@mediasaver.com
            </a>

            <div className="footer-botoes">

                <button type="button">
                    <Plus size={15} />
                    Criar post
                </button>

                <button type="button">
                    <HeartHandshake size={15} />
                    Fazer doação
                </button>

            </div>

        </footer>
    );
}

export default Footer;