import './Error.css';

import error404 from '../../assets/error404.webp';

export default function Error() {
    return (
        <main className='error'>
            <img src={error404} alt="Página não encontrada." />
        </main>
    );
}